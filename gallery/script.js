const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

const content= document.getElementById('photoGallery');
const nphotos = 7;
var temp = '';

for(var i = 0; i< nphotos ; i++){
  if(i==0){
    temp += "<div class='row'>";
  }
  else if(i%4==0){
    temp += "</div><div class='row'>"
  }
  temp += "<div class='col-4 col-3 col-2 photoDiv'> <img class='photo' src=images/img_"+i+".jpg></div>";
}

content.innerHTML = temp;

