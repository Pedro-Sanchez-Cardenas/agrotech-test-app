import React, { useState } from 'react';

function EditProductModal({ isOpen, onClose, onSave }) {
   const [newProduct, setNewProduct] = useState({
      title: '',
      price: '',
      description: '',
      category: '',
   });

   const [successMessage, setSuccessMessage] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewProduct({
         ...newProduct,
         [name]: value,
      });
   };

   const handleSave = () => {
      // Realizar la solicitud POST
      fetch('https://dummyjson.com/products/add', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(newProduct), // Enviar los datos del nuevo producto
      })
         .then((res) => {
            if (res.ok) {
               setSuccessMessage('¡Producto guardado exitosamente!');
               setErrorMessage('');
               onSave(newProduct);
            } else {
               setSuccessMessage('');
               setErrorMessage('Error al guardar el producto. Por favor, inténtalo de nuevo.');
            }
         })
         .catch((error) => {
            console.error('Error al guardar el producto', error);
            setSuccessMessage('');
            setErrorMessage('Error al guardar el producto. Por favor, inténtalo de nuevo.');
         });
   };

   if (!isOpen) {
      return null;
   }

   return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-white/30">
         <div className="bg-white rounded-lg overflow-hidden w-5/12">
            <div className="flex items-center justify-between bg-yellow-500 text-white p-4">
               <h2 className="text-xl font-semibold">Editar Producto</h2>

               <button onClick={onClose} className='bg-yellow-600 hover:bg-red-600 p-2 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                     <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
               </button>
            </div>
            {successMessage && (
               <div className="p-4 bg-green-200 text-green-800">
                  {successMessage}
               </div>
            )}
            {errorMessage && (
               <div className="p-4 bg-red-200 text-red-800">
                  {errorMessage}
               </div>
            )}
            <div className="p-4">
               <div className="p-4">
                  <div className="mb-4">
                     <label htmlFor="title" className="block text-gray-600 font-semibold">
                        Nombre del Producto
                     </label>
                     <input
                        type="text"
                        id="title"
                        name="title"
                        value={newProduct.title}
                        placeholder='Nombre producto'
                        onChange={handleInputChange}
                        className="w-full border rounded p-2 border-gray-400"
                     />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="price" className="block text-gray-600 font-semibold">
                        Precio
                     </label>
                     <input
                        type="text"
                        id="price"
                        name="price"
                        value={newProduct.price}
                        placeholder='Precio'
                        onChange={handleInputChange}
                        className="w-full border rounded p-2 border-gray-400"
                     />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="category" className="block text-gray-600 font-semibold">
                        Categoría
                     </label>
                     <input
                        type="text"
                        id="category"
                        name="category"
                        value={newProduct.category}
                        placeholder='Categoria'
                        onChange={handleInputChange}
                        className="w-full border rounded p-2 border-gray-400"
                     />
                  </div>

                  <div className="mb-4">
                     <label htmlFor="description" className="block text-gray-600 font-semibold">
                        Descripción
                     </label>
                     <textarea
                        required
                        id="description"
                        name="description"
                        value={newProduct.description}
                        placeholder='Descripcion producto'
                        onChange={handleInputChange}
                        className="w-full border rounded p-2 border-gray-400 resize-none"
                     />
                  </div>
               </div>
            </div>
            <div className="flex justify-end bg-gray-100 p-4">
               <button onClick={onClose} className="bg-gray-300 text-gray-700 p-2 rounded mr-2">
                  Cancelar
               </button>
               <button onClick={handleSave} className="bg-yellow-500 text-white p-2 rounded">
                  Guardar
               </button>
            </div>
         </div>
      </div>
   );
}

export default EditProductModal;
