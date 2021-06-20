// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }
  
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }

var viewSidebar= true;
var allowCloseElem=false;
var mainElem=document.getElementById("main");
var sidebarElem = document.getElementById("mySidebar");


if(window.innerWidth>=600){
  var mainwidth = window.innerWidth-250;
  viewSidebar= true;
  allowCloseElem = false;
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("nav-fixed-t").style.width= `${mainwidth}px`;
  document.getElementById("navbar-logo").style.display='none';
}else{
  viewSidebar= false;
  allowCloseElem=true;
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("nav-fixed-t").style.width= `${window.innerWidth}px`;
  document.getElementById("navbar-logo").style.display='block';
}

window.addEventListener('resize', ()=>{
  if(window.innerWidth>=600){
    var mainwidth = window.innerWidth-250;
    viewSidebar= true;
    allowCloseElem=false;
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("nav-fixed-t").style.width= `${mainwidth}px`;
    document.getElementById("navbar-logo").style.display='none';
  }else{
    viewSidebar= false;
    allowCloseElem=true;
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("nav-fixed-t").style.width= `${window.innerWidth}px`;
    document.getElementById("navbar-logo").style.display='block';
  }
});


var closeElem = document.getElementsByClassName('close-menu');
for (var i = 0; i < closeElem.length; i++) {
  var current = closeElem[i];
  current.addEventListener('click', function() {
    if(allowCloseElem){
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.getElementById("nav-fixed-t").style.width= `${window.innerWidth}px`;
      document.getElementById("navbar-logo").style.display='block';
      viewSidebar= false;
    }
  }, false);
}

var toggleElem = document.getElementsByClassName('toggle-menu');
for (var i = 0; i < toggleElem.length; i++) {
  var current = toggleElem[i];
  current.addEventListener('click', function() {
    if(viewSidebar){
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.getElementById("nav-fixed-t").style.width= `${window.innerWidth}px`;
      document.getElementById("navbar-logo").style.display='block';
      viewSidebar= false;
    }else{
      var mainwidth = window.innerWidth-250;
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("navbar-logo").style.display='none';
      viewSidebar= true;
      if(!allowCloseElem){
        document.getElementById("nav-fixed-t").style.width= `${mainwidth}px`;
      }
    }
  }, false);
}

