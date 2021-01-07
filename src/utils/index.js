//随机字符串生成器
function randomString(len=6) {
    const domain = '1234567890qwertyuiopasdfghjklzxcvbnm'
    const demainLen = domain.length
    let result = ''
    for(let i=0;i<len;++i) {
        const idx = Math.floor(Math.random() * domainLen)
        result += domain[idx]
    }
    return result
}

export default {
    randomString
}