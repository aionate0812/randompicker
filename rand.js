var pickButton;
var pairButton;
var aramButton;
var header;
var body;
var choice;
var titles;

var students = [
  "Aaron",
  "Cedrick",
  "Cindi",
  "Ethan",
  "George",
  "Grey",
  "Ike",
  "Jahmaali",
  "Jai'lyn",
  "Jalanie",
  "Jason",
  "Jeremy",
  "Joel",
  "Jordin",
  "Joseph",
  "Joshua",
  "Josiah",
  "Kory",
  "Lamar",
  "Mario",
  "Nathan",
  "Tyquan",
  "Tyreke",
  "Kyle",
  "Julien"
];

var titles = [
  "The Just",
  "The Magnificent",
  "The Magnanimous",
  "The Knower of Things",
  "The The Golden Hearted",
  "The Clever",
  "The Great Wit",
  "The Kind",
  "The Caring",
  "The Jovial",
  "The Courageous",
  "Whose Friendship is Magic",
  "Lover of Trail Mix",
  "The Caffeinated",
  "Lover of Brooklyn",
  "The Whisperer",
];

// '#f7e100',
// "#500000"
//  '#fbdd45',
// '#880000',
//  '#780000',

var colors = [
  '#cf5d47',
  '#26A49A',
  '#ffed00',
  '#800000',
  '#f5d245',
  '#480000',
];



var cur = 0;

document.addEventListener('DOMContentLoaded', () => {

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  pairButton = document.getElementById('pairButton');  
  choice = document.getElementById('choice');

  pickButton.addEventListener('click', pickOnClick );
  pairButton.addEventListener('click', pairClick );
});



var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice(Math.floor(Math.random() * students.length),1); 
  var title = titles.splice(Math.floor(Math.random() * titles.length), 1);
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      body.style.backgroundColor = 'goldenrod;'
      window.clearInterval(x);
      cur = 0;
      if (rand[0].length % 2 === 0) {
        rand[0] = rand[0] 
      }
      choice.innerText = (rand[0] + ' ' + title).toUpperCase() + '!'
    
      // return;
      
    }  
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 100);
  console.log("current color cur:",colors[cur])
}


var pairClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice(Math.floor(Math.random() * students.length),1); 
  var randTwo = students.splice(Math.floor(Math.random() * students.length),1);

  var x = window.setInterval(() => {
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