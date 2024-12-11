import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export const GET = async()=>{
    const supabase = await createClient()

    const {error} = await supabase.auth.signOut()
    if(error)return NextResponse.json({ message:error.message })
    return NextResponse.json({ message:'logout berhasil' })
}