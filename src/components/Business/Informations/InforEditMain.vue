<template>
  <div>
    <h3>档案编辑</h3>
    <table v-loading="loading">
      <tbody>
        <tr>
          <td>工单号</td>
          <td>{{customerInfo.WORKNO}}</td>
          <td>用户编号</td>
          <td>{{customerInfo.USERID}}</td>
        </tr>
        <tr class="table-tr-title">
          <td colspan="4">基本信息</td>
        </tr>
        <tr>
          <td>原用户编号</td>
          <td>{{customerInfo.SUSERID}}</td>
          <td>用户名称</td>
          <td>
            <input type="text" v-model="customerInfo.USERNAME" />
          </td>
        </tr>
        <tr>
          <td>用电地址</td>
          <td colspan="3">
            <input type="text" v-model="customerInfo.ADDRESSCODE" />
          </td>
        </tr>
        <tr>
          <td>通讯地址</td>
          <td colspan="3">
            <input type="text" v-model="customerInfo.CONTACTADDRESSCODE" />
          </td>
        </tr>
        <tr>
          <td>法人代表</td>
          <td>
            <input type="text" v-model="customerInfo.CONTACTPERSON" />
          </td>
          <td>身份证号</td>
          <td>
            <input type="text" v-model="customerInfo.CONTACTARCHIVESID" />
          </td>
        </tr>
        <tr>
          <td>联系人</td>
          <td>
            <input type="text" v-model="customerInfo.CONTACTPERSON" />
          </td>
        </tr>
        <tr>
          <td>负荷等级</td>
          <td>
            <input type="text" v-model="customerInfo.loadLevel" />
          </td>
          <td>产业分类</td>
          <td>
            <input type="text" v-model="customerInfo.industryClassify" />
          </td>
        </tr>
        <tr>
          <td>行业分类</td>
          <td colspan="3">
            <input type="text" v-model="customerInfo.tradeClassify1" />
          </td>
        </tr>
        <tr class="table-tr-title">
          <td colspan="4">计量信息</td>
        </tr>

        <tr>
          <td>计量方式</td>
          <td>
            <input type="text" v-model="ptInfo.ScaleMode" />
          </td>
          <td>变损量</td>
          <td>
            <input type="text" v-model="ptInfo.translossNum" />
          </td>
        </tr>
        <tr>
          <td>执行峰谷平标志</td>
          <td>
            <input type="text" v-model="ptInfo.PrTParType" />
          </td>
          <td>工作班次</td>
          <td>
            <input type="text" v-model="ptInfo.ClassMode" />
          </td>
        </tr>
        <tr>
          <td>用电性质</td>
          <td>
            <input type="text" v-model="ptInfo.EkindCode" />
          </td>
          <td>供电电压</td>
          <td>
            <input type="text" v-model="ptInfo.Vlevel" />
          </td>
        </tr>
        <tr>
          <td>执行电价</td>
          <td>
            <input type="text" v-model="ptInfo.PR_ID" />
          </td>
          <td>计量点类型</td>
          <td>
            <input type="text" v-model="ptInfo.PtType" />
          </td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top:20px;"></div>
    <el-row type="flex" justify="start">
      <el-button-group>
        <el-button size="small" @click="toInforPage(1)">取消</el-button>
        <el-button size="small" type="warning" @click="submitInfo">确定</el-button>
      </el-button-group>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["userid"],
  async created() {
    var { data } = await axios.get(`/api/inforEditMain/${this.touserid}`);
    this.customerInfo = data.customerInfo;
    this.ptInfo = data.ptInfo;
    // console.log(data);
    this.loading = false;
  },
  data() {
    return {
      touserid: this.userid,
      customerInfo: {},
      ptInfo: {},
      loading: true
    };
  },

  methods: {
    async submitInfo() {
      try {
        this.loading = true;
        var res = await axios.patch(`/api/inforEditMain/${this.touserid}`, {
          customerInfo: this.customerInfo,
          ptInfo: this.ptInfo
        });

        window.alert("修改成功");

        // 触发事件，跳回到用户列表页
        this.$emit("mainPageEmit", {
          pageStatus: 1
        });
      } catch (error) {
        window.alert("修改失败，请查看日志");
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    toInforPage(pageStatus) {
      this.$emit("mainPageEmit", {
        pageStatus: 1
      });
    }
  }
};
</script>

<style scoped>
table,
table tr th,
table tr td {
  border: 1px solid #535b63;
}
table {
  width: 100%;
  min-height: 50px;
  line-height: 35px;
  text-align: left;
  border-collapse: collapse;
}
table input {
  border: 0;
  border-bottom: 1px dashed #535b63;
  width: 90%;
}
.table-tr-title {
  background-color: #535b63;
  color: #fff;
}
</style>