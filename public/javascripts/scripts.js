const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')


let minhaListaDeItens = []


function adicionarNovaTarefa(){
    minhaListaDeItens.push(input.value)

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){

    let novaLi = ''

    minhaListaDeItens.forEach(( tarefa, posicao) => {
        novaLi = novaLi +`
        <li class="task">
           <img src="./images/checked.png" alt="check-na-tarefa">
           <p>${tarefa}</p>
           <img src="./images/trash.png" alt="tarefa-para-o-lixo" onclick="apagarItem(${posicao})">
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi

}

function apagarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    

    mostrarTarefas()
}


button.addEventListener('click', adicionarNovaTarefa)