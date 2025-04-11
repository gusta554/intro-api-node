
const db = require('../dataBase/connection');

module.exports = {
    async listarOcorrencias(request, response) {
        try {
            const sql = 'SELECT oco_id, trans_id, oco_valor, oco_situacao, oco_data FROM ocorrencias;'
            
            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ocorrencias.',
                itens: rows.length,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na ocorrencia.',
                erro: error.mensagem
            });
        }
    },
    async cadastrarOcorrencias(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ocorrencias.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na ocorrencia.',
                erro: error.mensagem
            });
        }
    },
    async editarOcorrencias(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ocorrencias.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na ocorrencia.',
                erro: error.mensagem
            });
        }
    },
    async apagarOcorrencias(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ocorrencias.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na ocorrencia.',
                erro: error.mensagem
            });
        }
    },
}