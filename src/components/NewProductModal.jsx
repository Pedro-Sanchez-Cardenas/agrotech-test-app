import React, { useState } from 'react';

function NewProductModal({ isOpen, onClose, onSave }) {
    const [product, setProduct] = useState({ name: '', price: '', description: '', category: '' });

    const handleSave = () => {
        onSave(product);
        onClose();
    };

    return (
        <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-96 p-6 rounded shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Registrar Nuevo Producto</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Nombre del Producto"
                            value={product.name}
                            onChange={(e) => setProduct({ ...product, name: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Precio"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Descripción"
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Categoría"
                            value={product.category}
                            onChange={(e) => setProduct({ ...product, category: e.target.value })}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSave}>
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProductModal;
