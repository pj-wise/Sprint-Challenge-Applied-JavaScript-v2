// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM *(CONFUSED)*
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log("response:", response.data);
    response.data.topics.forEach(topic => {
      const tabs = document.querySelector(".topics");
      tabs.appendChild(tabComp(topic));
    });
  })
  .catch(err => {
    console.log(`There's something wrong!`, err);
  });

function tabComp(arr) {
  //elements and classList
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = arr;

  return tab;
}
