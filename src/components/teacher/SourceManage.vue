<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{ this.cardData.sourceName }}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handelClick">编辑</el-button>
        </div>
        <div>
            <div class="flex"><div>开课时间：</div><div class="item">{{ this.cardData.startTime }}</div></div>
            <div class="flex"><div>结课时间：</div><div class="item">{{ this.cardData.endTime }}</div></div>
            <div class="flex"><div>上课地点：</div><div class="item">{{ this.cardData.position }}</div></div>
            <div class="flex"><div>课堂人数：</div><div class="item">{{ this.cardData.stuNumber }}</div></div>
            <div class="flex"><div>考试时间：</div><div class="item">{{ this.cardData.testTime }}</div></div>
        </div>
        <el-dialog title="修改课程信息" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
            <div class="inputChange">
                <div  class="flex">
                    <span>课程名：</span><el-input v-model="cardData.sourceName" size="mid" placeholder="请输入修改后信息" />
                </div>
                <div  class="flex">
                    <span>开始行课时间：</span><el-input v-model="cardData.startTime" size="mid" placeholder="请输入修改后信息" />
                </div>
                <div  class="flex">
                    <span>结课时间：</span> <el-input v-model="cardData.endTime" size="mid" placeholder="请输入修改后信息" />
                </div>

                <div  class="flex">
                    <span>上课地点</span> <el-input v-model="cardData.position" size="mid" placeholder="请输入修改后信息" />
                </div>
                <div  class="flex">
                    <span>学生数量：</span> <el-input v-model="cardData.stuNumber" size="mid" placeholder="请输入修改后信息" />
                </div>
                <div class="flex">
                    <span>考试时间：</span> <el-input v-model="cardData.testTime" size="mid" placeholder="请输入修改后信息" />
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handelOK">确 定</el-button>
            </span>
        </el-dialog>
    </el-card>
</template>

<script>
import { Message } from 'element-ui';
import { mockUrl } from '../../config';
export default {
    name: "source",
    data() {
        return {
            cardData: {},
            dialogVisible: false,
        }
    },
    mounted() {
        const token = localStorage.getItem("token");
        this.getData(mockUrl + "/getSourceData", token).then(res => {
            this.cardData = res.data;
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
        async sourceInfo(url="",data={},token) {
            const res = await fetch(url, {
                method: "post",
                headers: {
                    token: token,
                },
                body: JSON.stringify(data),
            });
            return res.json();
        },
        handelClick() {
            this.dialogVisible = true;
        },
        handleClose() {
            this.dialogVisible=false;
        },
        handelOK() {
            const token = localStorage.getItem("token");
            this.sourceInfo(mockUrl + "/changeSourceInfo", this.cardData, token).then(res => {
                if (res.code === 200) {
                    Message.success({
                        message: "修改成功!",
                        duration: 1000,
                        onClose: () => this.dialogVisible = false,
                    })
                }
                else {
                    Message.error({
                        message: res.msg || "修改失败!",
                    })
                }
            }).catch(error => {
                Message.error({
                    message: error || "修改失败!",
                        duration:1000,
                    })
            })
        }
    }
}
</script>

<style>
.el-input {
    width: 70%;
}

.inputChange {
    display: inline-block;
    width: 70%;
    margin-left: 20px;
}

.flex span {
    line-height: 40px;
}

.flex {
    margin: 10px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
}

.text {
    font-size: 14px;
}

.item {
    min-width: 300px;
    text-align: left;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 550px;
}
</style>