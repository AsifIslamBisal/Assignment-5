// second card......................

document
  .getElementById("second-add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const addFeniMoney = document.getElementById(
      "second-add-money-field"
    ).value;

    const currentMoney = document.getElementById(
      "second-donate-money"
    ).innerText;

    if (
      addFeniMoney < 0 ||
      isNaN(addFeniMoney) ||
      addFeniMoney < currentMoney
    ) {
      alert("please correct amount and try again");
    } else {
      const newAddMoney = parseFloat(addFeniMoney);
      const newCurrentMoney = parseFloat(currentMoney);
      const sumMoney = newAddMoney + newCurrentMoney;
      console.log(sumMoney);
      document.getElementById("second-donate-money").innerText = sumMoney;

      const bankMoney = document.getElementById("bank-balance").innerText;

      const newBankBalance = parseFloat(bankMoney);
      const remainingMoney = newBankBalance - sumMoney;
      console.log(remainingMoney);
      document.getElementById("bank-balance").innerText = remainingMoney;
    }
    const p = document.createElement("p");
    p.innerText = `Donation to Feni ${addFeniMoney} tk`;
    document.getElementById("second-show-tranjection").appendChild(p);

    const d = new Date();
    d.setDate("");
    document.getElementById("date-card-2").innerHTML = d;
  });