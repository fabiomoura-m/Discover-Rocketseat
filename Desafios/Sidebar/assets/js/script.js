const buttonMenu = document.querySelector('.btn_menu');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.img_search');

buttonMenu.onclick = function () {
  sidebar.classList.toggle('active');
};
searchBtn.onclick = function () {
  sidebar.classList.toggle('active');
};
