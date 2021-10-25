import getData from "./app.js";

getData(10)
    .then((data) => console.log(data))
    .catch((e) => console.log("Error: " + e.message));
