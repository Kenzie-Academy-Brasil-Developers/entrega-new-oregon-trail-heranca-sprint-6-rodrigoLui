const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { medico, viajante } = require("../../app");

// Given //
Given('um Doctor de nome {string}', function (string) {
    this.name = string;    
});

Given('ele sempre começa com {int} refeições', function (int) {
    this.food = int    
});

Given('ele sempre começa a viagem saudável', function () {
    this.isHealthy = true    
});

// When //
When('Doctor recebe um viajante Travelers doente', function () {
    medico.heal(viajante)
});

// THEN //
Then('ele torna seu isHealthy para true', function () {
    assert.strictEqual(viajante.isHealthy, true)
});