import React from 'react'

import Button from '../../blocks/Button'
import Fader from './Fader'
import VUMeter from '../../blocks/VUMeter'
import Label from '../../blocks/Label'
import LCD from '../../blocks/LCD'

import styled from 'styled-components'
import controlLayout from '../../ControlLayout'

export const ChannelStrip = styled.div`
  display: grid;
  grid-template-rows: repeat(11, 1fr);
  height: 100%;
  text-align: center;

  .Header {
    grid-area: ${controlLayout.$firstGridArea};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Controls {
    grid-area: ${controlLayout.$secondGridArea};
    display: flex;
    flex-direction: column;
  }

  .Fader {
    grid-area: ${controlLayout.$thirdGridArea};
  }

  .Label {
    grid-area: ${controlLayout.$fourthGridArea};
  }
`

export default function (props) {
  return (
    <ChannelStrip style={props.style}>
      <div className='Header'>
        <LCD />
      </div>
      <div className='Controls'>
        <Button>Select</Button>
        <Button>Solo</Button>
        <Button>Mute</Button>
        <VUMeter bars={['g', 'g', 'r']} />
      </div>
      <div className='Fader'>
        <Fader />
      </div>
      <div className='Label'>
        <Label>{props.label}</Label>
      </div>
    </ChannelStrip>
  )
}
