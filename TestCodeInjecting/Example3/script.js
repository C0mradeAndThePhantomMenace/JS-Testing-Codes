
function loadScript3(url) {
  console.log(`loadScript3: ${url}`)
  return new Promise((resolve, reject) => {
  console.log(`loadScript3 - Promise: ${url}`)
    const script = document.createElement('script');
    script.src = url;
    // script.src = 'my-external-script.js';
    script.async = true; // Dynamically loaded scripts are async by default, good practice to be explicit

    // Handle success
    script.onload = () => {
      console.log(`Script ${url} loaded successfully!`);
      resolve(url);
    };

    // Handle errors
    script.onerror = () => {
      console.error(`Error loading script ${url}`);
      reject(new Error(`Failed to load script ${url}`));
    };

    // Append to the document body or head to start loading
    document.head.appendChild(script);
  });
}

// Usage:

function loadScriptCallBack3(url) {
  console.log(`loadScriptCallBack3: ${url}`)
  loadScript3(url)
    .then(() => {
      // Code that depends on the loaded script goes here
      myExternalFunction();
    })
    .catch(error => {
      console.error('Script loading failed:', error);
    });
}

// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
