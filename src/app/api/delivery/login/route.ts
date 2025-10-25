import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('🔐 Attempting login to Alwaseet API...');
    const response = await fetch('https://api.alwaseet-iq.net/v1/merchant/login', {
      method: 'POST',
      body: new URLSearchParams({
        username: 'tssst',
        password: '100200300@'
      })
    });

    const data = await response.json();
    console.log('📥 Login response:', data);
    
    if (!response.ok) {
      console.error('❌ Login failed:', data);
      return NextResponse.json(
        { error: data.message || 'فشل تسجيل الدخول' },
        { status: response.status }
      );
    }

    console.log('✅ Login successful, token:', data.data?.token ? 'received' : 'missing');
    return NextResponse.json(data);
  } catch (error) {
    console.error('💥 Login error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الاتصال' },
      { status: 500 }
    );
  }
}
