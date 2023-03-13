import React from "react";

export default function Register() {
  return (
    <div className="w-full flex h-screen bg-red-500">
      <div className="w-full hidden md:w-[50%] md:block h-screen">
        <img
          className="w-full h-screen object-cover"
          src="https://wallpaperaccess.com/full/2752593.jpg"
          alt="Foto"
        />
      </div>

      <div className="w-full md:w-[50%] h-screen bg-white flex justify-center items-center">
        <form
          id="formularioAuth"
          className="bg-white flex flex-col justify-center items-center w-[80%] lg:w-[60%] h-3/4"
        >
          <h1 className="text-center text-[38px] font-[500]">Regístrate</h1>

          <img src="" alt="foto" className="w-[100px] rounded-[50%] mb-4" />

          <div className="w-full h-[60px] rounded-xl flex gap-4 items-center bg-[rgb(236,242,247)] px-4 mb-4">
            <i className="fa-solid fa-user text-[20px]"></i>
            <div className="w-full h-full flex-col justify-center py-2">
              <label className="block text-sm">Nombre de Usuario</label>

              <input
                type="text"
                id="NombreUsuarioForm"
                name="Username"
                placeholder="Alvarito123"
                className="text-sm text-black w-full bg-transparent outline-0"
              />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row  gap-4">
            <div className="sm:w-1/2 w-full h-[60px] rounded-xl bg-[rgb(236,242,247)] px-4 sm:mb-4 flex gap-4 items-center">
                <i className="fa-solid fa-envelope text-[20px]"></i>
                <div className="w-full h-full flex-col justify-center py-2">
                <label className="block text-sm">Nombre</label>

                <input
                  type="text"
                  id="NombreForm"
                  name="firstName"
                  placeholder="Alvaro"
                  className="text-sm text-black w-full bg-transparent outline-0"
                />
                </div>
            </div>

            <div className="sm:w-1/2 w-full h-[60px] rounded-xl bg-[rgb(236,242,247)] px-4 mb-4 flex gap-4 items-center">
              <i className="fa-solid fa-envelope text-[20px]"></i>
              <div className="w-full h-full flex-col justify-center py-2">
                <label className="block text-sm">Apellido</label>

                <input
                  type="text"
                  id="lastForm"
                  name="lastName"
                  placeholder="Cruz"
                  className="text-sm text-black w-full bg-transparent outline-0"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row  gap-4">
            <div className="sm:w-1/2 w-full h-[60px] rounded-xl bg-[rgb(236,242,247)] px-4 sm:mb-4 flex gap-4 items-center">
              <i className="fa-solid fa-id-card text-[20px]"></i>
              <div className="w-full h-full flex-col justify-center py-2">
                <label className="block text-sm">Tipo Documento</label>

                <input
                  type="text"
                  name="tipoDocumento"
                  className="text-sm text-black w-full bg-transparent outline-0"
                />
              </div>
            </div>

            <div className="sm:w-1/2 w-full h-[60px] rounded-xl bg-[rgb(236,242,247)] px-4 mb-4 flex gap-4 items-center">
              <i className="fa-solid fa-hashtag text-[20px]"></i>
              <div className="w-full h-full flex-col justify-center py-2">
                <label className="block text-sm">Documento</label>

                <input
                  type="text"
                  placeholder="Alvaro"
                  name="Fir12345678me"
                  className="text-sm text-black bg-transparent w-full outline-0"
                />
              </div>
            </div>
          </div>

          <div className="w-full hd-xl opacity-[0.8] flex gap-4 items-center bg-[rgb(236,242,247)] px-4 mb-4">
            <i className="fa-solid fa-envelope text-[20px]"></i>
            <div className="w-full h-full flex-col justify-center py-2">
              <label className="block text-sm">Email</label>

              <input
                type="text"
                id="FormEmail"
                placeholder="alguien@gmail.com"
                name="Email"
                className="text-sm text-black w-full bg-transparent outline-0"
              />
            </div>
          </div>

          <div className="w-full h-[60px] rounded-xl flex gap-4 items-center bg-[rgb(236,242,247)] px-4">
            <i className="fa-solid fa-phone text-[20px]"></i>
            <div className="w-full h-full flex-col justify-center py-2">
              <label className="block text-sm">Telefono</label>

              <input
                type="text"
                name="telefono"
                id="TelefonoForm"
                className="text-sm text-black w-full bg-transparent outline-0"
                placeholder="+00 123456"
              />
            </div>
          </div>

          <input
            className="cursor-pointer text-white text-xl font-semibold bg-gradient-to-r from-red-400 via-red-500 py-2 to-red-600 w-full rounded-lg mt-6"
            type="submit"
            value="Registrar"
          />
        </form>
      </div>
    </div>
  );
}
