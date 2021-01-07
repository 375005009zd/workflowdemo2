import Util from './utils'

//唯一id管理器
export default class IDManage {
    constructor() {
        //id 集合
        this.map = {}
    }

    //添加id
    add(id) {
        this.map[id] = true
    }

    //创建唯一id
    create() {
        while(true) {
            const id = Util.randomString()
            if(this.map[id]) {
                continue
            }
            return id
        }
    }
}