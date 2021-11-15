const pedidos = [
    { id: 1, prato: "x-bacon", status: "entregue" },
    { id: 2, prato: "sundae", status: "em preparo" },
    { id: 3, prato: "fritas média", status: "a caminho" },
    { id: 4, prato: "nuggets", status: "entregue" },
    { id: 5, prato: "x-tudo", status: "a caminho" },
  ];

pedidos.forEach(function(pedido) {
    if (pedido.status == "em preparo"){
        console.log("Pedido", pedido.id + ": Seu pedido está sendo preparado");
    } else if (pedido.status == "a caminho"){
        console.log("Pedido", pedido.id + ": Entregador a caminho, fique atente!");
    } else if (pedido.status == "entregue"){
        console.log("Pedido", pedido.id + ": Pedido entregue");
    } else{
        console.log("Aguarde, processando pedido...");
    }
});

