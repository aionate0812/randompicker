let pickButton;
let pairButton;
let aramButton;
let header;
let body;
let choice;
let titles;

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

// let titles = [
//   "The Just",
//   "The Magnificent",
//   "The Magnanimous",
//   "The Knower of Things",
//   "The Golden Hearted",
//   "The Clever",
//   "The Great Wit",
//   "The Kind",
//   "The Caring",
//   "The Jovial",
//   "The Courageous",
//   "Whose Friendship is Magic",
//   "Lover of Trail Mix",
//   "The Caffeinated",
//   "Lover of Brooklyn",
//   "The Whisperer",
// ];

// '#f7e100',
// "#500000"
//  '#fbdd45',
// '#880000',
//  '#780000',

let colors = [
  '#cf5d47',
  '#26A49A',
  '#ffed00',
  '#800000',
  '#f5d245',
  '#480000',
];

let cur = 0;

document.addEventListener('DOMContentLoaded', () => {

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  pairButton = document.getElementById('pairButton');  
  choice = document.getElementById('choice');

  pickButton.addEventListener('click', pickOnClick );
  pairButton.addEventListener('click', pairClick );
});



let pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  let rand = students.splice(Math.floor(Math.random() * students.length),1); 
  // let title = titles.splice(Math.floor(Math.random() * titles.length), 1);
  let x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      body.style.backgroundColor = 'goldenrod;'
      window.clearInterval(x);
      cur = 0;
      if (rand[0].length % 2 === 0) {
        rand[0] = rand[0] 
      }
      choice.innerText = (rand[0] /*+ ' ' + title*/).toUpperCase() + '!'
    
      // return;
      
    }  
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  });
  console.log("current color cur:",colors[cur])
}


let pairClick = function (event) {
  choice.innerHTML = '&nbsp;'
  let rand = students.splice(Math.floor(Math.random() * students.length),1); 
  let randTwo = students.splice(Math.floor(Math.random() * students.length),1);

  let x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerHTML = rand + ' + ' + randTwo
      // return;  
    }  
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 100);
}