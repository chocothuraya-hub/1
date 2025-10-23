import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch('https://api.alwaseet-iq.net/v1/merchant/citys', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'فشل جلب المدن' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Cities fetch error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في جلب المدن' },
      { status: 500 }
    );
  }
}
