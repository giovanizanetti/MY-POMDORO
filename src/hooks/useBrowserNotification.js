import { useEffect, useState } from 'react'

export const useBrowserNotification = ([enabledNotification, message]) => {
  const [sendNotification, setSendNotification] = useState(false)
  useEffect(() => {
    const options = {
      icon: process.env.PUBLIC_URL + '/favicon_package_v0.16/favicon-32x32.png',
    }

    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification')
    } else {
      Notification.requestPermission()
    }

    if (enabledNotification && sendNotification) new Notification(message, options)
  }, [enabledNotification, sendNotification, message])

  return [setSendNotification]
}
