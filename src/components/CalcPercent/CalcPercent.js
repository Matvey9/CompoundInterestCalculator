import React from 'react';
import classes from './CalcPercent.module.scss'
import CalcRow from "./CalcRow/CalcRow";


function CalcPercent(props) {

    let onCalcClick = () => {
        props.onCalcClick()
    };

    //let startArrUI = props.startArr.map(a => <div>{a}</div>);
    let startArrUI = [];
    let endArrUI = [];
    let addArr = [];
    let profitArr = [];
    let index = [];
    for (let i = 0; i< props.endArr.length; i++){
        startArrUI[i] = <div key={i}>{props.startArr[i].toFixed(2)}</div>
        profitArr[i] = <div key={i}>{props.profitArr[i].toFixed(2)}</div>
        addArr[i] = <div key={i}>{props.addArr[i].toFixed(2)}</div>
        endArrUI[i] = <div key={i}>{props.endArr[i].toFixed(2)}</div>
        index[i] = <div key={i}>{i+1}</div>
    }

    return (
        <div className={classes.wrapper}>
            <h1 className={classes}>Калькулятор сложных процентов</h1>
            <div className={classes.calcWrapper}>
                <CalcRow text={'Начальный депозит'}
                         updateNewInputBody={props.updateNewInputStartDepBody}/>
                <CalcRow text={'Количество периодов'}
                         updateNewInputBody={props.updateNewInputCountPeriodsBody}/>
                <CalcRow text={'Доходность за 1 период'}
                         updateNewInputBody={props.updateNewInputIncomeOnePeriodBody}/>
                <CalcRow text={'Довложения каждый период'}
                         updateNewInputBody={props.updateNewInputAddedEveryPeriodBody}/>
                <center>
                    <button onClick={onCalcClick}>Расчитать</button>
                </center>
                <div className={classes.outputWrapper}>
                    <div> # {index}</div>
                    <div>Начало{startArrUI}</div>
                    <div>Прибыль{endArrUI}</div>
                    <div>Довложения{addArr}</div>
                    <div>Конец{profitArr}</div>
                </div>
            </div>

        </div>
    )
}

export default CalcPercent;
