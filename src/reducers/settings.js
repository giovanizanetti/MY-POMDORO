export {
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
  // SET_ERROR,
  SET_AUTOMATIC_BREAK,
  SET_AUTOMATIC_POMODORO,
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-undef
    case SET_PLAY_SONG:
      return (state.playSong = !state.playSong)
    // eslint-disable-next-line no-undef
    case SET_ALARM_SONG:
      return (state.alarmSong = !state.alarmSong)
    // eslint-disable-next-line no-undef
    case SET_SEND_NOTIFICATIONS:
      return (state.sendNotifications = !state.sendNotifications)
    // eslint-disable-next-line no-undef
    case SET_POMODORO_LENGTH:
      return (state.pomodoroLength = action.payload)
    // eslint-disable-next-line no-undef
    case SET_SHORT_BREAK_LENGTH:
      return (state.shorBreakLength = action.payload)
    // eslint-disable-next-line no-undef
    case SET_LONG_BREAK_LENGTH:
      return (state.shorBreakLength = action.payload)
    // eslint-disable-next-line no-undef
    case SET_LUNCH_BREAK_LENGTH:
      return (state.lunchBreakLength = action.payload)
    // eslint-disable-next-line no-undef
    case SET_DISPLAY_BREAK_MENU:
      return (state.displayBreakMenu = !state.displayBreakMenu)
    // eslint-disable-next-line no-undef
    case SET_POMODORO_COUNT:
      return (state.pomodoroCount = action.payload)
    // eslint-disable-next-line no-undef
    case SET_POMODORO_DAILY_TARGET:
      // 1425secs = 57 pomodoros (maximum possible in one day)
      if (action.payload > 1425) throw new Error('Impossible target to reach!')
      return (state.pomodoroDailyTarget = action.payload)
    // eslint-disable-next-line no-undef
    case SET_POMODORO_WEEKLY_TARGET:
      // 24192secs = 403 pomodoros (maximum possible in one week)
      if (action.payload > 24192) throw new Error('Impossible target to reach!')
      return (state.pomodoroWeeklyTarget = action.payload)
    // eslint-disable-next-line no-undef
    case SET_DISPLAY_DOC_TITLE_TIMER:
      return (state.displayDocTitleTimer = !state.displayDocTitleTimer)
    // eslint-disable-next-line no-undef
    case SET_AUTOMATIC_BREAK:
      return (state.automaticBreak = !state.automaticBreak)
    // eslint-disable-next-line no-undef
    case SET_AUTOMATIC_POMODORO:
      return (state.automaticPomodoro = !state.automaticPomodoro)
    default:
      return state
  }
}
