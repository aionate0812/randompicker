let students = [
  "Pamela",
  "Robert",
  "Mielyn",
  "Daniel",
  "Syed",
  "Malcom",
  "Jorge",
  "Victoria",
  "Qiuyun",
  "Srirupa",
  "Stephanie",
  "Vincent",
  "Nadav",
  "Richard",
  "Nicole",
  "Chuyun",
  "Osita",
  "Tarekul",
  "Hervey",
  "Anthony",
  "Alexander",
  "Abdel",
  "Jennifer",
  "Steven",
  "Johnny",
  "Jose",
  "Serge",
  "Ivy",
  "Karan",
  "Aaron",
  "Van",
  "Heriberto",
  "Erika",
];

let pickButton = document.getElementById('pickButton');
let choice = document.getElementById('choice');
pickButton.addEventListener('click', e => {
  let rand = students.splice(Math.floor(Math.random() * students.length),1); 
  let time = parseInt(parseSearch(window.location.search).time) || 45;
  choice.innerText = time + '!'
  const timeout = window.setInterval(() => {
    time--;
    if (time <= 0) {
        choice.innerText = rand[0] + '!'; 
        clearInterval(timeout);
        return;
    }

     choice.innerText = time + '!'
  }, 1000);
});

const parseSearch = search => search.slice(1).split('&').reduce((hash, curr) => {
    const bits = curr.split('=');
    hash[bits[0]] = bits[1];
    return hash;
}, {});
