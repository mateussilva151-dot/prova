export async function criarEquipamento(equipamento) {
    const sql = "insert into equipamento values (codigoPatrimonio, nome, setor) = (?, ?, ?)"
}

export async function listarEquipamentos() {
}

export async function buscarEquipamentoPorId(id) {
    const sql = "select * from equipamento where id = (?)"
    return sql(id)
}

export async function atualizarEquipamento(id, equipamento) {
}

export async function excluirEquipamento(id) {
}
