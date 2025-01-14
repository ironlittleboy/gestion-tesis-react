"use client";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from '../../../public/logo.png';
import { dataConfig } from "@/config";

const Page = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
    console.log(formData);

    console.log(formData.email, formData.password);
    try {
      const response = await fetch(`${dataConfig.API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( formData ),
      });
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <header className="py-4 px-7 bg-red-400 text-white font-bold ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold ml-4">
              Sistema de Gestion de Tesis
            </h1>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <Link href="/auth/login">
              <p>Ingresar</p>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex justify-center items-center min-h-[90vh]">
        <div className="border border-gray-500  min-w-[500px] h-auto p-5 rounded">
          <div className="flex justify-center items-center py-5">
            <Image
              src={Logo}
              width={300}
              height={100}
              alt="Logo"
            />
          </div>
          <h2 className="text-2xl font-bold text-center">
            Ingresar al sistema de tesis
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-start mb-1 p-3">
              <label htmlFor="email">Correo electronico</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                name="email"
                className="border border-gray-600 rounded px-[20px] py-[10px] w-full focus-within:border-red-500 outline-none"
                placeholder="alguien@example.com"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col justify-center items-start mb-1 p-3">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                name="password"
                className="border border-gray-600 rounded px-[20px] py-[10px] w-full focus-within:border-red-500 outline-none"
                placeholder="**********"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center p-5 ">
              <Button label="Ingresar" type="submit" />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Page;
