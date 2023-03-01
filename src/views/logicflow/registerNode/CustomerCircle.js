/**
 * 连线规则：
 * 增加前置规则，需要实现getConnectedSourceRules
 * 增加后置规则，需要实现getConnectedTargetRules
 */
import { CircleNode, CircleNodeModel } from "@logicflow/core";

class CustomerCircleNode extends CircleNode {

}

class CustomerCircleModel extends CircleNodeModel{
    initNodeData(data) {
        super.initNodeData(data);
    }
    // getConnectedSourceRules() {

    // }
    // getConnectedTargetRules() {
    //     const rules = super.getConnectedTargetRules();
    //     const geteWayOnlyAsTarget = {
    //       message: "上一个节点只能是开始节点",
    //       validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
    //         console.log("sourceNode:",sourceNode)
    //         console.log("targetNode:",targetNode)
    //         console.log("sourceAnchor:",sourceAnchor)
    //         console.log("targetAnchor:",targetAnchor)
    //         return false;
    //       }
    //     };
    //     rules.push(geteWayOnlyAsTarget);
    //     return rules;
    // }
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