// Access the form on hero.html
const form = document.forms['hero'];

// Listen for when the button is clicked and call makeHero()
form.addEventListener('submit', makeHero, false)

function makeHero(event){
    // Prevent form from being submitted
    event.preventDefault();

    // Create hero object
    const hero = {};

    // Add a name property from user input
    hero.name = form.heroName.value;
    // Add a hero name property from user input
    hero.realName = form.realName.value;
    // Add the age from user input
    hero.age = form.age.value;
    // Add selected powers by reiterating through the array of checkbox options for each selected one
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    // Add selected radio button, there should only be one
    hero.category = form.category.value;
    // Add selected location from the drop down box
    hero.city = form.city.value;
    // Add origin story from textarea
    hero.origin = form.origin.value;

    // Change hero object into a string and alert the user with its text
    alert(JSON.stringify(hero));

    // Return the hero object
    return hero;
}