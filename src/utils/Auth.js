export function Auth(){
    let user = localStorage.getItem('user')
    return user ? true : false
}