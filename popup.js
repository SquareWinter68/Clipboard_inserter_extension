// popup.js
document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById("addToBody");

  checkbox.addEventListener("change", function() {
    browser.storage.local.set({ addToBody: checkbox.checked });
  });

  browser.storage.local.get("addToBody").then(function(result) {
    checkbox.checked = result.addToBody || false;
  });

  var button = document.getElementById("chnage_site").addEventListener("click", ()=>{
    browser.tabs.executeScript({
        file: "content/inject_html.js",
      });
  })
});
