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
    }


}