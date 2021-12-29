//getting API for showing all the data
import axios from 'axios';
export const getPlacementTestQuestions = () => fetch("https://syntics.co/placementQuestions").then(res => res.json())

//getting API for inserting the data
export const createPlacementTestQuestions = (todo) => fetch("https://syntics.co/placementQuestions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePlacementTestQuestions = (todo, _id) => fetch(`https://syntics.co/${_id}`, {
// http://localhost:4000/${id}
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getPlacementTestQuestion = (_id) => fetch(`https://syntics.co/${_id}`).then(res => res.json())