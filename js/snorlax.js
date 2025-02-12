const snorlaxGifElement = document.getElementById('snorlaxGif');
const snorlaxNoteElement = document.getElementById('snorlaxNote');
const snorlaxThemeBtn = document.getElementById('snorlaxTheme');
const dittoThemeBtn = document.getElementById('dittoTheme');

const snorlaxGifArray = [
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGpqdGIzemRmMDdndnk2bG1kcm00dHdzZTJ4NG5iYXRtZHAxczl3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/n2ytlxNQLodGM/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDhiZnN2cGNmYXM5MHQwM3J3MGF6eWZ4cm5qZDV4bXZtc2xpZHVyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TRxqZpk5pBhBUyPz7q/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW1sYzJhbnZ0cXdzbm40MTE3ZjJ5aHFoM29icmtjNng5ajlsMWlndyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BRknt505v4n3W/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHd0YWdrZ2YzcnJjemFoMXh2MHpwZmwyNzg0ZW9rZjF2M2l5OXlreSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sHsZvppC581TM7jlca/giphy.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTh1aHZsZ2J2M2h2eTlvbXQ5ZWQ2YzlnMzdpOWV5NXppb3FxMmR2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ByKdTPqEnzn1e/giphy.gif',
    'https://64.media.tumblr.com/1924c008ed96895d3b29eb537edd0dff/tumblr_mfb0zpzaPb1rpn9eno1_500.gif'
];

const snorlaxNotes = [
    "Rumor has it that he sleeps so well, even alarms give up.",
    "No regrets, just dreams. And naps. Lots of naps.",
    "When he's not sleeping, he's dreaming about sleeping.",
    "Life is too short to not take naps.",
    "He's not lazy, he's just energy-efficient.",
    "The only thing he's chasing is his next meal.",
    "He's not fat, he's just fluffy.",
    "Big dreams require big naps.",
    "Snorlax believes in eating, sleeping, and repeating.",
    "Big back something first, work on your design later.",
    "The only thing that can wake him up is the smell of food.",
    "He's not lazy, he's just saving energy for his next meal.",
    "He's not fat, he's just big-boned. And fluffy. And cuddly.",
    "He's not snoring, he's just dreaming out loud."
];

const dittoGif = 'https://media.tenor.com/st6vDtbyyQwAAAAi/ditto-pokemon.gif';
const dittoNote = "Ditto! (That's all he says.)";

let currentTheme = localStorage.getItem('theme') || 'snorlax';
let previousGifIndex = -1;
let previousNoteIndex = -1;

if (currentTheme === 'snorlax') {
    document.body.classList.add('snorlax-theme');
} else if (currentTheme === 'ditto') {
    document.body.classList.add('ditto-theme');
}

function getRandomIndex(array, previousIndex) {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * array.length);
    } while (newIndex === previousIndex);
    return newIndex;
}

function updateGifAndNote() {
    if (currentTheme === 'snorlax') {
        previousGifIndex = getRandomIndex(snorlaxGifArray, previousGifIndex);
        snorlaxGifElement.src = snorlaxGifArray[previousGifIndex];

        previousNoteIndex = getRandomIndex(snorlaxNotes, previousNoteIndex);
        snorlaxNoteElement.textContent = snorlaxNotes[previousNoteIndex];
    } else if (currentTheme === 'ditto') {
        snorlaxGifElement.src = dittoGif;
        snorlaxNoteElement.textContent = dittoNote;
    }
}

updateGifAndNote();

snorlaxGifElement.addEventListener('click', () => {
    if (currentTheme === 'snorlax') {
        updateGifAndNote();
    }
});

snorlaxThemeBtn.addEventListener('click', () => {
    currentTheme = 'snorlax';
    document.body.classList.remove('ditto-theme');
    document.body.classList.add('snorlax-theme');
    previousGifIndex = -1;
    previousNoteIndex = -1;
    localStorage.setItem('theme', currentTheme);
    updateGifAndNote();
});

dittoThemeBtn.addEventListener('click', () => {
    currentTheme = 'ditto';
    document.body.classList.remove('snorlax-theme');
    document.body.classList.add('ditto-theme');
    localStorage.setItem('theme', currentTheme);
    updateGifAndNote();
});
