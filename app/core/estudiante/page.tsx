"use client";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const tesis = [
    {
      id: 1,
      titulo: "Tesis 1",
      descripcion: "descripcion 1",
      ambito: "desarrollo web",
      estado: "terminado",
    },
    {
      id: 2,
      titulo: "Tesis 2",
      descripcion: "descripcion 2",
      ambito: "desarrollo web",
      estado: "terminado",
    },
    {
      id: 3,
      titulo: "Tesis 3",
      descripcion: "descripcion 3",
      ambito: "investigacion",
      estado: "terminado",
    },
  ];

  // hay que hacer una peticion a la api para obtener estos datos: estudiantes, docentes, propuesta, calificacion
  // por ahora se simularan los datos
  const estudiantes = [
    {
      id: 1,
      nombre: "Ariel Alexander Cattillo Vera",
      apellido: "Apellido 1",
      correo: "estudiante@gmail.com",
    },
    {
      id: 2,
      nombre: "Sandy Juliet Bailon Quijije",
      apellido: "Apellido 2",
      correo: "estudainte2@gmail.com",
    },
  ];
  const docentes = [
    {
      id: 1,
      nombre: "Roberth Moreria",
      apellido: "Apellido 1",
      correo: "docente@gmail.com",
    },
    {
      id: 2,
      nombre: "Junior Zamora",
      apellido: "Apellido 2",
      correo: "docente@gmail.com",
    },
    {
      id: 3,
      nombre: "Maholy Acosta",
      apellido: "Apellido 3",
      correo: "docente@gmail.com",
    },
  ];

  const [propuestaForm, setPropuestaForm] = useState({
    tema: "",
    modo: "",
    estudiante_companero: "",
    docente: "",
  });
  // staus pendiente  aprobado, calificado
  const [ambitoFilter, setAmbitoFilter] = useState("todos");
  const [isGrupal, setIsGrupal] = useState(false);
  const [showFormPropuesta, setShowFormPropuesta] = useState(false);
  const [aprove, setAprove] = useState(false);
  const [enEspere, setEnEspere] = useState(false);
  const [hasCalification, setHasCalification] = useState(false);
  const router = useRouter();

  const handleChangeTesisTopic = (e: ChangeEvent<HTMLSelectElement>) => {
    setAmbitoFilter(e.target.value);
  };
  const filterTesis = tesis.filter((tesis) => {
    if (ambitoFilter === "todos") {
      return tesis;
    }
    return tesis.ambito === ambitoFilter;
  });
  const handleShowFormPropuesta = () => {
    setShowFormPropuesta(!showFormPropuesta);
  };

  const logout = () => {
    console.log("Cerrar sesion");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  const handleChangePropuesta = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Actualiza el formulario
    const updatedForm = {
      ...propuestaForm,
      [name]: value,
    };

    setPropuestaForm(updatedForm);

    // Actualiza isGrupal en función del valor de "modo"
    if (name === "modo") {
      setIsGrupal(value === "grupal");
    }
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
      <main className="p-5 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-2xl text-red-400 font-bold">Bienvenido - </h1>
        </div>
        <div className="flex justify-center gap-5 p-4 items-center w-auto h-auto rounded">
          <div>
            <p className="text-lg font-bold mb-2">Tema propuesto</p>
            <div
              className={`
              ${aprove ? "bg-green-400" : "bg-red-400"}
                border border-white rounded p-5 
              `}
            >
              <p className="font-bold text-white text-xl text-center">
                {aprove ? "Aprobado" : "En proceso"}
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mb-2">Calificacion de tesis</p>
            <div
              className={`
              ${hasCalification ? "bg-green-400" : "bg-red-400"}
               border border-white rounded p-5 
              `}
            >
              <p className="font-bold text-white text-xl text-center">
                {hasCalification ? "Calificado" : "Sin calificar"}{" "}
                {hasCalification ? "10/10" : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full rounded p-5 flex flex-col items-start justify-center gap-3">
          <h1 className="text-2xl text-red-400 font-bold text-center">Tesis</h1>
          {enEspere && (
            <div className="text-center border border-red-300 p-5 rounded w-full min-w-[500px]">
              <p className="text-lg font-bold">En espera de aprobacion</p>
            </div>
          )}
          {aprove && (
            <div>
              <div>
                <h2 className="text-lg font-bold">Tema de tesis</h2>
                <p className="font-light text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptate, quod, quos, ipsa dolorum quae voluptas
                  quas exercitationem quibusdam fugit autem. Quisquam voluptate,
                  quod, quos, ipsa dolorum quae voluptas quas exercitationem
                  quibusdam fugit autem.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Modo de trabajo</h2>
                <p className="font-light text-gray-600">Grupal</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Miembro de grupo</h2>
                <p className="font-light text-gray-600">Estudiante 2</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Tutor</h2>
                <p className="font-light text-gray-600">Tutor 1</p>
              </div>
              <div>
                <Button label="Subir tesis para revision" type="button" />
              </div>
            </div>
          )}
          {enEspere == false && (
            <div className="text-center border border-red-300 p-5 rounded w-full min-w-[500px]">
              <p className="text-lg font-bold">
                Aun no tienes un tema de tesis
              </p>
              <Button
                label="Proponer tema de tesis"
                type="button"
                onClick={handleShowFormPropuesta}
              />
            </div>
          )}
          {showFormPropuesta && (
            <div className="min-w-[500px] border-red-300 rounded p-5 ">
              <form>
                <div className="mb-3">
                  <label htmlFor="tema">Tema de tesis</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus-within:border-red-400 outline-none"
                    type="text"
                    id="tema"
                    name="tema"
                    placeholder="Tu tema de tesis, propuesta, nucleo del problema"
                    onChange={handleChangePropuesta}
                    value={propuestaForm.tema}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modo">Modo de trabajo</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded focus-within:border-red-400 outline-none"
                    name="modo"
                    id="modo"
                    onChange={handleChangePropuesta}
                    value={propuestaForm.modo}
                  >
                    <option value="individual">Individual</option>
                    <option value="grupal">Grupal</option>
                  </select>
                </div>
                {isGrupal && (
                  <div className="mb-3">
                    <label htmlFor="estudiante_companero">
                      Seleccionar Compañero
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded focus-within:border-red-400 outline-none"
                      name="estudiante_companero"
                      id="estudiante_companero"
                      onChange={handleChangePropuesta}
                      value={propuestaForm.estudiante_companero}
                    >
                      {estudiantes.map((estudiante) => (
                        <option value={estudiante.id} key={estudiante.id}>
                          {estudiante.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="docente">Seleccionar docente preferido</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded focus-within:border-red-400 outline-none"
                    name="docente"
                    id="docente"
                    onChange={handleChangePropuesta}
                    value={propuestaForm.docente}
                  >
                    {docentes.map((docente) => (
                      <option value={docente.id} key={docente.id}>
                        {docente.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <Button label="Enviar propuesta" type="submit" />
                </div>
              </form>
            </div>
          )}
          <div className="w-full p-3 flex flex-col items-center justify-center gap-2">
            <h2 className="text-2xl font-bold text-red-400">Temas de tesis</h2>
            <div>
              <div className="flex gap-1 justify-center items-center w-full">
                <label htmlFor="ambitoFilter">filtrar por ambito</label>
                <select
                  name="ambitoFilter"
                  id="ambitoFilter"
                  className={`
                  border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-red
                  `}
                  onChange={handleChangeTesisTopic}
                  value={ambitoFilter}
                >
                  <option value="todos">Todos</option>
                  <option value="desarrollo web">Desarrollo web</option>
                  <option value="desarrollo movil">Desarrollo movil</option>
                  <option value="investigacion">Investigacion</option>
                  <option value="desarrollo de videojuegos">
                    Desarrollo de videojuegos
                  </option>
                  <option value="inteligencia artificial">
                    Inteligencia artificial
                  </option>
                </select>
              </div>
            </div>
            <table className="w-full border border-red-300">
              <thead>
                <tr className="bg-red-400 text-white">
                  <th>
                    <p className="p-3">Tema</p>
                  </th>
                  <th>
                    <p className="p-3">Descripcion</p>
                  </th>
                  <th>
                    <p className="p-3">Ambito</p>
                  </th>
                  <th>
                    <p className="p-3">Acciones</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterTesis.map((tesis) => (
                  <tr key={tesis.id}>
                    <td className="p-3 text-center">{tesis.titulo}</td>
                    <td className="p-3 text-center">{tesis.descripcion}</td>
                    <td className="p-3 text-center">{tesis.ambito}</td>
                    <td className="p-3 text-center">
                      <Button label="Ver mas" type="button" />
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
