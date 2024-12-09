"use client";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const logout = () => {
    console.log("Cerrar sesion");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };
  return (
    <div>
      <header className="py-4 px-7 bg-red-400 text-white font-bold">
        <div className="flex items-center justify-between">
          <div className="flex">
            <h1 className="text-xl font-bold text-white">
              <Link href={"/core/decano"}>Sistema de gestion de tesis</Link>
            </h1>
          </div>
          <nav className="">
            <ul className="flex gap-3 justify-center items-center">
              <li>
                <Button
                  type="button"
                  label="Cerrar sesion"
                  variant="lienar"
                  onClick={logout}
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="flex justify-center items-center h-full">
          <h1 className="font-bold text-2xl text-red-400">Temas propuestos</h1>
        </div>
      </main>
    </div>
  );
};

export default Page;
