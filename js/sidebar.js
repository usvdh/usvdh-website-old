const button = document.querySelector('.sidebar-button');
const sidebar = document.getElementById('sidebar')

button.addEventListener('click', _ => {
  sidebar.classList.toggle('collapsed');
})