//const Pokedex  =  require('pokedex-promise-v2') ;
//const pokedex  =  new Pokedex();
const axios = require ("axios");

//função para retornar as informações básicas
async function getPokemon (name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return{
            nome        : response.data.name,
            experiencia : response.data.base_experience, 
            habilidades : response.data.abilities,
            status      : response.data.stats,
            peso        : response.data.weight,
            altura      : response.data.height,
            especies    : response.data.species,
            tipo        : response.data.types,
            movimentos  : response.data.moves
        }
    }

//função para retornar as informações de espécies
async function getPokemonSpecie (id){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    return{
            versao_anterior : response.data.name,
            bebe            : response.data.is_baby,
            legendario      : response.data.is_legendary,
            mistico         : response.data.is_mythical,
    }

}

//função para retornar as informações sobre a evolução
async function getPokemonEvolution (url){
    const response = await axios.get(url)
    return{
        evolui_para : response.data.name,
    }
}

//Para chamar as funções
    //Para ver as informações básicas
    getPokemon("jigglypuff").then(res => {
        console.log(res)
    })

    //Para ver informações sobre a espécie
    getPokemonSpecie("174").then(res =>{
        console.log(res)
    })

    //Para ver as informações sobre a evolução
    getPokemonEvolution("40").then(res=>{
        console.log(res)
    })

    module.exports = {
        getPokemon,
        getPokemonSpecie,
        getPokemonEvolution
    }