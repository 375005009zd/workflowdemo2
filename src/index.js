import Model from './Model'


export default class Flow {
    constructor(options) {
        this.config = {
            panel: ''
        }
        Object.assign(this.config, options)

        //初始化模型
        this.model = new Model()

        //节点管理
        //this.gm = new GroupManage(this.model)
    }
}