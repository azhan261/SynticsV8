import axios from 'axios';

//export const getTodosForTeacher = () => fetch("https://syntics.co/").then(res => res.json())
export const getTodosForTeacher = id => (
	console.log(id),
	axios.post(`https://syntics.co/`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createTodoForTeachers = (todo) => fetch("https://syntics.co/teachers/create", {

  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`https://syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getTeacher = (id) => fetch(`https://syntics.co/teachers/specific/${id}`).then(res => res.json())
export const getTeacher = id => (
	console.log(id),
	axios.post(`https://syntics.co/teachers/specific/${id}`)
		.then(res => res.data, )
)