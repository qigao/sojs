var include; 

// Avoid global namespace pollution
(function () {

	// We will insert additional scripts into the <head> section of the HTML document.
	var head = document.getElementsByTagName('head')[0];

	// Load an external script into the document.
	include = function (jsUrl, k) {
		// Create a tag to load the specified script.
		// It will have the form <script type="text/javascript" src="jsUrl">...</script>
		var scriptTag    = document.createElement('script');
		scriptTag.type   = 'text/javascript';
		scriptTag.src    = jsUrl;
		scriptTag.onload = k;

		// Add the script to the document, causing it to load and run asynchronously.
		head.appendChild(scriptTag);
	};
})();

