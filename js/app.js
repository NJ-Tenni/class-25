let sidebar = document.querySelector('#sidebar');
document.querySelector('#menu_toggle').addEventListener('click',()=> {
    sidebar.classList.toggle('hide')
});

let btn = document.querySelector('#light-dark');
let html = document.documentElement;

btn.addEventListener('click', ()=>{
    html.classList.toggle('dark');
    
    if(html.classList.contains('dark')){
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('mode','dark');
    }else{
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.removeItem('mode');
    }
})

if(localStorage.getItem('mode') == 'dark'){
    html.classList.add('dark');
}
