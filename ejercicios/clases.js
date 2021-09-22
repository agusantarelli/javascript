class Mascota {
  constructor(nombre) {
    this.nombre = nombre
  }
}

class Perro extends Mascota {
  constructor(nombre, color){
    super(nombre)
    this.color = color
  }

  hacerRuido(){
    return 'Guau'
  }
}
// Una función que debe devolver una instancia de una clase que herede de mascota
// La instancia debe tener una propiedad que sea color de tipo string
//  y un método que sea hacerRuido() que devuelve un string
function miMascota() {
  return new Perro('Toby','Golden')

}


module.exports = {
  Mascota,
  miMascota
}