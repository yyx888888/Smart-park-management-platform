<!-- 分页组件 -->
<template>
  <div class="box">
    <el-pagination
      ref="pagination"
      :page-sizes="[100, 200, 300, 400]"
      background="background"
      layout="total,  prev, sizes,pager, next, jumper"
      :total="400"
    />
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
// props的第一个参数;
export default {
  // 第1步：先用props定义，在使用setup接受传递过来的参数
  props: {
    total: {
      type: Number,
      default: 100,
    },
    default: {
      type: Number,
      default: 10,
    },
  },

  setup(props) {
    // 第2步  接受父组件的参数，并且使用
    const state = reactive({
      total: props.total,
      pageSize: props.default,
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.box {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: flex-end;
}
</style>
