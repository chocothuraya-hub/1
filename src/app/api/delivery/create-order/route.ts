import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, orderData } = body;

    if (!token) {
      return NextResponse.json(
        { error: 'رمز المصادقة مطلوب' },
        { status: 401 }
      );
    }

    const formData = new FormData();
    Object.keys(orderData).forEach(key => {
      formData.append(key, orderData[key]);
    });

    const response = await fetch(`https://api.alwaseet-iq.net/v1/merchant/create-order?token=${token}`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'فشل إنشاء الطلب' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إنشاء الطلب' },
      { status: 500 }
    );
  }
}
