// 1. Event Listener for Form Submission
document.getElementById('student-form').addEventListener('submit', addStudent);

/**
 * The addStudent function is triggered when the form is submitted.
 * It handles form submission, validation, and creating the new list item.
 */
function addStudent(event) {
    // Prevent the default form submission behavior
    event.preventDefault(); 

    // Get Student Name from the Input Field
    let studentName = document.getElementById('student-name').value.trim();

    // Check if the input is empty
    if (studentName === '') {
        alert('Please enter a student name'); 
        return; 
    }

    // 4. Create New List Item for Student
    let li = document.createElement('li');
    li.classList.add('student-item'); 

    // 5. Create a Span to Display the Student's Name
    let span = document.createElement('span'); 
    span.textContent = studentName; 

    // 6. Create Edit and Delete Buttons
    
    // Create an edit button
    let editButton = document.createElement('button'); 
    editButton.textContent = 'Edit'; 
    editButton.classList.add('btn-edit'); 
    editButton.addEventListener('click', function() { editStudent(li, span); }); 

    // Create a delete button
    let deleteButton = document.createElement('button'); 
    deleteButton.textContent = 'Delete'; 
    deleteButton.classList.add('btn-delete'); 
    deleteButton.addEventListener('click', function() { deleteStudent(li); }); 

    // Append the name and buttons to the list item
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // 7. Append the List Item to the Student List
    document.getElementById('student-list').appendChild(li); 

    // Clear the input field after adding
    document.getElementById('student-name').value = '';
}

/**
 * 8. Delete a Student
 * Removes a student list item from the list.
 */
function deleteStudent(studentElement) {
    studentElement.remove(); 
}

/**
 * 9. Edit a Student's Name
 * Allows modification of the student's name using a prompt dialog.
 */
function editStudent(studentElement, studentNameElement) {
    let newName = prompt('Enter the new name:', studentNameElement.textContent); 
    // Check if the user entered a new name
    if (newName !== null && newName.trim() !== '') { 
        studentNameElement.textContent = newName.trim(); 
    }
}

/**
 * 10. Change List Style
 * Toggles the 'highlight' class on all student items.
 */
function changeListStyle() { 
    let students = document.querySelectorAll('.student-item'); 
    students.forEach(student => { 
        student.classList.toggle('highlight'); 
    });
}

// 11. Add Highlight Button (Dynamically added to the page)
let changeStyleButton = document.createElement('button'); 
changeStyleButton.textContent = 'Highlight Students'; 
changeStyleButton.addEventListener('click', changeListStyle); 
document.body.appendChild(changeStyleButton);