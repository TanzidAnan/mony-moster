const placesList =document.getElementById('places-list');
const li =document.createElement('li');
li.innerText='borisal';

placesList.appendChild(li);

// main content

const mainSection =document.getElementById('main-content')


const section =document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText='My food List';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1 =document.createElement('li');
li1.innerText='ami bath kabo';
ul.appendChild(li1);
const li2 =document.createElement('li')
li2.innerText='biryani';
ul.appendChild(li2)
section.appendChild(ul)

mainSection.appendChild(section)