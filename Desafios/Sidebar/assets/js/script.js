const openMenu = document.querySelector('.menu');
const menuOpener = document.querySelector('.menu-opener');
const menuLogOut = document.querySelector('.menu-logOut');

openMenu.addEventListener('click', openSideBar);

function openSideBar() {
  if (
    menuOpener.classList.contains('open') == false &&
    menuLogOut.classList.contains('open') == false
  ) {
    menuOpener.classList.add('open');
    menuLogOut.classList.add('open');
  } else {
    menuOpener.classList.remove('open');
    menuLogOut.classList.remove('open');
  }
}
