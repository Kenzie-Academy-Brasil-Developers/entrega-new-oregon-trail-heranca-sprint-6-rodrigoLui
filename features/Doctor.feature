# language: pt

Funcionalidade: Doctor 
    Como um Doctor
    Eu devo Curar outros Travelers
    Para que possam seguir viagem saudáveis

    Contexto:
        Dado um Doctor de nome "Claudio"
        E ele sempre começa com 1 refeições
        E ele sempre começa a viagem saudável 

    Cenário: Curou um viajante doente
        Quando Doctor recebe um viajante Travelers doente
        Então ele torna seu isHealthy para true