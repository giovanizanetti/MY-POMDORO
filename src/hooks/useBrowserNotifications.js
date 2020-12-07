import { useEffect, useState } from 'react'

export const useBrowserNotifications = ([enabledNotification, message]) => {
  const [sendNotification, setSendNotification] = useState(false)
  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification')
    } else {
      Notification.requestPermission()
    }

    if (enabledNotification && sendNotification) new Notification(message)
  }, [enabledNotification, sendNotification, message])

  return [setSendNotification]
}
