// ==UserScript==
// @name Uwall
// @namespace https://www.bondageprojects.com/
// @version 1.0
// @description Shield to protect you from UBC commands
// @author Nemesea
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==
setTimeout(
	function () {
			let n = document.createElement("script");
			n.setAttribute("language", "JavaScript");
			n.setAttribute("crossorigin", "anonymous");
			n.setAttribute("src", "https://tetris245.github.io/Uwall/Uwall.js?_=" + Date.now());
			n.onload = () => n.remove();
			document.head.appendChild(n);
	}, 
        10000
);
