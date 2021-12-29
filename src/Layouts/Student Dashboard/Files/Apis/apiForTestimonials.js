//getting API for showing all the data
import axios from 'axios';

export const getTestimonials = id => (
	console.log(id),
	axios.post(`https://syntics.co/testimonials`)
		.then(res => res.data, )
)

//getting API for inserting the data
export const createTestimonials = (todo) => fetch("https://syntics.co/testimonials/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateTestimonial = (todo, id) => fetch(`https://syntics.co/testimonials/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteTestimonial = (todo, id) => fetch(`https://syntics.co/testimonials/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for getting specific data
export const getTestimonial = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())