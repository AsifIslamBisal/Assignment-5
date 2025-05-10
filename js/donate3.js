// 3rd Card...................

document
  .getElementById("third-add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const addQuotaMoney = document.getElementById(
      "third-add-money-field"
    ).value;

    const currentBalance =
      document.getElementById("third-donate-money").innerText;

    if (
      addQuotaMoney < 0 ||
      isNaN(addQuotaMoney) ||
      addQuotaMoney < currentBalance
    ) {
      alert("please correct amount and try again");
    } else {
      const newAddMoney = parseFloat(addQuotaMoney);
      const newCurrentBalance = parseFloat(currentBalance);
      const sumTaka = newAddMoney + newCurrentBalance;
      console.log(sumTaka);
      document.getElementById("third-donate-money").innerText = sumTaka;

      const bankBalance = document.getElementById("bank-balance").innerText;

      const newBankBalance = parseFloat(bankBalance);
      const remainingBalance = newBankBalance - sumTaka;
      console.log(remainingBalance);
      document.getElementById("bank-balance").innerText = remainingBalance;
    }
    const p = document.createElement("p");
    p.innerText = `Donation to Quota ${addQuotaMoney} tk`;
    document.getElementById("third-show-tranjection").appendChild(p);

    const d = new Date();
    d.setDate("");
    document.getElementById("date-card-3").innerHTML = d;
  });