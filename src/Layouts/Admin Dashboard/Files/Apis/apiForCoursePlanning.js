//getting API for showing all the data
export const getCoursePlannings = () => fetch("http://localhost:3001/coursePlanning").then(res => res.json())

//getting API for inserting the data
export const createCoursePlannings = (todo) => fetch("http://localhost:3001/coursePlanning/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCoursePlannings = (todo, id) => fetch(`http://localhost:3001/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getCoursePlanning = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())