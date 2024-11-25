const texts = [
    "Keanggunan dalam Setiap Detail",
    "Tampil Mempesona Setiap Saat",
    "Kualitas Premium untuk Anda",
    "Definisi Baru Kemewahan"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
let text = '';

function type() {
    const currentText = texts[index];
    
    if (isDeleting) {
        text = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        text = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    document.getElementById('text').textContent = text;

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
