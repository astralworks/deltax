document.addEventListener("keydown", async (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === "k") {
    const focused = document.activeElement;
    if (focused && (focused.tagName === "textarea" || focused.tagName === "input")) {
      const prompt = focused.value;

      chrome.runtime.sendMessage({ prompt }, (reply) => {
        if (reply && reply.text) {
          focused.value = reply.text;
        }
      });
    }
  }
});
