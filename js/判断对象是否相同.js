const obj1 = { id: '001', name: 'user1', meacher: '我' }
const obj2 = { name: 'user1', id: '001', teacher: '我' }



const isObj = (val) => typeof val === 'object' && val !== null
function equals(val1, val2) {
    if (isObj(val1) && isObj(val2)) {
        const key1 = Object.keys(val1)
        const key2 = Object.keys(val2)
        if (key1.length !== key2.length) {
            return false
        }
        for (const k of key1) {
            if (!key2.includes(k)) {
                return false
            }
            if (!equals(val1[k], val2[k])) {
                return false
            }
        }
        return true
    } else {
        return val1 === val2
    }
}

console.log(equals(obj1, obj2))