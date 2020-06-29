export default class MyEvent{
    constructor(){
        this.handler = {};
    }
    // 添加事件
    addEvent(eventName,fn){
        // 保存事件
       if(typeof this.handler[eventName] ==='undefined'){
        this.handler[eventName] = [];
       }
       this.handler[eventName].push(fn);
    }
    trigger(eventName){
        if(typeof this.handler[eventName] === "undefined"){
            return ;
        }
        this.handler[eventName].forEach(v=>{
            v();
        })
    }
    // 作业： 移除事件方法补全
    removeEvent(eventName,fn){
        // 补全方法；
        if(typeof this.handler[eventName] === 'undefined'){//如果当前事件不存在，直接return
            return;
        }
        //这个事件列表是个数组，如果存在就遍历这个数组
        for (let i = 0; i < this.handler[eventName].length; i++) {
            if (this.handler[eventName][i] === fn) {
                // 把方法删除；
                this.handler[eventName].splice(i, 1);
                break;
            }
        }
        
    }


}