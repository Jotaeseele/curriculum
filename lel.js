function mostrarHora() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = revisar(m);
    s = revisar(s);
    document.getElementById("hora").innerHTML ="Hora: " + h + ":" + m + ":" + s;
    setTimeout(mostrarHora);
  }
  
  function revisar(i) {
    if (i < 10) {i = "0" + i};  // añade cero a los números menores a 10
    return i;
  }

document.getElementById("redes").onclick = function masredes() {
  document.getElementById("masWebs").innerHTML = "Facebook: WalterBentt"
}

document.getElementById("masdirec").onclick = function otraDireccion() {
  document.getElementById("vaca").innerHTML = "Residencia vacacional: 954 Rovery Klarg"
}