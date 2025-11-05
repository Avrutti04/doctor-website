<nav class="nav-buttons">
    <button onclick="location.href='index.html' ">home</button>
    <button onclick="location.href='#about us' ">about</button>
    <button onclick="location.href='#serivces' ">serivce</button>
    <button onclick="location.href='#review' ">blog</button>
    <button onclick="location.href='#contact us' ">contact</button>
</nav>
header


let sections = document.querySelector('section');
let navb = document.querySelector('.navbar');

window.onscroll=() => {
    Selection.forEach(sec => {
        let top =window.scrollY;
        let offset=sec.offsetTop;
        let height= sec.offsetHeight;
        let id=sec.getAttributes('id');

    
if(top >= offset && top < offset +height){
navLinks.forEach(links => {
links.classList.remove('active');
document.querySelector('header nav a [href*=+ id +]').classList.add('active');
});
};
});
};


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}