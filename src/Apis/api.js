//getting API for showing all the data
import axios from 'axios';
//export const getTodos = () => fetch("https://syntics.co/").then(res => res.json())

export const getTodos = id => (
	console.log(id),
	axios.post(`https://syntics.co/`)
		.then(res => res.data, )	
)

//getting API for inserting the data
export const createTodo = (todo) => fetch("https://syntics.co/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodo = (todo, id) => fetch(`https://syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getTodo = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())
export const getTodo = id => (
	console.log(id),
	axios.post(`https://syntics.co/${id}`)
		.then(res => res.data, )	
)