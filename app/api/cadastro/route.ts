import { signUpSchema } from '@/lib/type';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const result = signUpSchema.safeParse(body);

  const zodErrors: string[] = [];
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors.push(issue.message);
    });
  }

  return NextResponse.json(
    zodErrors.length > 0 ? { errors: zodErrors } : { success: true }
  );
}
