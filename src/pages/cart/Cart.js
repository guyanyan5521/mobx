import React from 'react';
import { observer,inject } from 'mobx-react';
import "./Cart.css";
import CartItem from "../../component/CartItem"
@inject("store")
@observer class Cart extends React.Component{
    render() {
        const { store } = this.props;
        return (
            <div>
                <h1>购物车展示</h1>
            <div className="head">
                <label htmlFor="selectAll" className="head-item">
                    <input
                        id="selectAll"
                        type="checkbox"
                        checked={store.checkedAll}
                        onChange={store.onCheckedAll}
                    /> 全选
                </label>
                <div className="head-item c-name">商品</div>
                <div className="head-item">单价</div>
                <div className="head-item c-buyNum">数量</div>
                <div className="head-item">小计</div>
                <div className="head-item">操作</div>
            </div>
            <div className="main">
                {store.list.map((z, i) => <CartItem data={z} key={i}/>)}
            </div>
                <div className="footer">
                    <p>合计: {store.totalPrice}元</p>
                </div>
        </div>);
    }
}


export default Cart;