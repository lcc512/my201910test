<template>
  <div>
    <table class="table-search">
      <tbody>
        <tr>
          <td>
            <span>用户名称：</span>
            <input type="text" v-model="searchInfo.USERNAME" />
          </td>
          <td>
            <span>电话：</span>
            <input type="text" v-model="searchInfo.CONTACTTEL" />
          </td>
          <td>
            <span>合同编号：</span>
            <input type="text" v-model="searchInfo.CONTRACT_NO" />
          </td>
          <td>
            <span>用电地址：</span>
            <input type="text" v-model="searchInfo.ACC_ADDR" />
          </td>
          <td>
            <span>用电性质：</span>
            <input type="text" v-model="searchInfo.KIND_CODE" />
          </td>
        </tr>
        <tr>
          <td>
            <span>变台：</span>
            <input type="text" v-model="searchInfo.PtName" />
          </td>
          <td>
            <span>收费方式：</span>
            <input type="text" v-model="searchInfo.TOLLMODE_CODE" />
          </td>
          <td>
            <span>临时用户：</span>
            <input type="text" />
          </td>
          <td>
            <span>用户状态：</span>
            <input type="text" v-model="searchInfo.STATUS_CODE" />
          </td>
          <td>
            <span>基本电费：</span>
            <input type="text" v-model="searchInfo.InceptMode" />
          </td>
        </tr>
        <tr>
          <td>
            <el-button
              type="primary"
              size="mini"
              plain
              style="width:60px; text-align:left;"
              @click="getTableData(1, 20)"
            >查询</el-button>
          </td>
        </tr>
      </tbody>
    </table>

    <el-table
      :data="tableData"
      border
      :header-cell-style="{background:'#CCCCCC',color:'#000'}"
      style="width: 95%;"
      max-height="490px"
      v-loading="loading"
      highlight-current-row
    >
      <el-table-column show-overflow-tooltip fixed prop="USERID" label="用户编号" width="110"></el-table-column>
      <el-table-column show-overflow-tooltip prop="USERNAME" label="用户名称" width="170"></el-table-column>
      <el-table-column show-overflow-tooltip prop="CONTRACT_NO" label="合同编号" width="100"></el-table-column>
      <el-table-column show-overflow-tooltip prop="InceptMode" label="基本电费" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="DemandValue" label="需量值" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="KIND_CODE" label="用电性质" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="Cap" label="计费容量" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ACC_ADDR" label="用电地址" width="140"></el-table-column>
      <el-table-column show-overflow-tooltip prop="PtName" label="变台" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="STATUS_CODE" label="用户状态" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="STATUSLOCK" label="已锁定" width="80"></el-table-column>
      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            <i class="el-icon-help"></i>
          </el-button>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, prev, pager, next, jumper"
        :page-size="20"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    const { data: userInfo } = await axios.get(`/api/inforEditList`, {
      params: this.searchInfo
    });
    // 传递参数的时候用params，nodeexpres接收的时候 用  req.query

    console.log(userInfo);
    

    this.tableData = userInfo.users;
    this.total = userInfo.totalNum;
    this.loading = false;
    // console.log(userInfo);
  },
  methods: {
    handleClick(row) {
      // console.log(row);
      var data = {
        pageStatus: 2,
        userid: row.USERID
      };

      this.$emit("listPageEmit", data);
    },

    // 获取用户列表数据
    async getTableData(_page, _limit) {
      this.loading = true;

      const searchInfo = this.searchInfo;

      searchInfo._page = _page;
      searchInfo._limit = _limit;

      this.searchInfo = searchInfo;

      const { data: userInfo } = await axios.get(`/api/inforEditList`, {
        params: searchInfo
      });
      // 传递参数的时候用params，nodeexpres接收的时候 用  req.query

      this.tableData = userInfo.users;
      this.loading = false;
      // console.log(userInfo);
    },
    //分页相关
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.getTableData(val, 20);
    }
  },

  data() {
    return {
      total:200,
      currentPage: 1,
      loading: true,
      tableData: [
        {
          userid: "0000000002",
          username: "天津天保国际物",
          barginid: "08081101",
          baseFeeStyle: "容量",
          demandNum: "",
          kind_code: "一般工商业",
          baseNum: 300,
          address: "起步区／新港大道--更改111",
          biantai: "WB57",
          status: "正式",
          statuslock: "否"
        }
      ],
      searchInfo: {
        USERNAME: "",
        CONTACTTEL: "",
        CONTRACT_NO: "",
        ACC_ADDR: "",
        KIND_CODE: "",
        PtName: "",
        TOLLMODE_CODE: "",
        STATUS_CODE: "",
        InceptMode: ""
      }
    };
  }
};
</script>

<style>
.table-search {
  text-align: left;
}
.table-search input {
  width: 100px;
}
.table-search span {
  display: inline-block;
  width: 80px;
}
</style>