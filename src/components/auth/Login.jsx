import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({ username: "kminchelle", password: "0lelplR" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                const { token } = data;
                // Almacena el token en el almacenamiento local (localStorage) de manera segura.
                localStorage.setItem('token', token);
                // Redirige a la vista protegida (por ejemplo, ProductTable).
                window.location.href = '/productTable';
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error);
            });
    };


    return (
        <div className="min-h-screen bg-blue-400 flex justify-center items-center">
            <div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
            </div>
            <div className="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
            </div>
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Sign in</h1>
                    <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Welcome to Agrotech test platform!</p>
                </div>
                <div className="space-y-4">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
                                Nombre de Usuario
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                placeholder="Tu nombre de usuario"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Tu contraseña"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                        </div>
                        <div className="text-center">
                            <button type="button"
                                onClick={handleLogin} className="py-3 w-64 text-xl text-white bg-blue-400 hover:bg-blue-600 rounded-2xl">Sign in</button>
                        </div>
                    </form>
                </div>
                <div className="text-center mt-6">
                    <p className="mt-4 text-sm">Already Have An Account? <span className="underline cursor-pointer"> Sign Up</span>
                    </p>
                </div>
            </div>
            <div className="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div
                className="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
            </div>
        </div>
    );
};

export default Login;
