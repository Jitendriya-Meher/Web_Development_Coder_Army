const quotes = [
    { "philosopher": "Socrates", "quote": "The unexamined life is not worth living." },
    { "philosopher": "Plato", "quote": "Be kind, for everyone you meet is fighting a harder battle." },
    { "philosopher": "Aristotle", "quote": "Happiness is the meaning and the purpose of life, the whole aim and end of human existence." },
    { "philosopher": "Confucius", "quote": "It does not matter how slowly you go as long as you do not stop." },
    { "philosopher": "René Descartes", "quote": "I think, therefore I am." },
    { "philosopher": "Immanuel Kant", "quote": "Science is organized knowledge. Wisdom is organized life." },
    { "philosopher": "Friedrich Nietzsche", "quote": "He who has a why to live can bear almost any how." },
    { "philosopher": "John Stuart Mill", "quote": "Genius can only breathe freely in an atmosphere of freedom." },
    { "philosopher": "Jean-Paul Sartre", "quote": "Man is nothing else but what he makes of himself." },
    { "philosopher": "Albert Camus", "quote": "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion." },
    { "philosopher": "Lao Tzu", "quote": "A journey of a thousand miles begins with a single step." },
    { "philosopher": "Marcus Aurelius", "quote": "You have power over your mind—not outside events. Realize this, and you will find strength." },
    { "philosopher": "Baruch Spinoza", "quote": "The highest activity a human being can attain is learning for understanding, because to understand is to be free." },
    { "philosopher": "David Hume", "quote": "Reason is, and ought only to be, the slave of the passions." },
    { "philosopher": "Simone de Beauvoir", "quote": "One is not born, but rather becomes, a woman." },
    { "philosopher": "Georg Wilhelm Friedrich Hegel", "quote": "Nothing great in the world has ever been accomplished without passion." },
    { "philosopher": "Epicurus", "quote": "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for." },
    { "philosopher": "Zeno of Citium", "quote": "We have two ears and one mouth, so we should listen more than we say." },
    { "philosopher": "Heraclitus", "quote": "No man ever steps in the same river twice, for it’s not the same river and he’s not the same man." },
    { "philosopher": "Ralph Waldo Emerson", "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." }
]

const root = document.getElementById("root");
const quote = document.getElementById("quote");

const colors = [
    { "name": "Light Gray", "hex": "#D3D3D3" },
    { "name": "Beige", "hex": "#F5F5DC" },
    { "name": "Ivory", "hex": "#FFFFF0" },
    { "name": "Mint Cream", "hex": "#F5FFFA" },
    { "name": "Lavender", "hex": "#E6E6FA" },
    { "name": "Pale Blue", "hex": "#AFEEEE" },
    { "name": "Alice Blue", "hex": "#F0F8FF" },
    { "name": "Honeydew", "hex": "#F0FFF0" },
    { "name": "Sea Shell", "hex": "#FFF5EE" },
    { "name": "Gainsboro", "hex": "#DCDCDC" },
    { "name": "Light Steel Blue", "hex": "#B0C4DE" },
    { "name": "Powder Blue", "hex": "#B0E0E6" },
    { "name": "Cornsilk", "hex": "#FFF8DC" },
    { "name": "Floral White", "hex": "#FFFAF0" },
    { "name": "Light Cyan", "hex": "#E0FFFF" },
    { "name": "Pale Green", "hex": "#98FB98" },
    { "name": "Linen", "hex": "#FAF0E6" },
    { "name": "Misty Rose", "hex": "#FFE4E1" },
    { "name": "Peach Puff", "hex": "#FFDAB9" },
    { "name": "Antique White", "hex": "#FAEBD7" }
];

function display(){

    const index1 = Math.floor(Math.random() * quotes.length+1);
    const index2 = Math.floor(Math.random() * colors.length+1);

    quote.innerHTML = quotes[index1].quote;
    root.style.backgroundColor = colors[index2].hex;

}

setInterval(display, 3000);