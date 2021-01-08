export default class EngineInterface {
    //绘制线段
    //start:起点  end:终点   options:配置项
    line(start,end,options) {}

    //绘制圆
    //center 中心点  radius 半径  options 配置项
    circle(center, radius, options) {}

    //x,y 
    //w：宽
    //h 高
    //options 配置项
    rect(x, y, w, h, options) {}

    text(x,y,text,options) {}

    //绘制多边形
    //points 顶点集合
    //options 配置项
    polygon(points,options) {}

    //绘制椭圆
}