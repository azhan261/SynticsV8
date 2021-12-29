//getting API for showing all the data
import axios from 'axios';

export const getProjects = () => (
	axios.post(`https://syntics.co/projects`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createProjects = (todo) => fetch("https://syntics.co/projects/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateProject = (todo, id) => fetch(`https://syntics.co/projects/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getProject = (id) => fetch(`https://syntics.co/projects/${id}`).then(res => res.json())
export const getRegisterationprojects = id => (
	console.log(id),
	axios.post(`https://syntics.co/projects/specific/${id}`)
		.then(res => res.data, )
		
)
export const getRegisterationprojectsById = id => (
	console.log(id),
	axios.post(`https://syntics.co/projects/specific/id/${id}`)
		.then(res => res.data, )
)