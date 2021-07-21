import axios from "axios" ;
//A API utilizada é online

//Apenas um obj deve retornar as informações do pokemon


    axios.get("https://pokeapi.co/api/v2/pokemon/jigglypuff")
    //o then retorna uma nova promise diferente da original
    .then((response) => {

        //colocar todas as informações do Pokemón da API
        let info = {
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

        //segunda parte, onde pegaremos algumas informações mais específicas do Pokémon em questão
        axios.get("https://pokeapi.co/api/v2/pokemon-species/174/")
        .then((response) => {
            let update = {
                versao_anterior : response.data.name,
                bebe            : response.data.is_baby,
                legendario      : response.data.is_legendary,
                mistico         : response.data.is_mythical,


            }
            //pegar a próxima evolução
            axios.get("https://pokeapi.co/api/v2/pokemon-species/40/")
            .then((response) => {
                let proximo = {
                    evolui_para : response.data.name,
                }
                //retorna a próxima evolução
                console.log(proximo)
            })
            //retorna o update de informações extras
            console.log(update)

        })
        //retorna as informações básicas sobre o pokémon
        console.log(info)
    })
    
