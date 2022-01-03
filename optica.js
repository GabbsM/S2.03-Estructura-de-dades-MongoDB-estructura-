//CLENTE

const ClienteId = ObjectId();
const Cliente= {
    "_id" : ClienteId,
    "nombre": "Gerard",
    "direccion":  "Asturias",
    "telefono": "658745124",
    "mail" : "pepito@pepote.com",
    "fechaRegistro": ISODate("2022-01-02T17:21:00.000Z"),
    "ClienteIDrecomendado" : null
}

db.clientes.insert(Cliente)


//MARCA

const MarcaId = ObjectId();
const Marca = {
    "_id" : MarcaId,
    "nombre": "Ray-Ban"
}

db.marcas.insert(Marca)

//EMPLEADO:

const EmpleadoId = ObjectId();
const Empleado={
    "_id" : EmpleadoId,
    "nombre": "String"
}

db.empleados.insert(Empleado)

//Gafas

const Gafas = {
    "_id" : ObjectId(),
    "graduacion" : {
        "izquierda" : NumberDecimal(1) ,
        "derecha" : NumberDecimal(1.5)  ,
    },

    "tipoMontura" :"pasta", //Aquí solamente puede ir "pasta","metalica" o "flotante"
 

    "colorMontura": "negro",
    "colorCristales": "translucido",
    "precio": NumberDecimal(90.50),
    "fechaVenta" : ISODate("2022-01-02T17:21:00.000Z"),
    "clienteId": ClienteId ,
    "marcaId": MarcaId,
    "empleadoId" : EmpleadoId
}

db.gafas.insert(Gafas)

//PROVEEDOR

const Proveedor = {

    "_id" : ObjectId(),

    "nombre": "Gafas Manolo",
    "calle": "Pez",
    "numero":"5",
    "piso" : "2",
    "puerta": "3",
    "ciudad" : "Barcelona",
    "codigoPostal": "08024",
    "pais" : "Catalunya",
    "telefono": "664521487",
    "fax" : "664521487",
    "NIF": "478547564Z",
    "marcaId" : MarcaId
}

db.proveedores.insert(Proveedor)

// ejecución

