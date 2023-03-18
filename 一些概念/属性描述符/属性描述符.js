let GoodsObj = {
    title: '商品1',
    price: 3,

}
class Goods {
    get totalPrice() {
        return this.choose * this.data.price
    }
    get isChoose() {
        return this.choose > 0
    }
    constructor(g) {
        //冻结克隆对象，原始对象可以修改
        g = { ...g }
        Object.freeze(g)
        Object.defineProperty(this, 'data', {
            get() {
                return g
            },
            set(value) {
                throw new Error('data只读，无法重新赋值')
            },
            configurable: false
        })
        let internalChoose = 0
        Object.defineProperty(this, 'choose', {
            configurable: false,
            get() {
                return internalChoose
            },
            set(val) {
                //条件限制
                if (typeof val !== 'number') {
                    throw new Error('choose的值只能为数字')
                }
                if (val !== parseInt(val)) {
                    throw new Error('choose的值只能为整数')
                }
                if (val < 0) {
                    throw new Error('choose的值必须大于等于0')
                }
                internalChoose = val
            }
        })
        //不能新增属性，可以修改现有属性
        Object.seal(this)
    }
}
let g = new Goods(GoodsObj)
// const desc=Object.getOwnPropertyDescriptor(GoodsObj,'price')
// console.log(desc)
// Object.defineProperty(GoodsObj, 'price', {
//     value: 3,
//     writable: true,
//     enumerable: true,
//     configurable: false//不可修改属性描述符本身
// })
debugger;