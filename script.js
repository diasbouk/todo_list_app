
const  {createApp , ref}= Vue
  createApp ({
    setup() {
      let id = 1
      
      const liste = ref(
        []
      )
      const todoItem =ref({
        'id':id,'description':'','done':false
      }) 
      function deleteList() {
        liste.value=[]
        location.reload()
      }  

      function emptyTodoItem() {
        todoItem.value = {
          'id': id++, 'description': '', 'complete': false
        }
      }


      function addTodo(){
      liste.value.push(todoItem.value)
        todoItem.value = {
        'id':id,'description':'','done':false
        }
      }

      function showTodo(todo) {
        todoItem.value = todo
      }


      function predeleteTodo(todo) {
        todoItem.value=todo
      }
      function deleteTodo() {
        liste.value = liste.value.filter(todo => todo.id !== todoItem.value.id)
        emptyTodoItem()
      }
      function preupdate(update) {
        todoItem.value=update
      }
      function updateTodo() {
        liste.value = liste.value.update (todo => todo.id != todoItem.value.id)
					todoList.value.push(todoItem.value)
          emptyTodoItem()
          todoList.value = todoList.value.sort((a,b) => a.id - b.id )
      }

      function emptyData() {
        todoList.value = []
        id = 1
      }

      function returnToTodo() {
        todoItem.value =  {
          'id' : id , 'description' : '' , 'done' : false
        }
      }
       

      return {
        liste, todoItem , addTodo , returnToTodo , deleteList , deleteTodo , predeleteTodo , preupdate , updateTodo , emptyData , showTodo , emptyTodoItem ,  
      }
    }
  }).mount("#app")