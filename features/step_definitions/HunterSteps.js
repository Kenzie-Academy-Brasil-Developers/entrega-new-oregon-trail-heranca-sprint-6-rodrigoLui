const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { cacador } = require("../../app");
const Hunter = require("../../models/Hunter");
const Traveler = require("../../models/Traveler");

// GIVEN //
Given('um Hunter de nome {string}', function (string) {
    cacador.name = string
});

Given('ele sempre começa a viagem com a refeição igual a {int}', function (int) {
    cacador.food = int
});

Given('ele sempre começara a viagem saudável.', function () {
    cacador.isHealthy = true
});

// WHEN //
When('o Hunter sair para caçar {int} vezes', function (int) {
    for (let i = 0; i < int; i++) {
        cacador.hunt()
    }
});
  
When('o Hunter parar para comer {int} vezes', function (int) {
    for (let i = 0; i < int; i++) {
        cacador.eat()
    }
});

// THEN //
Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
});

Then('a quantidade refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});

Then('O Hunter doa {int} refeições para um Traveler', function (int) {
    cacador.giveFood()
});



Then('a quantidade refeições deve-se ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});

Then('a quantidade de refeições tem que ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});


Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)
});