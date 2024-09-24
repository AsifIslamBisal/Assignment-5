// first card...............

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const addMoney = document.getElementById("add-money-field").value;

    const currentBalance = document.getElementById("donate-money").innerText;

    if (addMoney < 0 || isNaN(addMoney)) {
      alert("please correct amount and try again");
    } else {
      const newAddMoney = parseFloat(addMoney);
      const newCurrentBalance = parseFloat(currentBalance);
      const sumBalance = newAddMoney + newCurrentBalance;
      console.log(sumBalance);
      document.getElementById("donate-money").innerText = sumBalance;

      const bankBalance = document.getElementById("bank-balance").innerText;

      const newBankBalance = parseFloat(bankBalance);
      const remainingBalance = newBankBalance - sumBalance;
      console.log(remainingBalance);
      document.getElementById("bank-balance").innerText = remainingBalance;
    }
  });