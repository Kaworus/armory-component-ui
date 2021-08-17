// @flow

import React from 'react';
import Gw2Buff from './';

storiesOf('Gw2Buff', module)
  .add('default', () => <App><Gw2Buff name="痛苦忍耐"/></App>)
  .add('not found', () => <App><Gw2Buff name="激怒"/></App>)
  .add('loading', () => <App><Gw2Buff name="时不我待"/></App>);
