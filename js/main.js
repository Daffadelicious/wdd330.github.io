// Create function that uses links array to create table of contants
function createTableOfContents(){
    // Create an array that holds info for table of constants
    const links = [
        ["Week 01 Notes", "week1/index.html"],
        ["Week 02 Notes", "#"],
        ["Week 03 Notes", "week3/index.html"],
        ["Week 04 Notes", "#"],
        ["Week 05 Notes", "#"],
        ["Week 06 Notes", "#"],  
    ]

    // Access ol on index.html
    var toc = document.getElementById("toc");

    // Loop for every item in links
    for (const link of links){
        // Create an li and a tag
        var li = document.createElement('li');
        var a = document.createElement('a');
        
        // Add title, href, and text to a tag
        a.title = link[0];
        a.href = link[1];
        var atext = document.createTextNode(link[0]);
        a.appendChild(atext);

        // Add li to ol
        toc.appendChild(li);
        // Add a to li
        li.appendChild(a);    
    }
}

// Call TOC function
createTableOfContents();