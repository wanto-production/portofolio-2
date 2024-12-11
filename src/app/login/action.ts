'use server'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()


  await supabase.auth.signInWithOtp({
    email:formData.get("email") as string,
    options: {
      emailRedirectTo: 'http://localhost:3000/welcome', 
    },
  })
}