import {createClient} from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL || ""
const SUPABSE_ANON_KEY= process.env.SUPABSE_ANON_KEY ||  "";

console.log("These are the supabase env files: ", SUPABASE_URL, SUPABSE_ANON_KEY);

export const superbase = createClient(SUPABASE_URL,SUPABSE_ANON_KEY);