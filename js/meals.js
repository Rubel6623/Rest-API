const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = (meals) => {
  const mealsContainer = document.getElementById('meals-container');
  mealsContainer.innerHTML = '';
  meals.forEach(meal => {
    console.log(meal);
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
    <div class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <!-- Button trigger modal -->
          <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">Details</button>
      </div>
    </div>
        `;
    mealsContainer.appendChild(mealDiv);

  })
}

const searchMeals = () => {
  const searchText = document.getElementById('search-field').value;
  console.log(searchText);
  loadMeals(searchText);
}

const loadMealDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${idMeal}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
}

const loadMealDetails2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${idMeal}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
  }
  catch(error){
    console.log(error);
  }
}

const displayMealDetails = (meal) => {
  console.log(meal)
  document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
  const mealDetails = document.getElementById('mealDetailsBody');
  mealDetails.innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}">
  <h5 class="card-title">${meal.strMeal}</h5>
  <h6>Category : ${meal.strCategory} . ${meal.strTags ? meal.strTags : ''}</h6>
  <h6>Area : ${meal.strArea}</h6>
  <p><span class="fw-bolder">Ingredient</span> : ${meal.strIngredient1},${meal.strIngredient2},${meal.strIngredient3},${meal.strIngredient4},${meal.strIngredient5},${meal.strIngredient6},${meal.strIngredient7},${meal.strIngredient8},${meal.strIngredient9},${meal.strIngredient10},${meal.strIngredient11},${meal.strIngredient12}</p>
  <p><span class="fw-bolder">Instructions</span> : ${meal.strInstructions}</p>
  `
}

loadMeals('chicken');