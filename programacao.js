const questions = [
  {
    question: "Qual a principal função do HTML em um site?",
    answers: [
      
      { option: "Adicionar estilos ao site.", correct: false },
      { option: "Estruturar o conteúdo do site.", correct: true },
      { option: "Garantir segurança do site.", correct: false },
      { option: "Conectar o site à internet.", correct: false }
    ]
  },
  {
    question: "Para que serve a tag <html> em um documento HTML?",
    answers: [
      { option: "Indicar o início do código HTML.", correct: true },
      { option: "Adicionar imagens ao site.", correct: false },
      { option: "Criar parágrafos no site.", correct: false },
      { option: "Definir o título da página.", correct: false }
    ]
  },
  {
    question: "Qual é o propósito da tag <head> em um documento HTML?",
    answers: [

      { option: "Mostrar o conteúdo principal da página.", correct: false },
      { option: "Criar parágrafos e listas.", correct: false },
      { option: "Adicionar imagens ao site.", correct: false },
      { option: "Incluir informações e configurações do site.", correct: true }
    ]
  },
  {
    question: "O que a tag <title> define em uma página HTML? Onde essa informação aparece?",
    answers: [
      
      { option: "Define o nome do site no rodapé.", correct: false },
      { option: "Mostra o nome do site na página inicial.", correct: false },
      { option: "Adiciona um título para imagens no site.", correct: false },
      { option: "Define o título que aparece na aba do navegador.", correct: true }
    ]
  },
  {
    question: "Como podemos criar um parágrafo em HTML? Qual tag usamos?",
    answers: [
      { option: "Usamos a tag <p>.", correct: true },
      { option: "Usamos a tag <h1>.", correct: false },
      { option: "Usamos a tag <div>.", correct: false },
      { option: "Usamos a tag <br>.", correct: false }
    ]
  },
  {
    question: "Qual a principal função do CSS em um site?",
    answers: [
      { option: "Adicionar estilo e design ao site.", correct: true },
      { option: "Criar links entre páginas.", correct: false },
      { option: "Estruturar o conteúdo do site.", correct: false },
      { option: "Conectar o site à internet.", correct: false }
    ]
  },
  {
    question: "O que acontece quando adicionamos o código CSS no <head> do HTML usando <link rel='stylesheet' href='style.css'>?",
    answers: [
      
      { option: "O navegador cria links automáticos no site.", correct: false },
      { option: "O navegador aplica o estilo definido no arquivo CSS.", correct: true },
      { option: "O HTML passa a ter um rodapé automático.", correct: false },
      { option: "O site é carregado mais rapidamente.", correct: false }
    ]
  },
  {
    question: "Para que serve a propriedade background-color no CSS?",
    answers: [
     
      { option: "Adicionar imagens ao fundo do site.", correct: false },
      { option: "Mudar a cor do texto no site.", correct: false },
      { option: "Alterar a cor de fundo de um elemento.", correct: true },
      { option: "Alterar a cor das bordas do site.", correct: false }
    ]
  },
  {
    question: "Qual é a diferença entre as tags <h1> e <p> no HTML?",
    answers: [
      { option: "<h1> é usada para títulos e <p> para parágrafos.", correct: true },
      { option: "<h1> é usada para links e <p> para textos curtos.", correct: false },
      { option: "<h1> é usada para listas e <p> para imagens.", correct: false },
      { option: "<h1> é usada para rodapés e <p> para cabeçalhos.", correct: false }
    ]
  },
  {
    question: "Se quisermos centralizar um texto usando CSS, qual propriedade podemos usar? Dê um exemplo.",
    answers: [
      { option: "Usar a propriedade text-align: center.", correct: true },
      { option: "Usar a propriedade justify-content: center.", correct: false },
      { option: "Usar a propriedade margin: auto.", correct: false },
      { option: "Usar a propriedade align-items: center.", correct: false }
    ]
  }
];

export default questions;