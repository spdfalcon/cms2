import Cookies from "universal-cookie"

const getCookies = ()=>{
    const cookies = new Cookies()
    const token = cookies.get('token')
    return token
}


export default getCookies