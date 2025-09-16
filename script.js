let user = {
  name: "sachin",
  pin: "1234",
  balance: 5000
};

function showSection(sectionId) {
  document.querySelectorAll(".container > div").forEach(div => div.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}

function login() {
  let name = document.getElementById("username").value.trim();
  let pin = document.getElementById("pin").value.trim();
  let msg = document.getElementById("loginMsg");

  if (name === user.name && pin === user.pin) {
    document.getElementById("userName").innerText = user.name;
    msg.innerText = "";
    showSection("menuSection");
  } else {
    msg.innerText = "❌ Invalid name or PIN!";
  }
}

function checkBalance() {
  document.getElementById("menuMsg").innerText = "💰 Your balance is ₹" + user.balance;
}

function showWithdraw() { showSection("withdrawSection"); }
function showDeposit() { showSection("depositSection"); }
function showChangePin() { showSection("changePinSection"); }

function withdraw() {
  let amount = parseFloat(document.getElementById("withdrawAmount").value);
  let msg = document.getElementById("withdrawMsg");
  if (isNaN(amount) || amount <= 0) {
    msg.innerText = "❌ Invalid amount.";
  } else if (amount > user.balance) {
    msg.innerText = "⚠️ Insufficient balance.";
  } else {
    user.balance -= amount;
    msg.innerText = "✅ Withdrawal successful! New balance: ₹" + user.balance;
  }
}

function deposit() {
  let amount = parseFloat(document.getElementById("depositAmount").value);
  let msg = document.getElementById("depositMsg");
  if (isNaN(amount) || amount <= 0) {
    msg.innerText = "❌ Invalid amount.";
  } else {
    user.balance += amount;
    msg.innerText = "✅ Deposit successful! New balance: ₹" + user.balance;
  }
}

function changePin() {
  let oldPin = document.getElementById("oldPin").value.trim();
  let newPin = document.getElementById("newPin").value.trim();
  let msg = document.getElementById("pinMsg");

  if (oldPin === user.pin) {
    if (newPin.length >= 4) {
      user.pin = newPin;
      msg.innerText = "✅ PIN changed successfully!";
    } else {
      msg.innerText = "⚠️ PIN must be at least 4 digits.";
    }
  } else {
    msg.innerText = "❌ Incorrect old PIN.";
  }
}

function backToMenu() {
  showSection("menuSection");
}

function logout() {
  document.getElementById("username").value = "";
  document.getElementById("pin").value = "";
  showSection("loginSection");
}