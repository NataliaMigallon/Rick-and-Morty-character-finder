![image](https://user-images.githubusercontent.com/75789190/110043181-4349eb80-7d47-11eb-94d4-6ceb3288fbb2.png)

# Buscador de personajes de "Rick and Morty"

Este proyecto forma parte de la evaluación final del módulo 3 de Adalab. Se trata de crear una SPA (Single Page Applications) en la que se muestra información sobre algunos de los personajes que aparecen en la serie "Rick and Morty".

En él se han aplicado diferentes herramientas de desarrollo web como HTML5, CSS3, SASS, Java Script y React. 

Para ver el proyecto tienes dos opciones: hacer click [aquí](https://beta.adalab.es/modulo-3-evaluacion-final-NataliaMigallon/#/), o instalarlo en tu ordenador.

## Instalación
  1. Instalar Visual Studio Code
  2. Clonar este repositorio
  3. Introducir en la terminal "npm install"
  4. Introducir en la terminal "npm start" para poder hacer cambios y verlos a tiempo real

## Características

El proyecto está creado a través de un entorno de desarrollo preconfigurado llamado `create-react-app`. En él los diferentes archivos (componentes, archivos de SASS, JSX, imágenes, etc.) se han distribuido en carpetas para una mejor organización a la hora de trabajar. En cuanto a los componentes creados, se han programado siguiendo la sintaxis de los componentes funcionales, poniéndo en práctica todo lo aprendido en este módulo. Por ejemplo a trabajar usando props, escuchar eventos, la técnica de lifting, propTypes, Hooks, formularios, el empleo tanto de ternarios como de if/else, destructuring, React Router, etc.

La SPA se inicia con todas las tarjetas de los personajes "pintadas", tomando los datos de una [API](https://rickandmortyapi.com/api/character), los cuales son filtrados y renderizados según las decisiones que la usuaria tome mientras navega. A partir de este "render" inicial ordenado alfabéticamente a través de la herramienta `sort()` se puede acceder a más información sobre el personaje, representada principalmente mediante texto pero también a través de iconos, como es el caso de su "status". Además, está disponible tanto la búsqueda por nombre del personaje (independientemente de si se efectúa con mayúsculas o minúsculas), como el filtro por especie a la que pertenece a través de una etiqueta de "select" y, también, por estado del personaje (vivo, muerto o se desconoce) con tres "input" de tipo "checkbox".

Para facilitar la experiencia de usuaria la web consta de una serie de botones: `RESET` para borrar todos los datos de la búsqueda; `ABOUT` para ver más detalles sobre el personaje; `RETURN` para volver hacia el componente principal después de ver el detalle del personaje.

Otras características que mejoran la experiencia de usuaria son, en primer lugar, el mensaje de advertencia que se muestra cuando la búsqueda por nombre no coincide con ningún personaje; en segundo lugar, la opción de tener URLs compartibles y, que en caso de escribirla de forma errónea, aparezca un mensaje avisando de que no se ha encontrado al personaje; y, la tercera mejora, es que cuando la usuaria entra en el detalle del personaje (botón `ABOUT`) y retrocede (bien con la flecha del navegador o pulsando el botón `RETURN`) la búsqueda o filtrado que haya realizado se mantiene.

Por último, la SPA es totalmente responsive, por lo que se comporta correctamente en todo tipo de dispositivos. 
