const todos = [
    {text:"Read", completed: false}, 
    {text: "Take a bath", completed: true}, 
    {text: "Make the bed", completed: false}, 
    {text: "Study JavaScript", completed: true}, 
    {text: "Take katas", completed: true}]

// Remove all p tags that have "the" in the text.

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function (paragraph) {
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
