import Constants from './Constants'

//节点管理器
export default class GroupManage {
    constructor(model) {
        this.model = model
    }

    //根据配置生产
    createItem(config) {
        const idm = this.model.get(Constants.instance.idManage)
        //不存在自定义id,新建唯一id
        if(config.id) {
            idm.add(config.id)
        }else {
            config.id = idm.create()
        }
        const item = new Group(config)
        return item
    }
}