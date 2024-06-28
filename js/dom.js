// function applyBg(){
//   const btn=document.getElementById('bg');
//   btn.style.background='red';
// }
document.getElementById('apply-bg').addEventListener('click', function(){
  const friends=document.getElementsByClassName('friend');
  for(const friend of friends){
    friend.style.backgroundColor='yellowgreen';
  }
})

document.getElementById('add-friend').addEventListener('click', function(){
  const container=document.getElementById('friends');
  const friend=document.createElement('div');
  friend.className='friend';
  friend.innerHTML=`<h4>New Friend</h4>
  <p>Doloribus repellendus animi reiciendis distinctio.</p>`;
  container.appendChild(friend);
})