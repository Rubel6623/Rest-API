function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>displayUser(data))
}

function displayUser(data){
  const ul=document.getElementById('users-list');
  for(let user of data){
    console.log(user.name);
    const li=document.createElement('li');
    li.innerHTML=`<h4>User Name : ${user.name}</h4>`;
    ul.appendChild(li);
  }
}