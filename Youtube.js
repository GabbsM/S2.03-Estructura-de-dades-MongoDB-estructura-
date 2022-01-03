//VIDEO

const VideoId = ObjectId();
const Video = {
    "_id" : VideoId,
    "titulo": "Barcelona",
    "descripcion": "Imagenes de Barcelona",
    "tamanio": NumberDecimal (2.45),
    "nombre_archivo":  "bcn",  
    "duracion": ISODate("2022-01-02T17:21:00.000Z"),
    "thumbnails": NumberInt(5),
    "num_reproducciones":NumberInt(322),
    "num_likes": NumberInt(32),
    "num_dislikes":NumberInt(4),
    "etiqueda_id":  NumberInt(002)

}

db.videos.insert(Video)

//ETIQUETA

const EtiquetaId = ObjectId();
const Etiqueta = {
    "_id" : EtiquetaId,
    "nombreEtiqueta": "video1",
    "usuarioYoutube": "Nikochan",
    "FechaPublicacion":ISODate("2022-01-02T17:21:00.000Z")
}

db.etiquetas.insert(Etiqueta)


// COMENTARIO

const ComentarioId = ObjectId();
const Comentario = {

    "_id" : ComentarioId,
    "texto": "Hola",
    "fechaHora": ISODate("2022-01-02T17:21:00.000Z")
}

db.comentarios.insert(Comentario)

// CANAL

const CanalId = ObjectId();
const Canal = {
    "_id" : CanalId,
    "nombre": "Ciudades",
    "descripcion": "Videos sobre ciudades",
    "fechaCreacion":ISODate("2022-01-02T17:21:00.000Z"),
    "comentarioId": ComentarioId
}

db.canales.insert(Canal)

// PLAYLIST

const PlaylistId = ObjectId();
const Playlist = {

    "_id" : PlaylistId,
    "nombre":"Ver despues",
    "fechaCreacion": ISODate("2022-01-02T17:21:00.000Z"),
    "estado":"activado"
}

db.playlists.insert(Playlist)

// USUARIO

const UsuarioId = ObjectId();
const Usuario = {

    "_id" : UsuarioId,
    "mail": "usuario@usuario.com",
    "nombreUsuario":  "Katu",
    "sexo": "M",
    "pais":"España",
    "codigoPostal": "08024",
    "video_Id": VideoId,
    "PlaylistId":Playlist,
    "CanalId":CanalId

}

db.Usuarios.insert(Usuario)
