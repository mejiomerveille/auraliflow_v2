import { supabase } from "@/integrations/supabase/client";

export interface Industry {
  industry_id: number;
  name: string;
}

export async function fetchIndustries(): Promise<Industry[]> {
  const { data, error } = await supabase.functions.invoke<Industry[]>("industries-proxy");
  if (error) throw error;
  return data ?? [];
}
