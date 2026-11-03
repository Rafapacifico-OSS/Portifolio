/* =========================================
   MANIPULAÇÃO DE TEMA (DARK / LIGHT MODE)
   ========================================= */
const botaoTema = document.getElementById('botao-tema');
const elementoHtml = document.documentElement;

// Verifica se o usuário já tinha uma preferência salva no navegador
const temaSalvo = localStorage.getItem('tema') || 'light';
elementoHtml.setAttribute('data-tema', temaSalvo);

botaoTema.addEventListener('click', () => {
    const temaAtual = elementoHtml.getAttribute('data-tema');
    const novoTema = temaAtual === 'light' ? 'dark' : 'light';
    
    elementoHtml.setAttribute('data-tema', novoTema);
    localStorage.setItem('tema', novoTema);
});

/* =========================================
   MENU HAMBÚRGUER MOBILE
   ========================================= */
const botaoMenu = document.getElementById('botao-menu');
const menuNavegacao = document.getElementById('menu-navegacao');
const linksMenu = document.querySelectorAll('.link-menu');

botaoMenu.addEventListener('click', () => {
    menuNavegacao.classList.toggle('ativo');
});

// Fecha o menu ao clicar em qualquer link de navegação (Mobile)
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuNavegacao.classList.remove('ativo');
    });
});

/* =========================================
   EFEITO MÁQUINA DE ESCREVER (TYPING EFFECT)
   ========================================= */
const elementoMaquina = document.getElementById('elemento-maquina');
const palavras = [
    'Desenvolvimento Full Stack', 
    'Front-end Moderno', 
    'Interfaces Web'
];
let indicePalavra = 0;
let indiceCaractere = 0;
let estaApagando = false;
let velocidadeDigitacao = 100;

function alternarTextoMaquina() {
    const palavraAtual = palavras[indicePalavra];
    
    if (estaApagando) {
        elementoMaquina.textContent = palavraAtual.substring(0, indiceCaractere - 1);
        indiceCaractere--;
        velocidadeDigitacao = 50;
    } else {
        elementoMaquina.textContent = palavraAtual.substring(0, indiceCaractere + 1);
        indiceCaractere++;
        velocidadeDigitacao = 100;
    }

    if (!estaApagando && indiceCaractere === palavraAtual.length) {
        estaApagando = true;
        velocidadeDigitacao = 2000; // Pausa antes de apagar
    } else if (estaApagando && indiceCaractere === 0) {
        estaApagando = false;
        indicePalavra = (indicePalavra + 1) % palavras.length;
        velocidadeDigitacao = 500; // Pausa antes de escrever próxima palavra
    }

    setTimeout(alternarTextoMaquina, velocidadeDigitacao);
}

// Inicia o efeito máquina de escrever ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (elementoMaquina) {
        setTimeout(alternarTextoMaquina, 1000);
    }
});

/* =========================================
   BOTÃO FLUTUANTE "VOLTAR AO TOPO"
   ========================================= */
const botaoTopo = document.getElementById('botao-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        botaoTopo.classList.add('visivel');
    } else {
        botaoTopo.classList.remove('visivel');
    }
});

botaoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* =========================================
   ANO ATUAL NO RODAPÉ DINÂMICO
   ========================================= */
const elementoAno = document.getElementById('ano-atual');
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}