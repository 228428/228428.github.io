// Function to apply the clothing item to the mannequin
function applyClothing(itemId) {
  const mannequin = document.getElementById("mannequinArea");
  const existingItem = document.getElementById(itemId + "-on-mannequin");

  // If the item is already on the mannequin, remove it
  if (existingItem) {
    existingItem.remove();
  }

  // Clone the clicked item
  const clothingItem = document.getElementById(itemId).cloneNode(true);

  // Generate a unique ID for the mannequin version
  clothingItem.id = itemId + "-on-mannequin";

  // Resize the clothing item to make it slightly bigger
  clothingItem.style.width = "110px"; // Increased the size slightly
  clothingItem.style.height = "auto"; // Maintain aspect ratio
  clothingItem.style.position = "absolute";

  // Positioning based on the type of clothing item
  if (itemId === "top") {
    // Adjust the position for the top
    clothingItem.style.top = "160px";
    clothingItem.style.left = "150px"; // Adjusted position
  } else if (itemId === "bottom") {
    // Adjust the position for the bottom
    clothingItem.style.top = "260px";
    clothingItem.style.left = "150px"; // Adjusted position
  } else if (itemId === "shoes") {
    // Adjust the position for the shoes
    clothingItem.style.top = "410px";
    clothingItem.style.left = "170px"; // Adjusted position
  }

  // Append the item to the mannequin area
  mannequin.appendChild(clothingItem);
}

// Attach click event to all clothing items
document.querySelectorAll(".draggable").forEach((item) => {
  item.addEventListener("click", function () {
    applyClothing(item.id);
  });
});
