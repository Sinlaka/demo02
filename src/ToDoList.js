import React from 'react';
import {connect} from 'react-redux';
//只有render的函数可以改成无状态组件

const TodoList = (props) => {
    //解构函数
    let {inputValue, inputChange, addItem, list} = props;

    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange}/>
                <button onClick={addItem}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={item + index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}

//映射关系就是把原来的state映射成组件中的props属性，比如我们想映射inputValue就可以写成如下代码。
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        inputChange: (e) => {
            var action = {
                type: 'inputChange',
                inputValue: e.target.value
            }
            dispatch(action);
        },
        addItem: () => {
            var action = {
                type: 'add_item'
            }
            dispatch(action);
        }
    }
}


export default connect(stateToProps, dispatchToProps)(TodoList);
