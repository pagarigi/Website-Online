/*========= SHOW MENU =========*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // validate that variabels exist
    if (toggle && nav){
        toggle.addEventListener('click' , ()=>{
            // we add the show-menu class to the div tag with the nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*========= REMOVE MENU UNTUK TAMPILAN MOBILE =========*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))