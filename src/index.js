import _ from 'lodash';
import printMe from './print.js';
import { geTool } from '../lib/index.js';

function component() {
    // const testTgeUtil = new GeTool();
    // testTgeUtil.test();
    console.log(geTool.arrayUtil.removeRept([1,1,2,2,3,3,3]));

    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console! now';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}