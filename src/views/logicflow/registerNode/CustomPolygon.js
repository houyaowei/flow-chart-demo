import { PolygonNode, PolygonNodeModel } from "@logicflow/core";


// 提供节点
class CustomPolygonNode extends PolygonNode {
  /* 
  getShape() {
    const { model, graphModel } = this.props;
    // ...
  }
  */
}

// 提供节点的属性
class CustomPolygonModel extends PolygonNodeModel {
  getNodeStyle() {
    const style = super.getNodeStyle();
    const { name,isActived } = this.properties;
    console.log("CustomaPolygon 节点 name:" ,name)
    if(name == "houyw") {
        style.stroke = "orange";
      } else {
        style.stroke = "#2987ff";
      }
    return style;
  }
}

export default {
  type: "CustomaPolygon",
  view: CustomPolygonNode,
  model: CustomPolygonModel
}