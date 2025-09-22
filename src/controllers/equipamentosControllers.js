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

export { getAllEquipamentos, getEquipamentosById}