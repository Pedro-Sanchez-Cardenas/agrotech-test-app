# Intrucciones

Utilizando las API'S de https://dummyjson.com realizar las siguientes pantallas en react:
 - Hacer login
 - Lista de productos
 - Pantalla de Editar o agregar un producto nuevo.  
 - Mostrar notificaciones de éxito o falla
 - Enviar liga del proyecto en github
No es necesario que agregue datos a ninguna base de datos o servicios, solo que se muestre la informacion y pantalla.

# Frameworks
- El sistema esta desarrollado con Frontend React.
- El diseño o estilos esta desarrollado con Tailwindcss

# Login
![Login Photo](https://raw.githubusercontent.com/Pedro-Sanchez-Cardenas/agrotech-test-app/main/public/assetsReadme/login.png)
- El sistema protege la ruta de pruductsTable para verificar que el usuario tenga una sesión activa, de lo contrario si no tiene una sesión activa no podrá ver los productos hasta iniciar sesion con un usuario valido.
- Los campos de username y password tienen los valores necesarios para iniciar sesión con un usuario valido.

# Products Table
![Product Table Photo](https://raw.githubusercontent.com/Pedro-Sanchez-Cardenas/agrotech-test-app/main/public/assetsReadme/Tabla%20productos.png)
- Una vez que el usuario tiene un a sesión valida el sistema hace un fetch a la api solicita en los requerimientos para enlistar los productos.
- Los botones de Accion como Editar y Eliminar estan disponibles para poder hacer las acciones necesarias con los registros.

# Search Products Table
![Search in Product Table Photo](https://raw.githubusercontent.com/Pedro-Sanchez-Cardenas/agrotech-test-app/main/public/assetsReadme/Campo%20Busqueda.png)
- El sistema es capas de realizar busquedas de registros en el campo buscar, el sistema es capas de filtrar los registros por cualquier columna de la tabla.

# Ordering of columns in the products table
![Ordering of columns in the products table Photo](https://raw.githubusercontent.com/Pedro-Sanchez-Cardenas/agrotech-test-app/main/public/assetsReadme/Orden.png)
- El sistema es capaz de ordenar los registros de a-z o z-a en cualquiera de las columnas, esto nos ayuda a tener un sistema mas funcional y que el cliente pueda analizar los registros de una forma mas facil.

# Modal Create Product
![Modal Create Product Photo](https://raw.githubusercontent.com/Pedro-Sanchez-Cardenas/agrotech-test-app/main/public/assetsReadme/Modal%20Create.png)
- El sistema es capaz de utilizar la API solicita para registrar nuevos datos, tambien el sistema esta preparado para notificar al usuario de algun problema con el guardado de la información o en el mejor de los casos notificarle al usuario que si nuevo registro se guardo con éxito.

# Modal Edit Product
![Modal Edit Product Photo](https://raw.githubusercontent.com/Pedro-Sanchez-Cardenas/agrotech-test-app/main/public/assetsReadme/Modal%20Editar.png)
- El sistema utilizar la misma API para editar los registros existentes en el sistema de esta forma si el usuario comete algun error al guardar su registro o simplemente quiere modificar algun campo de algun registro lo pueda hacer con un modal.
