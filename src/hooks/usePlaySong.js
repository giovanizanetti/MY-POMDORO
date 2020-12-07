import { useEffect, useState } from 'react'

export const usePlaySong = (alarmSong, audioRef) => {
  const [isSongPlaying, setIsSongPlaying] = useState(false)

  useEffect(() => {
    console.log(alarmSong)
    isSongPlaying && setIsSongPlaying(false) // clear cashed sound in initial render clear cashed sound

    const stopSound = () => {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

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
