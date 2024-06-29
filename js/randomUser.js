const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = (user) => {
    console.log(user);
    const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    const users = document.getElementById('user-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${user.results[0].picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Name : ${name}</h5>
        <p class="card-text">Gender : ${user.results[0].gender}</p>
        <p class="card-text">Country : ${user.results[0].location.country} , City : ${user.results[0].location.city}</p>
        <p class="card-text">Email : ${user.results[0].email}</p>
        <p class="card-text">Phone : ${user.results[0].phone}</p>
        <a onclick="loadUser()" class="btn btn-primary">See Another</a>
        </div>
    </div>
    `;
    users.appendChild(div);
}
loadUser();