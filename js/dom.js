console.log('Hello welcome to DOM');
console.log(document.body);

const liCollection=document.getElementsByTagName('li');
// console.log(liCollection);

const changeName =document.getElementById('fruits-title');
changeName.innerText='fruits change Name js'

for(const list of liCollection){
    // console.log(list.innerText)
}

const student ={
    name:'ABUL',
    ID:11,
    study:function(time){
        // console.log(time,'study kortese')
    }
}

    // নতুন আইটেম যোগ করার ফাংশন
      function addItem() {
        const ul = document.getElementById("myList");
        const li = document.createElement("li");
        li.textContent = "নতুন ফল";
        ul.appendChild(li);
      }

      // শেষ আইটেম মুছে ফেলার ফাংশন
      function removeItem() {
        const ul = document.getElementById("myList");
        const lastItem = ul.lastElementChild;
        if (lastItem) {
          ul.removeChild(lastItem);
        }
      }
