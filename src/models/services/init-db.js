async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/webII')

    console.log('Conectou no MySQL!')

    global.connection = connection

    return connection
}

export async function selectUsuario() {
    const conn = await connect(),
        [rows] = await conn.query('SELECT * FROM usuario;')

    return rows
}

export async function insertUsuario(usuario) {
    const conn = await connect(),
        sql = 'INSERT INTO usuario(nome, senha) VALUES (?, ?);',
        values = [usuario.nome, usuario.senha]

    return await conn.query(sql, values)
}

export async function deleteUsuario(id) {
    const conn = await connect(),
        sql = 'DELETE FROM usuario where id=?;'

    return await conn.query(sql, [id])
}

export async function updateUsuario(id, usuario) {
    const conn = await connect(),
        sql = 'UPDATE usuario SET nome=?, senha=? WHERE id=?',
        values = [usuario.nome, usuario.senha, id]
    
    return await conn.query(sql, values)
}