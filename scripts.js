///lista de sabores
const sabores = [ 
    "Americana", "Atum com Mussarela", "Atum com catupiry", "Bacon", 
    "Bacon Especial", "Baiana", "Bauru", "Brócolis", "Caipira", 
    "Calabresa", "Carne Seca", "Dois Queijos", "Frango com Catupiry", 
    "Frango com mussarela", "Margherita", "Milho", "Mussarela", "Milho",
    "Mussarela", "Napolitana", "Pastor", "Peito de Peru", "Pepperoni",
    "Portuguesa", "Quatro Queijos", "Toscana", "Toscana especial", "Chocolate", "Pretigio"
]

function preencherOpcoesDeSabores (qtdSabores){
  const selectSabor = document.getElementById('sabor1'); //obtém o emelemnto <select> por ID
  //limpa a seleçào
  selectSabor.innerHtml='';

for (let i=0; i < qtdSabores; i++){
  const option = document.createElement('option');
  option.value = sabores[i];
  option.textContet = sabores[i];

  selectSabor.appendChild(option);
}
}
  //   for (const sabor of sabores) {
//     const option = document.createElement('option'); //Cria um elemento option
//     option.value = sabor; //Define o valor da opção
//     option.textContent = sabor; // Definir o texto da opção

//     selectSabor.appendChild(option) //adiciona a opção ao elemento select
//   }
// }

preencherOpcoesDeSabores(); // tem que chamar a função né?

