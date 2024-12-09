"use client";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Page = () => {
  const router = useRouter();
  const logout = () => {
    console.log("Cerrar sesion");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  const [showForm, setShowForm] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selectSearch, setSelectSearch] = React.useState("all");
  const [formData, setFormData] = React.useState({
    nombre: "",
    correo: "",
    rol: "",
    docente: "",
  });

  const userData = [
    {
      id: 1,
      nombre: "jostin cedeno ",
      correo: "usuario@email.com",
      rol: "Estudiante",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "Erick rodrigo",
      correo: "usuario@email.com",
      rol: "Tutor",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Jerik bailon",
      correo: "usuario@email.com",
      rol: "Estudiante",
      estado: "Activo",
    },
  ];


  const searchHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const selectHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectSearch(e.target.value);
  };
  const handleNewUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      estado: "Activo",
    };
    console.log(newUser);
  }
  const handleNewUserChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  }
  const showFromHandler = () => {
    setShowForm(!showForm);
  }
  const filteredUsers =
    selectSearch === "all"
      ? userData
      : userData.filter((user) => user.rol === selectSearch);

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
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-red-400 font-bold my-4">
            Usuarios totales
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-1 justify-center items-center">
              <label htmlFor="role">Filtrar por rol</label>
              <select
                value={selectSearch}
                name="role"
                id="role"
                onChange={selectHandleChange}
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
                <option value="Estudiante">Estudiantes</option>
                <option value="Tutor">Tutores</option>
              </select>
            </div>
            <div className="flex items-center justify-center gap-1">
              <label htmlFor="search">Buscar por nombre</label>
              <input
                type="text"
                id="search"
                value={search}
                name="search"
                onChange={searchHandleChange}
                placeholder="Buscar por nombre"
                className={`
                w-full
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
            <div>
              <Button type="button" label="Crear usuario" onClick={showFromHandler}/>
            </div>
          </div>
          {showForm ? (
            <div className="w-full h-auto p-5 border-y border-gray-400 my-4">
            <div>
              <h1 className="text-xl font-bold text-red-400">
                Agregar usaurio
              </h1>
            </div>
            <div>
              <form onSubmit={handleNewUserSubmit}>
                <div className="flex flex-col items-start justify-center">
                  <label htmlFor="nombre">Nombres Completos</label>
                  <input
                    value={formData.nombre}
                    onChange={handleNewUserChange}
                    id="nombre"
                    name="nombre"
                    type="text"
                    className="border border-gray-400 rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <label htmlFor="correo">Correo electronico</label>
                  <input
                    value={formData.correo}
                    onChange={handleNewUserChange}
                    id="correo"
                    name="correo"
                    type="email"
                    className="border border-gray-400 rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <label htmlFor="rol">Rol</label>
                  <select
                    value={formData.rol}
                    onChange={handleNewUserChange}
                    id="rol"
                    name="rol"
                    className="border border-gray-400 rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-red-400"
                  >
                    <option value="Estudiante">Estudiante</option>
                    <option value="Tutor">Tutor</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Decano">Decano</option>
                  </select>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <Button type="submit" label="Agregar" />
                </div>
              </form>
            </div>
          </div>
          ) : (
            ""
          )}
          <div className="w-full h-auto p-5 mt-3 max-h-[500px] overflow-auto">
            <table className="w-full border border-red-300">
              <thead>
                <tr className="bg-red-400 text-white ">
                  <th className="p-3">Nombre</th>
                  <th className="p-3">Correo</th>
                  <th className="p-3">rol</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="p-3 text-center">{user.nombre}</td>
                      <td className="p-3 text-center">{user.correo}</td>
                      <td className="p-3 text-center">{user.rol}</td>
                      <td className="p-3 text-center">{user.estado}</td>
                      <td className="p-3 text-center flex gap-1 justify-center items-center">
                        <Button type="button" label="Editar" />
                        <Button type="button" label="Eliminar" />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-3 text-center">
                      No hay datos
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
