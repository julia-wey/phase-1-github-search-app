
document.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted')
    const search = document.getElementById("search").value
    
    fetch("https://api.github.com/users/"+search)
        .then((response) => response.json())
        .then((data) => {console.log(data)})
    })
        .catch((error) => {
        console.error("Error:", error);
    })
    