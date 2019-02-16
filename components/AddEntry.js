import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdacitStepper from './UdaciStepper'
import DateHeader from './DateHeader';

const SubmitBtn = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text>
        SUBMIT
</Text>
    </TouchableOpacity>
  )
}


export default class AddEntry extends React.Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  }

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }

  decrement = (metric) => {
    const { step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] - step
      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      }
    })
  }

  slider = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }))
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state


    //Update Redux

    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0
    }))

    //Navigate to Home
    //Save to DB
    //Clear local Notification
  }
  render() {

    const metaInfo = getMetricMetaInfo()
    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider'
                ?
                <UdaciSlider
                  value={value}
                  onChange={value => this.slider(key, value)}
                  {...rest}
                />
                :
                <UdacitStepper
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />}
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}