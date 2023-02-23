import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lveuiedgamyelspcbnff.supabase.co";
const supabaseAnonPublic = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2ZXVpZWRnYW15ZWxzcGNibmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMDI3MDYsImV4cCI6MTk5MjY3ODcwNn0.fsGQ5kDAcED0HUoQuww1816fI5nw5xNEK84NPMt54LI"

export const supabase = createClient(supabaseUrl, supabaseAnonPublic);
