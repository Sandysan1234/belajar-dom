//dom manipulation part 2
// manipulation element dan node
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

const pbaru = document.createElement('p');
const text = document.createTextNode('paragraf baru ini!!');

pbaru.appendChild(text);

const sectionA  = document.getElementById('a');
sectionA.appendChild(pbaru);


const libaru = document.createElement('li');
const textli = document.createTextNode('ini list tambahan');
libaru.appendChild(textli);


const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(libaru, li2);


const remove = document.getElementsByTagName('a')[0];
sectionA.removeChild(remove);

const  h5baru = document.createElement('h5');
const texth5 = document.createTextNode('ini subjudul yang bagus');
h5baru.appendChild(texth5);

const selec = document.querySelector('section#b')
const h5 = selec.querySelector('ul')

selec.insertBefore(h5baru, h5 )


const gantip = document.createElement('p');
const textganti = document.createTextNode('text ini pengganti h5');
gantip.appendChild(textganti);

// selec.replaceChild(gantip, h5baru)
