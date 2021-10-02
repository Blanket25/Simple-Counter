const counterContainer = document.getElementById('counter-div')
const counter = document.createElement('div');
const lessBtn = document.createElement('button');
const moreBtn = document.createElement('button');

counterContainer.appendChild(lessBtn);
counterContainer.appendChild(counter);
counterContainer.appendChild(moreBtn);

counter.textContent = 0;
lessBtn.textContent = '-';
moreBtn.textContent = '+';

counterContainer.classList.add('counter-container')
counter.classList.add('counter');

moreBtn.addEventListener('click', () => {
    counter.textContent ++
})

lessBtn.addEventListener('click', () => {
    if(counter.textContent > 0) {
        counter.textContent --
    }
})