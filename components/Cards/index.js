// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.



const newFunction = (headlineText, authorName, authorIMGURL) => {
    
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.textContent = headlineText;
    
    headline.classList.add('headline')
    
    const author = document.createElement('div');
    author.classList.add('author')

    const authImgcontainer = document.createElement('div');
    authImgcontainer.classList.add('img-container');
    author.appendChild(authImgcontainer)

    const authImg = document.createElement('img');
    authImg.src = authorIMGURL;
    authImgcontainer.appendChild(authImg)

    const span = document.createElement('span');
    span.textContent = authorName;
    author.appendChild(span);
    
    card.append(headline, author);

    const cardsCon = document.querySelector('.cards-container');
    cardsCon.appendChild(card)

    return card
};


let step3Url = "https://lambda-times-backend.herokuapp.com/articles";
axios.get(step3Url)
.then(response => { 
    console.log(response);
    let jsArr = Array.from(response.data.articles.javascript);
      let bootArr = Array.from(response.data.articles.bootstrap);
      let technology = Array.from(response.data.articles.technology);
      let jQuery = Array.from(response.data.articles.jquery);
     let node = Array.from(response.data.articles.node);
      const newArr = jsArr.concat(bootArr, technology, jQuery, node);
      console.log(newArr)
    newArr.forEach(e => {
        newFunction(e.headline, e.authorName, e.authorPhoto)

    })
})



//   const cardDiv = document.createElement("div");
//   cardDiv.classList.add("card");



// console.log(newFunction())
//   axios
//     .get(step3Url)
//     .then((response) => {
//       let jsArr = Array.from(response.data.articles.javascript);
//       let bootArr = Array.from(response.data.articles.bootstrap);
//       let technology = Array.from(response.data.articles.technology);
//       let jQuery = Array.from(response.data.articles.jquery);
//      let node = Array.from(response.data.articles.node);
//       const newArr = jsArr.concat(bootArr, technology, jQuery, node);
//       console.log(newArr);
//     return newArr;
//     })
//     .then(arr => { arr.forEach(element => {
//         newFunction();        
//     });    
// })
//     .catch();





// const step3Function = () => {
//   let step3Url = "https://lambda-times-backend.herokuapp.com/articles";
// //   const cardDiv = document.createElement("div");
// //   cardDiv.classList.add("card");

//   axios
//     .get(step3Url)
//     .then((response) => {
//       let jsArr = Array.from(response.data.articles.javascript);
//       let bootArr = Array.from(response.data.articles.bootstrap);
//       let technology = Array.from(response.data.articles.technology);
//       let jQuery = Array.from(response.data.articles.jquery);
//       const newArr = jsArr.concat(bootArr, technology, jQuery);
//       console.log(newArr);
//       newArr.forEach(e => {
//           let card = document.createElement('div');
//           card.classList.add('card');
//           const carosel = document.querySelector('.cards-container');
//           carosel.append(e);
//       })
//       return newArr;
//     })
//     .then((arr) => {
//       const cardDiv = document.createElement("div");
//     //   cardDiv.classList.add("card");

//       arr.forEach((element) => {
        
//         let newCard = cardDiv;
//         newCard.classList.add('card');
      
//         const headlineDiv = document.createElement("div");
//         headlineDiv.classList.add("headline");
//         headlineDiv.textContent = element.headline;
//         newCard.appendChild(headlineDiv);

//         const authorDiv = document.createElement("div");
//         authorDiv.classList.add("author");
//         newCard.appendChild(authorDiv);
        

//         const imgcontainerDiv = document.createElement("div");
//         imgcontainerDiv.classList.add("img-container");
//         authorDiv.appendChild(imgcontainerDiv);

//         const authorImg = document.createElement("img");
//         authorImg.src = `${element.authorPhoto}`;
//         imgcontainerDiv.appendChild(authorImg);

//         const byLine = document.createElement("span");
//         byLine.textContent = element.authorName;
//         authorDiv.appendChild(byLine);

        
//       })
//       const cardsCon = document.querySelector('.cards-container');
//       carosel.append(cardDiv);
//     //   return cardDiv;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// console.log(step3Function())

// // step3Function();
