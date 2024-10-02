// const mensaje = document.querySelector("div");
// const boton = document.getElementById("cambiar-mensaje");

// boton.addEventListener("click", () => {
//   mensaje.textContent = "Nuevo mensaje";
// });

const boton = document.getElementById("cambiar-mensaje");

boton.addEventListener("click", () => {
  isIP();
});

function isIP(url) {
  // Expresión regular para verificar si la URL es una dirección IPv4 o IPv6
  const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Pattern = /([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]))\.){3}(25[0-5]|(2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]))/;

  // Extraer la parte de la URL
  const urlParts = new URL(url);
  const hostname = urlParts.hostname;

  return ipv4Pattern.test(hostname) || ipv6Pattern.test(hostname);
}

const currentURL = window.location.href;
const result = isIP(currentURL);
console.log(`La URL actual ${currentURL} ${result ? 'es' : 'no es'} una dirección IP.`);
// Ejemplo de uso
console.log(isIP('http://192.168.1.1')); // true
console.log(isIP('http://example.com')); // false
console.log(isIP('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')); // true



