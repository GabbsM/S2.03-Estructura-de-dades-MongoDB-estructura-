
//CLENTE

const ClienteId = ObjectId();
const Cliente= {
    "_id" : ClienteId,
    "nombre": "Gerard",
    "apellido": "Montes",
    "direccion":  "Asturias",
    "telefono": "658745124",
    "codigoPostal" : "08024",

}

//LOCALIDAD

const LocalidadId = ObjectId();
const Localidad = {
    "_id" : LocalidadId,
    "nombre": "Vilanova i la Geltrú",
}

//PROVINCIA

const ProvinciaId = ObjectId();
const Provincia = {
    "_id" : ProvinciaId,
    "nombre": "Barcelona",
}

//PIZZA

const PizzaId = ObjectId();
const Pizza = {
    "_id": PizzaId,
    "nombre": "Barbacoa",
    "descripcion": "Con salsa barbacoa",
    "imagen": null,
    "precio": NumberDecimal (9.95)
}

//TIENDA

const TiendaId = ObjectId();
const Tienda = {
    "_id": TiendaId,
    "direccion":  "Asturias",
    "codigoPostal" : "08024",
    "localidad": LocalidadId,
    "provincia": ProvinciaId

}

// EMPLEADO

const EmpleadoId =ObjectId();
const Empleado = {
    "_id": EmpleadoId,
    "nombre": "Marc",
    "apellido": "DeCascos",
    "dni": "475214785T",
    "telefono": "665254185"

}

// HAMBURGUESA

const HamburguesaId= ObjectId();
const Hamburguesa = {

    "_id": HamburguesaId,
    "nombre": "Big Burguer",
    "descripción": "Hamburguesa grande",
    "imagen": null,
    "precio":NumberDecimal (7.50)

}

// BEBIDA

const BebidaId = ObjectId();
const Bebida = {

    "_id": BebidaId,
    "nombre": "Coca cola Zero",
    "descripcion":"Sin azucar",
    "imagen":null,
    "precio":NumberDecimal (3.00)
}

//PEDIDO

const PedidoId = ObjectId();
const Pedido = {

    "fecha": ISODate("2022-01-02T17:21:00.000Z"),
    "pedido_reparto":"003",
    "pedido_recoger": "002",
    "numero_productos":"3",
    "precio_total":NumberDecimal (13.45),
    "pizza_id": PizzaId,
    "hamburgues_id": HamburguesaId,
    "bebida_id": BebidaId,
    "cliente_id": ClienteId,
    "tienda_id": tienda_id,
    "empleado_id": EmpleadoId
}