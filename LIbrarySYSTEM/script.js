document.getElementById('addBook').addEventListener('click', function () {
    const titleInput = document.getElementById('title');
    const yearInput = document.getElementById('year');
    const title = titleInput.value.trim();
    const year = yearInput.value.trim();

    const currentYear = new Date().getFullYear();

    let errorMsg = '';

    // Updated title validation: allow alphabetic characters and spaces, but not empty or only spaces
    const titleRegex = /^[A-Za-z ]+$/;
    if (title === '' || !titleRegex.test(title) || title.trim() === '') {
        errorMsg += 'Title must only contain alphabetic characters and spaces, and cannot be empty.\n';
    }

    // Year validation remains the same
    if (!/^\d{4}$/.test(year) || parseInt(year) < 1900 || parseInt(year) > currentYear) {
        errorMsg += `Year must be a 4-digit number between 1900 and ${currentYear}.\n`;
    }

    if (errorMsg) {
        alert(errorMsg);
        return;
    }

    // Add the book to the table
    const tableBody = document.querySelector('#bookTable tbody');
    const newRow = document.createElement('tr');

    // Set row color based on year
    if (parseInt(year) < 2000) {
        newRow.classList.add('old-book');
    } else {
        newRow.classList.add('new-book');
    }

    // Create and append cells
    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    newRow.appendChild(titleCell);

    const yearCell = document.createElement('td');
    yearCell.textContent = year;
    newRow.appendChild(yearCell);

    tableBody.appendChild(newRow);

    // Clear inputs
    titleInput.value = '';
    yearInput.value = '';
});
