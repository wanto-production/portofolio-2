"use client"
import { Button } from './ui/button'
import type { User } from '@supabase/supabase-js'
import Link from 'next/link'

function Navbar({ session }:{ session:{ user:User|null } }) {

    const logOut=async () => {
        await fetch('api/auth/logOut')
        .then(r=>r.json())
        .then(data=> alert(data.message))
        window.location.reload()
    }
  return (
   <header className=' w-full h-[70px] flex justify-center items-center p-2 fixed top-0 z-10'>
        <nav className=' w-full h-full bg-black flex justify-between items-center pl-3 pr-3 motion-preset-slide-down-lg'>
            <h1 className=' text-white text-lg font-semibold'><i className='fa fa-user'></i> {session?.user?.email?.replaceAll('@gmail.com','')||"Guest"}</h1>

            <ul className=' text-white'>
                {session.user&&(
                    <li><Button onClick={()=>logOut()}>signOut</Button></li>
                )}
                {!session.user&&(
                    <li><Link href='/login'>login</Link></li>
                )}
            </ul>
        </nav>
   </header> 
  )
}

export default Navbar