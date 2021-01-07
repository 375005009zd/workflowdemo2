<template>
 <draggable v-bind="{group:{ name:'people', put:false}, ghostClass: 'ghost',animation: 200,sort:false}">
   <canvas id="draw-area" style="width:1000px;height:600px"></canvas>
 </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: 'HelloWorld',
  components: {
    draggable,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
