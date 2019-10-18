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
      <download-excel
        class="export-excel-wrapper"
        :data="tableData"
        :fields="json_fields"
        name="电费审核用户统计表.xls"
      >
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <el-button type="" size="small">导出EXCEL</el-button>
      </download-excel>
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
      loading: false,
      json_fields: {
        "用户编号":"UserID",
        "用户名称":"UserID",
        "基本电费收费方式":"InceptMode",
        "变台名称":"UserID",
        "上期尖":"preTinENum",
        "上期峰":"prePeakNum",
        "上期平":"preFlatNum",
        "上期谷":"preValNum",
        "上期无功":"preUNtotalnum",
        "上期有功":"preTotalnum",
        "本期尖":"nowTinENum",
        "本期峰":"nowPeakNum",
        "本期平":"nowFlatNum",
        "本期谷":"nowValNum",
        "本期有功":"nowTotalnum",
        "本期无功":"nowUNtotalnum",
        "尖电量":"nowTinENum",
        "峰电量":"PeakNum",
        "平电量":"FlatNum",
        "谷电量":"ValNum",
        "有功电量":"Totalnum",
        "无功电量":"UNtotalnum",
        "倍率":"Muilt",
        "尖电费":"TinENumExes",
        "峰电费":"PeakNumExes",
        "平电费":"FlatNumExes",
        "谷电费":"ValNumExes",
        "电度电费":"TotENumExes",
        "变损电费":"ENumExes",
        // "Complete name": "name", //常规字段
        // Telephone: "phone.mobile", //支持嵌套属性
        // "Telephone 2": {
        //   field: "phone.landline",
        //   //自定义回调函数
        //   callback: value => {
        //     return `Landline Phone - ${value}`;
        //   }
        // }
      },
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010"
          }
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244"
          }
        }
      ],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
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