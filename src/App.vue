<template>
  <v-app>
    <v-navigation-drawer app>
      <draggable
        v-model="myArray"
        :options="{group:{name: 'people',pull:'clone'},sort: false}"
        @start="drag = true"
        @end="drag = false"
      >
        <div v-for="element in myArray" :key="element.id">
          <v-btn depressed>
            {{ element.name }}
          </v-btn>
        </div>
      </draggable>
    </v-navigation-drawer>

    <v-app-bar app> 服务编排系统demo </v-app-bar>
    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <!-- 如果使用 vue-router -->
        <router-view> </router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "App",
  components: {
    draggable,
  },
  data() {
    return {
      myArray: [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" },
        { id: 4, name: "4" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
