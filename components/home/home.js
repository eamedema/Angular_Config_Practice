function HomeController() {
    const ctrl = this;

  }
  
  angular.module('MySite').component('home', {
    template: `
    <section id="home">
        <h2>home</h2>
    </section>
    `, // or use templateUrl
    controller: HomeController
});