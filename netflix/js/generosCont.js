

let filmesAcao = [
    { id: "madmax", link_img: "../Img/filmes/madmax.jpg", nome: "Mad Max: Estrada da Fúria", link_pagina: "../html/filmesDescricao.html#madmax" },
    { id: "matrix", link_img: "../Img/filmes/MATRIX.jpg", nome: "Matrix", link_pagina: "../html/filmesDescricao.html#matrix" },
    { id: "batman", link_img: "../Img/filmes/BATMAN.jpg", nome: "O Cavaleiro das Trevas", link_pagina: "../html/filmesDescricao.html#batman" },
    { id: "johnwick", link_img: "../Img/filmes/JOHN-WICK.jpg", nome: "John Wick: De Volta ao Jogo", link_pagina: "../html/filmesDescricao.html#johnwick" },
    { id: "duroDematar", link_img: "../Img/filmes/DURO-DE-MATAR.jpg", nome: "Duro de Matar", link_pagina: "../html/filmesDescricao.html#duroDematar" },
    { id: "soldadoryan", link_img: "../Img/filmes/resgateDosoldadoRyan.jpg", nome: "O Resgate do Soldado Ryan", link_pagina: "../html/filmesDescricao.html#soldadoryan" },
    { id: "gladiador", link_img: "../Img/filmes/Gladiador.jpg", nome: "Gladiador", link_pagina: "../html/filmesDescricao.html#gladiador" },
    { id: "exterminador2", link_img: "../Img/filmes/ExterminadorDoFuturo2.jpg", nome: "O Exterminador do Futuro 2", link_pagina: "../html/filmesDescricao.html#exterminador2" },
    { id: "theraid", link_img: "../Img/filmes/The-Raid.jpg", nome: "Operação Invasão", link_pagina: "../html/filmesDescricao.html#theraid" },
    { id: "topgun", link_img: "../Img/filmes/TopGun.jpg", nome: "Top Gun: Maverick", link_pagina: "../html/filmesDescricao.html#topgun" }
];

function chamaFilmesAcao() {

    let elemento10 = document.getElementById("filmes-Acao");

    let listaFilmesAcao = "";

    for(index = 0; index < filmesAcao.length; index++) {    
        
        listaFilmesAcao += `<div class="container-filme-img"><a href="` + filmesAcao[index].link_pagina + `"><img alt="` + filmesAcao[index].nome + `" title="` + filmesAcao[index].nome + `" src="` + filmesAcao[index].link_img + `" class="container-img" /></a></div>`;
    }
    if(elemento10 !== null) {
        elemento10.innerHTML = listaFilmesAcao;
    }
    
}
chamaFilmesAcao();



//xxxxxxxxxxxxxxxxxxx  COMEDIA   xxxxxxxxxxxxxxx//
let filmesComedia = [
    { id: "anjos_lei", link_img: "../Img/filmes/comedia/Anjos-da-Lei (comedia).jpg", nome: "Anjos da Lei", link_pagina: "../html/filmesDescricao.html#anjos_lei" },
    { id: "branquelas", link_img: "../Img/filmes/comedia/Como-Branquelas (comedia).jpg", nome: "As Branquelas", link_pagina: "../html/filmesDescricao.html#branquelas" },
    { id: "curtindo_vida", link_img: "../Img/filmes/comedia/Curtindo-a-Vida-Adoidado (comedia).jpg", nome: "Curtindo a Vida Adoidado", link_pagina: "../html/filmesDescricao.html#curtindo_vida" },
    { id: "feitico_tempo", link_img: "../Img/filmes/comedia/Feitiço-do-Tempo-(comedia).jpg", nome: "Feitiço do Tempo", link_pagina: "../html/filmesDescricao.html#feitico_tempo" },
    { id: "monty_python", link_img: "../Img/filmes/comedia/Monty-Python-em-Busca-do-Cálice-Sagrado (comedia).jpg", nome: "Monty Python em Busca do Cálice Sagrado", link_pagina: "../html/filmesDescricao.html#monty_python" },
    { id: "auto_compadecida", link_img: "../Img/filmes/comedia/O-Auto-da-Compadecida (comedia).jpg", nome: "O Auto da Compadecida", link_pagina: "../html/filmesDescricao.html#auto_compadecida" },
    { id: "grande_hotel", link_img: "../Img/filmes/comedia/O-Grande-Hotel-Budapeste (comedia).jpg", nome: "O Grande Hotel Budapeste", link_pagina: "../html/filmesDescricao.html#grande_hotel" },
    { id: "se_beber_nao_case", link_img: "../Img/filmes/comedia/Se-Beber-Não-Case (comedia).jpg", nome: "Se Beber, Não Case!", link_pagina: "../html/filmesDescricao.html#se_beber_nao_case" },
    { id: "superbad", link_img: "../Img/filmes/comedia/Superbad-É Hoje (comedia).jpg", nome: "Superbad: É Hoje", link_pagina: "../html/filmesDescricao.html#superbad" },
    { id: "todo_mundo_quase_morto", link_img: "../Img/filmes/comedia/Todo-Mundo-Quase-Morto (comedia).jpg", nome: "Todo Mundo Quase Morto", link_pagina: "../html/filmesDescricao.html#todo_mundo_quase_morto" }
];

