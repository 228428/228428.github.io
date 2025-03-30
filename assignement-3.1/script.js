// Handle image upload for user's body image
document.getElementById('userUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const userImage = document.getElementById('userImage');
            const mannequinImage = document.getElementById('mannequinImage');
            
            // Replace the mannequin with the user's image
            mannequinImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Handle image upload for clothes
document.getElementById('clothesUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const uploadedClothes = document.getElementById('uploadedClothes');
            uploadedClothes.src = e.target.result;
            uploadedClothes.classList.remove('hidden');
            uploadedClothes.setAttribute('id', 'uploadedClothes');
            uploadedClothes.setAttribute('draggable', 'true');
            uploadedClothes.addEventListener('dragstart', drag);
        };
        reader.readAsDataURL(file);
    }
});

// Allow drag and drop functionality
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', drag);
});

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const element = document.getElementById(data);
    const newElement = element.cloneNode(true);
    newElement.style.position = "absolute";
    newElement.style.left = `${event.offsetX - newElement.width / 2}px`;
    newElement.style.top = `${event.offsetY - newElement.height / 2}px`;
    event.target.appendChild(newElement);
}