const loadQuote=()=>{
  fetch('https://api.kanye.rest/')
  .then(res=>res.json())
  .then(data=>displayQuote(data))
}

const displayQuote=(data)=>{
  console.log(data);
  const quoteContainer=document.getElementById('quote');
  quoteContainer.innerHTML=`"${data.quote}"`;
}

loadQuote();