function chamaFilmesComedia() {
    let elementoComedia = document.getElementById("filmes-Comedia");
    let listaFilmesComedia = "";

    for(let indexComedia = 0; indexComedia < filmesComedia.length; indexComedia++) {    
        listaFilmesComedia += `<div class="container-filme-img"><a href="${filmesComedia[indexComedia].link_pagina}"><img alt="${filmesComedia[indexComedia].nome}" title="${filmesComedia[indexComedia].nome}" src="${filmesComedia[indexComedia].link_img}" class="container-img" /></a></div>`;
    }

    if(elementoComedia !== null) {
        elementoComedia.innerHTML = listaFilmesComedia;
    }
}
chamaFilmesComedia();




//xxxxxxxxxxxxxxxxx  DRAMA       xxxxxxxxxxxxxxxxxxxxx //
let filmesDrama = [
    { id: "lista_schindler", link_img: "../Img/filmes/drama/A-Lista-de-Schindler (drama).jpg", nome: "A Lista de Schindler", link_pagina: "../html/filmesDescricao.html#lista_schindler" },
    { id: "brilho_eterno", link_img: "../Img/filmes/drama/Brilho-Eterno-de-uma-Mente-sem-Lembranças (drama).jpg", nome: "Brilho Eterno de uma Mente sem Lembranças", link_pagina: "../html/filmesDescricao.html#brilho_eterno" },
    { id: "cidade_deus", link_img: "../Img/filmes/drama/Cidade-de-Deus (drama).jpg", nome: "Cidade de Deus", link_pagina: "../html/filmesDescricao.html#cidade_deus" },
    { id: "clube_luta", link_img: "../Img/filmes/drama/Clube da Luta (drama).jpg", nome: "Clube da Luta", link_pagina: "../html/filmesDescricao.html#clube_luta" },
    { id: "forrest_gump", link_img: "../Img/filmes/drama/Forrest Gump-O-Contador-de-Histórias (drama).jpg", nome: "Forrest Gump: O Contador de Histórias", link_pagina: "../html/filmesDescricao.html#forrest_gump" },
    { id: "padrinho", link_img: "../Img/filmes/drama/O Padrinho (drama).jpg", nome: "O Padrinho", link_pagina: "../html/filmesDescricao.html#padrinho" },
    { id: "truman_show", link_img: "../Img/filmes/drama/O Show de Truman (drama).jpg", nome: "O Show de Truman", link_pagina: "../html/filmesDescricao.html#truman_show" },
    { id: "parasita", link_img: "../Img/filmes/drama/Parasita (drama).jpg", nome: "Parasita", link_pagina: "../html/filmesDescricao.html#parasita" },
    { id: "sonho_liberdade", link_img: "../Img/filmes/drama/Um Sonho de Liberdade (drama).jpg", nome: "Um Sonho de Liberdade", link_pagina: "../html/filmesDescricao.html#sonho_liberdade" },
    { id: "whiplash", link_img: "../Img/filmes/drama/Whiplash-Em-Busca-da-Perfeição (drama).jpg", nome: "Whiplash: Em Busca da Perfeição", link_pagina: "../html/filmesDescricao.html#whiplash" }
];

