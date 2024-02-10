chrome.commands.onCommand.addListener(async (command) => {
  let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    chrome.tabs.sendMessage(tabs[0].id, { command });
  }
});
