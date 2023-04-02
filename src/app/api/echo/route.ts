import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  //const name = searchParams.get("name");
  //const book = searchParams.get("book");
  const obj = Object.fromEntries(searchParams.entries());
  // return NextResponse.json({ name, book });
  return NextResponse.json(obj);
}
