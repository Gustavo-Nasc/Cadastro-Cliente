console.log('SELECT * FROM usuario')
const usuarios = await db.selectUsuario()
console.log(usuarios)

console.log('INSERT INTO usuario')
const result = await db.inserUsuario({nome: "Fulano", senha: "uihdssauihus783"})
console.log(result)

console.log('DELETE FROM usuario')
const result3 = await db.deleteUsuario(2)
console.log(result3)

console.log('UPDATE usuario')
const result2 = await db.updateUsuario(3, {nome: "Fulano de Tal", senha: "hhjdhjjhsd7368"})
console.log(result2)