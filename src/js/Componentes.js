/*const pessoas = [
    {
        nome: "Marcelo",
        idade: 22,
        sexo: "M"
    },
    {
        nome: "Silvio Santos",
        idade: 82,
        sexo: "M"
    },
    {
        nome: "Evi",
        idade: 19,
        sexo: "F"
    },
    {
        nome: "Mah",
        idade: 24,
        sexo: "F"
    },
    {
        nome: "Ratão",
        idade: 19,
        sexo: "Eu gosto"
    }
]*/
const pessoas = []

function adicionarElemento() {
    //Pegando valores dos inputs
    const inputName = document.querySelector("input[name='name']").value
    const inputIdade = document.querySelector("input[name='idade']").value
    const inputSexo = document.querySelector("input[name='sexo']").value.toUpperCase()
    const container = document.querySelector(".container")
    //creando elementos
    const elementos = document.createElement('div')
    const name = document.createElement('p')
    const idade = document.createElement('p')
    const sexo = document.createElement('p')
    //CRIANDO OBJETOS E ADICIONANDO VALORES DO INPUTS
    const inserirPessoas = {nome: inputName, idade: inputIdade, sexo: inputSexo}
    //ADC OBJETO NO ARRAY
    pessoas.push(inserirPessoas)
    //LIMPANDO O ARRAY PARA N TER DUBLICAÇÃO DE OBJETO
    elementos.innerHTML = ""

    //PERCORRENDO ARRAY E DEVOLVENDO DADOS EM UMA UI
    pessoas.map((pessoa) => {
        elementos.classList.add('elementos')
        name.innerText = `nome: ${pessoa.nome}`
        idade.innerText = `idade: ${pessoa.idade} anos`
        sexo.innerText = `sexo: ${pessoa.sexo}`
    
        elementos.appendChild(name)
        elementos.appendChild(idade)
        elementos.appendChild(sexo)
        container.appendChild(elementos)
        
    
    })
    
}


