// 请给Array本地对象增加一个原型方法，它用于删除数组条目中重复的条目(可能有多个)，返回值是一个包含被删除的重复条目的新数组
Array.prototype.distinct = function () {
    const res = []
    for (let i = 0; i < this.length;) {
        if (this.indexOf(this[i]) !== this.lastIndexOf(this[i])) {
            res.push(this[i])
            this.splice(i, 1)
        } else {
            i++
        }
    }
    return Array.from(new Set(res))
}

console.log(Array.prototype.distinct.call(['a', 'b', 'b', 'c', 'a','a']))