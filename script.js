let operasi = "";
let angkaPertama = 0;
let angkaKedua = 0;
const input = document.getElementById("input-nilai");
const tombol = document.getElementsByClassName("tombol");
const reset = document.getElementById("reset");

for (let i = 0; i < tombol.length; i++) {
    tombol[i].addEventListener("click", function () {
        if (
            tombol[i].innerText === "+" ||
            tombol[i].innerText === "-" ||
            tombol[i].innerText === "x" ||
            tombol[i].innerText === "/" 
        ) {
            operasi = tombol[i].innerText;
            angkaPertama = input.value;
            input.value = 0;
        } else if (tombol[i].innerText === "=") {
            angkaKedua = input.value;
            if (operasi === "+") 
                input.value = parseInt(angkaPertama) + parseInt(angkaKedua);
            if (operasi === "-") 
                input.value = parseInt(angkaPertama) - parseInt(angkaKedua);
            if (operasi === "x") 
                input.value = parseInt(angkaPertama) * parseInt(angkaKedua);
            if (operasi === "/") 
                input.value = parseInt(angkaPertama) / parseInt(angkaKedua);
        } else {
            const currentValue = parseInt(input.value);
            if (currentValue === 0) {
                input.value = tombol[i].innerText;
            } else {
                input.value = currentValue + tombol[i].innerText;
            }
        } 
    });
}

reset.addEventListener("click", function () {
    operasi = "";
    angkaPertama = 0;
    angkaKedua = 0;
    input.value = 0;
    
})