const todos = [
  {text:"Read", completed: false}, 
  {text: "Take a bath", completed: true}, 
  {text: "Make the bed", completed: false}, 
  {text: "Study JavaScript", completed: true}, 
  {text: "Take katas", completed: true}]

// To Remove a property.
const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex ( function (todo) {
  return todo.text.toLowerCase() === todoText.toLowerCase()
})
  if (index > -1) {
    todos.splice(index, 1)
  }
}

//deleteTodo(todos, "Make the bed")
console.log(todos)

// Method filter. Filter the todos not completed

const getThingsToDo = function (todos) {
    return todos.filter( function (todo) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))

// Method SORT. Sort by properties.
const sortTodos = function (todos) {
  todos.sort ( function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos)
console.log(todos)