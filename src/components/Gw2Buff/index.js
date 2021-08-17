// @flow

import React, { Component } from 'react';
import Icon from '../Icon';
import cx from 'classnames';
import TooltipTrigger from '../TooltipTrigger';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { showTooltip } from '../../actions/gw2';
import data from './data'
import styles from './styles.less';

type Props = {
  name?: string,
  className?: string,
  size?: number
};
const selector = createSelector(
  (state) => state.tooltip,
  (tooltip) => ({
    tooltip,
  })
);
const COUNT_THRESHOLD = 1;
export default connect(selector, {
  showTooltip,
})(
  class Gw2Icon extends Component<Props> {
    render () {
      return(
        <TooltipTrigger
          type={'guildUpgrade'}
          data={{name: this.props.name, description: data[this.props.name].description}}>
            <Icon  src={data[this.props.name].img}
              className={cx(styles.root, this.props.className )}
              sizePx={this.props.size}
            />
          </TooltipTrigger>
      )
    }
});
