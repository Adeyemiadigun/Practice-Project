const myArray=[];
function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  // Name validation
  const name = document.getElementById('name').value;
  if (!name) {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
  }
 

  // Email validation
  const email = document.getElementById('email').value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email) {
      document.getElementById('emailError').textContent = 'Email is required';
      isValid = false;
  } else if (!email.match(emailPattern)) {
      document.getElementById('emailError').textContent = 'Enter a valid email address (e.g., user@example.com)';
      isValid = false;
  }

  // Password validation
  const password = document.getElementById('password').value;
  if (!password) {
      document.getElementById('passwordError').textContent = 'Password is required';
      isValid = false;
  } else if (password.length < 8) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
      isValid = false;
  }

  // Confirm password validation
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (!confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required';
      isValid = false;
  } else if (confirmPassword !== password) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
      isValid = false;
  }

  // Age validation
  const age = document.getElementById('age').value;
  if (!age) {
      document.getElementById('ageError').textContent = 'Age is required';
      isValid = false;
  } else if (isNaN(age) || age < 18 || age > 100) {
      document.getElementById('ageError').textContent = 'Enter a valid age between 18 and 100';
      isValid = false;
  }
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
      document.getElementById('genderError').textContent = 'Please select your gender';
      isValid = false;
  }
  const country = document.getElementById('country').value;
  if (!country) {
      document.getElementById('countryError').textContent = 'Enter your country';
      isValid = false;
  }
  // Terms and conditions validation
  const terms = document.getElementById('terms').checked;
  if (!terms) {
      document.getElementById('termsError').textContent = 'You must agree to the terms and conditions';
      isValid = false;
  }
if(isValid){
    addForm();
    updateTable();
    console.log(myArray)
}
  return isValid;
}

function addForm(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
 myArray.push({
   name,email,password,country,age
 })
};
function updateTable(){
    let updateform='';
    myArray.forEach(
        (form,index)=>{
            const {name,email,password,country,age}=form;
            const html=`<tr><td>${form.name}</td>
                            <td>${form.email}</td>
                            <td>${form.password}</td>
                            <td>${form.country}</td>
                            <td>${form.age}</td>
            </tr>`
            updateform+=html;

        });
        document.getElementById('tbody').innerHTML=updateform;
}