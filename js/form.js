function createForm() {
  const itemToEdit = items.find(i => i.id === editId);

  const form = $(`
    <form id="grocery-form">
      <h2>Grocery Bud</h2>
      <div class="form-control">
        <input
          type="text"
          class="form-input"
          placeholder="e.g. oil"
          value="${itemToEdit ? itemToEdit.name : ""}"
        />
        <button type="submit" class="btn">
          ${editId ? "edit item" : "Add Item"}
        </button>
      </div>
    </form>
  `);

  form.on("submit", function (e) {
    e.preventDefault();

    const value = form.find(".form-input").val().trim();

    if (!value) {
      alert("Please enter value");
      return;
    }

    if (editId) {
      updateItem(value);
    } else {
      addItem(value);
    }
  });

  return form;
}

function addItem(name) {
  items.push({
    id: generateId(),
    name,
    completed: false
  });

  saveData();
  render();
}

function updateItem(name) {
  items = items.map(item =>
    item.id === editId ? { ...item, name } : item
  );

  editId = null;
  saveData();
  render();
}