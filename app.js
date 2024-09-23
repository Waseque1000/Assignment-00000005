document
  .getElementById("donate-money-btn")
  .addEventListener("click", function name(params) {
    const donatefield = document.getElementById("donate-money");
    const newDonateAmountField = donatefield.value;
    const newDonateAmount = parseFloat(newDonateAmountField);
    donatefield.value = " "; // ! vield empty kore dilam
    if (isNaN(newDonateAmount)) {
      alert("Please provide a valid number");
      return;
    }
    {
      my_modal_1.showModal();
    }
  });

//  onclick="my_modal_1.showModal()"
// console.log("ok");

document
  .getElementById("donate-money-btn2")
  .addEventListener("click", function name(params) {
    const donatefield = document.getElementById("donate-money2");
    const newDonateAmountField = donatefield.value;
    const newDonateAmount = parseFloat(newDonateAmountField);
    donatefield.value = " "; // ! vield empty kore dilam
    if (isNaN(newDonateAmount)) {
      alert("Please provide a valid number");
      return;
    }
    {
      my_modal_2.showModal();
    }
  });

document
  .getElementById("donate-money-btn3")
  .addEventListener("click", function name(params) {
    const donatefield = document.getElementById("donate-money3");
    const newDonateAmountField = donatefield.value;
    const newDonateAmount = parseFloat(newDonateAmountField);
    donatefield.value = " "; // ! vield empty kore dilam
    if (isNaN(newDonateAmount)) {
      alert("Please provide a valid number");
      return;
    }
    {
      my_modal_3.showModal();
    }
  });
//FIXME: only 3 field a  input number er validation done..
