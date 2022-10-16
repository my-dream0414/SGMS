<template>
  <div class="wrapper">
      <!-- <v-sidebar v-if="admin"></v-sidebar>
      <v-sidebart v-else ></v-sidebart> -->
       <!-- <component :is="who"></component> -->
       <!-- <component :is="who"></component> -->

      <div class="content-box" :class="{'content-collapse':collapse}">
          <div class="content">
              <transition name="move" mode="out-in">
                  <keep-alive :include="tagsList">
                      <router-view></router-view>
                  </keep-alive>
              </transition>
              <el-backtop target=".content"></el-backtop>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "name",
  data() {
      return {
          tagsList: [],
          collapse: false,
          admin:true,
          student:false,
          who:localStorage.getItem('Mcomponent')
      };
  },
  // created() {
  //     bus.$on('collapse-content', msg => {
  //         this.collapse = msg;
  //     });
  //     // 查看用户属性
  //     // bus.$on('user',msg=>{
  //     //     this.who= msg==='admin' ? 'vSidebar':'vSidebart';
  //     //     // this.student= msg==='admin' ? false:true;
  //     //     console.log(this.who);
  //     // });
  //     console.log("vuex:"+this.$store.state.user);
  //     // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
  //     bus.$on('tags', msg => {
  //         let arr = [];
  //         for (let i = 0, len = msg.length; i < len; i++) {
  //             msg[i].name && arr.push(msg[i].name);
  //         }
  //         this.tagsList = arr;
  //     });
  // },
  methods:{
      change:function(){
          this.who = 'vSidebart';
      }
  }
};
</script>
