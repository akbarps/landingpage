function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;
    
    return {
      name,
      city,
      email,
      zipCode,
      status
    };
  }
  
  function isNumber(string) {
    return !isNaN(string);
  }
  
  function checkboxIsChecked() {
    return document.getElementById('status').checked;
  }
  
  function validateFormData(formData) {
    if (
      formData &&
      isNumber(formData.zipCode) &&
      checkboxIsChecked()
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function submit(event) {
   
    const formData = handleGetFormData();
    
    if (!validateFormData(formData)) {
      document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
    } else {
      document.getElementById('warning').innerHTML = '';
      // Do something with the form data
    }
  }
  
  document.getElementById('submit-form').addEventListener('click', submit);