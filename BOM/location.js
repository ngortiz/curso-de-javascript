// href - Retorna la URL de la pagina atual
console.log(location.href);

// hotsname - Retorna el host de lapagina actual
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

//procotol - Retorna el protoloco utilizado
console.log(location.protocol);

const cargarDocumento = () => {
  location.assign("https://google.com");
};

const irAdelante = () => {
  history.forward();
};
