let postsElement=document.querySelector('.posts')
fetch('https://jsonplaceholder.typicode.com/posts?_limit=100').then((response)=>{
    return response.json()
}).then((data)=>{
    data.forEach(item => {
       postsElement.innerHTML+=` 
       <div>
            <h2>${item.id} - ${item.title}</h2>
            <p>${item.body}</p>
       </div>
       `
    });
    
})