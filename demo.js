// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: The line of code below is what lets JavaScript find the elements that
 // STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable. Without JavaScript, clicking on these heart shapes
// does nothing. Uncomment the code and refresh the demo page. 

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      // STEP 2: If the server call is successful, update the heart appearance
      heart.innerText = '♥'; // Change the heart text or update the class to show it's liked

      // Optional: You can add additional visual effects or UI updates here

      console.log(serverMessage);
    })
    .catch(function(error){
      // STEP 3: Handle errors if the server call fails
      console.error('Error:', error);

      // Optional: You can display an error message to the user or handle it in other ways
    });
}

// STEP 4: Add a click event listener to each heart element
articleHearts.forEach(function(heart) {
  heart.addEventListener('click', likeCallback);
});

// Example function to mimic a server call (replace with your actual server call)
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous server call (you should replace this with your actual server logic)
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulating a successful response 50% of the time
      if (success) {
        resolve('Server call successful!');
      } else {
        reject('Server call failed!');
      }
    }, 1000); // Simulating a delay of 1 second
  });
}


// STEP 3: In order for the call to the server and the update of the screen to
// work, we need to add a click event listener to the elements we identified in
// STEP 1. That's Pillar 2, event handling. Uncomment this code:

// for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }

// STEP 4: 

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