function chamaFilmesDrama() {
    let elementoDrama = document.getElementById("filmes-Drama");
    let listaFilmesDrama = "";

    for(let indexDrama = 0; indexDrama < filmesDrama.length; indexDrama++) {    
        listaFilmesDrama += `<div class="container-filme-img"><a href="${filmesDrama[indexDrama].link_pagina}"><img alt="${filmesDrama[indexDrama].nome}" title="${filmesDrama[indexDrama].nome}" src="${filmesDrama[indexDrama].link_img}" class="container-img" /></a></div>`;
    }

    if(elementoDrama !== null) {
        elementoDrama.innerHTML = listaFilmesDrama;
    }
}
chamaFilmesDrama();

//xxxxxxxxxxxxxxxxxxx   FICCAO    xxxxxxxxxxxxxxxxxxxxxxxxxxx//

let filmesFiccao = [
    { id: "2001_odisseia", link_img: "../Img/filmes/ficcao/2001-Uma-Odisseia-no-Espaço (Ficcao).jpg", nome: "2001: Uma Odisseia no Espaço", link_pagina: "../html/filmesDescricao.html#2001_odisseia" },
    { id: "chegada", link_img: "../Img/filmes/ficcao/A Chegada (Ficcao).jpg", nome: "A Chegada", link_pagina: "../html/filmesDescricao.html#chegada" },
    { id: "origem", link_img: "../Img/filmes/ficcao/A Origem (Ficcao).jpg", nome: "A Origem", link_pagina: "../html/filmesDescricao.html#origem" },
    { id: "alien", link_img: "../Img/filmes/ficcao/Alien-o-Oitavo-Passageiro (Ficcao).jpg", nome: "Alien: O Oitavo Passageiro", link_pagina: "../html/filmesDescricao.html#alien" },
    { id: "blade_runner", link_img: "../Img/filmes/ficcao/Blade-Runner-2049 (Ficcao).jpg", nome: "Blade Runner 2049", link_pagina: "../html/filmesDescricao.html#blade_runner" },
    { id: "de_volta_futuro", link_img: "../Img/filmes/ficcao/De-Volta-para-o-Futuro (Ficcao).jpg", nome: "De Volta para o Futuro", link_pagina: "../html/filmesDescricao.html#de_volta_futuro" },
    { id: "duna", link_img: "../Img/filmes/ficcao/Duna (Ficcao).jpg", nome: "Duna", link_pagina: "../html/filmesDescricao.html#duna" },
    { id: "ex_machina", link_img: "../Img/filmes/ficcao/Ex-Machina-Instinto-Artificial (Ficcao).jpg", nome: "Ex Machina: Instinto Artificial", link_pagina: "../html/filmesDescricao.html#ex_machina" },
    { id: "interestelar", link_img: "../Img/filmes/ficcao/Interestelar (ficcao).jpg", nome: "Interestelar", link_pagina: "../html/filmesDescricao.html#interestelar" },
    { id: "quinto_elemento", link_img: "../Img/filmes/ficcao/O-Quinto-Elemento (Ficcao).jpg", nome: "O Quinto Elemento", link_pagina: "../html/filmesDescricao.html#quinto_elemento" }
];

function chamaFilmesFiccao() {
    let elementoFiccao = document.getElementById("filmes-Ficcao-Cientifica");
    let listaFilmesFiccao = "";

    for(let indexFiccao = 0; indexFiccao < filmesFiccao.length; indexFiccao++) {    
        listaFilmesFiccao += `<div class="container-filme-img"><a href="${filmesFiccao[indexFiccao].link_pagina}"><img alt="${filmesFiccao[indexFiccao].nome}" title="${filmesFiccao[indexFiccao].nome}" src="${filmesFiccao[indexFiccao].link_img}" class="container-img" /></a></div>`;
    }

    if(elementoFiccao !== null) {
        elementoFiccao.innerHTML = listaFilmesFiccao;
    }
}
chamaFilmesFiccao();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxx   ROMANCE        xxxxxxxxxxxxxxxxxxxx//

