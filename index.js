//////////////////////////////////
const Dish = [
  {
    name: "dorowet",
    preptime: "2-3 hours",
    meals: "3-4 ppl",
    img: './images/DoroWet.jpg',
    intro: "Doro Wot is a spicy stew made with chicken, berbere and niter kibbeh.",
    ingredients: ["2-3 kilo finely chopped onions", "oil-butter-salt", "skinned and cleaned whole chicken", "pepper", "5 minced garlic", "4-5 boiled eggs"],
    instruction: [" In a pan heat the onions till its water runs out, stir constantly",
                  "Add oil and heat till it caramelizes",
                  "Add pepper and keep stirring while adding a little bit of water",
                  "Add butter and let it boil",
                  "Add the chicken",
                  "Let boil while seldom stirring",
                  "Add butter and let boil", "add the garlic",
                  "Add the eggs",
                  "Serve with ingera and ayb"],
    category: ["all"]
  },
  {
    name: "gomen",
    preptime: "30 min",
    meals: "2-3 ppl",
    img: './images/Gomen.jpg',
    intro: "Gomen is a traditional dish made with collard greens",
    ingredients: ["2 cubely sliced onions", "Oil, minced garlic, salt", "Gomen(collard greens)", "sliced chili"],
    instruction: ["heat the oil and the onion for a few minutes", "add the gomen and heat while stirring", "add a cup of water", "add the garlic and salt", "add chili", "serve with injera"],
    category: ["all", "vegan"]
  },
  {
    name: "shiro",
    preptime: "40 min",
    meals: "3-4 ppl",
    img: './images/Shiro.jpg',
    intro: "chickpea stew made with spices.",
    ingredients: ["1 finely sliced onions", "Oil, minced garlic, salt", "1 cup shiro(chicken pea powder)", "chili", "butter(optional)"],
    instruction: ["heat the oil and the onion for a few minutes", "add 0.7L water and heat", "add the cup of shiro and stir", "heat for 20 minutes", "add the garlic and salt", "serve with injera"],
    category: ["all", "vegan"]
  },
  {
    name: "Chechebsa",
    preptime: "20 min",
    meals: "2 ppl",
    img: './images/chechebsa1.jpg',
    intro: "This dish is made with a flatbread known as Kita, Kibbeh and Berbere.",
    ingredients: ["2-3 tortilas(kita)", "3 tbsp niter kibbeh (Ethiopian clarified butter)(alt: oil)", "2 tbsp berbere(pepper)", "1 tsp salt"],
    instruction: ["shred the tortilas into small pieces using your hands onto a plate.", "Put niter kibbeh and berbere onto a frying pan and set the heat to medium", "Then let the mix heat for about a minute.", "Add the pieces of Kita you set aside on the mix and mix them all together", "Take the mix out of the frying pan and place it on a plate to serve.","add honey on top of it(optional)"],
    category: ["all", "vegan"]
  },
  {
    name: "Genfo",
    preptime: "1 hour",
    meals: "3-4 ppl",
    img: './images/Genfo.jpg',
    intro: "Genfo is made using wheat, barley, or maize flour.",
    ingredients: ["1 cup of wheat flour", "3 tbsp niter kibbeh (Ethiopian clarified butter)", "1 tbsp berbere(pepper)", "yoghurt"],
    instruction: ["Boil 2 cups of water and add the flour", 
    "stir thoroghly so as to avoid any lumps from forming and until the mix moistenes well enough.", 
    "transfer the Genfo to a mid-sized bowl, and create a hole right in the middle.", 
    "Melt the Niter Kibbeh, and mix with the berbere, then pour the mix into the hole you created in the middle of the Genfo.",
     "add yoghurt(optional)",
      "serve while still hot."],
    category: ["all", "vegan"]
  },
  {
    name: "Gomen be siga",
    preptime: "1 hour",
    meals: "3-4 ppl",
    img: './images/GomenBeSiga.jpg',
    intro: "Gomen Besiga is a variation of Gomen but includes meat.",
    ingredients: ["1/2 kg beef", "2 cubely sliced onions", "Oil, minced garlic, salt", "Gomen(collard greens)", "butter", "chili"],
    instruction: ["heat the beef till it turns brown", "add the oil and the onion and heat for a few minutes", "add the gomen and heat while stirring", "add a cup of water", "add the garlic, butter and salt", "serve with injera"],
    category: ["all"]
  },
  {
    name: "kitfo",
    preptime: "30 min",
    meals: "3-4 ppl",
    img: './images/Kitfo.jpg',
    intro: "Kitfo is a spicy minced beef dish made with Niter Kibbeh",
    ingredients: ["1/2 kg beef, freshly grounded (without fat)", "¼ cup niter kibbeh (Ethiopian clarified butter)", "1 tsp salt", "1 tsp mitmita(chili powder)"],
    instruction: ["Begin by thoroughly mixing the ground beef with the mitmita, and some salt; then top it all off with the niter kibbeh.", 
    "Then add the mix onto a pan or skillet and heat until the meat is cooked as your liking.",
    "serve hot with injera"],
    category: ["all", "vegan"]
  },
  {
    name: "kik alcha",
    preptime: "1 hour",
    meals: "3-4 ppl",
    img: './images/KikAlcha.jpg',
    intro: "Kik alicha is a dish made with yellow split peas and turmeric.",
    ingredients: ["1/4 kg kik(yellow split peas)",
     "1 finely grated onion", 
     "Oil, minced garlic, salt", 
     "1 teaspoon ground turmeric", 
     "chili"],
    instruction: ["Soak the yellow split peas in plenty of cold water for 1 hour", 
    "Drain them.", 
    "Boil three times the volume of split peas in water.", 
    "As soon as the water comes to a boil, add the drained split peas", 
    "Add the onion and cook, covered, for 45 minutes, or until the split peas are tender, stirring occasionally.", 
  "Season with salt, mix, and cook for 1 minute.", 
  "Add the garlic, ginger and turmeric and cook for another 10 minutes.", 
  "Add the niter kibbeh and the peppers. Mix well so that the aromas diffuse in the split peas.", 
  "Serve hot with injera."],
    category: ["all"]
  },
  {
    name: "Tibs",
    preptime: "1 hour",
    meals: "3-4 ppl",
    img: './images/Tibs.jpg',
    intro: "tibs is a dish of sautéed meat with vegetables, flavored with spice.",
    ingredients: ["1/2 kg beef sirloin (or merlan), trimmed and cut into 1 inch / 2.5 cm cubes", "3 cubely sliced onions", "butter(alt: Oil), salt", "chili", "tomatoes(optional)"],
    instruction: ["heat the oil(butter) and the onion for a few minutes", 
    "Add the beef in a single layer, leaving some free space between each piece.", 
    "Cook the beef pieces without moving for about 3 minutes, or until they are seared on one side.", 
    "Continue to cook the meat, stirring and turning the pieces occasionally until the desired sear is reached.",
    "add the chili and salt", 
    "serve with injera"],
    category: ["all"]
  }
];


  //////////////////////////////////////////////////////////////////////
  let card = document.querySelector(".card");
  let cardContainer = document.querySelector(".card-container");
  //et recipeContainer = document.querySelector(".recipes-container");
  
