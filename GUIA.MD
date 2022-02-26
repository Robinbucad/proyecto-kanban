

## PRACTICA KANBAN REACT

- Card 1 (To do) -> La hace Robin
- Card 2 (In progress)-> La hace Juan
- Card 3 (Done)-> La hace jose

- Header -> Lo hace Juan
- SubHeader -> Lo hace Robin
- Footer -> Lo hace Jose (no es obligatorio hacer footer pero queda bien)


# Funciones

Juan --> Funcion de cambiar el color dependiendo del estado de la tarea (pending-done), se  hace con un condicional.

Robin -> Funcion que añade una tarea a la lista, drag and drop filtro y update la version y cuando se creo la card.

Jose ->Funcion de borrar una tarea, todas las tareas, numero de tareas pendientes(aparece en la izquierda del header de la card)


# Colores
- Color de fondo del header: #24292e
- Color de fondo cada columna de tareas: #f6f8fa
- Color de los títulos de las tareas: #0366d6
- Color del icono de tareas en progreso: #22863a
- Color del icono de tareas terminadas: #cb2431
- Color de fondo del botón añadir: #2ea44f
- Botón añadir deshabilitado: mismo color pero con opacidad 0.7
- Color de fondo del botón cancelar: #fafbfc
- Color de borde de las tarjetas y el botón cancelar: rgba(27,31,35,0.15)

# Filtro con Context

1. Creamos el contexto en un archivo Js dentro de carpeta provider,
2. Creamos el provider y un useState del contexto en un archivo Jsx y envuelvo App.js del provider

# Subheader
3. Creamos variable global usando el contexto.
                              ej-> const[done, updateDone] =useContext(nombreDelContexto)
4. Creamos variable con el local storage ej -> const ejemplo = JSON.parse(localStorage.getItem   ('nombreDelItem'))

5. Creo otra variable dentro de la funcion de filtrado (se llama filterTasks). Y le hago el filtrado a la variable creade en el punto 4 ej -> const filtradoDeDone = ejemplo.filter(...)

6. Actualizo el filtrado 

## En la card

7. Creamos la variable para poder usar el contexto. ej -> const [filtrado, updateFiltrado] = useContext(nombre del contexto)

8. Actualizo el filtrado en la funcion de añadir tarea para crear un array de las tareas filtradas.

9. Sustituyo el prop de list que es igual a list(list es cada tarea), a filter(lo sustituyo a filter para que escriba la tarea filtrada)

10. Vuelvo al jsx provider y creo una constante llamando al local storage.

11. Inicializo el useState que habiamos creado en el punto 2 a la constante del local storage(punto 10). Para que al reiniciar la pagina se inicialize en lo que valga el local y no pete la pagina