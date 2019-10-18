<template>
  <div>
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
      <el-table-column show-overflow-tooltip label="本期尖" width="120">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.nowTinENum"></el-input>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="本期峰" width="120">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.nowPeakNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="本期平" width="120">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.nowFlatNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="本期谷" width="120">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.nowValNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="本期有功" width="120">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.nowTotalnum"></el-input>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip label="本期无功" width="120">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.nowUNtotalnum"></el-input>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="TinENum" label="尖电量" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="PeakNum" label="峰电量" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="FlatNum" label="平电量" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ValNum" label="谷电量" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="Totalnum" label="有功电量" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="UNtotalnum" label="无功电量" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="Muilt" label="倍率" width="80"></el-table-column>
    </el-table>
    <el-row type="flex" justify="start">
      <el-button-group>
        <el-button size="small" @click="cancelChargeInfo">取消</el-button>
        <el-button size="small" @click="saveChargeInfo">计算</el-button>
        <el-button size="small" type="warning" @click="submitChargeInfo">确定</el-button>
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
    async submitChargeInfo() {
      await axios.patch(`/api/updateNewBkdataInfo`, {
        bkInfo: this.tableData
      });

      alert("录入完成");

      this.$emit("enterlist", 1);
    },
    cancelChargeInfo() {
      this.$emit("enterlist", 1);
    },
    // 计算出电量，不保存，当点确定的时候才保存到数据库
    saveChargeInfo() {
      this.tableData.forEach(item => {
        item.TinENum =
          (parseFloat(item.nowTinENum) - parseFloat(item.preTinENum)) *
          item.Muilt;
        item.PeakNum =
          (parseFloat(item.nowPeakNum) - parseFloat(item.prePeakNum)) *
          item.Muilt;
        item.FlatNum =
          (parseFloat(item.nowFlatNum) - parseFloat(item.preFlatNum)) *
          item.Muilt;
        item.ValNum =
          (parseFloat(item.nowValNum) - parseFloat(item.preValNum)) *
          item.Muilt;

        item.Totalnum =
          item.TinENum + item.PeakNum + item.FlatNum + item.ValNum;

        item.UNtotalnum =
          (parseFloat(item.nowUNtotalnum) - parseFloat(item.preUNtotalnum)) *
          item.Muilt;
      });
    }
  }
};
</script>

<style >
</style>