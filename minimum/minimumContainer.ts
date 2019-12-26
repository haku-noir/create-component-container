import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '/store';
import { XXX, XXXStateAsProps, XXXDispatchAsProps } from '/components/XXX';

const mapStateToProps = (rootState: RootState): XXXStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): XXXDispatchAsProps => ({});

export const connectedXXX = connect(mapStateToProps, mapDispatchToProps)(XXX);
