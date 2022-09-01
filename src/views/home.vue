<!-- 综合态势 -->
<template>
  <div class="stateBox">
    <div class="state-leftBox">

    </div>
    <div class="state-middleBox">
      <img src="../../public/images/stateBanner.png" alt="" class="stateImg">
    </div>
    <div class="state-rightBox">

    </div>

  </div>
</template>
<script setup>
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.stateBox{
  background-color: #2b3b5c;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.state-leftBox,.state-rightBox{
  width: 25%;
  height: 90%;
  background-color: #162a42;
  border: 1px solid wheat;
  border-radius: 10px;

}
.state-middleBox{
  background-color: #162a42;
  width: 45%;
  height: 90%;
  border: 1px solid wheat;
  border-radius: 10px;
  text-align: center;
}
.stateImg{
  width: 98%;
  height: 90%;
}
</style>


