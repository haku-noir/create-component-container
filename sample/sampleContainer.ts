import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { XXX as XXXComp, XXXStateAsProps, XXXDispatchAsProps } from 'components/XXX';

const mapStateToProps = (rootState: RootState): XXXStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): XXXDispatchAsProps => ({});

export const XXX = connect(mapStateToProps, mapDispatchToProps)(XXXComp);
