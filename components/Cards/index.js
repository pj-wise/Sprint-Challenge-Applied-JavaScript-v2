// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // log to see data
    // console.log("response: ", response.data.articles);
    const apiOBJ = response.data.articles;
    Object.keys(apiOBJ).forEach(obj => {
      apiOBJ[obj].forEach(articles => {
        const cards = document.querySelector(".cards-container");
        cards.appendChild(cardComponent(articles));
      });
    });
  })
  .catch(err => {
    console.log(`you done messed up!`, err);
  });

function cardComponent(articles) {
  //elements created and classLists + text added
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = articles.headline;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgContain = document.createElement("div");
  imgContain.classList.add("img-container");

  const img = document.createElement("img");
  img.src = articles.authorPhoto;

  const authorName = document.createElement("span");
  authorName.textContent = `By ${articles.authorName}`;

  //appending
  imgContain.appendChild(img);
  author.appendChild(imgContain);
  author.appendChild(authorName);
  card.appendChild(headline);
  card.appendChild(author);

  return card;
}
