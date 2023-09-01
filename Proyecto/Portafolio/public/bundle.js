'use strict';

const galeria = document.getElementById("trabajos");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      const trabajos = galeria.querySelectorAll(".trabajos__imagenes a");
      trabajos.forEach((trabajo, index) => {
        setTimeout(() => {
          trabajo.classList.add("trabajos__trabajo--visible");
        }, 200 * index);
      });
    }
  },
  {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  }
);

observer.observe(galeria);

const trabajos = document.getElementById("trabajos");
const ventanaTrabajos = document.getElementById("ventana-trabajos");

const datos = [
  {
    id: "1",
    titulo: "Trabajo #1",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?",
    fecha: "1 de Enero de 2023",
  },
  {
    id: "2",
    titulo: "Trabajo #2",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?",
    fecha: "1 de Enero de 2023",
  },
  {
    id: "3",
    titulo: "Trabajo #3",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?",
    fecha: "1 de Enero de 2023",
  },
  {
    id: "4",
    titulo: "Trabajo #4",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?",
    fecha: "1 de Enero de 2023",
  },
  {
    id: "5",
    titulo: "Trabajo #5",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?",
    fecha: "1 de Enero de 2023",
  },
  {
    id: "6",
    titulo: "Trabajo #6",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?",
    fecha: "1 de Enero de 2023",
  },
];

trabajos.addEventListener("click", (e) => {
  e.preventDefault();

  // Comprobamos que el usuario de click en un trabajo
  const trabajoClickeado = e.target.closest(".trabajos__trabajo");

  if (trabajoClickeado) {
    // Obtenemos el id del trabajo clickeado
    const id = trabajoClickeado.dataset.id;

    // Extraemos la info del trabajo
    const trabajo = datos.filter((trabajo) => {
      if (trabajo.id === id) {
        return trabajo;
      }
    });

    ventanaTrabajos.querySelector(".ventana__titulo").innerText =
      trabajo[0].titulo;
    ventanaTrabajos.querySelector(".ventana__fecha").innerText =
      trabajo[0].fecha;
    ventanaTrabajos.querySelector(".ventana__parrafo").innerText =
      trabajo[0].texto;
    ventanaTrabajos.querySelector(".ventana__imagen").src =
      trabajoClickeado.querySelector("img").src;
  }
  ventanaTrabajos.classList.add("ventana--active");
});

// Eventlistener para cerrar ventana con el boton.
ventanaTrabajos
  .querySelector('button[data-action="cerrar-ventana"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    ventanaTrabajos.classList.remove("ventana--active");
  });

// Eventlistener para cerrar ventana con el overlay.
ventanaTrabajos
  .querySelector(".ventana__overlay")
  .addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.matches(".ventana__overlay")) {
      ventanaTrabajos.classList.remove("ventana--active");
    }
  });

const slider = document.getElementById("slider");
let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;

const presiona = (e) => {
  clickPresionado = true;

  coordenadaInicial = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;

  // e. pagex- Coordenada horizontal del evento. En que coordenada dimos click con respecto al documento
  console.log("pageX:", e.pageX);
  console.log("slider.offsetLeft:", slider.offsetLeft);
  console.log("scrollLeft", slider.scrollLeft);
};
const mueve = (e) => {
  if (!clickPresionado) {
    return;
  }
  const espaciado = e.pageX - slider.offsetLeft;
  const distanciaRecorrida = espaciado - coordenadaInicial;

  slider.scrollLeft = scrollLeft - distanciaRecorrida;
};
const suelta = (e) => {
  clickPresionado = false;
  console.log("suelta");
};

slider.addEventListener("mousedown", presiona);
slider.addEventListener("mousemove", mueve);
slider.addEventListener("mouseup", suelta);

const botonesEmail = document.querySelectorAll(
  '[data-action="abrir-ventana-correo"]'
);
const botonesCerrar = document.querySelectorAll(
  '[data-action="cerrar-ventana"]'
);
const ventanaCorreo = document.getElementById("ventana-correo");

botonesEmail.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();

    ventanaCorreo.classList.add("ventana--active");
  });
});

botonesCerrar.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();

    ventanaCorreo.classList.remove("ventana--active");
  });
});

const animarTexto = (elemento) => {
  const numeroDeLetras = elemento.dataset.texto.length;

  //Activamos el cursor cuando comienza la animacion
  const cursor = elemento.querySelector(".hero__cursor");
  cursor.classList.add("hero__cursor--visible");

  //Por cada letra, la agregamos al DOM con 100ms de separacion
  for (let i = 0; i < numeroDeLetras; i++) {
    setTimeout(() => {
      const letra = document.createElement("span");
      letra.append(elemento.dataset.texto[i]);
      elemento.append(letra);
    }, 200 * i);
  }

  //Cambiamos la clase del cursor cuando termine la animacion de letras
  setTimeout(() => {
    //Obtenemos los cursores
    const cursores = [
      ...elemento.closest(".hero__header").querySelectorAll(".hero__cursor"),
    ];

    // Obtenemos el index del cursor actual
    const indexCursorActual = cursores.indexOf(cursor);
    // Comprobamos que el cursor no sea el ultimo
    if (indexCursorActual < cursores.length - 1) {
      //Si no es el ultimo, ocultamos el cursor
      cursor.classList.remove("hero__cursor--visible");
    } else {
      // Si el cursor es el ultimo, le ponemos la clase de active
      cursor.classList.add("hero__cursor--active");
    }
  }, numeroDeLetras * 100);

  // Retornamos una promesa para saber cuando la animacion acabo
  return new Promise((resolve) => setTimeout(resolve, numeroDeLetras * 200));
};

window.addEventListener("load", async () => {
  await animarTexto(document.querySelector(".hero__titulo--uno"));
  await animarTexto(document.querySelector(".hero__titulo--dos"));

  document
    .querySelectorAll(".hero__burbuja")[0]
    .classList.add("hero__burbuja--active-1");
  document
    .querySelectorAll(".hero__burbuja")[1]
    .classList.add("hero__burbuja--active-2");
});
//# sourceMappingURL=bundle.js.map
