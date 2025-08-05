const sections =document.querySelectorAll('section');;
// console.log(section);

for(const section of sections){
    section.style.border='2px solid red';
    section.style.marginBottom='5px';
    section.style.borderRadius='15px';
    section.style.padding='15px';
    section.style.backgroundColor='#e0dbdb'
}

const pleacesContainer=document.getElementById('places-contener');
pleacesContainer.style.backgroundColor='#7a0000ff'