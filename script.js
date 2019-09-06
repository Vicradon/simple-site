const $ = n => document.querySelector(n);
const log = n => console.log(n);
// const navMenuTrigger = $('.nav-menu-trigger')
const typedTitle = $('#typed-title');
const form = $('form');
// const typedStuff = $('.typed-stuff');
const saveToFirestore = $('.save-to-firestore');
const navBackground = $('.nav-background');
const activateTextBox = $('.activate-textbox');
const nav = $('nav');
const textbox = $('#textbox');
const add = $('.add');
const mainContent = $('.main-content');




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
activateTextBox.onclick = () => {
  if (textbox.style.display === 'block') {
    textbox.style.display = 'none'
    activateTextBox.textContent = "activate textbox";
  }
  else {
    textbox.style.display = 'block'
    activateTextBox.textContent = "deactivate textbox";
  }
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCz-VkRWYmkKkJct4tFStqcZQ1CrN_qePo",
  authDomain: "simple-site-22c52.firebaseapp.com",
  databaseURL: "https://simple-site-22c52.firebaseio.com",
  projectId: "simple-site-22c52",
  storageBucket: "simple-site-22c52.appspot.com",
  messagingSenderId: "105690052094",
  appId: "1:105690052094:web:26475ced40b29e7553bcaf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//link to firestore
const db = firebase.firestore();
saveToFirestore.addEventListener('click', e => {
  if (mainContent.innerHTML != '') {
    const tempPostList = [];
    mainContent.childNodes.forEach(node => tempPostList.push(node.innerHTML));
    // tempPostList.forEach((x, i) => {
    //   if (typeof(x) === undefined) tempPostList.splice(i, 1);
    // })
    for (let i = 0; i < tempPostList.length; i++) {
      if (typeof (tempPostList[i] === undefined)) tempPostList.splice(i, 1);
    }
    //const postList = tempPostList.map((x, i) => eval(`{${i}:'${x}'}`));
    tempPostList.forEach(post => db.collection('posts').doc('my posts').set({
      title: "a title",
      body: `${post}`
    }));
  }
});