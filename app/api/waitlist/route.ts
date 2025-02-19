import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  if (!data.email) {
    return Response.json(
      { message: "Please enter a valid email", status: "validation_error" },
      { status: 400 }
    );
  }
  const supabase = await createClient();
  const { error } = await supabase
    .from("waitlist")
    .insert({ email: data.email });

  if (error) {
    if (error.code === "23505") {
      return Response.json(
        {
          message: "You have already signed up for the waitlist",
          status: "email_already_registered",
        },
        { status: 400 }
      );
    }
    return Response.json(
      { message: "Unknown error", status: "internal_server_error" },
      { status: 500 }
    );
  }
  return Response.json({ status: "OK", message: "Recorded email" });
}
