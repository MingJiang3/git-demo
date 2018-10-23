<template>
    <div @wheel="wheelEvent($event)">
        <transition-group tag="div" :name="name"
        @enter="enter" @leave="leave">
            <div class="block" v-for="(list,index) in pages" :key="list"
             :style="{'background-color':bgColor&&bgColor[index]?bgColor[index]:baseBgc}"
             v-show="index === curIndex" @transitionend="end">{{list}}
              <slot v-for="slotIndex in pages" :name="'slot'+slotIndex" v-if="index+1 === slotIndex" :state="state"></slot>
             </div>
        </transition-group>
    </div>
</template>
<script>
export default {
    props:{
        bgColor:{
            type:Array
        },
        baseBgc:{
            default:'#c90'
        },
        pages:{
            type:Number,
            required:true
        }
    },
    data(){
        return{
            curIndex:0,
            name:'',
            canWheel:true,
            endCount:0,
            state:''
        }
    },
    methods:{
        whellEvent(e){
            if(!this.canWheel){return}
            this.canWheel = false
            if(e.deltaY > 0){
                if(this.curIndex === this.pages-1){
                    this.canWheel = true
                    this.endCount = 0
                    return
                }
                this.name = 'down'
                this.curIndex++;
            }
            if(e.deltaY < 0){
                if(this.curIndex === 0){
                    this.canWheel = true
                    this.endCount = 0
                    return
                }
                this.name = 'up'
                this.curIndex--;
            }
        },
        end(){
            this.endCount++;
            if(this.endCount == 2){
                this.canWheel = true
                this.endCount = 0
                this.state = 'transitionend'
            }
        },
        enter(el,done){
            this.state = 'enter'
            // done()
        },
        leave(el,done){
            this.state = 'leave'
            // done()  
        }
    }
}
</script>
<style>
.block{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #c09;
}
</style>


