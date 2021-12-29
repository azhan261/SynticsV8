//getting API for showing all the data
import axios from 'axios';
//export const getBookContents = () => fetch("https://syntics.co/flip-book").then(res => res.json())
export const getBookContents = id => (
	console.log(id),
	axios.post(`https://syntics.co/flip-book`)
		.then(res => res.data, )
)
export const getBookContentsResponses = () => fetch("https://syntics.co/flip-book-response").then(res => res.json())

//getting API for inserting the data
export const createBookContents = (todo) => fetch("https://syntics.co/flip-book/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createBookContentsResponses = (todo) => fetch("https://syntics.co/flip-book-response/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateBookContent = (todo, id) => fetch(`https://syntics.co/flip-book/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateBookContentResponse = (todo, id) => fetch(`https://syntics.co/flip-book-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteBookContent = (todo, id) => fetch(`https://syntics.co/flip-book/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const deleteBookContentResponse = (todo, id) => fetch(`https://syntics.co/flip-book-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getBookContent = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())
export const getBookContent = id => (
	console.log(id),
	axios.post(`https://syntics.co/${id}`)
		.then(res => res.data, )
)
export const getBookContentResponse = id => (
	console.log(id),
	axios.post(`https://syntics.co/${id}`)
		.then(res => res.data, )
)
//export const getBookContentResponse = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())