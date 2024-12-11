import React, { ReactNode } from 'react'

export const metadata:Metadata={
    title:'login'
}

function RootLayout({
    login
}:{
    login:ReactNode
}) {
  return (
    <main className=' w-full h-screen grid place-content-center'>
        {login}
        <div className=' w-[300px] p-2 rounded-sm bg-blue-500 backdrop-opacity-45 h-fit text-white mt-2'>
            <p>
                note:
                jika anda sudah submit tunggu email verifikasi,
                jika email tidak terkirim dalam waktu lebih dari 1 menit 
                silahkan login ulang
            </p>
        </div>
    </main>
  )
}

export default RootLayout