const MenuTopo = ["img.jpg", "HOME", "SOBRE","CONTATO"];
function ChamaMenu(){
    let text1 ="";
    for(let i =0; i<MenuTopo.length; i++){
    text1+= 
        '<div class="logo">' + MenuTopo[0] + '</div>'+
            '<div class="menu">'+
                '<nav>'+
                    '<ul>'+
                        '<li> <a href="">' + MenuTopo[i] + '</a>  </li>'+
                    '</ul>'+
                '</nav>'+
            '</div>';
    }
    document.getElementById("Menu-Principal").innerHTML=text1;
}
ChamaMenu();




const cardFilmes = [
    {
        numero:"1"
    },
    {
        numero:"2"
    },
    {
        numero:"3"
    },
    {
        numero:"4"
    },
    {
        nome:"banner"
    }
];
function chamaFilmes(){
    let text2="";
    for(let i=0; i< cardFilmes.length; i++){
        text2+= 
        '<div class="banner">'+ cardFilmes[i].nome +'</div>'+
       ' <div class="container-cards">'+
            '<div>'+ cardFilmes[i].numero +'</div>'+
        '</div>';
    }
    document.getElementById("Bloco-Cards").innerHTML=text2;
}
chamaFilmes();