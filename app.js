window.onload = () => {
    // Carregar estrutura do menu
    startMenuEffect();

    controlSubmenu();
}

function startMenuEffect(){
    const menu = document.querySelector(`.menu`);
    
    window.onscroll = menuManipulation;

    function menuManipulation(){
        let scrollPosition = window.pageYOffset;

        if(scrollPosition > 60){
            menu.classList.add(`dark-menu`);
        }else{

        }


        menu.style.backgroundColor = `rgba(255,255,255, ${scrollPosition / 100})`;
    }
}

function controlSubmenu(){
    const menuItems = document.querySelectorAll(`.menu-item`);
    menuItems.forEach(el => {
        el.addEventListener(`mouseover`,showSubmenu);
        el.addEventListener(`mouseover`,hideSubmenu);
    });

    function showSubmenu(el){
        let submenu = el.target.parentElement.nextElementSibling;
        submenu.classList.add(`show`);
    }

    function hideSubmenu(){
        let submenu = el.target.parentElement.nextElementSibling;
        submenu.classList.remove(`show`);

    }
}