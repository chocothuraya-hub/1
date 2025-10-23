import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const response = await fetch('https://api.alwaseet-iq.net/v1/merchant/login', {
      method: 'POST',
      body: new URLSearchParams({
        username: 'tssst',
        password: '100200300@'
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'فشل تسجيل الدخول' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الاتصال' },
      { status: 500 }
    );
  }
}
