import { Navbar } from "@/src/components/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main 
    //   className="container mx-auto max-w-7xl flex-grow"
      >
        {children}
      </main>
    </div>
  );
}
