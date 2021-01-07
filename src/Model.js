import Constants from './Constants'

export default class Model{
    constructor() {
        this.attrs = {}
    }

    set(key,value) {
        this.attrs[key] = value
    }

    get(key,defaultValue) {
        return this.attrs[key] || defaultValue
    }

    setDefaultEdit() {
        const data = [
            {
                shape: Constants.prefix + 'Start',
                x: 200,
                y: 180,
                name: '开始'
            },
            {
                shape:Constants.prefix + 'Produce',
                x:200,
                y:180,
                name: '步骤'
            },
            {
                shape:Constants.prefix + 'Produce',
                x:400,
                y:230,
                name: '判断'
            },
            {
                shape:Constants.prefix + 'Produce',
                x:400,
                y:230,
                name: '结束'
            }
        ]

        const gm = this.get(Constants.instance.groupManage)
        console.log(gm)

        const result = []
        data.forEach(it=>{
            result.push()
        })
    }
}