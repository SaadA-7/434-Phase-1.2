function switchTab(tabId, btnElement) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => tab.classList.remove('active'));

  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((button) => button.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  btnElement.classList.add('active');
}
