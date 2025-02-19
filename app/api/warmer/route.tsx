import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();
  await supabase.from("waitlist").select("id").limit(1);

  return Response.json({ status: "OK" });
}
