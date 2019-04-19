angular
  .module("MySite")

  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      
      .when("/home", {
        template: "<home></home>"
      })
      
      .when("/resume", {
        template: "<resume></resume>"
      })

      .when("/portfolio", {
        template: "<portfolio></portfolio>"
      })

      .when("/about-me", {
        template: "<about-me></about-me>"
      })

      
      .otherwise({
        redirectTo: "/home"
      });
  }]);