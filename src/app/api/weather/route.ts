import { NextResponse } from "next/server";

const APP_ID = process.env.APP_ID;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing city id" }, { status: 400 });
  }

  if (!APP_ID) {
    return NextResponse.json({ error: "Missing APP_ID environment variable" }, { status: 500 });
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${encodeURIComponent(id)}&appid=${APP_ID}`,
    { cache: "no-store" },
  );
  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}
