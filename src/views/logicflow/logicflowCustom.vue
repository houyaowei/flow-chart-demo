<template>
  <div class="flowCanvas">
    <div class="container" ref="container"></div>
    <!-- 节点面板 -->
    <CustomNodePanel v-if="lf" :lf="lf"></CustomNodePanel>
    <!-- 数据面板 -->
    <BpmnDataPanel v-if="lf" :lf="lf"></BpmnDataPanel>
    <!-- 弹窗编辑 -->
    <a-drawer
      title="节点信息"
      v-model:visible="showDrawer"
      :direction="'rtl'"
      @close="onClose"
    >
    <a-form :model="form" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="20">
          <a-form-item label="姓名" name="name">
            <a-input v-model:value="form.name" placeholder="姓名" />
          </a-form-item>
        </a-col>
       </a-row>
       <a-row>
        <a-col :span="20">
          <a-form-item label="年龄" name="age">
            <a-input v-model:value="form.age" placeholder="年龄" />
          </a-form-item>
        </a-col>
      </a-row>
      </a-form>
      <template #extra>
        <a-space>
          <a-button @click="onClose">取消</a-button>
          <a-button type="primary" @click="onClose">确定</a-button>
        </a-space>
    </template>
    </a-drawer>
  </div>
</template>

<script lang="ts">
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";

import {
  BpmnElement,
  BpmnXmlAdapter,
  Snapshot,
  Control,
  Menu,
  SelectionSelect,
} from "@logicflow/extension";
import { Drawer } from "ant-design-vue"

import "@logicflow/extension/lib/style/index.css";
import CustomNodePanel from "./components/CustomNodePanel.vue";
import BpmnDataPanel from "./components/BpnmDataPanel.vue";
import sequenceLine from "./registerLine/PlogonLine"

export default {
  name: "logicflowCustom",
  data() {
    return {
      lf: null,
      showDrawer: false,
      currentNode: null,
      form: {
        name: '',
        age: ''
      }
    };
  },
  components: { CustomNodePanel, BpmnDataPanel },

  mounted() {
    LogicFlow.use(BpmnElement);
    LogicFlow.use(BpmnXmlAdapter);
    LogicFlow.use(Snapshot); //chart快照
    LogicFlow.use(Control); //控制菜单
    LogicFlow.use(Menu); //右键菜单
    LogicFlow.use(SelectionSelect);
    //初始化
    this.lf = new LogicFlow({
      container: this.$refs.container,
      grid: {
        size: 15,
        visible: true,
        type: "mesh",
        config: {
          color: "#ababab",
          thickness: 1,
        },
      },
      animation: true
    });
    this.lf.register(sequenceLine);
    this.lf.setDefaultEdgeType("sequenceLine");
    this.lf.render();
    //绑定事件
    const { eventCenter } = this.lf.graphModel;
    this.bindEvent(eventCenter);
  },

  methods: {
    bindEvent(eventCenter) {
      eventCenter.on("node:click, edge:click", (args) => {
        console.log("节点单击", args);
        this.showDrawer = true;
        this.currentNode = args;
      });
    },
    onClose() {
      const { name, age } = this.form;

      this.lf.setProperties(this.currentNode.data.id, {
        name: name,
        age: age
      })
    }
  },
};
</script>

<style scoped>
.flowCanvas {
  position: relative;
  width: 90%;
  height: 90vh;
  margin: 0px;
  display: flex;
}
.flowCanvas .container {
  display: flex;
  flex-grow: 1; /*铺满剩余空间*/
  border: 3px solid #ababab;
  overflow: hidden;
}
</style>