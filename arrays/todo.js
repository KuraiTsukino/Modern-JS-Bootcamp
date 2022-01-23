const todos = [
  {text:"Read", completed: false}, 
  {text: "Take a bath", completed: true}, 
  {text: "Make the bed", completed: false}, 
  {text: "Study JavaScript", completed: true}, 
  {text: "Take katas", completed: true}]

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex ( function (todo) {
  return todo.text.toLowerCase() === todoText.toLowerCase()
})
  if (index > -1) {
    todos.splice(index, 1)
  }
}
deleteTodo(todos, "!!Make the bed")
console.log(todos)