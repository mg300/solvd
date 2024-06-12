function createCell(col, row) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.dataset.row = row;
  cell.dataset.col = col;
  return cell;
}
function selectRowAndCol(row, col) {
  document.querySelectorAll(`.cell[data-row="${row}"]`).forEach((cell) => cell.classList.add("active-row"));
  document.querySelectorAll(`.cell[data-col="${col}"]`).forEach((cell) => cell.classList.add("active-col"));
}
function removeSelectRowAndCol(row, col) {
  document.querySelectorAll(`.cell[data-row="${row}"]`).forEach((cell) => cell.classList.remove("active-row"));
  document.querySelectorAll(`.cell[data-col="${col}"]`).forEach((cell) => cell.classList.remove("active-col"));
}
function removeAllSelectRowAndCol(row, col) {
  document.querySelectorAll(`.cell`).forEach((cell) => cell.classList.remove("active-row"));
  document.querySelectorAll(`.cell`).forEach((cell) => cell.classList.remove("active-col"));
}
document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid-container");

  for (let row = 1; row <= 30; row++) {
    for (let col = 1; col <= 20; col++) {
      const cell = createCell(col, row);
      gridContainer.appendChild(cell);
    }
  }

  let selectedCells = new Set();

  gridContainer.addEventListener("click", (e) => {
    const cell = e.target;
    if (!cell.classList.contains("cell")) return;

    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (e.shiftKey) {
      cell.classList.toggle("selected");
      if (cell.classList.contains("selected")) {
        cell.textContent = `${col}/${row}`;
        cell.classList.add("selected");
        cell.textContent = `${col}/${row}`;
        selectRowAndCol(row, col);
      } else {
        cell.textContent = "";
        cell.classList.remove("selected");
        removeSelectRowAndCol(row, col);
      }
    } else {
      removeAllSelectRowAndCol(row, col);
      document.querySelectorAll(".cell").forEach((selectedCell) => {
        selectedCell.classList.remove("selected");
        selectedCell.textContent = "";
      });
      cell.classList.add("selected");
      cell.textContent = `${col}/${row}`;
      selectRowAndCol(row, col);
    }
  });
});
