import { CircleNode, CircleNodeModel } from "@logicflow/core";

class CustomerCircleNode extends CircleNode {

}

class CustomerCircleModel extends CircleNodeModel{
    initNodeData(data) {
        super.initNodeData(data);
        
    }
    setAttributes(){
        this.extraAttribute = "circle"
    }
    getNodeStyle() {
        const style = super.getNodeStyle();
        const { name,isActived } = this.properties;
        if(name == 'houyw') {
            style.stroke = "orange";
          } else {
            style.stroke = "#2987ff";
          }
        style.stroke = '#2987ff';
        return style;
    }
}
export default {
    type: "CustomCircle",
    view: CustomerCircleNode,
    model: CustomerCircleModel
}