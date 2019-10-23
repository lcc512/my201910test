<template>
  <div>
    <h2>数据核算</h2>
    <el-table
      :data="tableData"
      border
      :header-cell-style="{background:'#CCCCCC',color:'#000'}"
      style="width: 830px; text-align: center;"
      max-height="490px"
      v-loading="loading"
      highlight-current-row
    >
      <el-table-column show-overflow-tooltip fixed prop="BkID" label="抄表本编号" width="110"></el-table-column>
      <el-table-column show-overflow-tooltip prop="BkName" label="抄表本名称" width="170"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ProcNum" label="用户数量" width="90"></el-table-column>
      <el-table-column show-overflow-tooltip prop="CopyDay" label="抄表例日" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ProcNum" label="抄表机" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop label="最后抄表日期" width="110"></el-table-column>
      <el-table-column show-overflow-tooltip prop="ProcMo" label="算费期" width="80"></el-table-column>
      <el-table-column fixed="right" label="核算" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            <i class="el-icon-help"></i>
          </el-button>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    const data = await axios.get("/api/chargesInfoReady", {
      params: {
        ProcSt: "核算"
      }
    });

    this.tableData = data.data.infos;
    this.loading = false;
  },

  data() {
    return {
      loading: true,
      tableData: []
    };
  },
  methods: {
    // 获取抄表本列表数据
    async getTableData() {
      this.loading = true;

      const data = await axios.get("/api/chargesInfoReady", {
        params: {
          ProcSt: "核算"
        }
      });

      this.tableData = data.data.infos;
      this.loading = false;
    },
    async changeBkStatus(bkid) {
      try {
        var res = await axios.patch(`/api/chargesInfoReady/${bkid}`, {
          bkInfo: {
            ProcSt: "审核"
          }
        });
        this.getTableData();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

// 核算方法
    async calcuBkdataInfo(bkid) {
      try {
        this.loading = true;

        var res = await axios.get(`/api/calcuBkdataInfo/${bkid}`);

        window.alert("核算完成");

        this.changeBkStatus(bkid);

        // console.log(res);
      } catch (error) {
        window.alert("核算失败");
      } finally {
        this.loading = false;
      }
    },

    // 核算方法，显示计算进度
    handleClick(row) {
      this.calcuBkdataInfo(row.BkID);
    }
  }
};
</script>

<style>

</style>