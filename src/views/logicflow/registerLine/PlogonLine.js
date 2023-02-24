import { PolylineEdge,PolylineEdgeModel } from "@logicflow/core";

class SequenceLineModel extends PolylineEdgeModel {
  setAttributes() {
    this.offset = 20;
  }
  getEdgeStyle() {
    const style = super.getEdgeStyle();
    const { name,isActived } = this.properties;
    if (isActived) {
      style.strokeDasharray = "4 4";
    }
    console.log("SequenceLineModel 线 name:", name)
    if(name == 'hyw') {
      style.stroke = "orange";
    } else {
      style.stroke = "#2987ff";
    }
    return style;
  }
//   getTextStyle() {
//     const style = super.getTextStyle();
//     style.color = "#3451F1";
//     style.fontSize = 30;
//     style.background.fill = "#F2F131";
//     return style;
//   }
//   getOutlineStyle() {
//     const style = super.getOutlineStyle();
//     style.stroke = "red";
//     style.hover.stroke = "red";
//     return style;
//   }
}

export default {
  type: "sequenceLine",
  view: PolylineEdge,
  model: SequenceLineModel
};