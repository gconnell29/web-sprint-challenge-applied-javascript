// TASK 3
// ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
const Tabs = (topics) => {
  let topicsCont = document.createElement('div');
  topicsCont.classList.add('topics');
  topics.forEach(topic => {
    let topicElem = document.createElement('div');
    topicElem.classList.add('tab');
    topicElem.textContent = topic;
    topicsCont.appendChild(topicElem);
  });
  return topicsCont;
}

// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
// Find the array of topics inside the response, and create the tabs using the Tabs component.
// Append the tabs to the element in the DOM that matches the selector passed to the function.
//
const tabsAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(res => {
    let apiTopics = res.data.topics;
    document.querySelector(selector).appendChild(Tabs(apiTopics));
  })
  .catch(err => {
    console.log('not working')
  })
}

export { Tabs, tabsAppender }
