const historyButton = document.getElementById("history-btn");
historyButton.addEventListener("click", function () {
  {
    historyButton.classList.add("bg-[#B4F461]");
    historyButton.classList.remove("bg-transparent");
    const mainSection = document.getElementById("main-container");
    mainSection.classList.add("hidden");

    const donationButton = document.getElementById("donation-btn");
    donationButton.classList.remove("bg-[#B4F461]");
    donationButton.classList.add("bg-transparent");

    const historyConteiner = document.getElementById("history-container");
    historyConteiner.classList.remove("hidden");
  }
});

const donationButton = document.getElementById("donation-btn");
donationButton.addEventListener("click", function () {
  donationButton.classList.add("bg-[#B4F461]");
  donationButton.classList.remove("bg-transparent");

  const historyButton = document.getElementById("history-btn");
  historyButton.classList.remove("bg-[#B4F461]");
  historyButton.classList.add("bg-transparent");

  const mainSection = document.getElementById("main-container");
  mainSection.classList.remove("hidden");

  const historyConteiner = document.getElementById("history-container");
  historyConteiner.classList.add("hidden");
});