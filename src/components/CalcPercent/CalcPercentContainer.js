import { connect } from 'react-redux';
import CalcPercent from "./CalcPercent";
import {
    onCalcClick,
    updateNewInputAddedEveryPeriodBody,
    updateNewInputCountPeriodsBody,
    updateNewInputIncomeOnePeriodBody,
    updateNewInputStartDepBody
} from "../../redux/actions/action";

let mapStateToProps = (state) => {
    return {
        count: state.calcPercentReducer.count,
        startArr: state.calcPercentReducer.start,
        profitArr: state.calcPercentReducer.profit,
        addArr: state.calcPercentReducer.add,
        endArr: state.calcPercentReducer.end
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewInputStartDepBody: body => dispatch(updateNewInputStartDepBody(body)),
        updateNewInputCountPeriodsBody: body => dispatch(updateNewInputCountPeriodsBody(body)),
        updateNewInputIncomeOnePeriodBody: body => dispatch(updateNewInputIncomeOnePeriodBody(body)),
        updateNewInputAddedEveryPeriodBody: body => dispatch(updateNewInputAddedEveryPeriodBody(body)),
        onCalcClick: () => dispatch(onCalcClick())
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(CalcPercent);