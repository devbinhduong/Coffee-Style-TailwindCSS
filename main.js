const topMenu = document.getElementById('csm-menu'),
    toggleMenu = document.getElementById("csm-toggle-menu");

    document.addEventListener('click', (e) => {
        // * ------ if click to toggle icon ------
        if(toggleMenu.contains(e.target)) {
            topMenu.classList.toggle('hidden');
            topMenu.classList.toggle('menu-expanded')
        } else {
            if(!topMenu.contains(e.target)) {
                topMenu.classList.add('hidden');
                topMenu.classList.remove('menu-expanded')
            }
        }
    })