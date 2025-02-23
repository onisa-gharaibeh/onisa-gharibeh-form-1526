// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit">,
let btn = document.getElementById('submit');

// <input type="text" id="name">
let fn = document.getElementById('name');

// <input type="text" id="email">
let em = document.getElementById('email');

// <textarea id="message"></textarea>
let msg = document.getElementById('message');

// Declare variable that will 
// store regular expression for email
let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function formValid() {
   // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
   // Declare object that will store the form-data
   let data = {};

   // Declare array that will store the errors
   let errors = [];


   /*
   +-----------+    
   | FULL NAME |
   +-----------+
   */
   // Check if fullname is not empty.
   if (fn.value) {
      // If so:
      // Pass the collected value
      // to your object "data".
      data.fullName = fn.value.trim();
      // Otherwise:
   } else {
      // Create a corresponding error-message
      // and add it to your array "errors".
      errors.push('Full name is missing!');
      // End your conditional here.
   }


   /*
   +-------+    
   | EMAIL | 
   +-------+
   */
   // Check if email is not empty.
   if (em.value) {
      // Check if email is valid.
      if (validEmail.test(em.value)) {
         // If so:
         // Pass the collected value
         // to your object "data".
         data.email = em.value.trim();
         // Otherwise:
      } else {
         // Create a corresponding error-message
         // and add it to your array "errors".
         errors.push('Please enter a valid email address!');
         // End your nested conditional here.
      }
      // Otherwise:
   } else {
      // Create a corresponding error-message
      // and add it to your array "errors"
      errors.push('Please enter your email address!');
      // End your outer conditional here.
   }

   /*
    +---------+    
    | MESSAGE | 
    +---------+
    */
   // Check if message is not empty.
   if (msg.value) {
      // If so:
      // Pass the collected value
      // to your object "data".
      data.massage = msg.value.trim();
      // Otherwise:
   } else {
      // Create a corresponding error-message
      // and add it to your array "errors"
      errors.push('Don\'t forget your message!');
      // End your conditional here.
   }

   /*
   +-----------------+
   | FEEDBACK/ERRORS |
   +-----------------+
   */
   // Check if there is anything in array errors
   if (errors.length > 0) {
      // If so: 
      // Print it in JavaScript console.
      console.log(errors);
      // Otherwise:
   } else {
      // Print the data in JavaScript console.
      console.log(data);
      fn.value = '';
      em.value = '';
      msg.value = '';
      errors = [];
      // Clear text-fields
      // End your conditional here.
   }
}
// Close your function here

// Register your form to "click" event.
btn.addEventListener('click', formValid);