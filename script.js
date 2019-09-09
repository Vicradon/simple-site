const $ = n => document.querySelector(n);
const $$ = n => document.querySelectorAll(n);
const log = n => console.log(n);
const navMenuTrigger = $('.nav-menu-trigger')
const typedTitle = $('#typed-title');
const form = $('form');
// const typedStuff = $('.typed-stuff');
const saveToFirestore = $('.save-to-firestore');
const navBackground = $$('.nav-background');
const activateTextBox = $$('.activate-textbox');
const nav = $('nav');
const textbox = $('#textbox');
const add = $('.add');
const mainContent = $('.main-content');
const navMenu = $('.nav-menu');
const close = $('.close');


navMenuTrigger.onclick = () => {
  navMenu.style.height = "80vh";
  navMenu.style.display = "block";
}

close.onclick = () => {
  navMenu.style.height = "0";
  navMenu.style.display = "none";
}

add.addEventListener('click', e => {
  // e.preventDefault();
  // if (typedTitle.value.split.length < 2){
  //     alert('You must type more than two characters')
  // }
  if (typedTitle.value != '') {
    const typedStuff = document.createElement('div');
    typedStuff.classList.add('typed-stuff');
    const typedStuffHeading = document.createElement('h1');
    const typedStuffContent = document.createElement('div');
    typedStuffHeading.classList.add('typed-stuff-heading');
    typedStuffContent.classList.add('typed-stuff-content');
    // typedStuffContent.classList.add('truncate');
    typedStuffHeading.textContent = typedTitle.value;
    typedStuffContent.textContent = textbox.value;
    typedStuff.appendChild(typedStuffHeading);
    typedStuff.appendChild(typedStuffContent);
    mainContent.appendChild(typedStuff);
    typedTitle.value = '';
    textbox.value = '';
    saveToFirestore.style.display = 'block';
  }
});

navBackground.onclick = () => {
  nav.style.backgroundColor === "rgb(102, 102, 102)" ? nav.style.backgroundColor = 'rgb(100, 150, 255)' : nav.style.backgroundColor = "rgb(102, 102, 102)";
}
activateTextBox.forEach(x => x.onclick = () => {
  if (textbox.style.display === 'block') {
    textbox.style.display = 'none'
    activateTextBox.textContent = "activate textbox";
  }
  else {
    textbox.style.display = 'block'
    activateTextBox.textContent = "deactivate textbox";
  }
})

saveToFirestore.addEventListener('click', e => {
  if (mainContent.innerHTML != '') {
    const tempPostList = [];
    mainContent.childNodes.forEach(node => tempPostList.push(node.innerHTML));
    tempPostList.shift();
    log(tempPostList);
    tempPostList.forEach(post => db.collection('posts').add({
      title: "a title",
      body: `${post}`
    })
      .then(() => { console.log("Document successfully written!") })
      .catch((error) => { console.error("Error writing document: ", error) })
    );
  }
});