let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
//console.log(arrayOfTodos[0].userId) // => 14
//console.log(arrayOfTodos[1].userId) // => 20

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}
const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for (i = 0; arrayOfTodos.length; i++) {
        let todoList = document.getElementById('todo-list');
        let todoTitle = "";

        todoTitle = document.createTextNode(arrayOfTodos[i].title)

        todoItems = document.createElement('LI');

        todoItems.appendChild(todoTitle);

        todoList.appendChild(todoItems);
    }
}