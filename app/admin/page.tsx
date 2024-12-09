"use client"

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
  }
  const tesis = [
    {
      id: 1,
      titulo: "Tesis 1",
      estudiante: "Estudiante 1",
      tutor: "Tutor 1",
      estado: "En proceso",
    },
    {
      id: 2,
      titulo: "Tesis 2",
      estudiante: "Estudiante 2",
      tutor: "Tutor 2",
      estado: "En proceso",
    },
    {
      id: 3,
      titulo: "Tesis 3",
      estudiante: "Estudiante 3",
      tutor: "Tutor 3",
      estado: "En proceso",
    },
  ];
  return (
    <div>
      <header className="py-4 px-7 bg-red-400 text-white font-bold">
        <div className="flex items-center justify-between">
          <div className="flex">
            <h1 className="text-xl font-bold text-white">
              <Link href={"/admin"}>
                Sistema de gestion de tesis - Administracion
              </Link>
            </h1>
          </div>
          <nav className="">
            <ul className="flex gap-3 justify-center items-center">
              <li>
                <Link href={"/admin/usuarios"}>Usuarios</Link>
              </li>
              <li>
                <Link href={"/admin/tesis"}>Tesis</Link>
              </li>
              <li>
                <Button type="button" label="Cerrar sesion" variant="lienar" onClick={logout} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex justify-center items-start p-5">
        <div className="w-full min-h-[100vh]">
          <div className="flex items-center justify-start gap-3">
            <div className="border border-red-300 rounded p-5 min-w[200px] h-auto">
              <div>
                <p className="font-bold text-xl text-red-500">
                  Total de estudiantes en proceso
                </p>
                <p className="text-gray-700 text-lg">100</p>
              </div>
            </div>
            <div className="border border-red-300 rounded p-5 min-w[200px] h-auto">
              <div>
                <p className="font-bold text-xl text-red-500">
                  Total de profesores tutores
                </p>
                <p className="text-gray-700 text-lg">100</p>
              </div>
            </div>
            <div className="border border-red-300 rounded p-5 min-w[200px] h-auto">
              <div>
                <p className="font-bold text-xl text-red-500">
                  Total de profesores tutores
                </p>
                <p className="text-gray-700 text-lg">100</p>
              </div>
            </div>
            <div className="border border-red-300 rounded p-5 min-w[200px] h-auto">
              <div>
                <p className="font-bold text-xl text-red-500">Total de tesis</p>
                <p className="text-gray-700 text-lg">100</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between p-5">
              <h2 className="text-2xl font-bold text-red-500">
                Estudiantes recientes
              </h2>
            </div>
            <table className="w-full border border-red-300 ">
              <thead>
                <tr className="bg-red-400 text-white">
                  <th className="p-3">Nombres</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Tutor asignado</th>
                  <th className="p-3">Tema de tesis</th>
                  <th className="p-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tesis.map((tesis) => (
                  <tr key={tesis.id}>
                    <td className="p-3 text-center">{tesis.titulo}</td>
                    <td className="p-3 text-center">{tesis.estudiante}</td>
                    <td className="p-3 text-center">{tesis.tutor}</td>
                    <td className="p-3 text-center">{tesis.estado}</td>
                    <td className="p-3 text-center">
                      <Link href={`/admin/tesis/${tesis.id}`}>Ver</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
