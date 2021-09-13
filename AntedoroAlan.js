class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
}
        getfullname(){
            console.log('getfullname...');
            console.log(`${this.nombre} ${this.apellido}`);
            return `${this.nombre} ${this.apellido}`;
        }
        addMascota(mascota){
            console.log('addMascota..');
            this.mascotas.push(mascota);
        }
        countMascotas(){
            console.log('countMascotas..');
            console.log(this.mascotas.length);
            return this.mascotas.length;
        }
        addBook(titulo, autor){
            console.log('addBook...');
            this.libros.push({
                titulo: titulo,
                autor: autor
            })
        }
        getBookNames(){
            console.log('getBookNames...');
            return this.libros.map( libro => libro.titulo);
        }

}

const usuario = new Usuario('Alan', 
'Antedoro', 
[{titulo:'Big Sur', autor: 'Jack Kerouak'},{titulo: 'Regreso', autor: 'Theodore Surgeon'}], 
['Lara','Almendra']);


usuario.getfullname();
usuario.addMascota('Olivia');
usuario.countMascotas();
usuario.addBook('Ulises', 'James Joyce');
console.log(usuario.getBookNames());

console.log(usuario);