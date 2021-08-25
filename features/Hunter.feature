# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar
    Para que os Travelers possam se alimentar

    Contexto:
        Dado um Hunter de nome "Osvaldo"
        E ele sempre começa a viagem com a refeição igual a 2 
        E ele sempre começara a viagem saudável.

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade refeições deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições tem que ser igual a 0
        E o Hunter ficará doente

    Cenário: Doou alimento para um Traveler
        Então O Hunter doa 2 refeições para um Traveler

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade refeições deve-se ser igual a 7