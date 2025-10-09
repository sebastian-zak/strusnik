(() => {
  const $  = sel => document.querySelector(sel);
  const $$ = sel => [...document.querySelectorAll(sel)];

  const modal = $('.modal');
  const form = $('#login-form');
  const registerBtn = $('#register-btn');
  const logoutBtn = $('#logout-btn');
  const menuButtons = $$('.menu-btn');

  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  openModal();

  form?.addEventListener('submit', e => {
    e.preventDefault();
    closeModal();
    toggleMenu(true);
  });

  registerBtn?.addEventListener('click', () => {
    closeModal();
    toggleMenu(true);
  });

  logoutBtn?.addEventListener('click', e => {
    e.preventDefault();
    toggleMenu(false);
    openModal();
  });

  function toggleMenu(enable) {
    menuButtons.forEach(btn => {
      btn.disabled = !enable;
      btn.style.cursor = enable ? 'pointer' : 'not-allowed';
    });
    logoutBtn?.setAttribute('aria-disabled', enable ? 'false' : 'true');
  }

  function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  function openModal() {
    if (!modal) return;
    modal.style.display = 'grid';
    document.body.classList.add('modal-open');
    form?.querySelectorAll('input').forEach(i => i.value = '');
    form?.querySelector('input[name="login"]')?.focus();
  }
})();
