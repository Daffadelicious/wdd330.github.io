// This function loads a previously created story by its name
function loadStory(){
    // Get story's name from user
    var storyName = document.getElementById("name_input").value;
    // Get story from local storage if one matches the story name
    var storyHTML = localStorage.getItem(storyName);
    // Fill display with fetched story
    document.getElementById("story_editor").value = storyHTML;
}

// This function saves a story by its name
function saveStory(){
    // Get story's name from user
    var storyName = document.getElementById("name_input").value;
    // Get story's text from user
    var storyHTML = document.getElementById("story_editor").value;
    // Store name and text in local storage
    localStorage.setItem(storyName, storyHTML);
}

// This function displays a story to the screen
function displayStory(){
    // Get story's text from user
    var storyHTML = document.getElementById("story_editor").value;
    // Display story's text in display
    document.getElementById("story_display").innerHTML = storyHTML; 
}