//getting API for showing all the data
export const getPlacements = () => fetch("http://localhost:3001/placements").then(res => res.json())

//getting API for inserting the data
export const createPlacements = (todo) => fetch("http://localhost:3001/placements/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePlacements = (todo, id) => fetch(`http://localhost:3001/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getPlacement = (id) => fetch(`http://localhost:3001/placements${id}`).then(res => res.json())