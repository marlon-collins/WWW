


let menus = [
    {nome: "home", link:"./home.html"},
    {nome: "filmes", link:"./filmes.html"},
    {nome: "descrição", link:"./descricao.html"}
]

function criarMenu() {

    let elemento = document.getElementById("lista-menu");

    let lista =  ""

    for(index=0; index < menus.length; index = index + 1){

       lista = lista +   `<li><a href="./`+menus[index].link+`">`+menus[index].nome+`</a></li>`;

    }
    elemento.innerHTML =lista;
   
}

criarMenu();

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx criar menu xxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

let filmes = [
    {id:"duna", link_img: "../Img/duna.png",nome:"Duna parte 2",link_pagina:"./descricao.html#duna"},
    {id:"duna", link_img: "../Img/mestre_universo.jpg",nome:"Mestre dos Universos parte 2",link_pagina:"./descricao.html#mestre_universo"},
    {id:"duna", link_img: "../Img/mortal_kombat.jpg",nome:"Mortal Kombat",link_pagina:"./descricao.html#mortal_kombat"},
    {id:"duna", link_img: "../Img/street_fighter.webp",nome:"Street Fighter",link_pagina:"./descricao.html#street_fighter"}
]

function chamaFilme() {

    let elemento = document.getElementById("container-filmes");

    if(elemento !== null) {
        console.log(elemento)
        let listafilmes = ""
        for(index =0;index < filmes.length; index ++) {
    
           
            listafilmes += `<div class="container-filme-img"><a href="`+filmes[index].link_pagina + `"><img alt="`+filmes[index].nome+`" title="`+filmes[index].nome+`" src="`+filmes[index].link_img+ `" class="container-img" /></a></div>`
        }
        elemento.innerHTML = listafilmes
    }
    
}

chamaFilme()