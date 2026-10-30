


let menus = [
    {nome: "home", link:"./home.html"},
    {nome: "filmes", link:"./filmes.html"},
    {nome: "descrição", link:"./descricao.html"}
]

function criarMenu() {

    let elemento1 = document.getElementById("lista-menu");

    let lista =  "";

    for(index=0; index < menus.length; index = index + 1){

       lista = lista +   `<li><a href="./`+menus[index].link+`">`+menus[index].nome+`</a></li>`;

    };
    elemento1.innerHTML =lista;
   
}

criarMenu();

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx criar menu xxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

let filmes = [
    {id:"duna", link_img: "../Img/duna.png",nome:"Duna parte 2",link_pagina:"./descricao.html#duna"},

    {id:"mestre_universo", link_img: "../Img/mestre_universo.jpg",nome:"Mestre dos Universos parte 2",link_pagina:"./descricao.html#mestre_universo"},

    {id:"mortal_kombat", link_img: "../Img/mortal_kombat.jpg",nome:"Mortal Kombat",link_pagina:"./descricao.html#mortal_kombat"},

    {id:"street_fighter", link_img: "../Img/street_fighter.webp",nome:"Street Fighter",link_pagina:"./descricao.html#street_fighter"}
]

function chamaFilme() {

    let elemento2 = document.getElementById("container-filmes");

    let listafilmes = "";

    for(index =0;index < filmes.length; index ++) {    
        
        listafilmes += `<div class="container-filme-img">  <a href="`+filmes[index].link_pagina + `">   <img alt="`+filmes[index].nome+`" title="`+filmes[index].nome+`" src="`+filmes[index].link_img+ `" class="container-img" /></a></div>`;
    }
    if(elemento2 !== null) {
        elemento2.innerHTML = listafilmes
    }
    
}

chamaFilme()


const descricaoFilmes = [
    {
        Capa:"duna.png",
        Titulo:"Duna: Parte Três",
        Id:"duna",
        Genero:["Aventura", "Ação", "Ficção Científica"],
        Elenco:["Timothée Chalamet", "Zendaya", "Jason Momoa"],
        Direção:"Denis Villeneuve",
        Duração:" 3h 0min",
        Ano:"17 de dezembro de 2026"

    },

    {
        Capa:"mestre_universo.jpg",
        Titulo:"Mestres do Universo",
        Id:"mestre_universo",
        Genero:[ "Ação", "Fantasia", "Ficção Científica"],
        Elenco:["Dolph Lundgren", "Billy Barty", "Meg Foster"],
        Direção:"Gary Goddard",
        Duração:" 1h 50min",
        Ano:"30 de junho de 1988"

    },

    {
        Capa:"mortal_kombat.jpg",
        Titulo:"Mortal Kombat II",
        Id:"mortal_kombat",
        Genero:["Aventura", "Ação"],
        Elenco:["Karl Urban", "Lewis Tan", "Joe Taslim"],
        Direção:"Simon McQuoid",
        Duração:"1h 56min",
        Ano:"7 de maio de 2026"

    },

    {
        Capa:"street_fighter.webp",
        Titulo:"Street Fighter",
        Id:"street_fighter",
        Genero:["Artes Marciais", "Ação"],
        Elenco:["Noah Centineo", "Andrew Koji", "Callina Liang"],
        Direção:"Kitao Sakurai",
        Duração:"2h 00min",
        Ano:"15 de outubro de 2026"

    }
];
function chamaDescricao() {

    let text1 = "";

    for(let i =0; i < descricaoFilmes.length;i++){
        text1+= 
        '<div class="card-description"'+ 'id="'+ descricaoFilmes[i].Id +'">'+
                '<div class="capa-filme" id="' + descricaoFilmes[i].Id + '"><img src="../Img/' + descricaoFilmes[i].Capa + '" alt="' + descricaoFilmes[i].Titulo +'"title="'+descricaoFilmes[i].Id +'"></div>'+
                '<div class="description">'+
                    '<ul>'+
                        '<li><span>Titulo: </span>'+ descricaoFilmes[i].Titulo +'</li>'+
                        '<li><span> Genero: </span>' + descricaoFilmes[i].Genero +'</li>'+
                        '<li><span>Elenco: </span>'+ descricaoFilmes[i].Elenco + '</li>'+
                       ' <li><span>Direção: </span>'+ descricaoFilmes[i].Direção + '</li>'+
                        '<li><span>Duração: </span>'+ descricaoFilmes[i].Duração + '</li>'+
                        '<li><span>Ano: </span>'+ descricaoFilmes[i].Ano + '</li>'+
                    '</ul>'+
                '</div>'+
            '</div>';
    }
    let documento3 = document.getElementById("Filme-Descricao");
    if(documento3 !== null){
        documento3.innerHTML = text1;
    }
}
chamaDescricao();