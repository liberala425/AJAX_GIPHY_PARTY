console.log("Let's get this party started!");
const removeBtn = document.getElementById("remove");
const form = document.getElementById("searchForm");
const output = document.getElementById("output");

async function getData(request) {
    
    const parameters = {
        params: 
        {
            api_key: "BOMq3PrbC3JnRJ4Cf7N5Wu1Y6ldoF4i0",
            q: request,
            limit: 1
        }
    }
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', parameters)
    const resultURL = response.data.data[0].url;
    const gif = document.createElement("img");
    gif.src = resultURL;
    
    output.append(gif);

}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const request = document.querySelector("#inputbox");
    getData(request.value);
    request.value = "";
}) 

removeBtn.addEventListener("click", function(e){
    output.innerHTML = "";
})
