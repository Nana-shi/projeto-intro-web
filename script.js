/*Atividades semana 1*/

const nomeAnime = "One Piece"
const numeroEpisodios = 1000
const dublagem = true
const nomePersonagens = ["Luffy", "Zoro", "Sanji"]

const nomeAnime2 = "Steins;Gate"
const numeroEpisodios2 = 25
const dublagem2 = false
const nomePersonagens2 = ["Okabe", "Kurisu", "Mayuri"]

const nomeAnime3 = "Full Metal Alchemist"
const numeroEpisodios3 = 64
const dublagem3 = true
const nomePersonagens3 = ["Edward", "Alphonse", "Roy Mustang"]

const media = (numeroEpisodios+numeroEpisodios2+numeroEpisodios3)/3

const dublagens = dublagem && dublagem2 && dublagem3

console.log("Média de episodios dos três:", media)
console.log("Todos tem dublagem?", dublagens)

console.log(nomeAnime.toUpperCase(), "\nNumero de episodios:", numeroEpisodios, "\nTem dublagem oficial?", dublagem, 
"\nNome de alguns personagens:", nomePersonagens)

console.log(nomeAnime2.toUpperCase(), "\nNumero de episodios:", numeroEpisodios2, "\nTem dublagem oficial?", dublagem2, 
"\nNome de alguns personagens:", nomePersonagens2)

console.log(nomeAnime3.toUpperCase(), "\nNumero de episodios:", numeroEpisodios3, "\nTem dublagem oficial?", dublagem3,
"\nNome de alguns personagens:", nomePersonagens3)

/*Fim da primeira atividade*/