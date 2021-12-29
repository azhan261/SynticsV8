//getting API for showing all the data
export const getTestimonials = () => fetch("http://localhost:3001/testimonials").then(res => res.json())

//getting API for inserting the data
export const createTestimonials = (todo) => fetch("http://localhost:3001/testimonials/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTestimonials = (todo, id) => fetch(`http://localhost:3001/testimonials/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getTestimonial = (id) => fetch(`http://localhost:3001/testimonials/${id}`).then(res => res.json())