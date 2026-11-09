

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx criar menu xxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

let menus = [
    {nome: "Home", link:"./home.html"},
    {nome: "Filmes", link:"./filmes.html"},
    {nome: "Animes", link:"./animes.html"},
    {nome: "Series", link:"./series.html"},
    {nome: "Descrição", link:"./descricao.html"}
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

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx criar menu Genero xxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

let menuGenero = [
    {genero:"Ação", link:'href="#Acao"'},
    {genero:"Comédia", link:'href="#Comedia"'},
    {genero:"Drama", link:'href="#Drama"'},
    {genero:"Ficção Cientifica", link:'href="#Ficcao-Cientifica"'},
    {genero:"Terror/Horror", link:'href="#Terror-Horror"'},
    {genero:"Suspense", link:'href="#Suspense"'},
    {genero:"Romance", link:'href=""'}
]

function criarMenuGenero() {

    let elemento2 = document.getElementById("Genero-menu");

    let lista2 =  "";

    for(index=0; index < menuGenero.length; index = index + 1){

       lista2 = lista2 +   `<li class= "active"><a href="./`+ menuGenero[index].link +`">`+ menuGenero[index].genero + `</a></li>`;

    };
    if(elemento2!==null){
      elemento2.innerHTML =lista2;
    }
   
}
criarMenuGenero();

/////// CARROCEL DE TUMBS DA PAGINA INICIAL /////////


let slideIndex = 1;
showSlides(slideIndex);

// passagem das paginas
function plusSlides(n) {
showSlides(slideIndex += n);
}

// controle das tumbs
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0) {
        return;
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


/*xxxxxxxxxxxxxxxxxxxxxxxxxx BLOCO DE FILMES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
let filmes = [
    {id:"duna", link_img: "../Img/duna.png",nome:"Duna parte 2",link_pagina:"./descricao.html#duna"},

    {id:"mestre_universo", link_img: "../Img/mestre_universo.jpg",nome:"Mestre dos Universos parte 2",link_pagina:"./descricao.html#mestre_universo"},

    {id:"mortal_kombat", link_img: "../Img/mortal_kombat.jpg",nome:"Mortal Kombat",link_pagina:"./descricao.html#mortal_kombat"},

    {id:"street_fighter", link_img: "../Img/street_fighter.webp",nome:"Street Fighter",link_pagina:"./descricao.html#street_fighter"}
]

function chamaFilme() {

    let elemento4 = document.getElementById("container-filmes");

    let listafilmes = "";

    for(index =0;index < filmes.length; index ++) {    
        
        listafilmes += `<div class="container-filme-img">  <a href="`+filmes[index].link_pagina + `">   <img alt="`+filmes[index].nome+`" title="`+filmes[index].nome+`" src="`+filmes[index].link_img+ `" class="container-img" /></a></div>`;
    }
    if(elemento4 !== null) {
        elemento4.innerHTML = listafilmes
    }
    
}
chamaFilme();


//xxxxxxxxxxxxxxxxxxx   DESCRIÇÃO FILMES xxxxxxxxxxxxxxxxxxxxxxx//

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





//xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Descricão series/CAPAS   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
const Seriados = [
  {
    Capa: "Friends.png",
    Titulo: "Friends",
    Id: "friends",
    Genero: ["Comédia", "Romance"],
    Elenco: ["Jennifer Aniston", "Courteney Cox", "Matthew Perry", "Lisa Kudrow", "Matt LeBlanc", "David Schwimmer"],
    Direção: "Gary Halvorson",
    Duração: "22min por ep",
    Ano: "22 de setembro de 1994"
  },
  {
    Capa: "UmMaluconoPedaço.jpg",
    Titulo: "Um Maluco no Pedaço",
    Id: "um-maluco-no-pedaco",
    Genero: ["Comédia"],
    Elenco: ["Will Smith", "Alfonso Ribeiro", "James Avery", "Karyn Parsons", "Tatyana Ali"],
    Direção: "Shelley Jensen",
    Duração: "22min por ep",
    Ano: "10 de setembro de 1990"
  },
  {
    Capa: "Eu-a-Patroa-e-as-Crianças.jpg",
    Titulo: "Eu, a Patroa e as Crianças",
    Id: "wayans",
    Genero: ["Comédia"],
    Elenco: ["Damon Wayans", "Tisha Campbell", "George O. Gore II", "Jazz Raycole", "Parker McKenna Posey"],
    Direção: "Dean Lorey",
    Duração: "21min por ep",
    Ano: "28 de março de 2001"
  },
  {
    Capa: "Arnold.jpg",
    Titulo: "Arnold",
    Id: "arnold",
    Genero: ["Comédia"],
    Elenco: ["Gary Coleman", "Todd Bridges", "Conrad Bain", "Dana Plato"],
    Direção: "Gerren Keith",
    Duração: "22min por ep",
    Ano: "3 de novembro de 1978"
  },
  {
    Capa: "Suits.jpg",
    Titulo: "Suits",
    Id: "suits",
    Genero: ["Drama", "Comédia"],
    Elenco: ["Gabriel Macht", "Patrick J. Adams", "Meghan Markle", "Sarah Rafferty", "Rick Hoffman"],
    Direção: "Anton Cropper",
    Duração: "42min por ep",
    Ano: "23 de junho de 2011"
  },
  {
    Capa: "MADMEN.jpg",
    Titulo: "Mad Men",
    Id: "madmen",
    Genero: ["Drama"],
    Elenco: ["Jon Hamm", "Elisabeth Moss", "January Jones", "Christina Hendricks", "John Slattery"],
    Direção: "Phil Abraham",
    Duração: "47min por ep",
    Ano: "19 de julho de 2007"
  },
  {
    Capa: "DEXTER.jpg",
    Titulo: "Dexter",
    Id: "dexter",
    Genero: ["Crime", "Drama", "Mistério", "Thriller"],
    Elenco: ["Michael C. Hall", "Jennifer Carpenter", "David Zayas", "James Remar"],
    Direção: "John Dahl",
    Duração: "55min por ep",
    Ano: "1 de outubro de 2006"
  },
  {
    Capa: "DR-house.jpg",
    Titulo: "Dr. House",
    Id: "dr-house",
    Genero: ["Drama", "Mistério"],
    Elenco: ["Hugh Laurie", "Omar Epps", "Robert Sean Leonard", "Jesse Spencer", "Lisa Edelstein"],
    Direção: "Greg Yaitanes",
    Duração: "44min por ep",
    Ano: "16 de novembro de 2004"
  },
  {
    Capa: "TheWalkingDead.jpg",
    Titulo: "The Walking Dead",
    Id: "the-walking-dead",
    Genero: ["Terror", "Drama", "Ficção Científica"],
    Elenco: ["Andrew Lincoln", "Norman Reedus", "Melissa McBride", "Lauren Cohan"],
    Direção: "Greg Nicotero",
    Duração: "45min por ep",
    Ano: "31 de outubro de 2010"
  },
  {
    Capa: "BREAKINGBAD.jpg",
    Titulo: "Breaking Bad",
    Id: "breaking-bad",
    Genero: ["Crime", "Drama", "Thriller"],
    Elenco: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris", "Bob Odenkirk"],
    Direção: "Vince Gilligan",
    Duração: "49min por ep",
    Ano: "20 de janeiro de 2008"
  },
  {
    Capa: "GOT.jpg",
    Titulo: "Game of Thrones",
    Id: "game-of-thrones",
    Genero: ["Ação", "Aventura", "Drama", "Fantasia"],
    Elenco: ["Emilia Clarke", "Kit Harington", "Peter Dinklage", "Lena Headey", "Nikolaj Coster-Waldau"],
    Direção: "David Nutter",
    Duração: "57min por ep",
    Ano: "17 de abril de 2011"
  }
];

function chamaDescricaoSeries() {
    let text5 = "";
    for(let i = 0; i < Seriados.length; i++){
        text5 += 
        '<div class="card-description"' + 'id="' + Seriados[i].Id + '">' +
            '<div class="capa-seriado" id="' + Seriados[i].Id + '"><img src="../Img/' + Seriados[i].Capa + '" alt="' + Seriados[i].Titulo + '" title="' + Seriados[i].Id + '"></div>' +
            '<div class="description">' +
                '<ul>' +
                    '<li><span>Titulo: </span>' + Seriados[i].Titulo + '</li>' +
                    '<li><span> Genero: </span>' + Seriados[i].Genero + '</li>' +
                    '<li><span>Elenco: </span>' + Seriados[i].Elenco + '</li>' +
                    '<li><span>Direção: </span>' + Seriados[i].Direção + '</li>' +
                    '<li><span>Duração: </span>' + Seriados[i].Duração + '</li>' +
                    '<li><span>Ano: </span>' + Seriados[i].Ano + '</li>' +
                '</ul>' +
            '</div>' +
        '</div>';
    }
    
    let documento5 = document.getElementById("Serie-Descricao");
    if(documento5 !== null){
        documento5.innerHTML = text5;
    }
}
chamaDescricaoSeries();

let series = [
    {id:"friends", link_img: "../Img/series/Friends.png", nome:"Friends", link_pagina:"./seriesDescricao.html#friends"},
    {id:"um-maluco-no-pedaco", link_img: "../Img/series/UmMaluconoPedaço.jpg", nome:"Um Maluco no Pedaço", link_pagina:"./seriesDescricao.html#um-maluco-no-pedaco"},
    {id:"wayans", link_img: "../Img/series/Eu-a-Patroa-e-as-Crianças.jpg", nome:"Eu, a Patroa e as Crianças", link_pagina:"./seriesDescricao.html#wayans"},
    {id:"arnold", link_img: "../Img/series/Arnold.jpg", nome:"Arnold", link_pagina:"./seriesDescricao.html#arnold"},
    {id:"suits", link_img: "../Img/series/Suits.jpg", nome:"Suits", link_pagina:"./seriesDescricao.html#suits"},
    {id:"madmen", link_img: "../Img/series/MADMEN.jpg", nome:"Mad Men", link_pagina:"./seriesDescricao.html#madmen"},
    {id:"dexter", link_img: "../Img/series/DEXTER.jpg", nome:"Dexter", link_pagina:"./seriesDescricao.html#dexter"},
    {id:"dr-house", link_img: "../Img/series/DR-house.jpg", nome:"Dr. House", link_pagina:"./seriesDescricao.html#dr-house"},
    {id:"the-walking-dead", link_img: "../Img/series/TheWalkingDead.jpg", nome:"The Walking Dead", link_pagina:"./seriesDescricao.html#the-walking-dead"},
    {id:"breaking-bad", link_img: "../Img/series/BREAKINGBAD.jpg", nome:"Breaking Bad", link_pagina:"./seriesDescricao.html#breaking-bad"},
    {id:"game-of-thrones", link_img: "../Img/series/GOT.jpg", nome:"Game of Thrones", link_pagina:"./seriesDescricao.html#game-of-thrones"}
];

function chamaSerie() {
    let elemento7 = document.getElementById("container-series");
    let listaseries2 = "";

    for(index = 0; index < series.length; index++) {    
        listaseries2 += `<div class="container-series-img"> <a href="`+series[index].link_pagina + `">  <img alt="`+series[index].nome+`" title="`+series[index].nome+`" src="`+series[index].link_img+ `" class="container-img" /></a></div>`;
    }

    if(elemento7 !== null) {
        elemento7.innerHTML = listaseries2;
    }
}
chamaSerie();


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   Descrição Animes/CAPAS   xxxxxxxxxxxxxxxxxxxxxxxxxxxx//

const lAnime = [
  {
    Capa: "yuyuhakusho.jpg",
    Titulo: "Yu Yu Hakusho",
    Id: "yuyu-hakusho",
    Genero: ["Ação", "Aventura", "Sobrenatural"],
    Elenco: ["Nozomu Sasaki", "Shigeru Chiba", "Megumi Ogata"],
    Direção: "Noriyuki Abe",
    Duração: "24min por ep",
    Ano: "10 de outubro de 1992"
  },
  {
    Capa: "inuyasha.jpg",
    Titulo: "InuYasha",
    Id: "inuyasha",
    Genero: ["Ação", "Aventura", "Fantasia"],
    Elenco: ["Kappei Yamaguchi", "Satsuki Yukino", "Koji Tsujitani"],
    Direção: "Yasuanao Aoki",
    Duração: "24min por ep",
    Ano: "16 de outubro de 2000"
  },
  {
    Capa: "bleach.jpg",
    Titulo: "Bleach",
    Id: "bleach",
    Genero: ["Ação", "Aventura", "Sobrenatural"],
    Elenco: ["Masakazu Morita", "Fumiko Orikasa", "Noriaki Sugiyama"],
    Direção: "Noriyuki Abe",
    Duração: "24min por ep",
    Ano: "5 de outubro de 2004"
  },
  {
    Capa: "dragonballZ.png",
    Titulo: "Dragon Ball Z",
    Id: "dragon-ball",
    Genero: ["Ação", "Aventura", "Comédia", "Fantasia"],
    Elenco: ["Masako Nozawa", "Hiromi Tsuru", "Toru Furuya"],
    Direção: "Daisuke Nishio",
    Duração: "24min por ep",
    Ano: "26 de fevereiro de 1986"
  },
  {
    Capa: "naturoshippuden.jpg",
    Titulo: "Naruto Shippuden",
    Id: "naruto-shippuden",
    Genero: ["Ação", "Aventura", "Fantasia"],
    Elenco: ["Junko Takeuchi", "Noriaki Sugiyama", "Chie Nakamura"],
    Direção: "Hayato Date",
    Duração: "23min por ep",
    Ano: "3 de outubro de 2002"
  },
  {
    Capa: "afro-samurai.jpg",
    Titulo: "Afro Samurai",
    Id: "afro-samurai",
    Genero: ["Ação", "Samurai", "Ficção Científica"],
    Elenco: ["Samuel L. Jackson", "Kelly Hu", "Ron Perlman"],
    Direção: "Fuminori Kizaki",
    Duração: "25min por ep",
    Ano: "4 de janeiro de 2007"
  },
  {
    Capa: "samuraichamploo.jpg",
    Titulo: "Samurai Champloo",
    Id: "samurai-champloo",
    Genero: ["Ação", "Aventura", "Comédia"],
    Elenco: ["Kazuya Nakai", "Ginpei Sato", "Ayako Kawasumi"],
    Direção: "Shinichirō Watanabe",
    Duração: "24min por ep",
    Ano: "20 de maio de 2004"
  },
  {
    Capa: "onepiece.jpg",
    Titulo: "One Piece",
    Id: "one-piece",
    Genero: ["Ação", "Aventura", "Fantasia"],
    Elenco: ["Mayumi Tanaka", "Kazuya Nakai", "Akemi Okamura"],
    Direção: "Tatsuya Nagamine",
    Duração: "24min por ep",
    Ano: "20 de outubro de 1999"
  },
  {
    Capa: "death-note.jpg",
    Titulo: "Death Note",
    Id: "death-note",
    Genero: ["Mistério", "Psicológico", "Sobrenatural", "Thriller"],
    Elenco: ["Mamoru Miyano", "Kappei Yamaguchi", "Shido Nakamura"],
    Direção: "Tetsurō Araki",
    Duração: "23min por ep",
    Ano: "3 de outubro de 2006"
  },
  {
    Capa: "zetman.jpg",
    Titulo: "Zetman",
    Id: "zetman",
    Genero: ["Ação", "Ficção Científica", "Sobrenatural"],
    Elenco: ["Daisuke Namikawa", "Mamoru Miyano", "Kana Hanazawa"],
    Direção: "Osamu Nabeshima",
    Duração: "24min por ep",
    Ano: "2 de abril de 2012"
  }
];

function chamaDescricaoAnimes() {
    let text6 = "";
    for(let i = 0; i < lAnime.length; i++){
        text6 += 
        '<div class="card-description"' + 'id="' + lAnime[i].Id + '">' +
            '<div class="capa-anime" id="' + lAnime[i].Id + '"><img src="../Img/' + lAnime[i].Capa + '" alt="' + lAnime[i].Titulo + '" title="' + lAnime[i].Id + '"></div>' +
            '<div class="description">' +
                '<ul>' +
                    '<li><span>Titulo: </span>' + lAnime[i].Titulo + '</li>' +
                    '<li><span> Genero: </span>' + lAnime[i].Genero + '</li>' +
                    '<li><span>Elenco: </span>' + lAnime[i].Elenco + '</li>' +
                    '<li><span>Direção: </span>' + lAnime[i].Direção + '</li>' +
                    '<li><span>Duração: </span>' + lAnime[i].Duração + '</li>' +
                    '<li><span>Ano: </span>' + lAnime[i].Ano + '</li>' +
                '</ul>' +
            '</div>' +
        '</div>';
    }
    
    let documento6 = document.getElementById("Anime-Descricao");
    if(documento6 !== null){
        documento6.innerHTML = text6;
    }
}
chamaDescricaoAnimes();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx CAPAS  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

let animes = [
    {id:"afro-samurai", link_img: "../Img/animes/afro-samurai.jpg", nome:"Afro Samurai", link_pagina:"./animesDescricao.html#afro-samurai"},
    {id:"bleach", link_img: "../Img/animes/bleach.jpg", nome:"Bleach", link_pagina:"./animesDescricao.html#bleach"},
    {id:"death-note", link_img: "../Img/animes/death-note.jpg", nome:"Death Note", link_pagina:"./animesDescricao.html#death-note"},
    {id:"dragon-ball", link_img: "../Img/animes/dragonballZ.png", nome:"Dragon Ball Z", link_pagina:"./animesDescricao.html#dragon-ball"},
    {id:"inuyasha", link_img: "../Img/animes/inuyasha.jpg", nome:"InuYasha", link_pagina:"./animesDescricao.html#inuyasha"},
    {id:"naruto-shippuden", link_img: "../Img/animes/naturoshippuden.jpg", nome:"Naruto Shippuden", link_pagina:"./animesDescricao.html#naruto-shippuden"},
    {id:"one-piece", link_img: "../Img/animes/onepiece.jpg", nome:"One Piece", link_pagina:"./animesDescricao.html#one-piece"},
    {id:"samurai-champloo", link_img: "../Img/animes/samuraichamploo.jpg", nome:"Samurai Champloo", link_pagina:"./animesDescricao.html#samurai-champloo"},
    {id:"yuyu-hakusho", link_img: "../Img/animes/yuyuhakusho.jpg", nome:"Yu Yu Hakusho", link_pagina:"./animesDescricao.html#yuyu-hakusho"},
    {id:"zetman", link_img: "../Img/animes/zetman.jpg", nome:"Zetman", link_pagina:"./animesDescricao.html#zetman"}
];

function chamaAnime() {
    let elemento8 = document.getElementById("container-animes");
    let listaanimes = "";

    for(index = 0; index < animes.length; index++) {    
        listaanimes += `<div class="container-anime-img"> <a href="`+animes[index].link_pagina + `">  <img alt="`+animes[index].nome+`" title="`+animes[index].nome+`" src="`+animes[index].link_img+ `" class="container-img" /></a></div>`;
    }

    if(elemento8 !== null) {
        elemento8.innerHTML = listaanimes;
    }
}
chamaAnime();