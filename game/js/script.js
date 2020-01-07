// Challenge 1: Your Age in Days

function ageInDays() {
    const birthYear = prompt('What year were you born... Good friend?');
    const ageInDays = (2020 - birthYear) * 365;
    const h1 = document.createElement('h1');
    const textAnswer = document.createTextNode('You are ' + ageInDays + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

