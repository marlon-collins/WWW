const menuTop = [
    {
        titulo:"Pagina1",
        Caminho:'<a href="../html/Pagina1.html">'
    },
    {
        titulo:"Pagina2",
        Caminho:'<a href="../html/Pagina2.html">'
    },
    {
        titulo:"Pagina3",
        Caminho:'<a href="../html/Pagina3.html">'
    }
];

function chamaMenu (){
    let text1="";
    for(let i=0; i<menuTop.length;i++){
        text1 += '<li>' + menuTop[i].Caminho +  menuTop[i].titulo + '</a></li>' + '<br>';

    }
    document.getElementById("lista-menu").innerHTML=text1;
}
//chamaMenu();










const capaFilmes = ["DUNA.png","MESTRES DO UNIVERSO.jpg", "MORTALKOMBAT.jpg", "STREETFIGTHER.webp"];
function chamaCapa(){
    let text2 = "";
    for(let i=0; i <capaFilmes.length; i++){
        text2 += '<div> <img src="../Img/' + capaFilmes[i] + '"alt=" "></div>'
    }
    document.getElementById("Bloco-cards").innerHTML=text2;
}
//chamaCapa();








///////USANDO O LOOP NORMAL //////// FUNCIONAL MAS NÃO RECOMENDADO PRA ESSE ESTILO DE OBJETO

// const descricao = [
//     {
//         Capa:"DUNA.png",
//         Titulo:"Duna: Parte Três",
//         Genero:"Ficção",
//         Diretor:"Denis Villeneuve",
//         Elenco:["Timothée Chalamet", "Zendaya", "Jason Momoa"],
//         Duracao:"2 h 20 min",
//         Ano:2026
//     }
// ];

// function chamaDescricao() {
//     let text3="";
//     for(let i=0; i< descricao.length; i++){
//        text3+= 
//             '<div class="capa-filme"> <img src="../Img/'+ descricao[i].Capa +'" alt=""></div>'+
//             '<div class="description">'+
//                 '<ul>'+
//                     '<li> <span>Titulo: </span>'+ descricao[i].Titulo +'</li>'+
//                     '<li> <span>Genero: </span>'+ descricao[i].Genero +'</li>'+
//                     '<li> <span>Elenco: </span>'+ descricao[i].Elenco +'</li>'+
//                     '<li> <span>Direçao: </span>'+ descricao[i].Diretor +'</li>'+
//                     '<li> <span>Ano: </span>'+ descricao[i].Ano +'</li>'+
//                     '<li> <span>Duração :</span>'+ descricao[i].Duracao +'</li>'+
//                 '</ul>'+
//             '</div>';
//     }
//     document.getElementById("Filme-Descricao").innerHTML=text3;
// }
// chamaDescricao();



const descricao = 
    {
        Capa:"DUNA.png",
        Titulo:"Duna: Parte Três",
        Genero:"Ficção",
        Diretor:"Denis Villeneuve",
        Elenco:["Timothée Chalamet", "Zendaya", "Jason Momoa"],
        Duracao:"2 h 20 min",
        Ano:2026
    };
function chamaDescricao() {
    let html ="";
    for(let x in descricao){
        html+=
            '<div class="capa-filme"> <img src="../Img/'+ x.Capa +'" alt=""></div>'+
            '<div class="description">'+
                '<ul>'+
                    '<li> <span>Titulo: </span>'+ x.Titulo +'</li>'+
                    '<li> <span>Genero: </span>'+ x.Genero +'</li>'+
                    '<li> <span>Elenco: </span>'+ x.Elenco +'</li>'+
                    '<li> <span>Direçao: </span>'+ x.Diretor +'</li>'+
                    '<li> <span>Ano: </span>'+ x.Ano +'</li>'+
                    '<li> <span>Duração :</span>'+ x.Duracao +'</li>'+
                '</ul>'+
            '</div>';
    }
    document.getElementById("Filme-Descricao").innerHTML=i;
}
chamaDescricao();