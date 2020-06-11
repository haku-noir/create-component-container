import * as React from 'react';
import { Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { XXX } from 'components/XXX';
import { RootState } from 'store';

type IProps = {};

export const XXXCTR: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Action>();

  const state = useSelector<RootState, RootState>(state => state);

  const _props = {}

  return <XXX {..._props}/>;
};
