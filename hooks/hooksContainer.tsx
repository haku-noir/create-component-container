import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { XXX as XXXComp } from 'components/XXX';
import { RootState } from 'store';

type IProps = {};

export const XXX: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const state = useSelector<RootState, RootState>(state => state);

  const _props = {}

  return <XXXComp {..._props}/>;
};
