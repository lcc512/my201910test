<template>
  <div id="printMe">
    <h2>录入详情</h2>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background:'#CCCCCC',color:'#000'}"
      style="width: 95%;"
      max-height="490px"
      v-loading="loading"
      highlight-current-row
    >
      <el-table-column show-overflow-tooltip fixed prop="UserID" label="用户编号" width="110"></el-table-column>
      <el-table-column show-overflow-tooltip prop="UserID" label="用户名称" width="170"></el-table-column>
      <el-table-column show-overflow-tooltip prop="InceptMode" label="基本电费收费方式" width="90"></el-table-column>
      <el-table-column show-overflow-tooltip prop="UserID" label="变台名称" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="preTinENum" label="上期尖" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="prePeakNum" label="上期峰" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="preFlatNum" label="上期平" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="preValNum" label="上期谷" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="preUNtotalnum" label="上期无功" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="preTotalnum" label="上期有功" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowTinENum" label="本期尖" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowPeakNum" label="本期峰" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowFlatNum" label="本期平" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowValNum" label="本期谷" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowTotalnum" label="本期有功" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowUNtotalnum" label="本期无功" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowTinENum" label="尖电量" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowTinENum" label="本期尖" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowTinENum" label="本期尖" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="nowTinENum" label="本期尖" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="TinENum" label="尖电量" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="PeakNum" label="峰电量" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="FlatNum" label="平电量" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ValNum" label="谷电量" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="Totalnum" label="有功电量" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="UNtotalnum" label="无功电量" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="Muilt" label="倍率" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="TinENumExes" label="尖电费" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="PeakNumExes" label="峰电费" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="FlatNumExes" label="平电费" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ValNumExes" label="谷电费" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="TotENumExes" label="电度电费" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ENumExes" label="变损电费" width="120"></el-table-column>
      
    </el-table>
    <el-row type="flex" justify="start">
      <el-button-group>
        
        <el-button size="small" type="warning" @click="cancelChargeInfo">确定</el-button>
        <el-button size="small" type="primary" v-print="'#printMe'">打印</el-button>
      </el-button-group>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["bkUserList"],
  data() {
    return {
      // tableData: this.bkUserList,
      //   tableData: [
      //     {
      //       UserID: 1
      //     }
      //   ],
      loading: false
    };
  },
  computed: {
    tableData: function() {
      console.log(this.bkUserList);
      return this.bkUserList;
    }
  },
  methods: {
    
    cancelChargeInfo() {
      this.$emit("enterlist", 1);
    }
  
  }
};
</script>

<style >
</style>