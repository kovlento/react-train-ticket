export const ACTION_SET_FROM = 'SET_FROM'
export const ACTION_SET_TO = 'SET_TO'
export const ACTION_SET_ISCITYSELECTORVISIBLE = 'SET_ISCITYSELECTORVISIBLE'
export const ACTION_SET_CURRENTSELECTINGLEFTCITY =
  'SET_CURRENTSELECTINGLEFTCITY'
export const ACTION_SET_CITYDATA = 'SET_CITYDATA'
export const ACTION_SET_ISLOADINGCITYDATA = 'SET_ISLOADINGCITYDATA'
export const ACTION_SET_ISDATESELECTORVISIBLE = 'SET_ISDATESELECTORVISIBLE'
export const ACTION_SET_HIGHSPEED = 'SET_HIGHSPEED'

export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from,
  }
}

export function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to,
  }
}

export function setCityData(cityData) {
  return {
    type: ACTION_SET_CITYDATA,
    payload: cityData,
  }
}

export function toggleHighSpeed(highSpeed) {
  return (dispatch, getState) => {
    const { highSpeed } = getState()
    dispatch({
      type: ACTION_SET_HIGHSPEED,
      payload: !highSpeed,
    })
  }
}

export function showCitySelector(currentSelectingLeftCity) {
  return (dispatch) => {
    dispatch({
      type: ACTION_SET_ISCITYSELECTORVISIBLE,
      payload: true,
    })
    dispatch({
      type: ACTION_SET_ISCITYSELECTORVISIBLE,
      payload: currentSelectingLeftCity,
    })
  }
}

export function hideCitySelector() {
  return {
    type: ACTION_SET_ISCITYSELECTORVISIBLE,
    payload: false,
  }
}

export function setSelectedCity(city) {
  return (dispatch, getState) => {
    const { currentSelectingLeftCity } = getState()
    if (currentSelectingLeftCity) {
      dispatch(setFrom(city))
    } else {
      dispatch(setTo(city))
    }
  }
}

export function showDateSelector() {
  return {
    type: ACTION_SET_ISDATESELECTORVISIBLE,
    payload: true,
  }
}

export function hideDateSelector() {
  return {
    type: ACTION_SET_ISDATESELECTORVISIBLE,
    payload: false,
  }
}

export function exchangeFromTo() {
  return (dispatch, getState) => {
    const { from, to } = getState()
    dispatch(setFrom(to))
    dispatch(setTo(from))
  }
}
