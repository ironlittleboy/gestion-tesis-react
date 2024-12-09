"use client";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
const Page = () => {
  // traer datos del backend por ahora datos de prueba
  const tesis = [
    {
      id: 1,
      titulo: "titulo",
      descripcion: "descripcion",
      estudiante: "Ariel Alexander Castillo Vera",
      estado: "en espera",
    },
    {
      id: 2,
      titulo: "titulo",
      descripcion: "descripcion",
      estudiante: "Jostin Abraham Cedeno Mosquera",
      estado: "en espera",
    },
    {
      id: 3,
      titulo: "titulo",
      descripcion: "descripcion",
      estudiante: "Jerick Abraham Bailon Quijije" ,
      estado: "en espera",
    },
  ];
  const router = useRouter();
  const logout = () => {
    console.log("Cerrar sesion");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };
  const [nombreEstudiante, setNombreEstudiante] = useState("");

  const handleSearchEstudiante = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombreEstudiante(e.target.value);
    console.log(e.target.value);
  };

  const fileredEstudiantes = tesis.filter((tesis) =>
    tesis.estudiante.toLowerCase().includes(nombreEstudiante.toLowerCase())
  );

  const handleAprovar = (id: number) => {
    console.log("Aprovar", id);
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, aprovar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Aprobado!", "La tesis ha sido aprobada.", "success");
      }
    });
  };

  const handleRechazar = (id: number) => {
    console.log("Rechazar", id);
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, rechazar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Rechazado!", "La tesis ha sido rechazada.", "success");
      }
    });
  };

  return (
    <div>
      <header className="py-4 px-7 bg-red-400 text-white font-bold">
        <div className="flex items-center justify-between">
          <div className="flex">
            <h1 className="text-xl font-bold text-white">
              <Link href={"/core/docente"}>Sistema de gestion de tesis</Link>
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
        <div className="flex max-w-[500px] justify-center items-center gap-2 p-5">
          <label htmlFor="nombre">Buscar por nombre de estudiante</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="border border-red-400 rounded h-10 w-full px-2"
            placeholder="Nombre de estudiante"
            value={nombreEstudiante}
            onChange={handleSearchEstudiante}
          />
        </div>
        <div className="p-5 max-h-[500px] overflow-auto">
          <table className="w-full border h-auto border-red-300">
            <thead>
              <tr className="bg-red-400 text-white">
                <th className="p-3">Titulo</th>
                <th className="p-3">Descripcion</th>
                <th className="p-3">Estudiante</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {fileredEstudiantes.map((tesis) => (
                <tr key={tesis.id}>
                  <td className="p-3 text-center">{tesis.titulo}</td>
                  <td className="p-3 text-center">{tesis.descripcion}</td>
                  <td className="p-3 text-center">{tesis.estudiante}</td>
                  <td className="p-3 text-center">{tesis.estado}</td>
                  <td className="p-3 text-center">
                    <Button
                      type="button"
                      label="Aprovar"
                      variant="lienar"
                      onClick={() => handleAprovar(tesis.id)}
                    />
                    <Button
                      type="button"
                      label="Rechazar"
                      variant="lienar"
                      onClick={() => handleRechazar(tesis.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Page;
