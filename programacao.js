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