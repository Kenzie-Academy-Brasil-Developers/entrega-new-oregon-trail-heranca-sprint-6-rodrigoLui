const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler");

// GIVEN //
Given('um Hunter de nome {string}', function (string) {
    this.name = string
});

// WHEN //
When('o Hunter sair para caçar {int} vezes', function (int) {
    return 'pending';
});
  
When('o Hunter parar para comer {int} vezes', function (int) {
    return 'pending';
});

// THEN //
Then('o Hunter não ficará doente', function () {
    return 'pending';
});
Then('o Hunter ficará doente', function () {
    return 'pending';
});

Then('O Hunter doa {int} refeições para um Traveler', function (int) {
    assert.strictEqual(viajante.amountFood > 0)
});