//import {CALCP} from "../actions/actionTypes";

const initialState = {
    startDep: 0,
    countPeriods: 0,
    incomeOnePeriod: 0,
    addedEveryPeriod: 0,
    count: 0,
    start: [],
    profit: [],
    add: [],
    end: []
};

export default function calcPercentReducer(state = initialState, action) {
    switch (action.type) {
        case 'STARTDEP':
            state.startDep = action.payload;
            return state;

        case 'COUNTPER':
            state.countPeriods = action.payload;
            return state;

        case 'INONEPER':
            state.incomeOnePeriod = action.payload;
            return state;

        case 'ADDEVERYPER':
            state.addedEveryPeriod = action.payload;
            return state;

        case 'CALCP':
            let stateCopy = {...state};
            stateCopy.count = state.count + 1; //delete

            //в 0 записываем самый начальный депозит, что бы потом от него начать считать
            state.start[0] = parseInt(state.startDep);
            //Процент за период
            let percent = state.incomeOnePeriod * 0.01;


            for (let i = 0; i < state.countPeriods; i++) {

                stateCopy.profit[i] = stateCopy.start[i] * percent;
                //Парс инт потому что по умолчанию он кладёт в массив строку, просто забиваем массив суммой довклада каждый месяц
                stateCopy.add[i] = parseInt(state.addedEveryPeriod);
                stateCopy.end[i] = stateCopy.start[i] + stateCopy.profit[i] + stateCopy.add[i]; // конец периода
                stateCopy.start[i + 1] = stateCopy.end[i]; //В начала следующего периода перекладываем конец текущего
                //Из-за этого в конце в массиве старт на 1 ЭЛЕМЕНТ БОЛЬШЕ!
            }
            return stateCopy;

        default:
            return state

    }
}


// let stateCopy = {...state};
// stateCopy.count = state.count +1;
//
// let endPeriod;
// state.start[0] = parseInt(state.startDep);
// let percent = state.incomeOnePeriod *0.01;
//
// for(let i=0; i<state.countPeriods; i++){
//     //state.start[i]=state.start[i];
//     state.profit[i]=state.start[i]*percent;
//     state.add[i] = parseInt(state.addedEveryPeriod);
//     endPeriod=state.start[i]+state.profit[i] + state.add[i];
//     state.end[i] = endPeriod;
//     debugger;
//     state.start[i+1]=endPeriod[i];
// }


// let stateCopy = {...state};
// stateCopy.count = state.count +1;
//
// let endPeriod;
// let startD = parseInt(state.startDep);
// let percent = state.incomeOnePeriod *0.01;
//
// for(let i=0; i<state.countPeriods; i++){
//     state.start[i]=parseInt(startD);
//     state.profit[i]=startD*percent;
//     state.add[i] = parseInt(state.addedEveryPeriod);
//     endPeriod=startD+state.profit[i] + state.add[i];
//     state.end[i] = endPeriod;
//     debugger;
//     startD=endPeriod[i];
// }