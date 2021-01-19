const button = document.querySelector('.sidebar-button');

button.addEventListener('click', _ => {
  document.getElementById('sidebar').classList.toggle('collapsed');
})