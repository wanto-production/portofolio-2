'use server'

import { createClient } from '@/lib/supabase/server'

export async function logOut() {
  const supabase = await createClient()


  const { error } = await supabase.auth.signOut()
}