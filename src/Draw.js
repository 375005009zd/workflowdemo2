import Constants from "./Constants"
import Engine from './engine/CanvasEngine'

export default class Draw {
    constructor(container, model, height) {
        this.container = container
        this.model = model
        this.mCoordManage = this.model.get(Constants.instance.mCoordManage)
        this.height = height
        this.initVars()
        this.initDom()
    }

    //初始化变量
    initVars() {
        this.defaultShape = [
            Constants.defaultShape.rect,
            Constants.defaultShape.text,
            Constants.defaultShape.polygon,
            Constants.defaultShape.ellipse
        ]
    }

    //初始化dom元素
    initDom() {
        const width = this.container.clientWidth
        const height = this.height || this.container.clientHeight
        this.containerSize = {
            width,
            height
        }

        const canvasContainer = document.createElement('div')
        canvasContainer.style.position = 'relative'
        this.container.appendChild(canvasContainer)

        //显示面板
        const showCanvas = document.createElement('canvas')
        //编辑面板
        const editCanvas = document.createElement('canvas')

        showCanvas.width = width
        showCanvas.height = height
        editCanvas.width = width
        editCanvas.height = height

        editCanvas.style.position = 'absolute'
        editCanvas.style.top = '0px'
        editCanvas.style.left = '0px'

        canvasContainer.appendChild(showCanvas)
        canvasContainer.appendChild(editCanvas)

        //设置绘图实例
        const showCtx = showCanvas.getContext('2d')
        const editCtx = editCanvas.getContext('2d')
        this.showCtx = showCtx
        this.editCtx = editCtx
        this.showEngine = new        

    }
}