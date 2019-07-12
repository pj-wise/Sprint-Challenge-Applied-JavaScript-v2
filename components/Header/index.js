// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the header-container component

const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());

function Header() {
  //making elements and adding classLists + text
  const header = document.createElement("div");
  header.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = `SMARCH 28, 2019`;

  const headTitle = document.createElement("h1");

  const temperature = document.createElement("span");
  temperature.classList.add("temp");
  temperature.textContent = `98°`;

  //appending

  header.appendChild(date);
  header.appendChild(headTitle);
  header.appendChild(temperature);

  return header;
}
