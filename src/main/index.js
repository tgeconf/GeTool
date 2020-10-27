import ArrayUtils from './tools/arrayUtil';
import ColorUtils from './tools/colorUtil';
import ObjUtils from './tools/objUtil';
import MathUtils from './tools/MathUtil';

export default class GeTool {
    constructor() {
        this.ArrayUtil = new ArrayUtils();
        this.ColorUtil = new ColorUtils();
        this.ObjUtil = new ObjUtils();
        this.MathUtil = new MathUtils();
    }

    test() {
        console.log('this is a test! ');
    }
}

// export { ArrayUtils, TimingSpec, ChartSpec, Animation }