// Handle form submission for reporting lost items
document.getElementById('lost-item-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('item-description').value;
    const date = document.getElementById('item-date').value;
    const location = document.getElementById('item-location').value;

    console.log(`Item reported: ${description}, Date: ${date}, Location: ${location}`);

    // Clear the form
    event.target.reset();
});

// Handle search functionality
document.getElementById('search-query').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    console.log(`Searching for: ${query}`);

    // Example: Filter items in the list (to be implemented)
});