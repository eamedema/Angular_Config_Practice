function PortfolioController() {
    const ctrl = this;

  }
  
  angular.module('MySite').component('portfolio', {
    template: `
    <section id="portfolio">
        <h2>portfolio</h2>
    </section>
    `, // or use templateUrl
    controller: PortfolioController
});