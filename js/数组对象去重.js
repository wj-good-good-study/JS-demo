const arr = [
    { a: 1, b: 2 },
    { b: 2, a: 1 },
    { a: 1, b: 2, c: { a: 1, b: 2 } },
    { b: 2, a: 1, c: { b: 2, a: 1 } }
]
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

function ArrObj(arr) {
    const newArr = [...arr]
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (equals(newArr[i], newArr[j])) {
                newArr.splice(j, 1)
                j--
            }
        }
    }
    return newArr
}
// console.log(ArrObj(arr))
