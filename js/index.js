const nav = document.getElementById('nav');
function setNone() {
    nav.classList.toggle('flex');
}
const burg = document.getElementById('show');

burg.onclick = (event) => {
    burg.classList.toggle('active');
    document.body.classList.toggle('lock');
    setNone();
};
