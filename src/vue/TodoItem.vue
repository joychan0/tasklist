<template>
    <div :class="['todo-item', todo.completed ? 'completed' : '']">
        <input type="checkbox" name="check" id="check" v-model="todo.completed">
        <label>{{todo.content}}</label>
        <button
            @click="remove"
        ></button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: Object
    },
    methods:{
        remove(){
            this.$emit('del',this.todo.id);
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../css/mixins.styl';
.todo-item{
    display flex;
    height 30px
    justify-content space-between
    padding: 10px
    border-top: 1px solid rgba(0, 0, 0, 0.1)
    font-size: 24px
    button {
        cleanDefaultStyle();
        background-color  transparent
        cursor pointer
        width 40px
    }
    #check {
        cleanDefaultStyle();
        
    }
    label{
        flex: 1;
    }
    &:hover{
        button:after{
            content: 'x'
            font-size: 24px
            color black 
        }    
    }
    &.completed{
        label{
            color: #d9d9d9
            text-decoration line-through
        }    
    }
}
</style>