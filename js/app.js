$(document).ready(function () {
  render();
});

function render() {
  const app = $("#app");
  app.empty();

  app.append(createForm());
  app.append(createItemsList());

  if (editId) $(".form-input").focus();
}