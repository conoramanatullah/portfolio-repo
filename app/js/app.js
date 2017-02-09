(function(){
  // ********************
  //  FUNCTIONS
  // ********************

  function firebaseInit() {
    var config = {
      apiKey: "AIzaSyAap8bihVVZRiHpM1sQLSlOSTWfC0D_5w0",
      authDomain: "portfolio-d7a24.firebaseapp.com",
      databaseURL: "https://portfolio-d7a24.firebaseio.com",
      storageBucket: "portfolio-d7a24.appspot.com",
      messagingSenderId: "52951670412"
    };
    firebase.initializeApp(config);
    console.warn('Initializing Firebase')
    return true;
  }


  function uiInit(){
    var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70,
      'touch':false
    });

    document.querySelector('.toggle-button').addEventListener('click', function() {
      slideout.toggle();
    });



  }

  // ********************
  //  Initialization
  // ********************
  // Initializing Firebase, foundation and UI.

  firebaseInit();

  $(document).foundation();

  uiInit();
  
  // ********************
  // UI Events and event listeners
  // ********************





})();
