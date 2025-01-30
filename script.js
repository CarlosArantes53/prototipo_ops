const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const selectOrderButtons = document.querySelectorAll('.select-order-btn');
const apontamentoForm = document.getElementById('apontamento-form');
const materiaPrimaForm = document.getElementById('materia-prima-form');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});


selectOrderButtons.forEach(button => {
    button.addEventListener('click', () => {
         const orderData = JSON.parse(button.getAttribute('data-order'));

        // Populate the form with selected order data
        apontamentoForm.op.value = orderData.op;
        apontamentoForm.nr.value = orderData.nr;
        apontamentoForm.item.value = orderData.item;
        apontamentoForm.largura.value = orderData.largura;
        apontamentoForm.comprimento.value = orderData.comprimento;
         apontamentoForm.qtd_produzir.value = orderData.qtd_produzir;
          apontamentoForm.qtd_produzida.value = orderData.qtd_produzida;


        document.querySelector('.tab-button[data-tab="apontamento"]').click();
    });
});

document.querySelector('.tab-button[data-tab="ops"]').click();

//handle the apontamento submit
 apontamentoForm.addEventListener('submit', function(event) {
        event.preventDefault();
      const formData = new FormData(apontamentoForm);
      const bobinas = formData.get('bobinas');
      console.log('Bobinas Fabricadas:', bobinas);
      alert("Apontamento Salvo!");

});
//handle the materia prima submit
materiaPrimaForm.addEventListener('submit', function(event) {
       event.preventDefault();
    const formData = new FormData(materiaPrimaForm);
    const lote = formData.get('lote');
      const peso = formData.get('peso');
     const pesoRestante = formData.get('peso_restante');

      console.log("Lote:", lote, "Peso:", peso, "Peso Restante:", pesoRestante);
      alert("Lote Encerrado!");
});