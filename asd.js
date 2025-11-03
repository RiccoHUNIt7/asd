const szavak = [
    { angol: 'Apple', magyar: 'Alma' },
    { angol: 'Banana', magyar: 'Banán' },
    { angol: 'Orange', magyar: 'Narancs' },
    { angol: 'Grape', magyar: 'Szőlő' },
    { angol: 'Lemon', magyar: 'Citrom' },
    { angol: 'Peach', magyar: 'Őszibarack' },
    { angol: 'Strawberry', magyar: 'Eper' },
    { angol: 'Watermelon', magyar: 'Görögdinnye' }
];

function createButtons() {
    const angolCol = document.getElementById('angol');
    const magyarCol = document.getElementById('magyar');
    angolCol.innerHTML = '';
    magyarCol.innerHTML = '';

    const angolSzavak = szavak.map(s => s.angol).sort(() => Math.random() - 0.5);
    const magyarSzavak = szavak.map(s => s.magyar).sort(() => Math.random() - 0.5);

    angolSzavak.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'word-btn';
        btn.textContent = word;
        btn.dataset.type = 'angol';
        btn.dataset.word = word;
        btn.onclick = handleAngolClick;
        angolCol.appendChild(btn);
    });
    magyarSzavak.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'word-btn';
        btn.textContent = word;
        btn.dataset.type = 'magyar';
        btn.dataset.word = word;
        btn.onclick = handleMagyarClick;
        magyarCol.appendChild(btn);
    });
}

let selectedAngol = null;

function handleAngolClick(e) {
    if (e.target.classList.contains('correct')) return;
    selectedAngol = e.target;
}

function handleMagyarClick(e) {
    if (!selectedAngol || e.target.classList.contains('correct')) return;
    const angol = selectedAngol.dataset.word;
    const magyar = e.target.dataset.word;
    const par = szavak.find(s => s.angol === angol && s.magyar === magyar);
    if (par) {
        selectedAngol.classList.add('correct');
        e.target.classList.add('correct');
    }
    selectedAngol = null;
}

document.addEventListener('DOMContentLoaded', createButtons);