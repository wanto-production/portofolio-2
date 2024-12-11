import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { createClient } from "@/lib/supabase/server";
import '@fortawesome/fontawesome-free/css/all.min.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  const supabase = await createClient()
  const { data:session } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar session={session}/>
        {children}
      </body>
    </html>
  );
}
