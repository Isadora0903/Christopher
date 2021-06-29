(function(){
var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 5;//a tava de variação (velocidade) horizontal do objeto
var dy = 5;//a tava de variação (velocidade) vertical do objeto
var x = 35;//posição horizontal do objeto (com valor inicial)
var y = 35;//posição vertical do objeto (com valor inicial)
var WIDTH = 1270;//largura da área retangular
var HEIGHT = 598;
var img = new Image();
var fundoImg = new Image();

function Desenhar() {
img.src = 'alan.png';
ctx.drawImage(img, x, y);
}

function fundo(){
    fundoImg.src = "Mapa2.jpg";
    ctx.drawImage(fundoImg, 1, 1);  
}

function LimparTela() {
    ctx.fillStyle = "rgba(0,0,0,0)";    
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill(); 
    fundo(); 
}


function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 10);

}


function KeyDown(evt){
    switch (evt.keyCode) {
        case 38:  /*seta para cima */
            if (y - dy > 0){
                y -= dy;
            }
            break;
        case 40:  /*set para baixo*/
            if (y + dy < HEIGHT){
                y += dy;
            }
            break;
        case 37:  /*set para esquerda*/
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 39:  /*seta para direita*/
            if (x + dx < WIDTH){
                x += dx;
            }
            break;
    }
}

function Atualizar() {
    LimparTela();    
    Desenhar();
}

window.addEventListener('keydown', KeyDown, true);
Iniciar();

}());
