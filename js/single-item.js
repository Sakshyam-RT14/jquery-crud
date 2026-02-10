function createSingleItem(item) {
  const single = $(`
    <div class="single-item">
      <input type="checkbox" ${item.completed ? "checked" : ""}/>
      <p style="text-decoration:${item.completed ? "line-through" : "none"}">
        ${item.name}
      </p>
      <button class="btn icon-btn edit-btn">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <button class="btn icon-btn remove-btn">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  `);

  single.find("input").on("change", function () {
    toggleCompleted(item.id);
  });

  single.find(".edit-btn").on("click", function () {
    editId = item.id;
    render();
  });

  single.find(".remove-btn").on("click", function () {
    removeItem(item.id);
  });

  return single;
}