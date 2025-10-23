import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const cityId = searchParams.get('city_id');

    if (!cityId) {
      return NextResponse.json(
        { error: 'معرف المدينة مطلوب' },
        { status: 400 }
      );
    }

    const response = await fetch(`https://api.alwaseet-iq.net/v1/merchant/regions?city_id=${cityId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'فشل جلب المناطق' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Regions fetch error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في جلب المناطق' },
      { status: 500 }
    );
  }
}
