// TASK 5
// ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

import { headerAppender } from "./header";

  //
const Card = (article) => {
  let card = document.createElement('div');
  let  headline = document.createElement('div');
  let author = document.createElement('div');
  let imgCont = document.createElement('div');
  let img = document.createElement('img');
  let authorName = document.createElement('span');
  // assign classes
  headline.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container');
  // populate contents
  headline.textContent = article.headline;
  authorName.textContent = article.authorName;
  img.src = article.authorPhoto;
  // appendings
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(authorName);
  return card;
}

// TASK 6
// ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    let articles = res.data.articles;
    const articleKeys = Object.keys(articles);
    for (let i = 0; i < articleKeys.length; i++) {
      articles[articleKeys[i]].forEach(element => {
        document.querySelector(selector).appendChild(Card(element));
        console.log(element);
      }); // close foreach
    }; // close for loop
  })
  .catch(err => {
    console.error(err)
  })
}

export { Card, cardAppender }
