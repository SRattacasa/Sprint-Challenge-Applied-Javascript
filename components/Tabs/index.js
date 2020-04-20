// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>




let tabURL = 'https://lambda-times-backend.herokuapp.com/topics';
axios.get(tabURL)
  .then((response) => {
    //   console.log(response)
      response.data.topics.forEach(element => {
          let divClass = document.createElement('div');
          let divTopics = document.querySelector('.topics')
          divClass.classList.add('tab');
          divClass.textContent = element;
          divTopics.appendChild(divClass);
      });
    })
    .catch((error) => {
        console.log(error);
    });