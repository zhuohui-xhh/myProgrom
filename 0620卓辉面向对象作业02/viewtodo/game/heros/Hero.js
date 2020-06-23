import MyEvent from '../myEvent.js';

// 英雄基类；
export default class Hero extends MyEvent{
    constructor(name,skills,ico){
        super();
        this.name = name;
        this.skills = skills;
        this.ico = ico;
        // 自定义事件绑定；
        this.addEvent("heroInit",this.init);
        this.removeEvent("heroDelate",this.delate);
    }
    init(){
        console.log("初始化...");
    }
    delate(){
        console.log("这是要执行的删除事件")
    }
}