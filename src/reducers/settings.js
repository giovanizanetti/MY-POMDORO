import {
  SET_PLAY_SONG,
  SET_ALARM_SONG,
  SET_SEND_NOTIFICATIONS,
  SET_POMODORO_LENGTH,
  SET_SHORT_BREAK_LENGTH,
  SET_LONG_BREAK_LENGTH,
  SET_LUNCH_BREAK_LENGTH,
  SET_DISPLAY_BREAK_MENU,
  SET_POMODORO_COUNT,
  SET_POMODORO_DAILY_TARGET,
  SET_POMODORO_WEEKLY_TARGET,
  SET_DISPLAY_DOC_TITLE_TIMER,
  SET_OPEN_SETTINGS,
  SET_TIMER_TYPE,
  // SET_ERROR,
  SET_AUTOMATIC_BREAK,
  SET_AUTOMATIC_POMODORO,
  SET_CURRENT_SESSION,
  SET_END_TIME,
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SET_PLAY_SONG:
      return { ...state, playSong: !state.playSong }
    case SET_ALARM_SONG:
      return { ...state, alarmSong: action.payload }
    case SET_SEND_NOTIFICATIONS:
      return { ...state, ...state, sendNotifications: !state.sendNotifications }
    case SET_POMODORO_LENGTH:
      return { ...state, pomodoroLength: action.payload }
    case SET_SHORT_BREAK_LENGTH:
      return { ...state, shortBreakLength: action.payload }
    case SET_LONG_BREAK_LENGTH:
      return { ...state, longBreakLength: action.payload }
    case SET_LUNCH_BREAK_LENGTH:
      return { ...state, lunchBreakLength: action.payload }
    case SET_DISPLAY_BREAK_MENU:
      return { ...state, displayBreakMenu: !state.displayBreakMenu }
    case SET_POMODORO_COUNT:
      return { ...state, pomodoroCount: action.payload }
    case SET_POMODORO_DAILY_TARGET:
      // 1425secs = 57 pomodoros (maximum possible in one day)
      if (action.payload > 1425) throw new Error('Impossible target to reach!')
      return { ...state, pomodoroDailyTarget: action.payload }
    case SET_POMODORO_WEEKLY_TARGET:
      // 24192secs = 403 pomodoros (maximum possible in one week)
      if (action.payload > 24192) throw new Error('Impossible target to reach!')
      return { ...state, pomodoroWeeklyTarget: action.payload }
    case SET_DISPLAY_DOC_TITLE_TIMER:
      return { ...state, displayDocTitleTimer: !state.displayDocTitleTimer }
    // return console.log(state.displayDocTitleTimer)
    case SET_AUTOMATIC_BREAK:
      return { ...state, automaticBreak: !state.automaticBreak }
    case SET_AUTOMATIC_POMODORO:
      return { ...state, automaticPomodoro: !state.automaticPomodoro }
    case SET_OPEN_SETTINGS:
      return { ...state, openSettings: !state.openSettings }
    case SET_TIMER_TYPE:
      return { ...state, timerType: action.payload }
    case SET_CURRENT_SESSION:
      return { ...state, currentSession: action.payload }
    case SET_END_TIME:
      const clonedObj = Object.assign(state.currentSession)
      clonedObj.endtime = action.payload // add end time
      return { ...state, currentSession: clonedObj }
    default:
      return state
  }
}
