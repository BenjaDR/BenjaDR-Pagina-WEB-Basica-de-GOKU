
const menuIcon = document.getElementById('Menu-Icon');

const menuIconClose = document.getElementById('Menu-Icon-Close');

const menuItem = document.getElementById('Menu-Item');

const parrafo = document.getElementById('Parrafo');

const verso = document.getElementById('Verso')

const boton = document.getElementById('Boton')

const goku = document.getElementById('Goku');

menuIcon.addEventListener('click', () => {
  menuItem.classList.add('Active');
  menuIcon.classList.add('Menu__Icon__DS');
  menuIconClose.classList.add('Menu__Icon__Close__RS');
  parrafo.classList.add('Parrafo-IM')
  verso.classList.add('Verso-IM')
  boton.classList.add('Boton-IM')
  goku.classList.add('GokuDisabled');
});

menuIconClose.addEventListener('click', () => {
  menuItem.classList.remove('Active');
  menuIconClose.classList.remove('Menu__Icon__Close__RS');
  menuIcon.classList.remove('Menu__Icon__DS');
  goku.classList.remove('GokuDisabled');
  parrafo.classList.remove('Parrafo-IM')
  verso.classList.remove('Verso-IM')
  boton.classList.remove('Boton-IM')
})