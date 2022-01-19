const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){
  tabContent[0].classList.add('active');
  // Modo toggle
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('active');
    })
    tabContent[index].classList.add('active');  
  }

  // Click active
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  })
}