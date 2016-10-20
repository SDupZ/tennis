(function() {
    var active = false;
    var menuIcon = $('.menu-icon');
    var overlay = $('.overlay-content');

    var toggleMenu = function() {
      if (!active) {
          //Show Menu
          menuIcon.addClass("is-active");
          overlay.addClass("overlay-content--is-active");
          active = true;
      } else {
          //Hide Menu
          menuIcon.removeClass("is-active");
          overlay.removeClass("overlay-content--is-active");
          console.log("Hide Menu");
          active = false;
      }
    }

    menuIcon.on('click', toggleMenu);
}());
