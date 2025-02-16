chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "generateQuestion",
    title: "Generate Quiz Question",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generateQuestion") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: generateQuestion,
      args: [info.selectionText]
    });
  }
});

function generateQuestion(selectedText) {
  const question = createQuestion(selectedText);
  alert(question);
}

function createQuestion(text) {
  const words = text.split(" ");
  const randomWord = words[Math.floor(Math.random() * words.length)];
  return `What is the meaning of ${randomWord}?`;
}
