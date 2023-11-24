// contentTribune.js

function processTribuneArticle() {
    // Function to calculate reading time
    function calculateReadingTime(content) {
        const wordsPerMinute = 200;
        const wordMatchRegExp = /[^\s]+/g;
        const words = content.matchAll(wordMatchRegExp);
        const wordCount = [...words].length;
        return Math.round(wordCount / wordsPerMinute);
    }

    // Function to add a badge with reading time
    function addReadingTimeBadge() {
        // Get the main content area based on the provided HTML structure
        const mainContent = document.querySelector(".mw-content-container main");

        // Check if the main content area exists
        if (mainContent) {
            // Get the text content of the main content area
            const textContent = mainContent.textContent;

            // Calculate the reading time
            const readingTime = calculateReadingTime(textContent);

            // Create a badge element
            const badge = document.createElement("p");
            badge.classList.add("reading-time-badge");
            badge.textContent = `⏱️ ${readingTime} min read`;

            // Insert the badge after the main content area
            mainContent.insertAdjacentElement("afterend", badge);
        }
    }

    // Run the script when the content is loaded
    document.addEventListener("DOMContentLoaded", addReadingTimeBadge);
}

// Call the function to process Tribune articles
processTribuneArticle();
