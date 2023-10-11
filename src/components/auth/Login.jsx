import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            // Aquí puedes realizar la solicitud de inicio de sesión, por ejemplo, con fetch o axios.
            // Verifica las credenciales del usuario y realiza la autenticación.

            // Si el inicio de sesión es exitoso, puedes redirigir al usuario a la vista "home" u otras acciones.

            // Si hay un error, puedes mostrar un mensaje de error.
            setError('Credenciales incorrectas');
        } catch (error) {
            console.error('Error en el inicio de sesión', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Iniciar sesión</h2>
                {error && <div className="text-red-600 mb-4">{error}</div>}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-600 font-medium mb-2">
                        Nombre de usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    onClick={handleLogin}
                >
                    Iniciar sesión
                </button>
            </div>
        </div>
    );
}

export default Login;
