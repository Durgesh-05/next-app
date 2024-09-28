import { NextRequest } from 'next/server';

export async function GET() {
  // db logic
  return Response.json({
    name: 'Durgesh Dubey',
    email: 'durgesh@google.com',
  });
}

export async function POST(req: NextRequest) {
  // Fetch body
  const body = await req.json();
  console.log(body);

  // store in db
  return Response.json({
    message: 'user created successfully',
  });
}
