const express = require('express');
const router = express.Router();
const pokedex = require('../models/pokedex')

//para aparecer no navegador
//informações básicas sobre o pokemon
router.get('/pokemon/:name' , async function( req , res , next ) {
  const pokemon = await pokedex.getPokemon(rep.params.name)
  
  res.json(pokemon)
});

//informações sobre a espécie do pokemon
router.get('/pokemon/especie/id') , async function( req , res , next ){
  const especie = await pokedex.getPokemonSpecie(rep.params.id)
  
  res.json(especie)
}

//informações sobre a evolução do pokemon
router.get('/pokemon/evolucao/:id' , async function ( req , res , next ){
  //para acessar sobre a evolução do pokemon é necessário entrar primeiro
  //na espécie dele, por isso estamos usando "especie" nesse caso tamebém
  const especie  = await pokedex.getPokemonSpecie(rep.params.id)
  const url      = especie.pokedex.getPokemonEvolution(url)
  const evolucao = await pokedex.getPokemonEvolution(url)

  res.json(evolucao)
})

//Todas as informações do Pokemon
router.get('/pokemon/all/:name' , async function ( req , res , next ){
  const pokemon  = await pokedex.getPokemon(rep.params.name)
  const especie  = await pokedex.getPokemonSpecie(rep.params.id)
  const url      = especie.pokedex.getPokemonEvolution(url)
  const evolucao = await pokedex.getPokemonEvolution(url)

  res.json(
    pokemon,
    especie,
    evolucao)

    res.json(resposta)
})



module.exports = router;
