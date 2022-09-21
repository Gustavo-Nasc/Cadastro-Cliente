export function hidePassword(password) {
    import sha1 from 'sha1'

    console.log(password)

    const hash = sha1(password)

    console.log(hash)

    return hash
}