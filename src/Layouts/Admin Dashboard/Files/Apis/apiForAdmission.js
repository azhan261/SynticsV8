//getting API for showing all the data
export const getAdmissions = () => fetch("http://localhost:3001/admissions").then(res => res.json())

//getting API for inserting the data
export const createAdmissions = (todo) => fetch("http://localhost:3001/admissions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAdmissions = (todo, id) => fetch(`http://localhost:3001/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAdmission = (id) => fetch(`http://localhost:3001/admissions${id}`).then(res => res.json())