document.getElementById('add-btn').addEventListener('click', function() {
    const category = document.getElementById('category-search').value.trim();
    const amount = document.getElementById('amount-input').value.trim();
    const date = document.getElementById('date-input').value;

    // Basic validation to ensure all fields are filled
    if (category === '' || amount === '' || date === '') {
        alert('Please fill in all fields!');
        return;
    }

    // Create a new row for the expense table
    const tableBody = document.getElementById('expense-table-body');
    const newRow = document.createElement('tr');

    // Create table cells for each data item
    const categoryCell = document.createElement('td');
    categoryCell.textContent = category;

    const amountCell = document.createElement('td');
    amountCell.textContent = amount;

    const dateCell = document.createElement('td');
    dateCell.textContent = date;

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        tableBody.removeChild(newRow);
        updateTotal();
    });

    deleteCell.appendChild(deleteButton);
    
    // Append cells to the new row
    newRow.appendChild(categoryCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(deleteCell);

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Update total after adding the new expense
    updateTotal();

    // Clear inputs
    document.getElementById('category-search').value = '';
    document.getElementById('amount-input').value = '';
    document.getElementById('date-input').value = '';
});

// Function to update the total amount
function updateTotal() {
    const rows = document.querySelectorAll('#expense-table-body tr');
    let total = 0;

    rows.forEach(row => {
        const amountCell = row.querySelectorAll('td')[1];
        total += parseFloat(amountCell.textContent);
    });

    document.getElementById('total-amount').textContent = total.toFixed(2);
}
