import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

import NewProductModal from './NewProductModal';
import EditProductModal from './EditProductModal';


function ProductsTable() {
   const [products, setProducts] = useState([]);
   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
   const [search, setSearch] = useState('');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState(null);



   const handleSaveProduct = (newProduct) => {
      setProducts([...products, newProduct]);
   };

   useEffect(() => {
      // Realiza la solicitud a la API y actualiza el estado con los productos
      fetch('https://dummyjson.com/products')
         .then((res) => res.json())
         .then((data) => setProducts(data.products))
         .catch((error) => console.error('Error al obtener productos', error));
   }, []);

   const requestSort = (key) => {
      let direction = 'asc';
      if (sortConfig.key === key && sortConfig.direction === 'asc') {
         direction = 'desc';
      }
      setSortConfig({ key, direction });
   };

   const handleEdit = (productId) => {
      setSelectedProduct(productId);
      setIsEditModalOpen(true); // Abre el modal de edición
   };



   const handleDelete = (productId) => {
      // Implementar la lógica para eliminar el producto con el ID "productId"
      console.log(`Eliminar producto con ID ${productId}`);
   };

   const sortedProducts = [...products].sort((a, b) => {
      if (sortConfig.key) {
         if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
         }
         if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
         }
      }
      return 0;
   });

   const filteredProducts = sortedProducts.filter((product) => {
      const searchLower = search.toLowerCase();

      // Verifica si alguna propiedad del producto contiene el término de búsqueda
      return Object.values(product).some((value) =>
         value && value.toString().toLowerCase().includes(searchLower)
      );
   });

   return (
      <div>
         <Navbar />

         <div className="w-full mx-auto p-8">
            <div className="mb-4 flex justify-between items-center">
               <h1 className="text-2xl font-bold">Lista de Productos</h1>
               <div className="flex space-x-2">
                  <input
                     type="search"
                     placeholder="Buscar..."
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     className="border rounded p-2"
                  />
                  <button
                     className="bg-blue-500 text-white p-2 rounded-xl mt-4"
                     onClick={() => setIsModalOpen(true)}
                  >
                     Agregar Producto
                  </button>
                  <NewProductModal
                     isOpen={isModalOpen}
                     onClose={() => setIsModalOpen(false)}
                     onSave={handleSaveProduct}
                  />
               </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
               <table className="min-w-full">
                  <thead>
                     <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th
                           className="py-3 px-6 text-left cursor-pointer"
                           onClick={() => requestSort('product_name')}
                        >
                           Nombre del Producto
                           {sortConfig.key === 'product_name' && (
                              <span className="ml-2">
                                 {sortConfig.direction === 'asc' ? '▲' : '▼'}
                              </span>
                           )}
                        </th>
                        <th
                           className="py-3 px-6 text-left cursor-pointer"
                           onClick={() => requestSort('price')}
                        >
                           Precio
                           {sortConfig.key === 'price' && (
                              <span className="ml-2">
                                 {sortConfig.direction === 'asc' ? '▲' : '▼'}
                              </span>
                           )}
                        </th>
                        <th
                           className="py-3 px-6 text-left cursor-pointer"
                           onClick={() => requestSort('description')}
                        >
                           Descripción
                           {sortConfig.key === 'description' && (
                              <span className="ml-2">
                                 {sortConfig.direction === 'asc' ? '▲' : '▼'}
                              </span>
                           )}
                        </th>
                        <th
                           className="py-3 px-6 text-left cursor-pointer"
                           onClick={() => requestSort('category')}
                        >
                           Categoría
                           {sortConfig.key === 'category' && (
                              <span className="ml-2">
                                 {sortConfig.direction === 'asc' ? '▲' : '▼'}
                              </span>
                           )}
                        </th>
                        <th className="py-3 px-6 text-center">Acciones</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm">
                     {filteredProducts.map((product, index) => (
                        <tr
                           key={product.id}
                           className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                        >
                           <td className="py-3 px-6">{product.title}</td>
                           <td className="py-3 px-6 text-green-500">${product.price}</td>
                           <td className="py-3 px-6">{product.description}</td>
                           <td className="py-3 px-6">{product.category}</td>
                           <td className="py-3 px-6">
                              <div className='flex items-center justify-center'>
                                 <button
                                    onClick={() => handleEdit(product)}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                       <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                       <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                 </button>
                                 <button
                                    onClick={() => handleDelete(product.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                       <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                 </button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
         <EditProductModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            product={selectedProduct}
            onUpdate={(updatedProduct) => {
               // Lógica para actualizar el producto en tu lista de productos aquí
               // Por ejemplo, puedes mapear la matriz de productos y reemplazar el producto editado.
               // Luego, cierra el modal de edición.
               setIsEditModalOpen(false);
            }}
         />

      </div>
   );
}

export default ProductsTable;
