import React from 'react';
import classes from './CalcRow.module.scss'

function CalcRow(props) {
    let onNewInputChange = (e) => {
        let body = e.target.value;
        //console.log(props.updateNewInputBody)
        props.updateNewInputBody(body);
    }

    return (
        <div className={classes.wrapper}>
                <div className={classes.inputText}>{props.text}</div>
                <div className={classes.input}><input value={props.newInputBody}
                                                      onChange={onNewInputChange}/></div>
        </div>
    )
}

export default CalcRow;
