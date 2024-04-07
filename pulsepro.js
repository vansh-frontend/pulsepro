window.onload = function() {
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  });
};


function toggleMenu() {
  var sideNav = document.getElementById('sideNav');
  sideNav.classList.toggle('active');
}
