import {ADD_EVERY_PER, CALCP, COUNT_PER, IN_ONE_PER, START_DEP} from './actionTypes'

export function updateNewInputStartDepBody(body) {
    return{
        type: START_DEP,
        payload:body
    }
}

export function updateNewInputCountPeriodsBody(body) {
    return{
        type: COUNT_PER,
        payload:body
    }
}

export function updateNewInputIncomeOnePeriodBody(body) {
    return{
        type: IN_ONE_PER,
        payload:body
    }
}
export function updateNewInputAddedEveryPeriodBody(body) {
    return{
        type: ADD_EVERY_PER,
        payload:body
    }
}
export function onCalcClick() {
    return{
        type: CALCP

    }
}