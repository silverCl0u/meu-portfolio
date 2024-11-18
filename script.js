// Função para validar o formulário de contato
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();  // Previne o envio padrão
  
    // Pega os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    // Simula um alerta ou envio
    if(nome && email && mensagem) {
      alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
      this.reset();  // Limpa o formulário após o envio
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
  