
let input = document.getElementById("cep").addEventListener("blur", () => {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`
    let valorTratado = cep.length;

    if (valorTratado === 8) {
        fetch(url)
            .then(respostas => respostas.json())

            .then(dados => {
                if (!dados.error) {
                    console.log(dados)

                    document.getElementById("rua").value = dados.logradouro;
                    document.getElementById("bairro").value = dados.bairro;
                    document.getElementById("cidade").value = dados.localidade;
                    document.getElementById("estado").value = dados.uf;
                    document.getElementById("numero").value = dados.ddd



                }
            })







    }
    else {
        alert("Digite um cep valido com 8 caracteres!!!")
    }



});
// aqui vou salvar os dados do input
document.addEventListener('DOMContentLoaded', () => {

  const inputs = document.querySelectorAll("input");

  // SALVAR quando digitar
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      localStorage.setItem(input.id, input.value);
    });
  });

  // RECUPERAR quando carregar
  inputs.forEach((input) => {
    const valorSalvo = localStorage.getItem(input.id);

    if (valorSalvo) {
      input.value = valorSalvo;
    }
  });

});





//setitem(key, value): metodo usado para salvar dados no localstorage
//getitem(key): metodo usado para metodo usado para recuperar dados armazenados no localstoarge
//removeitem(key): metodo usado para metodo usado para remover um item em especifico do localstorage
//clear(): metodo usado para metodo usado para remover todos os itens armazenados no localStorage