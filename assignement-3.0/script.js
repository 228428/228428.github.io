// Allow drop functionality on the canvas
function allowDrop(event) {
  event.preventDefault(); // Necessary to allow dropping
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id); // Set the dragged element's ID
}

function drop(event) {
  event.preventDefault(); // Allow the drop

  // Get the ID of the dragged element
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data).cloneNode(true);

  // Position the dragged element inside the canvas
  draggedElement.style.position = "absolute";
  draggedElement.style.left = `${event.offsetX - draggedElement.width / 2}px`;
  draggedElement.style.top = `${event.offsetY - draggedElement.height / 2}px`;

  // Append the cloned element to the canvas
  event.target.appendChild(draggedElement);
}

// Attach event listeners for drag and drop functionality
document.getElementById("canvas").addEventListener("dragover", allowDrop);
document.getElementById("canvas").addEventListener("drop", drop);

// Initialize dragstart event for all draggable items
document.querySelectorAll(".draggable").forEach((item) => {
  item.addEventListener("dragstart", drag);
});
