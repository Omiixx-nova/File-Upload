const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const errorMessage = document.getElementById("errorMessage");

// Allowed file types
const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

// Maximum file size (2MB)
const maxSize = 2 * 1024 * 1024; // in bytes

fileInput.addEventListener("change", function () {
    // Clear previous results
    fileList.innerHTML = "";
    errorMessage.textContent = "";

    const files = fileInput.files;

    if (files.length === 0) {
        return;
    }

    for (let file of files) {

        // Validate file type
        if (!allowedTypes.includes(file.type)) {
            errorMessage.textContent = "Only JPG, PNG, and GIF files are allowed.";
            continue;
        }

        // Validate file size
        if (file.size > maxSize) {
            errorMessage.textContent = "File size must be less than 2MB.";
            continue;
        }

        // Create list item safely using textContent (prevents XSS)
        const li = document.createElement("li");
        li.textContent = file.name;

        fileList.appendChild(li);
    }
});