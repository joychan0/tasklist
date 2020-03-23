<template>
    <div class="main-todo">
        <input 
            type="text" 
            class="add-todo"
            placeholder="下一步该做什么?"
            autofocus
            v-model="content"
            @keyup.enter="addTodo"
        />
        <todo-item
            v-for="(item,index) in filterData"
            :key="index"
            :todo=item
            @del="delItem"
        ></todo-item>
        <todo-info 
            :total="total"
            @toggleState="handleToggleState"
            @removeCompleted="handleRemove"
        ></todo-info>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoInfo from './TodoInfo.vue'

let id=0
export default {
    name: 'MainTodo',
    components:{
        TodoItem,
        TodoInfo
    },
    data: function() {
        return{
            todoData: [],
            content: '',
            total: 0,
            filter: '全部'
        } 
    },
    watch: {
        todoData: {
            deep: true,
            handler(){
                this.total=this.todoData.filter(item=>item.completed==false).length;
            }
        }
    },
    methods: {
        addTodo(){
            if(this.content===''){
                return;
            }
            this.todoData.unshift({
                id: id++,
                content: this.content,
                completed: false
            });
            this.content='';
        },
        delItem(id){
            this.todoData.splice(this.todoData.findIndex(item => item.id === id),1);
        },
        handleToggleState(state){
            this.filter=state;
        },
        handleRemove(){
            this.todoData=this.todoData.filter(item=>item.completed==false);
        }
    },
    computed: {
        filterData(){
            switch (this.filter) {
                case '全部':
                    return this.todoData
                    break
                case '未完成':
                    return this.todoData.filter(item => item.completed == false)
                    break
                case '已完成':
                    return this.todoData.filter(item => item.completed == true)
                    break
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.main-todo{
  margin: 10px auto;
  width: 600px;
  background-color: #fff;
  box-shadow: 0 0 5px #666;
}

.add-todo{
    padding: 16px 16px 16px 36px;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    border: none;
    outline: none;
    box-sizing: border-box;
}
</style>

