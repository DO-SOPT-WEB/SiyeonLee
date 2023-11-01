import { INIT_BALANCE, HISTORY_LIST } from "./data.js";

let currentDeposit = INIT_BALANCE;
let currentWithdraw = INIT_BALANCE;
let currentBalance = INIT_BALANCE;

const deposit = document.querySelector("b.deposit");
const withdraw = document.querySelector("b.withdraw");
const balance = document.getElementById("balance");

const depositButton = document.querySelector(".deposit_input");
const withdrawButton = document.querySelector(".withdraw_input");

let currentHistoryList = HISTORY_LIST;

const filter = () => {
  currentHistoryList = [];

  if (depositButton.checked) {
    HISTORY_LIST.forEach((history) => {
      if (history.type === "price_deposit") {
        currentHistoryList.push(history);
        renderHistory();
      }
    });
  }
  if (withdrawButton.checked) {
    HISTORY_LIST.forEach((history) => {
      if (history.type === "price_withdraw") {
        currentHistoryList.push(history);
        renderHistory();
      }
    });
  }
  if (!withdrawButton.checked && !depositButton.checked) {
    renderHistory();
  }
};

depositButton.addEventListener("click", filter);
withdrawButton.addEventListener("click", filter);

const renderHistory = () => {
  const historyArea = document.querySelector("section.history > ul");
  historyArea.innerHTML = "";

  currentHistoryList.forEach((history) => {
    const historyBox = document.createElement("li");
    historyBox.className = "each_item";

    const itemSpan = document.createElement("span");

    const category = document.createElement("p");
    category.className = "category";
    category.innerText = history.category;

    const title = document.createElement("p");
    title.className = "title";
    title.innerText = history.title;

    itemSpan.appendChild(category);
    itemSpan.appendChild(title);

    const priceSpan = document.createElement("span");

    const price = document.createElement("p");
    price.className = history.type;
    price.innerText =
      history.type === "price_withdraw" ? -history.price : history.price;

    const button = document.createElement("button");
    button.className = "delete_button";
    button.innerText = "X";
    button.addEventListener("click", () => deleteHistory(history.title));

    priceSpan.appendChild(price);
    priceSpan.appendChild(button);

    historyBox.appendChild(itemSpan);
    historyBox.appendChild(priceSpan);

    historyArea.appendChild(historyBox);
  });
};

const deleteHistory = (title) => {
  const item = currentHistoryList.find((x) => x.title === title);
  const index = currentHistoryList.indexOf(item);
  currentHistoryList.splice(index, 1);

  currentBalance = 0;
  currentWithdraw = 0;
  currentDeposit = 0;

  renderHistory();
  addBalance();
};

const addBalance = () => {
  const allWithdraw = document.querySelectorAll(".price_withdraw ");
  const allDeposit = document.querySelectorAll(".price_deposit");

  currentDeposit = 0;
  currentWithdraw = 0;

  allDeposit.forEach((price) => {
    currentDeposit = currentDeposit + Number(price.innerHTML);
  });

  allWithdraw.forEach((price) => {
    currentWithdraw = currentWithdraw + Number(price.innerHTML);
  });

  currentBalance = currentDeposit + currentWithdraw;

  setBalance();
};

const setBalance = () => {
  balance.innerHTML = "";
  const balanceNum = document.createTextNode(currentBalance);
  balance.appendChild(balanceNum);

  deposit.innerHTML = "";
  const totalDepositNum = document.createTextNode("+" + currentDeposit);
  deposit.appendChild(totalDepositNum);

  withdraw.innerText = "";
  const totalWithdrawNum = document.createTextNode(currentWithdraw);
  withdraw.appendChild(totalWithdrawNum);
};

// 모달

const modalWrapper = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal_close_button");
const modal_deposit_input = document.querySelector(".modal_deposit_input");
const modal_withdraw_input = document.querySelector(".modal_withdraw_input");
const deposit_category_option = document.querySelector("#select_deposit");
const withdraw_category_option = document.querySelector("#select_withdraw");
const addButton = document.getElementById("add_button");

addButton.onclick = () => {
  modalWrapper.style.display = "flex";
};

modalCloseButton.onclick = () => {
  modalWrapper.style.display = "none";
};

let newCategory = document.getElementById("select_deposit");
let tempType = "price_deposit";

const checkOnly = (e) => {
  if (e.target === modal_deposit_input) {
    modal_deposit_input.checked = true;
    modal_withdraw_input.checked = false;

    deposit_category_option.style.display = "flex";
    withdraw_category_option.style.display = "none";

    tempType = "price_deposit";

    newCategory = document.getElementById("select_deposit");
  } else {
    modal_deposit_input.checked = false;
    modal_withdraw_input.checked = true;

    deposit_category_option.style.display = "none";
    withdraw_category_option.style.display = "flex";

    tempType = "price_withdraw";

    newCategory = document.getElementById("select_withdraw");
  }
};

modal_deposit_input.addEventListener("click", checkOnly);
modal_withdraw_input.addEventListener("click", checkOnly);

const titleInput = document.querySelector(".input_title");
const priceInput = document.querySelector(".input_price");

const newHistory = () => {
  let tempCategory = newCategory.value;
  let tempTitle = titleInput.value;
  let tempPrice = priceInput.value;

  if (tempCategory === "" || tempTitle === "" || tempPrice === "") {
    alert("Please fill in all the blanks");
    return false;
  } else {
    let newObject = {
      category: tempCategory,
      title: tempTitle,
      type: tempType,
      price: Number(tempPrice),
    };

    currentHistoryList.push(newObject);

    newCategory.value = "";
    titleInput.value = "";
    priceInput.value = "";

    alert("New history added!");

    modalWrapper.style.display = "none";

    renderHistory();
    addBalance();
  }
};

const submitBtn = document.querySelector(".submit_button");

submitBtn.addEventListener("click", newHistory);

renderHistory();
addBalance();
