function cityTaxes(name, population, treasury) {

    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            return this.population += Math.floor(percentage / 100 * this.population);
        },
        applyRecession(percentage) {
            return this.treasury -= Math.floor(percentage / 100 * this.treasury);
        }
    }

}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
