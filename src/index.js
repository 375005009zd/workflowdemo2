import Constants from './Constants'
import Model from './Model'
import Draw from './Draw'

export default class Flow {
    constructor(options) {
        this.config = {
            panel: ''
        }
        Object.assign(this.config, options)

        //初始化模型
        this.model = new Model()

        //节点管理
        this.gm = new GroupManage(this.model)
        this.model.set(Constants.instance.groupManage,this.gm)


        //坐标管理器
        const mCoordManage = new CoordManage(this.model)
        this.model.set(Constants.instance.corrdManage,mCoordManage)
    
        const cfg = this.config
        this.drawHandler = new Draw(cfg.panel,this.model,cfg.height)
    }
}