import { Cliente } from "./models/entities/client";
import { database } from "./models/services/dborm";

(async () => {
    console.log("CRIAR TABELA ==========");
    const resultado = await database.sync();
    console.log(resultado);

    console.log("CRIAR UM REGISTRO ==========");
    const inserirCliente = await Cliente.create({
        nome: "João da Silva",
        idade: 10,
        endereco: "Rua Paulista, 10000"

    })
    console.log(inserirCliente);

    console.log("BUSCAR UM REGISTRO ==========");
    const cliente = await Cliente.findByPk(1);
    console.log(cliente);

    console.log("ALTERAR UM REGISTRO ==========");
    const clienteAlterar = await Cliente.findByPk(1);
    clienteAlterar.nome = "Gustavo Nascimento";
    const resultadoSave = await clienteAlterar.save();
    console.log(resultadoSave);

    console.log("BUSCAR TODOS OS REGISTROS ==========");
    const clientes = await Cliente.findAll();
    console.log(clientes);

    console.log("DELETAR O REGISTRO ==========");
    const clienteDelete = await Cliente.findByPk(1);
    clienteDelete.destroy();
})();