<template>
  <div>
    <h2>数据审核</h2>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background:'#CCCCCC',color:'#000'}"
      style="width: 80%;"
      max-height="490px"
      v-loading="loading"
      highlight-current-row
      v-if="mainTableFlag"
    >
      <el-table-column show-overflow-tooltip fixed prop="BkID" label="抄表本编号" width="110"></el-table-column>
      <el-table-column show-overflow-tooltip prop="BkName" label="抄表本名称" width="170"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ProcNum" label="用户数量" width="90"></el-table-column>
      <el-table-column show-overflow-tooltip prop="CopyDay" label="抄表例日" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ProcNum" label="抄表机" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop label="最后抄表日期" width="110"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ProcMo" label="算费期" width="80"></el-table-column>
      <el-table-column fixed="right" label="关账" width="50">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            <i class="el-icon-help"></i>
          </el-button>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="审核" width="50">
        <template slot-scope="scope">
          <el-button @click="handleClickLURU(scope.row)" type="text" size="small">
            <i class="el-icon-help"></i>
          </el-button>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <ChargeAuditList
      v-if="detailTableFlag"
      v-on:enterlist="getEnterListEmit"
      :bkUserList="bkUserList"
    ></ChargeAuditList>
  </div>
</template>

<script>
import axios from "axios";
import ChargeAuditList from "./ChargeAuditList";

export default {
  components: {
    ChargeAuditList
  },
  async created() {
    const data = await axios.get("/api/chargesInfoReady", {
      params: {
        ProcSt: "审核"
      }
    });

    this.tableData = data.data.infos;
    this.loading = false;
  },

  data() {
    return {
      mainTableFlag: true,
      detailTableFlag: false,
      loading: true,
      tableData: [],
      bkUserList: []
    };
  },
  methods: {
    // 获取抄表本列表数据
    async getTableData() {
      this.loading = true;

      const data = await axios.get("/api/chargesInfoReady", {
        params: {
          ProcSt: "审核"
        }
      });

      this.tableData = data.data.infos;
      this.loading = false;
    },
    async changeBkStatus(bkid) {
      try {
        this.loading = true;
        var res = await axios.patch(`/api/chargesInfoReady/${bkid}`, {
          bkInfo: {
            ProcSt: "关账"
          }
        });

        window.alert("已关账");
        this.getTableData();
      } catch (error) {
        window.alert("关账失败，请查看日志");
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    handleClick(row) {
      // 改变主表，详细表显示状态
      this.changeBkStatus(row.BkID);
    },

    // 录入详细信息
    async handleClickLURU(row) {

      // 点击录入后的详细信息
      this.switchTableShow(2);
      const {infos} = await this.getDetailTableData(row.BkID);
      this.bkUserList = infos;
      console.log(infos);
      
    },

    // 切换table
    //1:显示主table，隐藏详细table
    //2：显示详细table，隐藏主table
    switchTableShow(flagIndex) {
      if (flagIndex === 1) {
        this.mainTableFlag = true;
        this.detailTableFlag = false;
      } else if (flagIndex === 2) {
        this.mainTableFlag = false;
        this.detailTableFlag = true;
      }
    },

    // 得到详细table的事件
    getEnterListEmit(data) {
      this.switchTableShow(data);
    },
    //获取某个抄表本下的用户信息
    async getDetailTableData(bkid) {
      const { data } = await axios.get(`/api/chargesInfoReady/${bkid}`);
      return data
    }
  }
};
</script>

<style>
</style>