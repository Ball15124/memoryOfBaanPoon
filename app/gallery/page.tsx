"use client"; // Mark this as a client component
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const router = useRouter();
  const handleNavigation = (id: any) => {
    // Navigate to the dynamic route with the given id
    router.push(`/important-people/${id}`);
  };
  return (
    <main className="flex flex-col ">
      <div className="self-center mt-10">
        <p className="text-[#c53232] text-6xl font-bold">Gallery</p>
      </div>
      
    </main>
  );
}
