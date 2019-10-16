<template>
  <div id="printMe">
    <h3>业务申请</h3>
    <table v-loading="loading">
      <tbody>
        <tr>
          <td>用户编号</td>
          <td>{{userinfo.USERID}}</td>
          <td>用户名称</td>
          <td>{{userinfo.USERNAME}}</td>
        </tr>
        <tr>
          <td>用电地址</td>
          <td>{{userinfo.ADDRESSCODE}}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>通讯地址</td>
          <td>{{userinfo.ADDRESSCODE}}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>法人代表</td>
          <td>{{userinfo.CONTACTPERSON}}</td>
          <td>身份证号</td>
          <td>{{userinfo.CONTACTARCHIVESID}}</td>
        </tr>
        <tr>
          <td>联系人</td>
          <td>{{userinfo.CONTACTPERSON}}</td>
          <td>身份证号</td>
          <td>{{userinfo.CONTACTARCHIVESID}}</td>
        </tr>
        <tr>
          <td>联系电话</td>
          <td>{{userinfo.CONTACTTEL}}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>缴费方式</td>
          <td>{{userinfo.TOLLMODE_CODE}}</td>
          <td>工作班次</td>
          <td>{{userinfo.SHIFT_NO}}</td>
        </tr>
        <tr>
          <td>用电性质</td>
          <td>{{userinfo.KIND_CODE}}</td>
          <td>电价</td>
          <td>{{userinfo.peakPr}}</td>
        </tr>
        <tr>
          <td>开户银行</td>
          <td>{{userinfo.BANK_NAME_CODE}}</td>
          <td>账号</td>
          <td>{{userinfo.BANK_NO}}</td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top:20px;"></div>
    <el-row type="flex" justify="start">
      <el-button-group>
        <el-button size="small" @click="toInforPage(1)">取消</el-button>
        <el-button size="small" type="primary" v-print="'#printMe'">打印</el-button>
        <el-button size="small" type="warning" @click="toInforPage(3)">确定</el-button>
      </el-button-group>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ['userid'],
  async created() {
    const { data: userinfo } = await axios.get(`/api/inforEditApple/${this.touserid}`);
    this.userinfo = userinfo;
    // console.log(userinfo)
    this.loading=false
  },
  data() {
    return {
      loading:true,
      userinfo:{},
      touserid:this.userid
    };
  },
  methods: {
    toInforPage(pageStatus) {
      this.$emit("applyPageEmit", {
        pageStatus: pageStatus,
        userid:this.touserid
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
</style>