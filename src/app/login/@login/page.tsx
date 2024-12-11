import { Button } from '@/components/ui/button'
import { login } from '../action'
import { Input } from '@/components/ui/input'
import React from 'react'

function Page() {
  return (
    <form className=' w-[300px] flex gap-2'>
      <Input type='email' name="email" placeholder='email' required/>
      <Button formAction={login}>submit</Button>
    </form>
  )
}

export default Page