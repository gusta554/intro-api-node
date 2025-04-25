
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
            const {trans_id, oco_valor, oco_situacao, oco_data} = request.body;

            //instrução SQL
            const sql = `
            INSERT INTO ocorrencias
                (trans_id, oco_valor, oco_situacao, oco_data)
            VALUES
                (?, ?, ?, ?);
            `;

            //definição dos dadosa serem inseridos em um array
            const values = [trans_id, oco_valor, oco_situacao, oco_data];

            //execução da instrução sql passando os parâmetros
            const [result] = await db.query(sql, values);
            
            //identificação do ID do registro inserido
            const dados = {
            id: result.insertId,
            oco_valor,
            oco_data,
            };
            return response.status(200).json({
                sucesso: true,
                mensagem: 'cadastro de ocorrencias.',
                dados: dados
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
            // parâmetro recebidos pelo corpo da requisição
            const {trans_id, oco_valor, oco_situacao, oco_data}
            // parâmetro recebido pela URL via params ex: /
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