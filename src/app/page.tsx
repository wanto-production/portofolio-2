import Image from "next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server";

export const metadata:Metadata = {
  title:"home",
  description:"hello i`m ikhwan satrio from indonesia,i really enjoy learning leanguage like javascript and rust"
}

export default async function Home() {
  const supabase = await createClient()
  return (
    <main>
      <section className=' w-full h-[70vh] flex flex-col justify-center items-center gap-2 border-b-2 border-greenleaf'>
          <img src="/website.svg" className=' w-[300px] h-auto' alt="" />
          <div className=' flex gap-2'>
            <AlertDialog>
            <AlertDialogTrigger><p className=' border-2 border-greenleaf p-2 rounded-md text-greenleaf text-lg' >download cv</p></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>belom ada cv aku wak</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
            <a className=' bg-greenleaf p-2 rounded-md text-white text-lg' href="#about">about me</a>
          </div>
        </section>
        <section id='about' className='w-full h-screen relative flex flex-col justify-center items-center gap-4 border-b-2 border-greenleaf'>
          <h2 className=' absolute top-2 text-greenleaf font-semibold text-2xl'>about me</h2>
          <Image src="/jomok.jpg" className=' rounded-md w-auto h-auto' alt='' width={300} height={200}/>
          <div className=' flex items-center gap-2 '>

            <div className='flex flex-col justify-center items-center p-2 rounded-md shadow-lg border-t-2 border-greenleaf'>
              <i className="fa fa-certificate text-greenleaf" aria-hidden="true"></i>
              <h2 className=' text-lg font-semibold'>certificates</h2>
              <p>1 certificate</p>
            </div>

            <div className='flex flex-col justify-center items-center p-2 rounded-md shadow-lg border-t-2 border-greenleaf'>
              <i className="fas fa-briefcase text-greenleaf" aria-hidden="true"></i>
              <h2 className=' text-lg font-semibold'>completed</h2>
              <p>2 project</p>
            </div>

          </div>

          <p className=' font-[Roboto,Arial,sans-serif] w-[80%] text-center sm:text-lg md:text-2xl'>hello i`m ikhwan satrio from indonesia,i really enjoy learning leanguage like javascript and rust</p>
          <a href="#skills" className='p-2 bg-greenleaf text-white rounded-md'>my skills <i className="fa fa-arrow-circle-down" aria-hidden="true"></i> </a>
        </section>
        <section id='skills' className='relative w-full min-h-[50vh] p-5 h-fit flex flex-col justify-center items-center gap-2 border-b-2 border-greenleaf'>
          <h2 className=' absolute top-2 text-greenleaf font-semibold text-2xl'>my skills</h2>
          <div className=' flex gap-2 flex-wrap justify-center items-center mt-[30px]'>

          <Card className=' shadow-lg'>
            <CardHeader>
              <CardTitle>basic</CardTitle>
            </CardHeader>
            <CardContent className=' w-[250px] h-[100px] p-2 flex flex-wrap justify-around items-center gap-2'>
              <ul className='h-full flex flex-col justify-start gap-2 '>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> javascript</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> html</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> css</p></li>
              </ul>
              <ul className='h-full flex flex-col justify-start gap-2'>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> python</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> rust</p></li>
              </ul>
            </CardContent>
          </Card>

          <Card className=' shadow-lg'>
            <CardHeader>
              <CardTitle>library/framework</CardTitle>
            </CardHeader>
            <CardContent className=' w-[250px] h-[100px] p-2 flex flex-wrap justify-around items-center gap-2'>
              <ul className='h-full flex flex-col justify-start gap-2 '>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> next js</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> sveltekit</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> tailwindcss</p></li>
              </ul>
              <ul className='h-full flex flex-col justify-start gap-2'>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> react</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> vue</p></li>
              </ul>
            </CardContent>
          </Card>

          </div>
          <a href="#project" className='p-2 bg-greenleaf text-white rounded-md'>my project <i className="fa fa-arrow-circle-down" aria-hidden="true"></i> </a>
        </section>
        <section className='w-full min-h-[50vh] h-fit p-3 relative flex justify-center flex-col items-center gap-2 border-b-2 border-greenleaf' id='project'>
          <h2 className=' absolute top-2 text-greenleaf font-semibold text-2xl'>my project</h2>

          <div className='flex flex-wrap justify-center items-center gap-3 mt-[30px]'>
            <a href="https://wanto-production.github.io/quran-digital">
              <Card>
                <CardHeader>
                  <CardTitle>qur`an digital</CardTitle>
                </CardHeader>
                <CardContent className=' p-2' >
                  <div className=" w-[250px] h-[150px] bg-gradient-to-r from-green-300 via-green-400 to-green-500 p-8"/>
                </CardContent>
              </Card>
            </a>
            <a href="https://rpl-weather-wheat.vercel.app/">
              <Card>
                <CardHeader>
                  <CardTitle>weather app</CardTitle>
                </CardHeader>
                <CardContent className=' p-2' >
                  <div className=" w-[250px] h-[150px] bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 p-8"/>
                </CardContent>
              </Card>
            </a>
          </div>
          <a href="#contact" className='p-2 bg-greenleaf text-white rounded-md'>contact <i className="fa fa-arrow-circle-down" aria-hidden="true"></i> </a>
        </section>
        <section className='w-full h-screen p-3 relative flex justify-center flex-col items-center gap-2' id='contact'>
          <h2 className=' absolute top-2 text-greenleaf font-semibold text-2xl'>contact</h2>

          <h2>coming soon</h2>

          {/* {!data.user&&(
            <h2>Oops kamu harus login/register dulu baru bisa mengirim pesan</h2>
          )}
          <div className="w-[300px] h-[300px] flex flex-col justify-center items-center gap-2">
            <textarea className="w-full h-[250px] border-2 border-black rounded-md p-2" placeholder="tuliskan pesan untuk pembuat web" name="email">

            </textarea>
            <Button>kirim pesan</Button>
          </div> */}
        </section>
        <footer className=' relative w-full h-[20vh] flex flex-col  justify-start pt-2 gap-3 items-center bg-greenleaf'>
            <h2 className=' text-white text-2xl font-semibold'>contact me</h2>
            <div className='flex gap-4 text-white text-xl'>
              <i className="fab fa-instagram" aria-hidden="true"></i>
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </div>
            <h2 className=' absolute bottom-2 text-white'><i className="fas fa-copyright" aria-hidden="true"></i>ikhwan satrio wicaksono</h2>
        </footer>
    </main>
  );
}