let modalContainer = document.querySelector(".modal-container");
let modalSection = document.querySelector(".modal-section");


  function  createRecipeCard(dish, index){
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index; 
    let img = document.createElement("img");
    img.src = dish.img;
    let headline = document.createElement("h3");
    headline.textContent = dish.name;
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");
    let prepTime = document.createElement("p");
    prepTime.textContent = `prep time: ${dish.preptime}`;
    let meals = document.createElement("p");
    meals.textContent = `meals: ${dish.meals}`;
    let discription  = document.createElement("p");
    discription.classList.add("discription");
    discription.textContent = dish.intro;
    let readBtn = document.createElement("button");
    readBtn.textContent = "read recipe"
    readBtn.classList.add("readrc-btn");
    infoDiv.appendChild(prepTime);
    infoDiv.appendChild(meals);
    card.appendChild(img);
    card.appendChild(headline);
    card.appendChild(infoDiv);
    card.appendChild(discription);
    card.appendChild(readBtn);
    cardContainer.append(card);
  }

Dish.forEach((dish, index) =>{
  createRecipeCard(dish, index);
})
let search = document.querySelector(".search-section button");
let input = document.querySelector(".search-value");
let hero = document.querySelector(".hero-section");


search.addEventListener("click", () => {
  searchRecipes();
});
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchRecipes();
  }
});