let filmesRomance = [
    { id: "10_coisas", link_img: "../Img/filmes/romance/10coisas-que-odeio-em-voce.jpg", nome: "10 Coisas que Odeio em Você", link_pagina: "../html/filmesDescricao.html#10_coisas" },
    { id: "antes_amanhecer", link_img: "../Img/filmes/romance/Antes-do-Amanhecer (Romance).jpg", nome: "Antes do Amanhecer", link_pagina: "../html/filmesDescricao.html#antes_amanhecer" },
    { id: "diario_paixao", link_img: "../Img/filmes/romance/Diário de uma Paixão (Romance).jpg", nome: "Diário de uma Paixão", link_pagina: "../html/filmesDescricao.html#diario_paixao" },
    { id: "fantasma", link_img: "../Img/filmes/romance/Fantasma-Do-Outro-Lado-da-Vida (Romance).jpg", nome: "Ghost: Do Outro Lado da Vida", link_pagina: "../html/filmesDescricao.html#fantasma" },
    { id: "la_la_land", link_img: "../Img/filmes/romance/LaLaLand-Cantando-Estações (Romance).jpg", nome: "La La Land: Cantando Estações", link_pagina: "../html/filmesDescricao.html#la_la_land" },
    { id: "amelie", link_img: "../Img/filmes/romance/O-Fabuloso-Destino-de-Amélie-Poulain (Romance).jpg", nome: "O Fabuloso Destino de Amélie Poulain", link_pagina: "../html/filmesDescricao.html#amelie" },
    { id: "orgulho_preconceito", link_img: "../Img/filmes/romance/Orgulho-e-Preconceito (Romance).jpg", nome: "Orgulho e Preconceito", link_pagina: "../html/filmesDescricao.html#orgulho_preconceito" },
    { id: "parasempre", link_img: "../Img/filmes/romance/PARASEMPRE(romance.jpg", nome: "Para Sempre", link_pagina: "../html/filmesDescricao.html#parasempre" },
    { id: "questao_tempo", link_img: "../Img/filmes/romance/Questão-de-Tempo (Romance).jpg", nome: "Questão de Tempo", link_pagina: "../html/filmesDescricao.html#questao_tempo" },
    { id: "titanic", link_img: "../Img/filmes/romance/Titanic (romance).jpg", nome: "Titanic", link_pagina: "../html/filmesDescricao.html#titanic" }
];

function chamaFilmesRomance() {
    let elementoRomance = document.getElementById("filmes-Romance");
    let listaFilmesRomance = "";

    for(let indexRomance = 0; indexRomance < filmesRomance.length; indexRomance++) {    
        listaFilmesRomance += `<div class="container-filme-img"><a href="${filmesRomance[indexRomance].link_pagina}"><img alt="${filmesRomance[indexRomance].nome}" title="${filmesRomance[indexRomance].nome}" src="${filmesRomance[indexRomance].link_img}" class="container-img" /></a></div>`;
    }

    if(elementoRomance !== null) {
        elementoRomance.innerHTML = listaFilmesRomance;
    }
}
chamaFilmesRomance();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxx    SUSPENSE        xxxxxxxxxxxxxxxxxxxxxxxx//

let filmesSuspense = [
    { id: "amnesia", link_img: "../Img/filmes/suspense/Amnésia (Suspense).jpg", nome: "Amnésia", link_pagina: "../html/filmesDescricao.html#amnesia" },
    { id: "cisne_negro", link_img: "../Img/filmes/suspense/Cisne-Negro (Suspense).jpg", nome: "Cisne Negro", link_pagina: "../html/filmesDescricao.html#cisne_negro" },
    { id: "garota_exemplar", link_img: "../Img/filmes/suspense/Garota-Exemplar (Suspense).jpg", nome: "Garota Exemplar", link_pagina: "../html/filmesDescricao.html#garota_exemplar" },
    { id: "oldboy", link_img: "../Img/filmes/suspense/Oldboy (Suspense).jpg", nome: "Oldboy", link_pagina: "../html/filmesDescricao.html#oldboy" },
    { id: "os_suspeitos", link_img: "../Img/filmes/suspense/Os Suspeitos (Suspense).jpg", nome: "Os Suspeitos", link_pagina: "../html/filmesDescricao.html#os_suspeitos" },
    { id: "sexto_sentido", link_img: "../Img/filmes/suspense/O-Sexto-Sentido (Suspense).jpg", nome: "O Sexto Sentido", link_pagina: "../html/filmesDescricao.html#sexto_sentido" },
    { id: "silencio_inocentes", link_img: "../Img/filmes/suspense/O-Silêncio-dos-Inocentes (Suspense).jpg", nome: "O Silêncio dos Inocentes", link_pagina: "../html/filmesDescricao.html#silencio_inocentes" },
    { id: "os_outros", link_img: "../Img/filmes/suspense/Os-Outros (Suspense).jpg", nome: "Os Outros", link_pagina: "../html/filmesDescricao.html#os_outros" },
    { id: "sete_crimes", link_img: "../Img/filmes/suspense/Sete-Os-Sete-Crimes-Capitais (Suspense).jpg", nome: "Seven: Os Sete Crimes Capitais", link_pagina: "../html/filmesDescricao.html#sete_crimes" },
    { id: "zodiaco", link_img: "../Img/filmes/suspense/Zodíaco (Suspense).jpg", nome: "Zodíaco", link_pagina: "../html/filmesDescricao.html#zodiaco" }
];

