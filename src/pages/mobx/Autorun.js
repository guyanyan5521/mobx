import React from 'react';
import {observable,computed,autorun} from 'mobx';
import {observer} from "mobx-react"
let numbers = observable([1,2,3]);
let sum = computed(() => numbers.reduce((a, b) => a + b, 0));

let disposer = autorun(() => console.log(sum.get()));
// 输出 '6'
numbers.push(4);
// 输出 '10'

disposer();
numbers.push(5);
@observer class Autorun extends React.Component{
    render(){
        return(<div>

        </div>)
    }
}
export default Autorun