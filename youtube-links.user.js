// ==UserScript==
// @name        Easily convert YouTube links to markdown
// @namespace   https://github.com/feihong/
// @description Adds a button next to YouTube links that contains the title and link in Markdown format.
// @include     https://www.youtube.com/*
// @version     1
// @grant       GM_setClipboard
// ==/UserScript==

'use strict';

var videoLinks = document.querySelectorAll("#content a[href ^= '/watch']")

function getLinkCallback(link) {
  return () => {
    var result = `[${link.textContent}](${link.href})`
    GM_setClipboard(result)
  }
}

for (var link of videoLinks) {
  if (!link.textContent.trim()) {
    continue
  }
  console.log(link)

  var button = document.createElement('button')
  button.textContent = 'Markdown'
  button.onclick = getLinkCallback(link)
  link.parentNode.insertBefore(button, link.parentNode.firstChild)
}
