document.addEventListener('DOMContentLoaded', function () {
    const validationInput = document.getElementById('validation-input');

    validationInput.addEventListener('blur', function () {
      validateInputLength(validationInput);
    });
  });

  function validateInputLength(input) {
    let expectedLength = parseInt(input.getAttribute('data-length'));
    let inputValue = input.value.trim().length;

    if (inputValue === expectedLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  }