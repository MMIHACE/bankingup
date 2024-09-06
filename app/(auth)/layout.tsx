import Image from "next/image";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     
     <main className="flex min-h-screen w-full justify-between font-inter">
     {children}
     SIDEBAR
     {/* <div className=" auth-asset">
      <div>
    <Image
    src='/icons/auth-image.svg' 
    alt="auth image"
    width={500}
    height={500}
    className="rounded-1-x1 object-contain"
    />
    </div>
     </div> */}
     </main>
    );
  }