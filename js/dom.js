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
