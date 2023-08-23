
const  {createApp , ref , computed}= Vue
  createApp ({
    setup() {
      let id = 1
      
      const liste = ref(
        []
      )
      const todoItem =ref({
        'id':id,'description':'','done':false
      }) 
      

       const  completedTasks = computed(() => {
        return liste.value.filter(task => task.done == true)
        })

       const unCompletedTasks = computed(() => {
        return liste.value.filter(task => task.done == false)
        })
      
       
      function emptyData() {
        liste.value=[]
        location.reload()
      }  
      function emptyTodoItem() {
        todoItem.value = {
          'id': id++, 'description': '', 'done': false
        }
      }


      function addTodo(){
      liste.value.push(todoItem.value)
      emptyTodoItem()
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
        todoItem.id = id--
        
      }
      function preupdate(update) {
        todoItem.value=update
      }
      function updateTodo() {
        liste.value = liste.value.update (todo => todo.id != todoItem.value.id)
					liste.value.push(todoItem.value)
          emptyTodoItem()
          liste.value = liste.value.sort((a,b) => a.id - b.id )
      }


      function returnToTodo() {
        todoItem.value =  {
          'id' : id , 'description' : '' , 'done' : false
        }
        
      }

       

      return {
        liste, todoItem , completedTasks , unCompletedTasks ,  addTodo , returnToTodo , deleteTodo , predeleteTodo , preupdate , updateTodo , emptyData , showTodo , emptyTodoItem ,  
      }
    }
  }).mount("#app")