
async function getToDos(){
    
    //GET Request
    const res = await fetch('/.netlify/functions/todos')
    console.log(res)
              
    const data = await res.json()
    console.log( data.todos)
     
    
}

getToDos()