export async function criarCalibracao(calibracao) {
    
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
}

export async function excluirCalibracao(id) {
}
