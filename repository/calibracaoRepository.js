import conexao from "../config/conexao"
import calibracao from "../model/Calibracao"
import { Equipamento } from "../model/Equipamento"

export async function criarCalibracao(calibracao) {
    const sql = "insert into calibracoes value  ?"
    const [resultado] = await conexao.execute(sql,[equipamentoId, dataCalibracao, resultado, responsavel ])
    
}

export async function listarCalibracoes() {
    const sql = "select * from calibracoes"
    return sql
}

export async function listarCalibracoesDetalhadas() {
}

export async function buscarCalibracaoPorId(id) {
    const sql = "select * from calibracoes where id = (?)"
    return sql(id)
}

export async function atualizarCalibracao(id, calibracao) {
    const sql = "update calibracoes set equipamentoid = equipamentoid, dataCalibracao, resultado = resultado, responsavel"
    const [resultado] await conexao.execute(sql)
    return sql;
}

export async function excluirCalibracao(id) {
    const sql = "delete from calibracoes where id = ?"
}
