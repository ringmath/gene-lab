import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import GeneLab from '../src'

storiesOf('GeneLab', module)
  .addWithInfo('Basic', 'added Description', () => (
    <GeneLab />
  ), { inline: true })
  .add('Basic', () => (
    <GeneLab />
  ))
