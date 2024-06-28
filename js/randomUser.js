const loadUser=()=>{
  fetch('https://randomuser.me/api/?gender=female')
  .then(res=>res.json())
  .then(data=>displayUser(data))
}

const displayUser=(data)=>{
  console.log(data.results[0]);
  const userContainer=document.getElementById('user-container');
  const div=document.createElement('div');
  div.classList.add('m-2');
  div.innerHTML=`
  <div class="card" style="width: 18rem;">
        <img src="${data.results[0].picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h6>Name : ${data.results[0].name.first +' '+data.results[0].name.last}</h6>
          <p class="card-text">Gender : ${data.results[0].gender}</p>
          <p class="card-text">Email : ${data.results[0].email}</p>
          <p class="card-text">Country : ${data.results[0].location.country}, City : ${data.results[0].location.city}</p>
        </div>
      </div>
  `
  userContainer.appendChild(div);
}
loadUser();