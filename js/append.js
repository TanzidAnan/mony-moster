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

mainSection.appendChild(section)