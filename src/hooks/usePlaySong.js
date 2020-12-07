import { useEffect, useState } from 'react'

export const usePlaySong = ([alarmSong, audioRef]) => {
  const [isSongPlaying, setIsSongPlaying] = useState(false)

  useEffect(() => {
    const stopSound = () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
    if (!isSongPlaying) stopSound()

    if (isSongPlaying) {
      audioRef.current.play()
      setTimeout(() => {
        stopSound()
        setIsSongPlaying(false)
      }, 20000)
    } else {
      stopSound()
    }
  }, [isSongPlaying, audioRef, alarmSong])

  return [isSongPlaying, setIsSongPlaying]
}
