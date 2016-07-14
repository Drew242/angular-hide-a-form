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
  profile.name      = 'Samuel L. Jackson';
  profile.bio       = "You don't know me";
  profile.books     = 'Catcher in the Rye';
  profile.libraries = 'Angula Mutha Fucka';

  profile.showForm  = function() {
    console.log('show it bitch');
    profile.btnClick = !profile.btnclick;
  }
}
