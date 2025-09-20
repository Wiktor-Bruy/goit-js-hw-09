'use strict';

let formData = { email: '', message: '' };
const forma = document.querySelector('.feedback-form');

// Заповнюємо полля вводу при завантаженні сторінки, за умови, що локальне сховище не порожнє

document.addEventListener('DOMContentLoaded', setUserData);

function setUserData() {
  const data = localStorage.getItem('feedback-form-state');

  if (data != null) {
    const email = document.querySelector('.email');
    const message = document.querySelector('.text');
    const userData = JSON.parse(data);

    if (userData.email != '') {
      email.value = userData.email;
    }
    if (userData.message != '') {
      message.value = userData.message;
    }
    formData = userData;
  }
}

// Додаємо відстежування події вводу даних в поля і запис їх у сховище

forma.addEventListener('input', event => {
  const form = event.target;
  const type = form.getAttribute('name');
  if (type === 'email') {
    formData.email = form.value;
  } else if (type === 'message') {
    formData.message = form.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Додаємо відстежування сабміту форми і очищення даних зі сховища

forma.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    form.reset();
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
  }
});
