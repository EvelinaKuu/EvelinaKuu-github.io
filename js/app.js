function init() {


  $(document).ready(function() {
    $('#fullpage').fullpage({
      anchors: ['home', 'about', 'work', 'skills', 'contact'],
      menu: '#menu'
      // verticalCentered: false
    });
  });
}

init();


//
// function init() {
//   $(document).ready(function(){
//     $('.button-collapse').sideNav();
//     $('#fullpage').fullpage({
//       anchors: ['about', 'projects', 'skills', 'contact'],
//       menu: '#myMenu',
//       verticalCentered: false
//     });
//     $('.materialboxed').materialbox();
//   });
// }
// init();
