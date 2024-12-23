# DALIA EUNICE MARTINEZ GONZALEZ 
# PROCEDIMIENTO
# Creación del proyecto Angular

En primer lugar, se creo el proyecto de angular para la realización de Login con el comando ng new ProgramWebLogin_DEMG como se muestra en la siguiente imagen
![image](https://github.com/user-attachments/assets/1ca2cb4f-6c2c-4466-90e5-2429f50a2419)

Al abrir el proyecto con Visual Studio Code se pueden observar los componentes que forman parte de este proyecto.
![image](https://github.com/user-attachments/assets/219933c1-caac-4af5-b771-bab3701db088)

Después de tener el proyecto se descargó Angular Material al ejecutar el comando ng add @angular/material
![image](https://github.com/user-attachments/assets/a641a214-746b-419f-915d-9b0a6809fdb3)

Se modifico el index.html para cambiar el color de fondo de todas las páginas, poniéndole un estilo al body.

![image](https://github.com/user-attachments/assets/ed495da9-66b1-4e3b-b19e-9d324789009b)

 
# Creación de componetes
**Crear login**

Posteriormente se generó el componente Login para tener un mejor orden entre los componentes de la pagina con el comando ng generate component Login

![image](https://github.com/user-attachments/assets/a8eeacc2-d4a7-4d9f-8694-f01d60ea8750)

![image](https://github.com/user-attachments/assets/2669df35-e9a2-4858-9ad8-04d3cc06f6a1)

***html***

Posteriormente se modifico el archivo login.component.html para integrar el diseño del inicio de sesión y llamar a métodos para realizar acciones como ingresar o ver contraseñas, el login contiene dos campos para poder iniciar sesión (correo electrónico y contraseña).

![image](https://github.com/user-attachments/assets/650a5524-dfc2-4541-8623-866b91d6d938)

***css***

También se modificó el archivo login.component.css para mejorar el diseño del login, con imágenes, colores y otros elementos.

![image](https://github.com/user-attachments/assets/8c0ab6f0-9168-41b1-b7b1-d3db0e06e34d)

***ts***

Se hiso uso de login.component.ts en donde se importaron los componentes y módulos necesarios para el Login y donde se incorporan los métodos para realizar el inicio de sesión y ver contraseña ingresada cuando se le da clic al icono que le corresponde.

![image](https://github.com/user-attachments/assets/df7c48be-fbfa-46c7-8bd1-a03621c6fdaa)

**Crear home**

Al igual que con Login se crearon los componentes, pero con el nombre de home, le puse home pero más bien es el menú superior.

![image](https://github.com/user-attachments/assets/96dd368a-df01-4bc8-8e46-efdc74c86f4d)

***html***

Se modifico el archivo home.component.html para que todo funcione correctamente, este mostrara un menú superior con un mensaje de bienvenido y las secciones de inicio,usuarios, acerca de, el contacto y una de configuración(perfil, configurar o Cerrar sesión).

![image](https://github.com/user-attachments/assets/85cac1ee-5e78-4c3f-b82d-d2ed08477b99)

***css***

Se modifico el archivo home.component.css que se ocupó para definir los estilos visuales de los componentes del home.

![image](https://github.com/user-attachments/assets/ce8f4780-1129-4637-9ee1-9e935e2a68af)

***ts***

Se modifico el archivo home.component.ts para definir las propiedades y métodos que controlan el comportamiento del componente, conectar la lógica de la aplicación con la vista, y asociar el css y el html.

![image](https://github.com/user-attachments/assets/1c8408f7-8bae-4793-ae8d-dd1dffbeef82)

**Crear el inicio**

***html***

Se generó el componente Inicio, en primer lugar se modifico el archivo html para que en esa sección se muestre un contenedor con el icono de angular y un mensaje de bienvenido.

![image](https://github.com/user-attachments/assets/3095017a-4972-43ca-a07e-0ffdbe5117bf)

***css***
Se modifico también el css del home para que el html se vea mejor.

![image](https://github.com/user-attachments/assets/4b3b2fe4-258d-4052-86b0-dbfc63d2e634)

***ts***

El archivo ts se modifico para agregar los módulos necesarios para la estructura del inicio.

![image](https://github.com/user-attachments/assets/094f7048-223f-4cef-98f0-df5232ce0170)

# Configurar rutas

En el archivo app.routes.ts se agregaron las rutas para acceder a las secciones que se mostraron anteriormente(login,home,inicio) agregando la de Login como la principal, y la de home con una ruta hija llamada inicio ya que inicio depende de la de home.

![image](https://github.com/user-attachments/assets/b26daac1-c3f5-4cd3-9b42-a1ee92db521e)

Se modifico el app.compont.html para renderizar las vistas asociadas a las rutas configuradas en el enrutador de la aplicación, la cual es importante para la implementación de la navegación y el enrutamiento en Angular.

# Agregar la API para validar el inicio de sesión 

**Crear y configurar el servicio para consumir la api** 

![image](https://github.com/user-attachments/assets/351675f8-9283-434a-affa-259b1b7f9d65)

![image](https://github.com/user-attachments/assets/bbb5cf00-a6ed-4f22-9343-d92820a44cbb)

**Configurar el HttpClientModule**

También se configuro app.config.ts agregando provideHttpClient desde @angular/common/http

![image](https://github.com/user-attachments/assets/0aa40f35-52e0-4792-a94d-81ec70daf41a)

**crear la lista de usuarios**

Para visualizar usuarios se creó en este proyecto la tabla con la información de los usuarios generando el componente ng generate component components/user-list.

***html***

![image](https://github.com/user-attachments/assets/5460f97f-2691-497d-9cff-ee8f6da55497)

***css***

![image](https://github.com/user-attachments/assets/0fa93efa-81d5-492b-bade-6be5577adf8c)

***ts***

![image](https://github.com/user-attachments/assets/765e05b4-40ae-405c-97a0-1a0f57824aef)

***agregar a las rutas***

![image](https://github.com/user-attachments/assets/44bfcfa2-043b-450b-b9a3-78c28d903ab8)

***Conectar el inicio de sesión con la API***

Para ellos se añadio el servicio con constructor(private router: Router, private userService: UserService) {} y se modifico el metodo para iniciar sesión para validar que la contraseña y usuario coincidan con los datos que se tienen en la API

![image](https://github.com/user-attachments/assets/c150b18a-7131-44f4-a2cc-0aa14e80e936)

# Resultados

El correo electrónico y la contraseña deben coincidir con algún usuario en caso contrario se muestra el mensaje correo o contraseña incorrectos

![image](https://github.com/user-attachments/assets/218f52e1-4122-4dd3-b9d8-00ee1ff62d9b)

En caso de que el correo y contraseña coincidan muestra el mensaje Inicio de sesión exitoso

![image](https://github.com/user-attachments/assets/fbb058b3-fb4d-4f58-933a-f213c7fc8314)

Al tener inicio de sesión exitoso y aceptar el mensaje se muestra 

![image](https://github.com/user-attachments/assets/e0bfe07e-a151-4789-b820-e072b3b79316)

![image](https://github.com/user-attachments/assets/5ec83c36-10af-4370-b051-140686e708ef)

