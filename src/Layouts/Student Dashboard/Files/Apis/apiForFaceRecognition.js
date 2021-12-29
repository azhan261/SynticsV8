//getting API for showing all the data
import axios from 'axios';

export const getFaceRecognitions = () => fetch("https://syntics.co/face-recognition").then(res => res.json())

//getting API for inserting the data
export const createFaceRecognitions = (todo) => fetch("https://syntics.co/face-recognition/create", {

  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data

export const updateFaceRecognition = (todo, id) => fetch(`https://syntics.co/face-recognition/${id}`, {

  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data

export const deleteFaceRecognition = (todo, id) => fetch(`https://syntics.co/face-recognition/${id}`, {

  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for getting specific data
export const getFaceRecognition = (id) => fetch(`https://syntics.co/${id}`).then(res => res.json())