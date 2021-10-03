// // Create an object
// const spiderman = {
//     name: 'Peter Parker',
//     suitColor: 'Red',
//     catchPhrase(){
//         alert('My spidey senses are tingiling!');
//     }
// };

// // Access an object's property with .property or ['property']
// alert(spiderman.name);

// // Concatenation uses ['']
// alert('What color was spidermans suite again? Oh right! Its ' + spiderman['suitColor'] + '!')

// // Can call a function inside of an object
// spiderman.catchPhrase();

// // Check to see if parameter exists
// alert('villain' in spiderman);

// Chapter 14 Exercise

// Grab the cat image
let cat = document.querySelector("#cat");
let witchHat = document.querySelector("#witchHat")
// Create a variable called angle that is set to pi / 2 (1.5707....)
let angle = Math.PI / 2;

// Create a function called animate which accepts a time and lastTime
function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }

    // In the css the imgs are set to position relative which lets us move it using top and left

    // Determines the height of the eclipse the cat and hat follows
    cat.style.top = (Math.sin(angle) * 40) + "px";
    witchHat.style.top =(Math.sin(angle) * 40) + "px";
    // Determines the width of the eclipse the cat follows
    cat.style.left = (Math.cos(angle) * 200) + "px";
    witchHat.style.left = (Math.cos(angle) * 200) + "px";
    // Consistantly updates the page so that the animations plays at around 60fps
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);