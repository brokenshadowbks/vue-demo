<template>
  <div>
    <el-button type="success" @click="load()">查询</el-button>
    <el-button type="warning" @click="add()">添加</el-button>
    <el-button type="primary" @click="edit()">编辑</el-button>

    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          prop="id"
          label="序号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          width="180">
      </el-table-column>
      <el-table-column
          prop="details"
          label="详情">
      </el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-popconfirm title="确定删除吗？" @confirm="del(scope.row.id)">
            <el-button slot="reference" type="danger" style="margin-left: 5px">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog title="请填写信息" :visible.sync="dialogFormVisibleEdit" width="30%">
      <el-form :model="form">
        <el-form-item label="序号" :label-width="15">
          <el-input v-model="form.id" autocomplete="off" style="width:90%" placeholder="待更新的序号"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="15">
          <el-input v-model="form.name" autocomplete="off" style="width:90%" placeholder="更新名称"></el-input>
        </el-form-item>
        <el-form-item label="详情" :label-width="15">
          <el-input v-model="form.details" autocomplete="off" style="width:90%" placeholder="更新详情"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="submitEdit()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="请填写信息" :visible.sync="dialogFormVisibleAdd" width="30%">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="15">
          <el-input v-model="form.name" autocomplete="off" style="width:90%" placeholder="添加名称"></el-input>
        </el-form-item>
        <el-form-item label="详情" :label-width="15">
          <el-input v-model="form.details" autocomplete="off" style="width:90%" placeholder="添加详情"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="submitAdd()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  data() {
    return {
      tableData: [],
      dialogFormVisibleEdit: false,
      dialogFormVisibleAdd: false,
      dialogFormVisibleDel: false,
      form: {}
    }
  },
  created() {//页面加载处理内容

  },
  methods: {//触发事件
    load() {
      request.get("http://localhost:7573/api/pro/gateway/get").then(res => {
        this.tableData = res.data;
      })
    },
    edit() {
      this.form={};
      this.dialogFormVisibleEdit = true;
    },
    add() {
      this.form={};
      this.dialogFormVisibleAdd = true;
    },
    submitEdit() {
      request.put("http://localhost:7573/api/pro/gateway/update", this.form);
      this.dialogFormVisibleEdit = false;
    },
    submitAdd() {
      request.post("http://localhost:7573/api/pro/gateway/add", this.form);
      this.dialogFormVisibleAdd = false;
      this.load();

    },
    del(id) {
      request.delete("http://localhost:7573/api/pro/gateway/del/" + id);
      this.load();

    }
  }
}
</script>