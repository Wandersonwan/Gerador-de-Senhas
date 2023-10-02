//passo 1==> Pegar quantos caracteres o User quer pegar
const inputSlider = document.getElementById("slider");
const btnGerador = document.getElementById("button-cta");
const valueCaracteres = document.getElementById("valor");
const password = document.getElementById("password");
const containerPassword = document.getElementById("container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novaSenha = ""


valueCaracteres.innerHTML = inputSlider.value

inputSlider.oninput = function () {
    valueCaracteres.innerHTML = this.value;
}

function generatePassword() {
    let pass = ""

    for (let i = 0, n = charset.length; i < inputSlider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hider")
    password.innerHTML = pass;
    novaSenha = pass;



}
function copyPassword() {
    const senhaCopiada = navigator.clipboard.writeText(novaSenha)

}

