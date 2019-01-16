let index = 0;
let amount = 0;
const currTransl = [];
let translationComplete = true;

// eslint-disable-next-line func-names
const transitionCompleted = function () {
    translationComplete = true;
};

document.addEventListener('DOMContentLoaded', () => {
    amount = document.getElementsByTagName('img').length;
    document.getElementsByTagName('span')[0].innerHTML = amount;
    for (let i = 0; i < amount; i++) {
        currTransl[i] = -340;
        document.getElementsByTagName('img')[i].addEventListener('transitionend', transitionCompleted, true);
        document.getElementsByTagName('img')[i].addEventListener('webkitTransitionEnd', transitionCompleted, true);
        document.getElementsByTagName('img')[i].addEventListener('oTransitionEnd', transitionCompleted, true);
        document.getElementsByTagName('img')[i].addEventListener('MSTransitionEnd', transitionCompleted, true);
    }
    console.log('DOM fully loaded and parsed');
});

// eslint-disable-next-line no-unused-vars
function left() {
    if (translationComplete === true) {
        translationComplete = false;
        index--;
        if (index === -1) {
            index = amount - 1;
        }
        const outerIndex = (index) % amount;
        document.getElementById('index').innerHTML = outerIndex === 0 ? 7 : outerIndex;
        for (let i = 0; i < amount; i++) {
            const img = document.getElementsByClassName('img')[i];
            img.style.opacity = '1';
            img.style.transform = `translate(${currTransl[i] + 340}px)`;
            currTransl[i] += 340;
        }

        const outerImg = document.getElementsByClassName('img')[outerIndex];
        outerImg.style.transform = `translate(${currTransl[outerIndex] - 340 * (amount)}px)`;
        outerImg.style.opacity = '0';
        currTransl[outerIndex] -= 340 * (amount);
    }
}

// eslint-disable-next-line no-unused-vars
function right() {
    if (translationComplete === true) {
        translationComplete = false;
        index++;
        const outerIndex = (index - 1) % amount;
        document.getElementById('index').innerHTML = outerIndex + 1;
        for (let i = 0; i < amount; i++) {
            const img = document.getElementsByClassName('img')[i];
            img.style.opacity = '1';
            img.style.transform = `translate(${currTransl[i] - 340}px)`;
            currTransl[i] -= 340;
        }
        const outerImg = document.getElementsByClassName('img')[outerIndex];
        outerImg.style.transform = `translate(${currTransl[outerIndex] + 340 * (amount)}px)`;
        outerImg.style.opacity = '0';
        currTransl[outerIndex] += 340 * (amount);
    }
}
