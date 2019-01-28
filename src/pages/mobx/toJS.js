import React from "react";
import {observable,toJS,isObservableObject} from 'mobx';

let obj = observable({
    x: 1
});
console.log(obj);
let  clone = toJS(obj);
console.log(clone);
console.log(isObservableObject(obj)); // true
console.log(isObservableObject(clone)); // false
class TOJS extends React.Component{
    render() {
        return (
            <div>
                {/*{clone}*/}
            </div>);
    }
}
export default TOJS