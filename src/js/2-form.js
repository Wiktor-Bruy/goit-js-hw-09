'use strict';

const forma = document.querySelector('.feedback-form');

// forma.addEventListener('DOMContentLoaded', event => {
//   const data = localStorage.getItem('feedback-form-state');

//   if (data != null) {
//     const email = document.querySelector('.email');
//     const message = document.querySelector('.text');
//     const userData = JSON.parse(data);

//     if (userData.email != '') {
//       email.value = userData.email;
//     }
//     if (userData.message != '') {
//       message.value = userData.message;
//     }
//   }
// });

let formData = { email: '', message: '' };

forma.addEventListener('input', event => {
  const form = event.target;
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  console.log(formData);
});

// forma.addEventListener('submit', event => {
//   event.preventDefault();
//   const form = event.target;
//   formData.email = form.elements.email.value.trim();
//   formData.message = form.elements.message.value.trim();

//   if (formData.email === '' || formData.message === '') {
//     alert('Fill please all fields');
//   } else {
//     form.reset();
//     console.log(formData);
//   }
// });
