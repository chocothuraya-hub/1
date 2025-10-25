import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, orderData } = body;

    console.log('📦 Creating order with data:', orderData);

    if (!token) {
      console.error('❌ No token provided');
      return NextResponse.json(
        { error: 'رمز المصادقة مطلوب' },
        { status: 401 }
      );
    }

    const formData = new FormData();
    Object.keys(orderData).forEach(key => {
      formData.append(key, orderData[key]);
    });

    console.log('🚀 Sending request to Alwaseet API...');
    const response = await fetch(`https://api.alwaseet-iq.net/v1/merchant/create-order?token=${token}`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    console.log('📥 Response from Alwaseet:', data);
    console.log('📥 Response status:', response.status);
    
    if (!response.ok) {
      console.error('❌ API Error:', data);
      console.error('❌ Full error details:', JSON.stringify(data, null, 2));
      return NextResponse.json(
        { 
          error: data.message || data.error || 'فشل إنشاء الطلب',
          details: data,
          status: response.status
        },
        { status: response.status }
      );
    }

    console.log('✅ Order created successfully!');
    return NextResponse.json(data);
  } catch (error) {
    console.error('💥 Create order error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إنشاء الطلب' },
      { status: 500 }
    );
  }
}
