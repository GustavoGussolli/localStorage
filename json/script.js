const input = document.querySelector('input');
const botao = document.querySelector('button');
const lista = document.querySelector('ul');

botao.addEventListener('click',()=>{

    let tarefa = input.value;

    if (tarefa != ''){
        addList(tarefa);
        salvarNoLocalStorage(tarefa);
    }
    input.value = '';

});

function addList(tarefa){

    let novaTarefa = document.createElement('li');
    novaTarefa.textContent = tarefa;

    let excluir = document.createElement('button');
    excluir.textContent = 'excluir';

    excluir.addEventListener('click', ()=> {

        novaTarefa.remove()

    })

    novaTarefa.appendChild(excluir);

    lista.appendChild(novaTarefa);

}

function salvarNoLocalStorage(tarefa){

    const tarefas = obterTodasTarefas();

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

}

function obterTodasTarefas(){

    const tarefas = localStorage.getItem('tarefa')

    return tarefas ? JSON.parse(tarefas) : [];

}