const questions = [
    {
      question: "Qual nome do serviço que utilizamos para hospedar nosso blog pessoal?",
      answers: [
        { option: "GitHub Pages", correct: true },
        { option: "HTML", correct: false },
        { option: "Vscode", correct: false },
        { option: "GitHub", correct: false }
      ]
    },
    {
      question: "O que aprendemos na aula de hoje?",
      answers: [
        { option: "Definição do cabeçalho e introdução de HTML e CSS", correct: false },
        { option: "Hospedar o site no GitHub Pages, criação da seção de hobbies e rodapé", correct: true },
        { option: "Introdução de HTML e CSS", correct: false },
        { option: "Criação do GitHub Pages", correct: false }
      ]
    },
    {
      question: "Como definimos o rodapé do site em HTML?",
      answers: [
        { option: "div", correct: false },
        { option: "section", correct: false },
        { option: "footer", correct: true },
        { option: "class", correct: false }
      ]
    },
    {
        question: "Para que serve GitHub Pages?",
        answers: [
          { option: "Hospedar sites diretamente do GitHub.", correct: true },
          { option: "Um editor de código-fonte.", correct: false },
          { option: "Gerenciar bancos de dados.", correct: false },
          { option: "Criar aplicações.", correct: false }
        ]
      },
      {
        question: "Qual a definição de um site responsivo?",
        answers: [
          { option: "Quando um site é muito acessado.", correct: false },
          { option: "Quando o site se adapta à tela.", correct: true },
          { option: "Uma linguagem de programação.", correct: false },
          { option: "Personalizar elementos HTML.", correct: false }
        ]
      },
      {
        question: "Como foi criado o rodapé no HTML em nosso blog?",
        answers: [
          { option: "Com a classe 'hobbies'.", correct: false },
          { option: "Com a classe 'hobbie-card'.", correct: false },
          { option: "Com a classe 'footer'.", correct: true },
          { option: "Com a classe 'minhaImagem'.", correct: false }
        ]
      }
    ];
  
  export default questions;
  