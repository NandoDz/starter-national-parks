/*console.log(document);
const heading = document.querySelector("h1");
console.log(heading);
const test1 = document.querySelectorAll(".rating");
console.log(test1);
for(let element of test1.values()){
    console.log(element)
}
const test2 = document.querySelector(".area");
console.log(test2);
const test3 = document.querySelector(".stat div");
console.log(test3);
const test4 = document.querySelector(".park");
console.log(test4);
const descriptions = document.querySelectorAll(".description");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
  }
  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + "...";
    }
  
    console.log(content);
  } 
  const ratings = document.querySelectorAll(".rating .value")
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }



  const parks = document.querySelectorAll(".park");
  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;
  newElement.classList.add("header-statement");
  const header = document.querySelector("header");
    header.appendChild(newElement);

    const main = document.querySelector("main");
    const park = main.querySelector(".park");
    main.removeChild(park);



    const bobo = document.querySelectorAll("h2");
    console.log(bobo.length);

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", event  =>{
    console.log("You clicked the button",event);
});

firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
  });

const allBtns = document.querySelectorAll(".rateBtn");

//allBtn.forEach((btn)=> {
 //   btn.addEventListener("click", e =>{
   //     console.log(e.target);
    //});
//});

allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.parentNode);
      
    });
  });

  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      if(park.style.backgroundColor == "#c8e6c9" ){
        park.style.backgroundColor = "white";
      } 
      park.style.backgroundColor = "#c8e6c9";
      
    });
  });

const nameSorter = document.querySelector("#nameSorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);

    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if (parkAName < parkBName) {
          return -1;
        } else if (parkAName > parkBName) {
          return 1;
        } else {
          return 0;
        }
      });

      parksArray.forEach((park) => {
        main.appendChild(park);
      });

  console.log("You clicked the name sorter");
});

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");*/










const favoriteButtonClickHandler = (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  };
  
  // function for sorting by name
  const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // function for sorting by rating
  const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(
      parkA.querySelector(".rating > .value").innerText
    );
    const parkBRating = parseFloat(
      parkB.querySelector(".rating > .value").innerText
    );
    return parkBRating - parkARating;
  };
  
  // function for handling the nameSorter click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  get the main element
    const main = document.querySelector("main");
  
    // 2. get the list of parks
    const parksList = main.querySelectorAll(".park");
  
    // 3. empty the main
    main.innerHTML = "";
  
    // 4. create an array
    const parksArray = Array.from(parksList);
  
    // 5. sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };


const ratingSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  get the main element
    const main = document.querySelector("main");
  
    // 2. get the list of parks
    const parksList = main.querySelectorAll(".park");
  
    // 3. empty the main
    main.innerHTML = "";
  
    // 4. create an array
    const parksArray = Array.from(parksList);
  
    // 5. sort the array
    parksArray.sort(sortByRating);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };



const uouo = () => {
    // select the nameSorter link
    const nameSorter = document.querySelector("#nameSorter");
  
    // add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
  
    // select the ratingSorter link
    const ratingSorter = document.querySelector("#ratingSorter");
  
    // add an event listener
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
  
    // select all the buttons for all the parks
    const allBtns = document.querySelectorAll(".rateBtn");
  
    // iterate the list of buttons and add an event handler to each
    allBtns.forEach((btn) => {
      btn.addEventListener("click", favoriteButtonClickHandler);
    });
  };
  
  const submitHandler = (event) => {
    console.log("The form was submitted");
  };

  const main = () => {
    // Get the form element
    const form = document.querySelector("#parkForm");
  
    // Attach the submit handler
    form.addEventListener("submit", submitHandler);
  };



  // Add event listener for DOMContentLoaded
  window.addEventListener("DOMContentLoaded", uouo, main);
