'use server'

import { createClient } from '@/lib/supabase/server'

export async function logOut() {
  const supabase = await createClient()


  await supabase.auth.signOut()
}