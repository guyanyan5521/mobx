import React from 'react';
import {observer,inject} from 'mobx-react';
import {Button,Input} from "antd";
import "./CartItem.css"
@inject("store")
@observer
 class CartItem extends React.Component {
    render() {
        const { data,store } = this.props;
        return (
            <div className="cart-item">
                <label for={`check${data.id}`} className="cart-item-box c-select">
                    <input
                        id={`check${data.id}`}
                        type="checkbox"
                        checked={data.checked}
                        onChange={() => store.onChecked(data.id)}
                    />
                </label>
                <div className="cart-item-box c-name">{data.name}</div>
                <div className="cart-item-box c-price">¥{data.price}</div>
                <div className="cart-item-box c-buyNum">
                    <Button type="primary" onClick={() => store.sub(data.id)} className="button01">-</Button>
                    <Input size="small"
                        value={data.buyNum}
                    />
                    <Button type="primary" onClick={() => store.add(data.id)} className="button02">+</Button>
                </div>
                <div className="cart-item-box c-subTotal">¥{data.price * data.buyNum}</div>
                <div className="cart-item-box c-delete" onClick={() => store.removeItem(data.id)}>删除</div>
            </div>
        );
    }
}
export default CartItem