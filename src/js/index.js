function hidemenu(){
    document.querySelector('.sh-left-side-menu-container').style.display = 'none';
    document.querySelector('.sh-menu-hover').style.display = 'none';
    document.querySelector('.sh-left-side-menu-container-icon').style.display = 'block';
    document.querySelector('.show-short-menu').style.display = 'block';
}
function showSidemenu(){
    document.querySelector('.sh-left-side-menu-container').style.display = 'block';
    document.querySelector('.sh-menu-hover').style.display = 'block';
    document.querySelector('.sh-left-side-menu-container-icon').style.display = 'none';
    document.querySelector('.show-short-menu').style.display = 'none';
}