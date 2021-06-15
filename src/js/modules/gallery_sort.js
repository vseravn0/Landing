const headers = document.querySelectorAll('.production__bar-list__item');
const g1 = document.querySelectorAll('.group1');
const g2 = document.querySelectorAll('.group2');
const g3 = document.querySelectorAll('.group3');
const g4 = document.querySelectorAll('.group4');
export const items = document.querySelectorAll('.production__gallery-item');
const gallery = [items, g1, g2, g3, g4];

headers.forEach((item, i) => {
    sortImg(item, gallery[i]);
});

function sortImg(header, group) {
    header.addEventListener('click', () => {
        showImg(group);
    });
}

function showImg(arrayImg) {
    items.forEach(element => {
        element.style.display = "none";
        element.classList.remove('slide'); // delete navigation for the slider
    });
    arrayImg.forEach(item => {
        item.style.display = "block";
        item.classList.add('slide'); // creating navigation for the slider
    });
}