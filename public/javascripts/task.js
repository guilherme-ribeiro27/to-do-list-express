async function setTagAsDone (element, id){
    event.preventDefault();
    try {
        let headers = new Headers({ 'Content-type': 'application/json'})
        let body = JSON.stringify({task: { done: element.checked }}) //montando um body manualmente igual o navegador faz
        let response = await fetch(`/tasks/${id}?_method=put`,{headers: headers, body: body, method: 'PUT'}) //passando esse body para a requisição
        //fetch é a função que vai chamar o backend via requisição
        let data = await response.json()
        let task = data.task
        console.log(element)
        let parent = element.parentNode
        if(task.done){
            element.checked = true
            parent.classList.add('has-text-sucess')
            parent.classList.add('is-italic')
        }else{
            element.checked = false
            parent.classList.remove('has-text-sucess')
            parent.classList.remove('is-italic')
        }
    } catch (error) {
        console.log(error)
        alert('Erro ao atualizar a tarefa')
    }
}