function chamaFilmesSuspense() {
    let elementoSuspense = document.getElementById("filmes-Suspense");
    let listaFilmesSuspense = "";

    for(let indexSuspense = 0; indexSuspense < filmesSuspense.length; indexSuspense++) {    
        listaFilmesSuspense += `<div class="container-filme-img"><a href="${filmesSuspense[indexSuspense].link_pagina}"><img alt="${filmesSuspense[indexSuspense].nome}" title="${filmesSuspense[indexSuspense].nome}" src="${filmesSuspense[indexSuspense].link_img}" class="container-img" /></a></div>`;
    }

    if(elementoSuspense !== null) {
        elementoSuspense.innerHTML = listaFilmesSuspense;
    }
}
chamaFilmesSuspense();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxx   TERROR          xxxxxxxxxxxxxxxxxxxx//

let filmesTerror = [
    { id: "a_bruxa", link_img: "../Img/filmes/terror/A Bruxa (terror).jpg", nome: "A Bruxa", link_pagina: "../html/filmesDescricao.html#a_bruxa" },
    { id: "corra", link_img: "../Img/filmes/terror/Corra! (terror).jpg", nome: "Corra!", link_pagina: "../html/filmesDescricao.html#corra" },
    { id: "hereditario", link_img: "../Img/filmes/terror/Hereditário (terror).jpg", nome: "Hereditário", link_pagina: "../html/filmesDescricao.html#hereditario" },
    { id: "ilha_medo", link_img: "../Img/filmes/terror/Ilha-do-Medo (Terror).jpg", nome: "Ilha do Medo", link_pagina: "../html/filmesDescricao.html#ilha_medo" },
    { id: "invocacao_mal", link_img: "../Img/filmes/terror/Invocação-do-Mal (terror).jpg", nome: "Invocação do Mal", link_pagina: "../html/filmesDescricao.html#invocacao_mal" },
    { id: "o_iluminado", link_img: "../Img/filmes/terror/O Iluminado (terror).jpg", nome: "O Iluminado", link_pagina: "../html/filmesDescricao.html#o_iluminado" },
    { id: "o_exorcita", link_img: "../Img/filmes/terror/O-Exorcista (terror).jpg", nome: "O Exorcista", link_pagina: "../html/filmesDescricao.html#o_exorcita" },
    { id: "massacre_serra_electrica", link_img: "../Img/filmes/terror/O-Massacre-da-Serra-Elétrica (Terror).jpg", nome: "O Massacre da Serra Elétrica", link_pagina: "../html/filmesDescricao.html#massacre_serra_electrica" },
    { id: "panico", link_img: "../Img/filmes/terror/Pânico (Terror).jpg", nome: "Pânico", link_pagina: "../html/filmesDescricao.html#panico" },
    { id: "lugar_silencioso", link_img: "../Img/filmes/terror/Um-Lugar-Silencioso (Terror).jpg", nome: "Um Lugar Silencioso", link_pagina: "../html/filmesDescricao.html#lugar_silencioso" }
];

function chamaFilmesTerror() {
    let elementoTerror = document.getElementById("filmes-Terror-Horror");
    let listaFilmesTerror = "";

    for(let indexTerror = 0; indexTerror < filmesTerror.length; indexTerror++) {    
        listaFilmesTerror += `<div class="container-filme-img"><a href="${filmesTerror[indexTerror].link_pagina}"><img alt="${filmesTerror[indexTerror].nome}" title="${filmesTerror[indexTerror].nome}" src="${filmesTerror[indexTerror].link_img}" class="container-img" /></a></div>`;
    }

    if(elementoTerror !== null) {
        elementoTerror.innerHTML = listaFilmesTerror;
    }
}
chamaFilmesTerror();