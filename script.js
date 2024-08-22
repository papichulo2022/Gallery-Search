const accessKey = "zs9tOHh9NQ1_FIZEASrtqJ6HShHPS9GtHmHzz1JqLK0";

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');



let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1 ){
        searchResult.innerHTML = "";
    }
    
    const results = data.results;
    results.map((result) => {
        // Create the outermost div
        const imageDiv = document.createElement("div");
        imageDiv.className = "relative group";
    
        // Create the image element
        const image = document.createElement("img");
        image.src = result.urls.small; // Use the small image URL from the API
        image.alt = result.alt_description || "Image"; // Use alt description from the API or a default text
        image.className = "w-80 h-40 object-cover rounded-md"; // Adjust the class as needed
    
        // Create the overlay div for hover effects
        const overlayDiv = document.createElement("div");
        overlayDiv.className = "absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40";
    
        // Create the inner content div
        const contentDiv = document.createElement("div");
        contentDiv.className = "flex justify-between w-full";
    
        // Create the text div
        const textDiv = document.createElement("div");
        textDiv.className = "font-normal";
    
        // Create the description paragraph
        const descriptionP = document.createElement("p");
        descriptionP.className = "text-sm";
        descriptionP.textContent = result.alt_description || "Abstract Painting"; // Use alt description or a default text
    
        // Create the stats paragraph
        const statsP = document.createElement("p");
        statsP.className = "text-xs";
        statsP.textContent = `@${result.user.username} - ${result.likes || 245} likes`; // Use likes and shares from the API or defaults
    
        // Create the bookmark div
        const bookmarkDiv = document.createElement("div");
        bookmarkDiv.className = "flex items-center";
    
        // Create the bookmark image
        const bookmarkImg = document.createElement("img");
        bookmarkImg.src = "images/bookmark.svg";
        bookmarkImg.alt = "bookmark";
    
        // Assemble the elements
        bookmarkDiv.appendChild(bookmarkImg);
        textDiv.appendChild(descriptionP);
        textDiv.appendChild(statsP);
        contentDiv.appendChild(textDiv);
        contentDiv.appendChild(bookmarkDiv);
        overlayDiv.appendChild(contentDiv);
        imageDiv.appendChild(image);
        imageDiv.appendChild(overlayDiv);
    
        // Append the complete image div to the container
        searchResult.appendChild(imageDiv);
    })
    showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();

});

showMoreBtn.addEventListener("click", ()=> {
    page++
    searchImages();
});





/*const accessKey = "zs9tOHh9NQ1_FIZEASrtqJ6HShHPS9GtHmHzz1JqLK0";

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');



let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1 ){
        searchResult.innerHTML = "";
    }
    
    const results = data.results;
    results.map((result) => {

     // Create the outermost div
     const imageDiv = document.createElement('div');
     imageDiv.className = 'relative group';

     // Create the image element
     const img = document.createElement('img');
     img.src = result.urls.small;
     img.alt = result.alt_description;
     img.className = 'w-72';

     // Create the overlay div
     const overlayDiv = document.createElement('div');
     overlayDiv.className = 'absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40';

     // Create the inner content div
     const contentDiv = document.createElement('div');
     contentDiv.className = 'flex justify-between w-full';

     // Create the text div
     const textDiv = document.createElement('div');
     textDiv.className = 'font-normal';

     // Create the description paragraph
     const descriptionP = document.createElement('p');
     descriptionP.className = 'text-sm';
     descriptionP.textContent = result.description;

     // Create the stats paragraph
     const statsP = document.createElement('p');
     statsP.className = 'text-xs';
     statsP.textContent = `@${result.user.username} likes - ${result.likes} Shares`;

     // Create the bookmark div
     const bookmarkDiv = document.createElement('div');
     bookmarkDiv.className = 'flex items-center';

     // Create the bookmark image
     const bookmarkImg = document.createElement('img');
     bookmarkImg.src = 'images/bookmark.svg';
     bookmarkImg.alt = 'bookmark';

     // Assemble the elements
     textDiv.appendChild(descriptionP);
     textDiv.appendChild(statsP);
     contentDiv.appendChild(textDiv);
     bookmarkDiv.appendChild(bookmarkImg);
     contentDiv.appendChild(bookmarkDiv);
     overlayDiv.appendChild(contentDiv);
     imageDiv.appendChild(img);
     imageDiv.appendChild(overlayDiv);

     // Append the complete image div to the container
     container.appendChild(imageDiv);
    })
    showMoreBtn.style.display = "block";
}


searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();

});

showMoreBtn.addEventListener("click", ()=> {
    page++
    searchImages();
});
*/