//your JS code here. If required.
// Select the form and book list
const form = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// Add event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Create a new row
    const row = document.createElement('tr');

    // Insert columns into the row
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    // Add the row to the table
    bookList.appendChild(row);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Add event listener for delete button
bookList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});
