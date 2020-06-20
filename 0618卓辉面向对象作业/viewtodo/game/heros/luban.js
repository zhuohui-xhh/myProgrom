import S11210 from '../skills/luban/S11210.js'
import S11220 from '../skills/luban/S11220.js'
import S11230 from '../skills/luban/S11230.js'
export default class Yase {
    constructor() {
        this.name = "鲁班";
        // 技能
        this.skills = [new S11210,new S11220,new S11230];
        // 皮肤 
        this.skins = [];
        this.ico = "sources/heros/luban1.png"
    }
}