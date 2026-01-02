import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Hardcoded credentials check
    if (email === 'alinasseredine@gmail.com' && password === '96181325962') {
      // Create response
      const response = NextResponse.json(
        { message: 'Login successful' },
        { status: 200 }
      );

      // Set HTTP-only cookie
      (await cookies()).set('auth_token', 'valid_token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred' },
      { status: 500 }
    );
  }
}
