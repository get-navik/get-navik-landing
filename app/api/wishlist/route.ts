import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return Response.json({ status: "OK", message: "Custom message" });
}
