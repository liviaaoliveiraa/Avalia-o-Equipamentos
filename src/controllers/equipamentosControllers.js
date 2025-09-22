import dados from './../models/dados.js';

const { equipamentos } = dados;

const getAllEquipamentos =(req, res) => {
    let resultado = equipamentos;

    res.status(200).json({
        total:resultado.length,
        data:resultado
    });
}

export { getAllEquipamentos }