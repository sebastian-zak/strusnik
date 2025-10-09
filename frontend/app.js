(() => {
  const $ = (sel, root = document) => root.querySelector(sel);

  const modal = $('.modal');
  const loginForm = $('#login-form');
  const registerBtn = $('#register-btn');
  const logoutBtn = $('#logout-btn');

  $('#year').textContent = new Date().getFullYear();

  openModal();

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
  });

  registerBtn.addEventListener('click', () => {
    closeModal();
  });

  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  function closeModal(){
    if(!modal) return;
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  function openModal(){
    if(!modal) return;
    modal.style.display = 'grid';
    document.body.classList.add('modal-open');
    const login = loginForm.querySelector('input[name="login"]');
    const pass  = loginForm.querySelector('input[name="password"]');
    if (login) login.value = '';
    if (pass)  pass.value  = '';
    login?.focus();
  }
})();
