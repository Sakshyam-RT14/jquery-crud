function createItemsList() {
  const container = $('<div class="items"></div>');

  $.each(items, function (_, item) {
    container.append(createSingleItem(item));
  });

  return container;
}

function toggleCompleted(id) {
  items = items.map(item =>
    item.id === id
      ? { ...item, completed: !item.completed }
      : item
  );

  saveData();
  render();
}

function removeItem(id) {
  items = items.filter(item => item.id !== id);
  saveData();
  render();
}