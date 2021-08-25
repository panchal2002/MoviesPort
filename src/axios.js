import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
    },
};

// when we will call the below 
// instance.get('/foo-bar');
//then this will give the url 
//http://api.themoviesdb.org/3/foo-bar
//so basically it will add the sufix which we want to add

// this going to be the base url for all the movies url

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    https: config,
});

export default instance;