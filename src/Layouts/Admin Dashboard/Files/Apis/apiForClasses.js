//getting API for showing all the data
export const getClasses = () => fetch("http://localhost:3001/classes").then(res => res.json())

//getting API for inserting the data
export const createClasses = (todo) => fetch("http://localhost:3001/classes/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateClass = (todo, id) => fetch(`http://localhost:3001/classes/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getClass = (id) => fetch(`http://localhost:3001/classes/${id}`).then(res => res.json())