// 

function loadScript2(url) {
	const script = document.createElement('script');
	script.src = url;
	script.onload = () => {
		console.log("Dynamic script loaded and executed!");
	};
	document.head.appendChild(script);
}

function loadScriptCallBack2(url) {

	try {
		loadScript2(url)

	} catch (error) {
		console.error('Script loading failed:', error);
	}

}
// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** 
