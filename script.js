// Feature 1: Form Validation
function validateForm() {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const donationAmount = document.querySelector('input[name="amount"]:checked');

  if (!firstName || !lastName || !email || !donationAmount) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Feature 2: Email Validation
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Email Validation Function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Feature 3: Donation Amount Check
document.querySelectorAll('input[name="amount"]').forEach((radioButton) => {
  radioButton.addEventListener('change', function() {
    const otherAmountField = document.getElementById('other_amount');
    if (this.value === 'Other') {
      otherAmountField.style.display = 'inline-block';
    } else {
      otherAmountField.style.display = 'none';
    }
  });
});

// Feature 4: Recurring Donation Fields
document.querySelector('input[name="recurring"]').addEventListener('change', function() {
  const recurringFields = document.querySelector('.recurring-fields');
  if (this.checked) {
    recurringFields.style.display = 'block';
  } else {
    recurringFields.style.display = 'none';
  }
});

// Feature 5: Select State and Country Default Options
window.onload = function() {
  const stateSelect = document.querySelector('select[name="state"]');
  const countrySelect = document.querySelector('select[name="country"]');
  if (stateSelect) stateSelect.value = "California";
  if (countrySelect) countrySelect.value = "United States";
};

// Feature 6: Confirm Password (Optional if password fields exist)
function validatePassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return false;
  }
}

// Feature 7: Reset Button Logic
const resetButton = document.querySelector('button[type="reset"]');
if (resetButton) {
  resetButton.addEventListener('click', function(event) {
    const confirmation = confirm("Are you sure you want to reset the form?");
    if (!confirmation) {
      event.preventDefault();
    }
  });
}

// Feature 8: Show/Hide Additional Fields (Honor / Memory)
document.querySelectorAll('input[name="donation_radio"]').forEach((radioButton) => {
  radioButton.addEventListener('change', function() {
    const nameField = document.getElementById('name');
    if (this.id === 'to_honor') {
      nameField.placeholder = "Name to honor";
    } else if (this.id === 'in_memory_of') {
      nameField.placeholder = "Name in memory of";
    } else {
      nameField.placeholder = "";
    }
  });
});

// Feature 9: Character Limit on Comments
const commentBox = document.getElementById("comments");
if (commentBox) {
  commentBox.addEventListener('input', function() {
    const charLimit = 200;
    if (this.value.length > charLimit) {
      alert("Character limit reached!");
      this.value = this.value.substring(0, charLimit);
    }
  });
}

// Feature 10: Calculate Recurring Donation Total
const monthlyInput = document.querySelector('input[name="monthly_amount"]');
if (monthlyInput) {
  monthlyInput.addEventListener('input', function() {
    const monthlyAmount = parseFloat(this.value) || 0;
    const months = parseInt(document.querySelector('input[name="months"]').value) || 0;
    const total = monthlyAmount * months;
    let totalElement = document.getElementById('total_display');

    if (!totalElement) {
      totalElement = document.createElement('p');
      totalElement.id = 'total_display';
      document.querySelector('.recurring-fields').appendChild(totalElement);
    }

    totalElement.textContent = `Total donation for ${months} months: $${total}`;
  });
}
