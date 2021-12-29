//getting API for showing all the data
import axios from 'axios';
//export const getCourseContents = () => fetch("https://syntics.co/coursePlannings").then(res => res.json())
export const getCourseContents = id => (
	console.log(id),
	axios.post(`https://syntics.co/coursePlannings`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createCourseContents = (todo) => fetch("https://syntics.co/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCourseContents = (todo, id) => fetch(`https://syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for deleting specific data
export const deleteCourseContent = (todo, id) => fetch(`https://syntics.co/coursePlannings/delete/${id}`).then(res => res.json())


//getting API for getting specific data
//export const getCourseContent = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())
export const getCourseContent = id => (
	console.log(id),
	axios.post(`https://syntics.co/${id}`)
		.then(res => res.data, )
)