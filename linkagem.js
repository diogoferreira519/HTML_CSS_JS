
const botao= document.querySelector('#botao ')
const input = document.querySelector('#caixa')
const listaTasks = document.querySelector('.lista')
let listaItens = []
botao.addEventListener('click', adicionaItens)
function adicionaItens(){
    if (input.value === '') {
        alert("Você não pode inserir uma tarefa vazia");
    } else{
    listaItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostraItens()
}
}

function mostraItens() {
    let newitem= ''

    listaItens.forEach((task, index) => {
        newitem = newitem + `
        <li class="item ${task.concluida && "done"}">
            <img src="checked.png" onclick ="concluidaTarefa(${index})" >
            <p id ="textos">${task.tarefa}</p>
            <img src="trash.png" onclick ="deletaritem(${index})">
    </li>
    `
    })
    listaTasks.innerHTML = newitem  
    localStorage.setItem('lista', JSON.stringify(listaItens))
}
function deletaritem(indice){
    listaItens.splice(indice, 1)
    mostraItens()
}

function concluidaTarefa(posicao){
    listaItens[posicao].concluida=!listaItens[posicao].concluida
    mostraItens()
    
}
function recarregarItens(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage){

        listaItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostraItens()
}
recarregarItens()



