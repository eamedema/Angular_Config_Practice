function AboutMeController() {
    const ctrl = this;

  }
  
  angular.module('MySite').component('aboutMe', {
    template: `
    <section id="about-me">
        <h2>about me</h2>
    </section>
    `, // or use templateUrl
    controller: AboutMeController
});