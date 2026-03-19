>Secure File Upload UI

A simple and secure file upload interface built using HTML, CSS, and JavaScript. It validates selected files before displaying them and ensures safe handling of user input.

>Features

Select multiple files using file input

Displays uploaded file names in a list

Allows only image files (JPG, PNG, GIF)

Validates file size (max 2MB)

Displays error messages for invalid files

Uses safe DOM methods (textContent) to prevent XSS

Clean and responsive UI

Validation Rules

>Only image files are allowed:

.jpg, .jpeg, .png, .gif

>Maximum file size: 2MB per file

>Security Considerations

Uses textContent instead of innerHTML to prevent XSS attacks

Avoids unsafe rendering of file names

Validates file type using MIME types

Ensures only allowed files are processed

>Project Structure

index.html – Structure of the UI

style.css – Styling and layout

script.js – File validation and logic

>How to Run

Download or clone the project

Open index.html in a web browser

Select image files to see validation and file list

>Technologies Used

HTML5

CSS3

JavaScript (Vanilla)

>Future Improvements

Add file preview thumbnails

Upload files to a server/backend

Add drag-and-drop upload support
