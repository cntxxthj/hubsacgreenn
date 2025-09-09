// src/lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'

// Estas linhas leem as chaves que você colocou no arquivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Aqui, criamos e exportamos o "conector" que usaremos em toda a aplicação
export const supabase = createClient(supabaseUrl, supabaseAnonKey)