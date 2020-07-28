// Declare variables
// Select color input
const input_color = document.querySelector('#colorPicker');
// Select size input
const size_picker = document.querySelector('#sizePicker');
// The grid to draw
const output_grid = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Clear an existing grid (if any)
  output_grid.innerHTML = "";
  // Save width and height of the grid as input by user
  var input_height = size_picker.height.value;
  var input_width = size_picker.width.value;
  // Use loop to draw a grid based on user specifications
  for (x = 0; x < input_height; x++) {
    let new_row = output_grid.insertRow();
    for (y = 0; y < input_width; y++) {
      let new_cell = new_row.insertCell();
      // Add event listeners for each cell to color when clicked on
      new_cell.addEventListener('click', function(){
        new_cell.style.backgroundColor = input_color.value;
    });
  }
}
}

// Add event listener for the "Submit" button which triggers drawing of the grid
size_picker.addEventListener('submit', function(event) {
  // Without "preventDefault" the size picker form kept resetting
  event.preventDefault();
  makeGrid();
});
