/* DOM ELEMENTS */
const newQuote = document.getElementById('new-quote');
const bgColor = document.getElementsByClassName('background-color');
const textColor = document.getElementsByClassName('text-color');
const text = document.getElementById('text');
const author = document.getElementById('author');

/* Color */
let colors = [
    '#0080ff',
    '#8000ff',
    '#ffd700',
    '#218d21',
    '#df2020',
    '#FFD700',
    '#8B4513'
];

/* Quotes */
let quotes = [
    {quote: '"You only live once, but if you do it right, once is enough."', author: 'Mae West'},
    {quote: '"Be the change that you wish to see in the world."', author: 'Mahatma Gandhi'},
    {quote: '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."', author: 'Maya Angelou'},
    {quote: '"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."', author: 'Steve Jobs'},
    {quote: '"Curiosity about life in all of its aspects, I think, is still the secret of great creative people."', author: 'Leo Burnett'},
    {quote: '"Everything negative – pressure, challenges – is all an opportunity for me to rise."', author: 'Kobe Bryant'},
    {quote: '"As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others."', author: 'Audrey Hepburn'},
    {quote: '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."', author: 'Albert Einstein'}
]

/* Function: Random Number Generator */
const randomNumber = (arr) => {
    let current = Math.floor(Math.random() * arr.length);
    // if current number equals previous color/quote, 
    // then generate another number 
    // to avoid color/quote to appear consecutively
    while(current === prevColor || current === prevQuote) {
        current = Math.floor(Math.random() * arr.length);
    }

    return current;
}

let prevColor, prevQuote;

/* Function: Get a new quote */
const getQuote = () => {
    let colorIndex = randomNumber(colors);
    let quoteIndex = randomNumber(quotes);

    prevColor = colorIndex;
    prevQuote = quoteIndex;

    for(let i = 0; i < bgColor.length; i++) {
        bgColor[i].style.backgroundColor = colors[colorIndex];
        bgColor[i].style.transition = '1.1s';
    }

    for(let i = 0; i < textColor.length; i++) {
        textColor[i].style.color = colors[colorIndex];
        textColor[i].style.transition = 'color 1.5s';
    }

    text.innerHTML = quotes[quoteIndex].quote;
    author.innerHTML = '- ' + quotes[quoteIndex].author;
}

newQuote.addEventListener('click', getQuote);
