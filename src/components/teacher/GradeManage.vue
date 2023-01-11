<template>
    <div>
        <el-table :data="tableData.filter(data => !search || data.name.includes(search) || data.id.includes(search))"
            style="width: 100%">
            <el-table-column label="学号" prop="id">
            </el-table-column>
            <el-table-column label="姓名" prop="name">
            </el-table-column>
            <el-table-column label="班级" prop="tclass">
            </el-table-column>
            <el-table-column label="课程名" prop="course">
            </el-table-column>
            <el-table-column label="课程成绩" prop="grade" sortable>
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" size="mini" placeholder="输入学号或者姓名搜索" />
                </template>

                <template template slot - scope=" scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"> 编辑 </el-button>
                    <el-button el-button size=" mini" type="danger"
                        @click="handleEdit1(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="修改学生个人信息" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
            <div class="inputChange">
                <div>
                    <span>学号：</span><el-input v-model="change.id" size="mid" placeholder="请输入修改后信息" />
                </div>
                <div>
                    <span>姓名：</span> <el-input v-model="change.name" size="mid" placeholder="请输入修改后信息" />
                </div>

                <div>
                    <span>班级：</span> <el-input v-model="change.tclass" size="mid" placeholder="请输入修改后信息" />
                </div>
                <div>
                    <span>课程：</span> <el-input v-model="change.course" size="mid" placeholder="请输入修改后信息" />
                </div>
                <div>
                    <span>成绩：</span> <el-input v-model="change.grade" size="mid" placeholder="请输入修改后信息" />
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handelOK">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="提示" :visible.sync="dialogVisible1" width="30%">
            <span>确认删除该数据吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleDelete">确 定</el-button>
            </span>
        </el-dialog>

    </div>

</template>

<script>
import { Message } from 'element-ui';
import { mockUrl } from '../../config';
export default {
    name: "grade",
    data() {
        return {
            tableData: [],
            search: "",
            dialogVisible: false,
            dialogVisible1: false,
            change: {
                id: '',
                name: '',
                tclass: "",
                course: "",
                grade: "",
            },
            index: '',
        }
    },
    mounted() {
        const token = localStorage.getItem("token");
        this.getData(mockUrl + "/getStuGrade", token).then(res => {
            console.log(res.data);
            this.tableData = res.data;
        })
    },
    methods: {
        async getData(url = "", token) {
            const res = await fetch(url, {
                method: "get",
                headers: {
                    token: token,
                }
            });
            return res.json();
        },
        async changeStuInfo(url = "", data = {}) {
            const token = localStorage.getItem("token");
            const res = await fetch(url, {
                method: "post",
                headers: {
                    token: token,
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(data),
            });
            return res.json();
        },
        async deleteStuInfo(url,) {
            const token = localStorage.getItem("token");
            const res = await fetch(url, {
                headers: {
                    token: token,

                },
            });
            return res.json();
        },
        changeData(index, row) {
            this.index = index;
            this.change.id = row.id
            this.change.name = row.name
            this.change.tclass = row.tclass
            this.change.course = row.course
            this.change.grade = row.grade
        },
        handleEdit(index, row) {
            this.dialogVisible = true
            this.changeData(index, row)
        },
        handleEdit1(index, row) {
            this.dialogVisible1 = true
            this.changeData(index, row)
        },
        handleDelete() {
            this.deleteStuInfo(mockUrl + "/deleteStuInfo?" + "id=" + this.change.id).then(res => {
                if (res.code === 200) {
                    const newTbaleData = this.tableData.filter(item => item.id !== this.change.id);
                    this.tableData = [...newTbaleData];
                    Message.success({
                        message: "删除成功!",
                        duration: 1000,
                        onClose: () => this.dialogVisible1 = false,
                    })
                }
            }).catch(err => {
                Message.error({
                    message: err || "删除失败",
                    duration: 1000,
                })
            })
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        handelOK() {
            this.changeStuInfo(mockUrl + "/changeStuInfo", this.change).then(res => {
                if (res.code === 200) {
                    const newTbaleData = [... this.tableData];
                    newTbaleData[this.index] = this.change;
                    this.tableData = [...newTbaleData];
                    Message.success({
                        message: "修改成功!",
                        duration: 1000,
                        onClose: () => this.dialogVisible = false,
                    })
                }
                else {
                    Message.error({
                        message: res.msg,
                        duration: 1000,
                        onClose: () => this.dialogVisible = false,
                    })
                }
            }).catch(err => {
                Message.error({
                    message: err || "修改失败！",
                    duration: 1000,
                })
            })
        },
    },

}
</script>

<style scoped>
.inputChange {
    width: 70%;
    margin-left: 20px;
}

.el-input {
    margin-top: 20px;
    width: 90%;
}

.flex {
    display: flex;
    flex-wrap: nowrap;
}
</style>