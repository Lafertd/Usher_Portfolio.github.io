// script.js

// Function to apply styles to all text elements
function styleText() {
    // Select all headers and paragraphs
    const headers = document.querySelectorAll('h1, h2, h3');
    const paragraphs = document.querySelectorAll('p');

    // Apply styles to headers
    headers.forEach(header => {
        header.style.textAlign = 'center';
        header.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
        header.style.fontWeight = 'bold';
        header.style.margin = '20px 0';
        header.style.color = '#007bff'; // Change color for headers
    });

    // Apply styles to paragraphs
    paragraphs.forEach(paragraph => {
        paragraph.style.textAlign = 'center';
        paragraph.style.fontFamily = '"Arial", sans-serif';
        paragraph.style.lineHeight = '1.6';
        paragraph.style.maxWidth = '800px'; // Limit width for better readability
        paragraph.style.margin = '0 auto 20px'; // Center and space out
        paragraph.style.color = '#555'; // Darker color for paragraphs
    });
}

// Call the function to style the text after the content has loaded
document.addEventListener('DOMContentLoaded', styleText);
