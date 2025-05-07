document.addEventListener(
  "contextmenu",
  function (event) {
    let targetElementId = event.target.id;
    console.log("Right-clicked element ID:", targetElementId);
    browser.runtime.sendMessage({
      type: "context-click",
      elementId: targetElementId,
    });
  },
  true,
);
