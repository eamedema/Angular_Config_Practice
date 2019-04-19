function ResumeController() {
    const ctrl = this;

  }
  
  angular.module('MySite').component('resume', {
    template: `
    <section id="resume">
        <h2>resume</h2>
    </section>
    `, // or use templateUrl
    controller: ResumeController
});