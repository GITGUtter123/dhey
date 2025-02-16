document.getElementById("generateBtn").addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: generateQuestion,
    });
  });
});

function generateQuestion() {
  const selectedText = window.getSelection().toString();
  const question = createQuestion(selectedText);
  document.getElementById("questionText").textContent = question;
}

function createQuestion(text) {
  const words = text.split(" ");
  const randomWord = words[Math.floor(Math.random() * words.length)];
  return `What is the meaning of ${randomWord}?`;
}
