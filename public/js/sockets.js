var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});
// .on son para escuchar informacion
socket.on('disconnect', function () {
    console.log('Perdida de conexion');
});
// .emit son para enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Mundo '
}, function (resp) {
    console.log('resp del server', resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor', mensaje);
});

