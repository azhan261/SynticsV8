//getting API for showing all the data
import axios from 'axios';
//export const getRegistrations = () => fetch("https://syntics.co/students").then(res => res.json())
export const getRegistrations = id => (
	console.log(id),
	axios.post(`https://syntics.co/students`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createRegistrations= (todo) => fetch("https://syntics.co/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateRegistration = (todo, id) => fetch(`https://syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getRegistration = (id) => fetch(`https://syntics.co/students${id}`).then(res => res.json())
export const getRegistration = id => (
	console.log(id),
	axios.post(`https://syntics.co/students${id}`)
		.then(res => res.data, )
)