function searchRecipes() {
  cardContainer.innerHTML = "";
  hero.classList.add("active");
  let searchTerm = input.value.toLowerCase();
  if (searchTerm.trim() === "") {
    cardContainer.innerHTML = "Please enter a search term.";
    return; // Exit the function early if no search term is provided
  }
  let foundDishes = Dish.filter(dish => dish.name.includes(searchTerm));
  if (foundDishes.length !== 0) {
    foundDishes.forEach((dish, index) => {
      createRecipeCard(dish, Dish.indexOf(dish));
    });
  } else {
    cardContainer.innerHTML = `No result found for "${searchTerm}"`;
  }
  input.value = "";
}




cardContainer.addEventListener("click", function(event) {
  if (event.target.classList.contains("readrc-btn")) {
    let card = event.target.closest(".card");
    if (card) {

      let index = card.dataset.index;
    
      modalSection.style.display = "block";
      displayRecipe(Dish[index]);
    }
  }
});


function displayRecipe(dish){
  if (dish && dish.img) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    let closeBtn  = document.createElement("span");
    closeBtn.classList.add("closeBtn");
    closeBtn.textContent = "X";
    let img = document.createElement("img");
    img.src = dish.img;
    let headline = document.createElement("h3");
    headline.textContent = dish.name;
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");
    let prepTime = document.createElement("p");
    prepTime.textContent = `prep time: ${dish.preptime}`;
    let meals = document.createElement("p");
    meals.textContent = `meals: ${dish.meals}`;
    let headlineIng = document.createElement("h4");
    headlineIng.textContent = "INGREDIENTS";
    let ingredientsList  = document.createElement("ul"); // Create <ul> for ingredients
    dish.ingredients.forEach(ingredient => { // Iterate over each ingredient
      let ingredientItem = document.createElement("li"); // Create <li> for ingredient
      ingredientItem.textContent = ingredient; // Set text content to ingredient
      ingredientsList.appendChild(ingredientItem); // Append <li> to <ul>
    });
    let headlineIns = document.createElement("h4");
    headlineIns.textContent = "INSTRUCTION";
    let instructionList  = document.createElement("ul"); // Create <ul> for instruction
    dish.instruction.forEach(step => { // Iterate over each step of instruction
      let stepItem = document.createElement("li"); // Create <li> for step
      stepItem.textContent = step; // Set text content to step
      instructionList.appendChild(stepItem); // Append <li> to <ul>
    });
    infoDiv.appendChild(prepTime);
    infoDiv.appendChild(meals);
     modal.appendChild(closeBtn);
    modal.appendChild(img);
    modal.appendChild(headline);
    modal.appendChild(infoDiv);
    modal.appendChild(headlineIng);
    modal.appendChild(ingredientsList); // Append <ul> for ingredients
    modal.appendChild(headlineIns);
    modal.appendChild(instructionList); // Append <ul> for instruction
    modalContainer.append(modal);
  } else {
    console.error("Invalid dish object:", dish);
  }
}


// Event listener for the close button
modalSection.addEventListener("click", function(event) {
  if (event.target.classList.contains("closeBtn")) {
    // Remove the modal from the DOM
    modalSection.style.display = "none";
    modalContainer.innerHTML = ""; // Clear the modal content
  }
});
