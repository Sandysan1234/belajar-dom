// // dom selection

// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll


// // document.getElementById -> megembalikan element

// const pertama = document.getElementById("judul");
// pertama.style.color= '#FF8225';
// pertama.style.backgroundColor= '#ccc';
// pertama.innerHTML = 'Rizky Rahmahdian sandy'

// const section = document.getElementById('b')
// section.style.backgroundColor = 'blue';     

// // document.getElementsByTagName() -> HTMLCollections

// const pa = document.getElementsByTagName('p');

// for(let i = 0 ; i < pa.length; i++){
//     pa[i].style.backgroundColor = 'lightblue';
// }

// const h1=document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';


// // document.getElementsByClassName()
// // HTMLCollections

// const p1 = document.getElementsByClassName('p1')[0];



// // document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "50px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// //querySelectorAll()
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "red";
// }
// j


// manipulation element
// element.innerHTML
// element.style<property css>

// menambahkan atribut di tag html
// element.addAttribute()
// element.setAttribute()
// element.removeAttribute()

// memanipulasi kelas .kelas
// element.classList()




// const judul = document.getElementById('judul');
// judul.innerHTML = 'Semb';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML =  '<div><p>paragraf 14</p></div>'

// const p2 = document.querySelector('.p2');
// p2.innerHTML = `<div>
// <p>makan yuk bang</p></div>`

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'salmon';
// const judul = document.getElementsByTagName('h1')[0];
// // judul.setAttribute('name','semb')

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// a.getAttribute('id');
// a.removeAttribute('href')




// const p2 = document.querySelector('.p2');
// p2.setAttribute('class','label') 

// document.body.classList.add('biru-muda');  -> menambah kelas
// document.body.classList.remove('biru-muda');  -> menghilangkan kelas
// document.body.classList.toggle ('biru-muda');  -> menghilangkan jika sudah ada kelas, menambah jika tidak  ada kelas


// menambahkan kelas  di .p2
// const p2 = document.querySelector('.p2')
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');

// setelah menambahkan 3 kelas di .p2
// code  di bawah fungsinya mencari kelas index 2 itu apa? dalam hal ini .dua
// document.body.classList.item(2); -> output 2 hitungnya dari 0

// menanyakan apakah ada kelas yg bernama dua
// p2.classList.contains('dua');

// mengganti kelas satu menjadi kelas lima
// p2.classList.replace('satu','lima');

