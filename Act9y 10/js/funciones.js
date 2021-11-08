
new Vue({
    el: 'main',
    data: {
      mostar: '',
      buscarT:'',
      busqueda:'',
        minimo:15,
      
        juegos:[{
        titulo:'Mascarilla',
        genero: 'Canela, Azucar',
        tamaño:'chica, mediana y grande',
        precio:50,
    },
    {
      titulo:'Rimel',
        genero: 'Carbon black',
        tamaño:'mediano',
        precio:50,
  },
  {
      titulo:'Labial',
        genero: 'Fresa',
        tamaño:'chico, mediano y grande',
        precio:30,
  },
    {
      titulo:'Mascarilla',
        genero: 'Miel y avena ',
        tamaño:'chico, mediano y grande',
        precio:20,
  },
  {
    titulo:'Labial.',
    genero: 'Rojo',
    tamaño:'Mediano',
    precio:30,
  },
  {
    titulo:'Mascarilla',
    genero: 'Hervabuena, Azucar,',
    tamaño:'chica, mediana y grande',
    precio:15,
  },
  {
      titulo:'Paleta de sombras',
        genero: 'Nude atardecer',
        tamaño:'Chico, mediano, grande',
        precio:120,
  },
  {
      titulo:'Paleta de sombra',
        genero: 'Arcoiris',
        tamaño:'Chico, mediano, grande',
        precio:150,
  },
  {
      titulo:'Paleta de sombras',
        genero: 'Contorno natural',
        tamaño:'Mediano',
        precio:215,
}],
    },
    computed:{
        mejoresJuegos(){
            return this.juegos.filter((juego)=> juego.precio >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((juego)=> juego.titulo.includes(this.busqueda));
            
        },
    }

})