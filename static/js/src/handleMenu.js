(function() {
    var active = false;
    var menuIcon = $('.menu-icon');
    var overlay = $('.overlay-content');
    var body = $('body');

    var toggleMenu = function() {
      if (!active) {
          //Show Menu
          menuIcon.addClass("is-active");
          menuIcon.addClass("menu-icon--is-active");
          overlay.addClass("overlay-content--is-active");
          body.addClass("noscroll");
          active = true;
      } else {
          //Hide Menu
          menuIcon.removeClass("is-active");
          overlay.removeClass("overlay-content--is-active");
          menuIcon.removeClass("menu-icon--is-active");
          body.removeClass("noscroll");
          active = false;
      }
    }

    menuIcon.on('click', toggleMenu);
}());
