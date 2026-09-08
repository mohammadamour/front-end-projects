const arrayQuotes = [
  "It is during our darkest moments that we must focus to see the light.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
  "The way to get started is to quit talking and begin doing.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Write your principles in pen and your business model in pencil.",
  "When something is important enough, you do it even if the odds are not in your favor.",
  "If you want to change the fruits, you will first have to change the roots. If you want to change the visible, you must first change the invisible. ",
  "Every problem is a gift. Without problems we would not grow. ",
  "Early to bed, early to rise, work like hell, and advertise.",
  "Clean out a corner of your mind and creativity will instantly fill it.",
  "Always look at what you have left. Never look at what you have lost.",
  "When you judge another, you do not define them; you define yourself.",
  "A mind is like a parachute. It doesn’t work if it isn’t open.",
  "Education is like a double-edged sword. It may be turned to dangerous uses if it is not properly handled.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Never leave that till tomorrow which you can do today.",
  "The real opportunity for success lies within the person and not in the job.",
  "It’s not what you look at that matters, it’s what you see.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Peace comes from within. Do not seek it without.",
  "Peace begins with a smile.",
  "You must be the change you wish to see in the world.",
  "Others can stop you temporarily – you are the only one who can do it permanently.",
  "Life is like a camera. Just focus on what’s important, capture the good times, develop from the negatives, and if things don’t work out, just take another shot.",
  "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
  "Life has no limitations, except the ones you make.",
  "Do what you can, with what you have, where you are.",
  "The man who removes a mountain begins by carrying away small stones.",
  "A journey of a thousand leagues begins beneath one’s feet.",
  "Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.",
  "Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid ",
  "A person who never made a mistake never tried anything new.",
  "I haven’t failed. I’ve just found 10,000 ways that won’t work.",
  "You miss 100% of the shots you don’t take.",
  "If opportunity doesn’t knock, build a door.",
  "To live is the rarest thing in the world. Most people exist, that is all",
  "As a well-spent day brings happy sleep, so a life well spent brings happy death.",
  "You only live once, but if you do it right, once is enough.",
  "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
  "If you tell the truth, you don’t have to remember anything.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "Wise men speak because they have something to say; fools because they have to say something.",
  "The only true wisdom is knowing that you know nothing.",
  "We must not allow other people's limited perceptions to define us.",
  "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
  "Your worth consists in what you are and not in what you have.",
  "That which does not kill us makes us stronger.",
];

const arrayAuthors = [
  "Helen Keller",
  "Eleanor Roosevelt",
  "Robert Louis Stevenson",
  "Mother Teresa",
  "James Cameron",
  "Walt Disney",
  "Nelson Mandela",
  "Josh Kopelman",
  "Elon Musk",
  "T. Harv Eker",
  "Anthony Robbins",
  "laurence J.peter",
  "Dee Hock",
  " Robert H. Schuller",
  "Wayne Dyer",
  "Frank Zappa",
  "Wu Ting-Fang",
  "Mahatma Gandhi",
  "Benjamin Franklin",
  "Zig Ziglar",
  "Henry David Thoreau",
  "Dalai Lama",
  "Muhammad Ali",
  "Mother Teresa",
  "Mahatma Gandhi",
  "Unknown",
  "Zig Ziglar",
  "Unknown",
  "Carl Bard",
  "Les Brown",
  "Theodore Roosevelt",
  "Chinese Proverbs",
  "Lao Tzu",
  "Winston Churchill",
  "Albert Einstein",
  "Albert Einstein",
  "Thomas Edison",
  "Wayne Gretzky",
  "Milton Berle",
  "Leonardo da Vinci",
  "Mae West",
  "Oprah Winfrey",
  "Mark Twain",
  "Eleanor Roosevelt",
  "Plato",
  "Socrates",
  "Virginia Satir",
  "Bernard M. Baruch",
  "Thomas Edison",
  "Friedrich Nietzsche",
];


const arraynums = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50"
];
    // alert(Math.floor(Math.random() * 60));


let txt = document.getElementById("changable");

let author = document.querySelector(".the-author")

let num = document.querySelector(".num");

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    const randomNumber = Math.floor(Math.random() * arrayAuthors.length);

    const randomQuote = arrayQuotes[randomNumber];

    const randomAuthor = arrayAuthors[randomNumber];

    const randomcount = arraynums[randomNumber];

    txt.innerHTML = randomQuote;

    author.innerHTML = randomAuthor;

    num.innerHTML = randomcount;

});