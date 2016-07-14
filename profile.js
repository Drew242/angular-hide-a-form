console.log('angular time bitch');
angular.module('profileApp', []);

angular.module('profileApp')
  .controller('profile', [
    '$http',
    profileCtrl
  ]);

function profileCtrl($http) {
  var profile       = this;
  profile.btnClick  = false;
  profile.showBtn   = true;
  profile.hideBtn   = false;
  profile.name      = 'Samuel L. Jackson';
  profile.bio       = "Oh, I'm sorry. Did I break your concentration?";
  profile.books     = 'Ezekiel 25:17';
  profile.libraries = 'Angula Mutha Fucka';

  profile.showForm  = function() {
    profile.btnClick = !profile.btnclick;
    profile.showBtn  = !profile.showBtn;
    profile.hideBtn  = !profile.hideBtn;
  }
  profile.hideForm  = function() {
    profile.btnClick = false; // why did I need to explicitly declare false here??
    profile.showBtn  = !profile.showBtn;
    profile.hideBtn  = !profile.hideBtn;
  }
}
