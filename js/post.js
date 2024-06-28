console.log('Post');
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>loadPosts(data))

function loadPosts(data){
  const postContainer=document.getElementById('post-container');
  for(let post of data){
    console.log(post)
    const postDiv=document.createElement('div');
    postDiv.classList.add('m-2');
    postDiv.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">User Id : ${post.userId}</h6>
          
          <h6>Id : ${post.id}</h6>
          <p class="card-text">${post.body}</p>
        </div>
      </div>`;
      postContainer.appendChild(postDiv);
  }
}