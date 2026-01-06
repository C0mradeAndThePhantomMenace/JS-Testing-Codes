// 
let x = 1
let html = `
<!-- Content will be loaded here -->
** X 111 X **
`

const updateHTML = (html) => document.getElementById('dynamicContentArea').innerHTML = html;
const fetchHTMLFile = () => fetch('content.html') // Path to your HTML file
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // Get the response as plain text
    })
    .then(html => updateHTML(html))
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

const ClickHandler = () => {
    console.log("ClickHandler...")
    x ? updateHTML(html) : fetchHTMLFile()
    x = !x

};

/**
 *
let x = 1
const ClickHandler = () => {
  console.log("ClickHandler...")
  let html = ``
  fetch('content.html') // Path to your HTML file
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      // html = response.text()
      x ? html = response.text() : html = `
<!-- Content will be loaded here -->
** X 111 X **
`
      x = !x
      return html; // Get the response as plain text
    })
    .then(html => {
      document.getElementById('dynamicContentArea').innerHTML = html; // Insert the loaded HTML
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};
 */

/**
 *
async function fetchData() {
  try {
    // Await pauses the function until the fetch promise settles
    const response = await fetch('https://api.example.com/data');

    // Check if the response is ok, otherwise throw an error
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Await the json() method, which also returns a promise
    const data = await response.json();
    return data;
  } catch (error) {
    // Catches network errors from fetch(), HTTP errors thrown manually,
    // and errors from response.json()
    console.error('Fetch error:', error.message);
    // You can also return a fallback value or rethrow the error
    return null;
  }
}

// Call the async function and handle the final result/error
fetchData()
  .then(data => console.log('Data received:', data))
  .catch(error => console.error('An outer error occurred:', error));

 */
// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

// document.getElementById('loadContentBtn').addEventListener('click',
//   function () {
//     fetch('content.html') // Path to your HTML file
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.text(); // Get the response as plain text
//       })
//       .then(html => {
//         document.getElementById('dynamicContentArea').innerHTML = html; // Insert the loaded HTML
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   });

// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
