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
  }
  const tesis = [
    {
      id: 1,
      titulo: "Tesis 1",
      estudiante: "Estudiante 1",
      descripcion: "Descripcion corta",
      tutor: "Tutor 1",
      estado: "En proceso",
    },
    {
      id: 2,
      titulo: "Tesis 2",
      estudiante: "Estudiante 2",
      descripcion: "Descripcion corta",

      tutor: "Tutor 2",
      estado: "En proceso",
    },
    {
      id: 3,
      titulo: "Tesis 3",
      estudiante: "Estudiante 3",
      descripcion: "Descripcion corta",

      tutor: "Tutor 3",
      estado: "En proceso",
    },
  ];

  const [selectSearch, setSelectSearch] = React.useState("all");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSearch(e.target.value);
  };

  const filteredData =
    selectSearch === "all"
      ? tesis
      : tesis.filter((tesi) => tesi.estado === selectSearch);
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
            <ul className="flex gap-3 items-center justify-center">
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
      <main>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-red-400 font-bold my-4">
            Temas de tesis totales propuestos
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-1 justify-center items-center">
              <label htmlFor="role">Filtrar por estado</label>
              <select
                name="role"
                id="role"
                onChange={handleChange}
                className={`
                min-w-[150px]
                h-10
                rounded
                border
                border-red-400
                p-2
                mt-2
                focus:outline-none
                focus:ring-1
                focus:ring-red-400
                `}
              >
                <option value="all">Todos</option>
                <option value="aprove">Aprovadas</option>
                <option value="pendin">Pendientes</option>
                <option value="reject">Rechazadas</option>
              </select>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <label htmlFor="search">Buscar por titulo</label>
              <input
                type="text"
                id="search"
                placeholder="Buscar por titulo"
                className={`
                  min-w-[150px]
                  h-10
                  rounded
                  border
                  border-red-400
                  p-2
                  mt-2
                  focus:outline-none
                  focus:ring-1
                  focus:ring-red-400
                  `}
              />
            </div>
          </div>
          <div className="w-full h-auto p-5 mt-3 max-h-[500px] overflow-auto">
            <table className="w-full border border-red-300 overflow-auto">
              <thead>
                <tr className="bg-red-400 text-white">
                  <th className="p-3">ID</th>
                  <th className="p-3">Titulo</th>
                  <th className="p-3">Descripcion corta</th>
                  <th className="p-3">Estudiante</th>
                  <th className="p-3">Tutor</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((tesi) => (
                  <tr key={tesi.id} className="border-b border-red-300">
                    <td className="p-3 text-center">{tesi.id}</td>
                    <td className="p-3 text-center">{tesi.titulo}</td>
                    <td className="p-3 text-center">{tesi.descripcion}</td>
                    <td className="p-3 text-center">{tesi.estudiante}</td>
                    <td className="p-3 text-center">{tesi.tutor}</td>
                    <td className="p-3 text-center">{tesi.estado}</td>
                    <td className="p-3 text-center flex justify-center items-center gap-3">
                      <Button type="button" label="Editar" />
                      <Button type="button" label="Eliminar" />
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
