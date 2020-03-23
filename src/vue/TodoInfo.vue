<template>
  <div class="todo-info">
      <span class="total">{{total}} 未完成</span>
      <div>
          <a
            v-for="(item,index) in states" 
            :key="index"
            :class="['btn', 'primary', 'border', state == item ? 'actived' : '']"
            @click="toggleState(item)"
          >{{item}}</a>
      </div>
      <button class="btn info" @click="removeCompleted">清除已完成</button>
  </div>
</template>

<script>
export default {
    name: 'TodoInfo',
    data() {
        return {
            states: ['全部','未完成','已完成'],
            state: '全部'
        }
    },
    props:{
        total: Number
    },
    methods:{
        toggleState(state){
            this.state=state;
            this.$emit('toggleState',state);
        },
        removeCompleted(){
            this.$emit('removeCompleted');
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../css/mixins.styl'

.todo-info{
    display: flex
    justify-content: space-between
    padding: 5px 10px
    font-weight: 400
    line-height: 30px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    .total{
      color: red;
    }
    .tabs{
      display: flex
      justify-content: space-between
      width: 200px
    }
    .btn.primary.border{
      primaryBorderBtn()
    
      &.actived{
        primaryBtn()
      }
    }
    .btn.info{
      infoBtn()
    }
}
</style>>

