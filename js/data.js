let items = JSON.parse(localStorage.getItem("grocery-list")) || [];
let editId = null;

function saveData() {
  localStorage.setItem("grocery-list", JSON.stringify(items));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}