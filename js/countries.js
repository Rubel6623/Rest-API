const loadCountries=async()=>{
    try{
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        displayCountries(data);
    }
    catch(error){
        console.log(error)
    }
}
const displayCountries=(countries)=>{
    const countriesContainer=document.getElementById('all-countries');
    // console.log(countries);
    countries.forEach(country=>{
        
        const countryDiv=document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ?country.capital[0]:'No Capital'}</p>
        <button class="btn btn-primary" onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails=(code)=>{
    const url=`https://restcountries.com/v3.1/alpha/${code}
    `
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCountryDetail(data[0]))
}

const showCountryDetail=(country)=>{
    console.log(country);
    const detailContainer=document.getElementById('country-detail');
    detailContainer.innerHTML=`
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ?country.capital[0]:'No Capital'}</p>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <a class="text-decoration-none fw-bold d-block" href="${country.maps.googleMaps}">Country Location</a>
    <img src="${country.flags.png}">

    `
}

loadCountries();
showCountryDetail();