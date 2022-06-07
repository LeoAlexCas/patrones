// //Usa listeners de distinto tipo para hacer observables a los cuales un objeto podra reaccionar
// //esto es casi pseudocodigo

// const user = new User();
// const init = () => {
//     user.on('event', funcionForEvent);
// };

// const funcionForEvent() {
//     //logica
// };

// app.init();


// //Por otro lado en la app o codigo algo debe despachar dicho evento
// const login = () => {
//     //logica de iniciar sesion por ejemplo

//     //se despacha el evento
//     user.trigger('event');
// }

// login();