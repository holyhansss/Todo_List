const quotes = [
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다",
        author: "파울로 코엘료",
    },
    {
        quote: "Carpe Diem. 현재를 잡아라",
        author: "호라티우스",
    },
    {
        quote: "Lost time is never found again.",
        author: "Benjamin Franklin",
    },
    {
        quote: "He that respects himself is safe from others",
        author: "Henry Wadsworth Longfellow",
    },
    {
        quote: "In three words I can sum up everything I’ve learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "It is the province of knowledge to speak, and it is the privilege of wisdom to listen.",
        author: "HOliver Wendell Holmes Sr.",
    },
    {
        quote: "Nothing that you have not given away will ever be really yours.",
        author: "C. S. Lewis",
    },
    {
        quote: "Love is like the wind, you can't see it but you can feel it.",
        author: "Nicholas Sparks",
    },
    {
        quote: "Happiness is holding someone in your arms and knowing you hold the whole world.",
        author: "Orhan Pamuk",
    },
    {
        quote: "True love stories never have endings.",
        author: "Richard Bach",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
