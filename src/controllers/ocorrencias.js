
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
            const{ oco_id, trans_id, oco_valor, oco_situacao, oco_data} = request.body
            const usu_ativo = 1;

            //instrução SQL
            const sql = `
            ISERT INTO usuarios
                (usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_ativo, usu_cpf)
            VALUES
                (?, ?, ?, ?, ?, ?, ?);
            `;

            //definição dos dadosa serem inseridos em um array
            const values = [usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_ativo, usu_cpf];

            //execução da instrução sql passando os parâmetros
            const [result] = await db.query(sql, values);
            
            //identificação do ID do registro inserido
            const usu_id = result.insertId;

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