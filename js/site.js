//alert("Hello, this is from my js file!");

// menu toggle

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;