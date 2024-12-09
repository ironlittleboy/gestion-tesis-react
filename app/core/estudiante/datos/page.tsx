"use client";
import Button from '@/components/ui/button/Button'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
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
              <Link href={"/core/estudiante"}>Sistema de gestion de tesis</Link>
            </h1>
          </div>
          <nav className="">
            <ul className="flex gap-3 justify-center items-center">
              <li>
                <Link href={"/core/estudiante/datos"}>Mis datos</Link>
              </li>

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
      <main className='p-5'>
        <h1 className='font-bold text-2xl text-red-400'>
          Mis datos
        </h1>
        <div className='flex w-full min-h-[90vh] p-5 gap-3'>
          <div className='border rounded p-5 w-1/2'>
            <div>
              <h1 className='font-bold text-xl text-red-400'>Informacion Personal</h1>
              <div>
                <div>

                </div>
                <div>
                  <div>
                    <h2 className='font-bold text-xl text-gray-700'>
                      Ariel Alexander Castillo Vera
                    </h2>
                  </div>
                  <div>
                    <h2 className='font-ligth text-sm text-gray-500'>
                      e1235467895@live.uleam.edu.ec
                    </h2>
                  </div>
                </div>
                <div className='border-t mt-3 flex flex-col gap-3 justify-center items-start py-4'>
                  <span className='font-bold text-lg '>Carrera</span>
                  <span className='font-light text-gray-400'>Ingenieria en sistemas</span>
                </div>
                <div className='border-t mt-3 flex flex-col gap-3 justify-center items-start py-4'>
                  <span className='font-bold text-lg '>Facultad</span>
                  <span className='font-light text-gray-400'>Informatica</span>
                </div>
                <div className='border-t mt-3 flex flex-col gap-3 justify-center items-start py-4'>
                  <span className='font-bold text-lg '>Matricula</span>
                  <span className='font-light text-gray-400'>2018000001</span>
                </div>
                <div className='border-t mt-3 flex flex-col gap-3 justify-center items-start py-4'>
                  <span className='font-bold text-lg '>Nivel aprovado</span>
                  <span className='font-light text-gray-400'>7</span>
                </div>
              </div>
            </div>
          </div>
          <div className='border rounded p-5 w-1/2'>
          <div>
              <h1 className='font-bold text-xl text-red-400'>Informacion de tesis</h1>
              <div>
                <div>

                </div>
                <div>
                  <div>
                    <h2 className='font-bold text-xl text-gray-700'>
                      <span>Tema de tesis</span>
                      <p className='font-light text-gray-500 '>
                        Desarrollo de un sistema de gestion de tesis
                      </p>
                    </h2>
                  </div>
                </div>
                <div className='border-t mt-3 flex flex-col gap-3 justify-center items-start py-4'>
                  <span className='font-bold text-lg '>Tipo de desarrollo</span>
                  <span className='font-light text-gray-400'>Grupal</span>
                </div>
                <div className='border-t mt-3 flex flex-col gap-3 justify-center items-start py-4'>
                  <span className='font-bold text-lg '>Miembro de grupo</span>
                  <span className='font-light text-gray-400'>Jostin Abraham Cedeño Mosquera</span>
                </div>
                <div className='border-t mt-3 flex flex-col gap-3 justify-center items-start py-4'>
                  <span className='font-bold text-lg '>Tutor asignado</span>
                  <span className='font-light text-gray-400'>Ing. Roberth Moreira</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
