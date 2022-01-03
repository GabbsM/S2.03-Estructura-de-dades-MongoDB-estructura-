//ALBUM

const AlbumId = ObjectId();
const Album = {
    "_id" : AlbumId,
    "titulo": "Nico Nico",
    "favorito": NumberInt(3),
    "artistaId":ArtistaiD
}

//CANCION

const CancioniD = ObjectId();
const Cancion = {
    "_id" : CancioniD,
    "nombre": "Chanu chanu",
    "favorita": numeroCanciones(6)
}

//PLAYLIST

const PlayListiD = ObjectId();
const PlayList = {
    "_id" : PlayListiD,
    "titulo": "Mis canciones",
    "numeroCanciones": NumberInt(5487),
    "fechaCreacion": ISODate("2022-01-02T17:21:00.000Z"),
    "estado": "Activada",
    "agregadoPor": UsuarioPremiumId,
    "albumId": AlbumId,
    "cancionId": CancioniD,
    "artistaId":ArtistaiD

}

//SUBSCRIPCION

const SubscripcioniD = ObjectId();
const Subscripcion = {
    "_id" : SubscripcioniD,
    "fechaInicio": ISODate("2022-01-02T17:21:00.000Z"),
    "fechaRenovacion": ISODate("2022-01-02T17:21:00.000Z"),
    "formaPago": "tarjeta",
    "tarjetaCredito": "5478541239895548",
    "paypalNombreUsuario": "Foo"
}



// TARJETA DE CREDITO

const TarjetaCreditoId = ObjectId();
const TarjetaCredito = {
    "_numero" : TarjetaCreditoId,
    "MesAnioCaducidad":ISODate("2022-01-02T17:21:00.000Z")
}

// PAYPAL

const PaypalId = ObjectId();
const Paypal = {
    "nombreUsuario" : PaypalId
}

//ARTISDTA

const ArtistaiD = ObjectId();
const Artista = {
    "_id" : ArtistaiD,
    "nombre": "Foo",
    "favorito": numeroCanciones(2)
}

//PAGOS

const PagosId = ObjectId();
const Pagos = {
    "_id" : PagosId,
    "fecha":ISODate("2022-01-02T17:21:00.000Z"),
    "total": NumberDecimal(150.25)
}

//USUARIO PREMIUM

const UsuarioPremiumId = ObjectId();
const UsuarioPremium = {
    "_id" : UsuarioPremiumId,
    "mail": "hola@hola.com",
    "password":"12345678",
    "nombreUsuario":"Foo",
    "fechaNacimiento": ISODate("2022-01-02T17:21:00.000Z"),
    "sexo":"masculino",
    "pais":"España",
    "codigoPostal":"08024",
    "suscripcionId": SubscripcioniD,
    "pagosNumeroOrden":"1452",
    "playlistId": PlayListiD,
    "albumId": AlbumId,
    "artistaId": ArtistaiD,
    "cancionId": CancioniD
}

//USUARIO FREE

const UsuarioFreeId = ObjectId();
const UsuarioFree = {
    "_id" : UsuarioFreeId,
    "mail": "taco@toco.com",
    "password":"87654321",
    "nombreUsuario": "Kops",
    "fechaNacimiento":ISODate("2022-01-02T17:21:00.000Z"),
    "sexo":"femenino",
    "pais":"Irlanda",
    "codigoPostal":"08312",
    "albumId": AlbumId,
    "artistaId": ArtistaiD,
    "cancionId": CancioniD
}