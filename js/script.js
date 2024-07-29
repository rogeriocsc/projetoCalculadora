const resp = document.getElementById("resposta") // div resposta
const opSoma = document.querySelector("#opSoma") // div soma
const opSub = document.querySelector("#opSub") // div subtração
const opMult = document.querySelector("#opMult") // div multiplicação
const opDiv = document.querySelector("#opDiv") // div divisão
// Função Soma
const somar=()=>{
    const valorA = document.querySelector("#valA")
    const valA = Number(valorA.value) // input valA
    const valorB = document.querySelector("#valB")
    const valB = Number(valorB.value) // input valB
    const soma = (valA + valB)
    if (valA != "" && valB != "") {
        resp.innerHTML=`A Soma entre o valor ${valA} e o valor ${valB} é igual a: <strong>${soma}</strong>`
    } else {
        alert("Informe os campos!")
    }
}
// Função Subtração
const subtrair=()=>{
    const valorA = document.querySelector("#valA")
    const valA = Number(valorA.value) // input valA
    const valorB = document.querySelector("#valB")
    const valB = Number(valorB.value) // input valB
    const subtr = (valA - valB)
    if (valA != "" && valB != "") {
        resp.innerHTML=`A Subtração entre o valor ${valA} e o valor ${valB} é igual a: <strong>${subtr}</strong>`
    } else {
        alert("Informe os campos!")
    }
}
// Função Multiplicar
const multiplicar=()=>{
    const valorA = document.querySelector("#valA")
    const valA = Number(valorA.value) // input valA
    const valorB = document.querySelector("#valB")
    const valB = Number(valorB.value) // input valB
    const multp = (valA * valB)
    if (valA != "" && valB != "") {
        resp.innerHTML=`A Multiplicação entre o valor ${valA} e o valor ${valB} é igual a: <strong>${multp}</strong>`
    } else {
        alert("Informe os campos!")
    }
}
// Função Divisão
const dividir=()=>{
    const valorA = document.querySelector("#valA")
    const valA = Number(valorA.value) // input valA
    const valorB = document.querySelector("#valB")
    const valB = Number(valorB.value) // input valB
    const div = (valA / valB)
    if (valA != "" && valB != "") {
        resp.innerHTML=`A Divisão entre o valor ${valA} e o valor ${valB} é igual a: <strong>${div}</strong>`
    } else {
        alert("Informe os campos!")
    }
}
// addEventListener
opSoma.addEventListener("click",(evt)=>{
    opSoma.classList.toggle("selecionado")
    somar()
})

opSub.addEventListener("click",(evt)=>{
    opSub.classList.toggle("selecionado")
    subtrair()
})

opMult.addEventListener("click",(evt)=>{
    opMult.classList.toggle("selecionado")
    multiplicar()
})

opDiv.addEventListener("click",(evt)=>{
    opDiv.classList.toggle("selecionado")
    dividir()
})


