import axios from 'axios';

export const getOneFile = filename => (
	console.log(filename),
	axios.post(`https://syntics.co/api/findOne/files/${filename}`)
		.then(res => res.data, )
)
/*
  axios({
	method: "POST",
	url: "/api/test/stream/90b7d1d5ed550882284dcf6f62774963.zip",
	responseType: "blob"
  })
	.then(res => res.data,)
/*
fetch('flowers.jpg').then(function(response) {
	return response.blob();
  }).then(function(myBlob) {
	var objectURL = URL.createObjectURL(myBlob);
	myImage.src = objectURL;
  });
  */