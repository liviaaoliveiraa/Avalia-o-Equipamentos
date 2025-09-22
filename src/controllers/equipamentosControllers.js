import dados from './../models/dados.js';

const { equipamentos } = dados;

const getAllEquipamentos =(req, res) => {
    let resultado = equipamentos;

    res.status(200).json({
        total:resultado.length,
        data:resultado
    });
};

const getEquipamentosById = (req, res) => {
    const id = parseInt(req.params.id);

    const equipamento = equipamentos.find (e => e.id === id);

    res.status(200).json({
        total:equipamento.length,
        equipamento: equipamento
    })
};


const createEquipamento = (req, res) => {
    const { nome, categoria, marca, modelo, dataAquisicao, valor, localização } = req.body;

    if (valor <= 0 ){
        return res.status(400).json({
            success:false,
            message:"O equipamento não pode ser de graça 🙄"
        });
    }
 
    const novoCarro = {
        id: carros.length + 1,
        nome: nome,
        categoria: modelo,
        marca: cor,
        modelo: tipo,
        dataAquisicao: parseInt (ano),
        valor:valor,
        localização:localização

    }

    carros.push(novoCarro);

    res.status(200).json({
        success:true,
        message: "Novo equipamento Criado com sucesso!🪛",
        carros:novoCarro
    });
};

const deleteEquipamento = (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).json({
            success:false,
            message:"O ID deve ser válido"
        })
    }
    if(isNaN(dataAquisicao)){
        return res.status(400).json({
            success:false,
            message:"A data deve ser válida"
        })
    }

    const equipamentoParaRemover = equipamentos.find(e => e.id ===id);

    if (!equipamentoParaRemover) {
        return res.status(404).json({
            success:false,
            message:`O equipamento com id${id} não existe`
        })
    }

    const equipamentosFiltrados = equipamentos.filter(e => e.id !== id);

    equipamentos.splice(0, equipamentos.lenght, ...equipamentosFiltrados);

    res.status(200).json({
        success:true,
        message: ` O Equipamento com o id${id} foi removido com sucesso`
    })
};

const updateEquipamento = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, categoria, marca, modelo, dataAquisicao, valor, localizacao} = req.body;

    const idParaEditar = id;

    if(isNaN(idParaEditar)){
        return res.status(400).json({
            success: false,
            message: "O id deve ser um numero válido"
        })
    }

    const equipamentoExiste = equipamentos.find(e => e.id === idParaEditar);
    if(!equipamentoExiste){;
      return res.status(404).json({
        success:false,
        message:`O equipamento com o id ${idParaEditar} não existe`
      })
    }

    const equipamentosAtualizados = equipamentos.map(e => e.id === idParaEditar ? {
        ...equipamento,
        ...(nome && { nome }),
        ...(categoria && { categoria }),
        ...(marca && { marca }),
        ...(modelo && { modelo }),
        ...(dataAquisicao && { dataAquisicao: parseInt (dataAquisicao)}),
        ...(valor && { valor: parseInt (valor)}),
        ...(localizacao && {localizacao})

    }
    :equipamento

);

equipamentos.splice(0, equipamentos.length, ...equipamentosAtualizados);

const equipamentosEditados = equipamentos.find (e => e.id === idParaEditar);
res.status(200).json({
    success:true,
    message:"Dados Atualizados com sucessso",
    equipamento: equipamentosEditados
})


}


export { getAllEquipamentos, getEquipamentosById, createEquipamento, deleteEquipamento, updateEquipamento}