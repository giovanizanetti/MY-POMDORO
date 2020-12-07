import { useEffect } from 'react'

export const usePlaySong = (isSongPlaying, setIsSongPlaying, alarmSong, audioRef) => {
  console.log(isSongPlaying)
  useEffect(() => {
    console.log(alarmSong)
    console.log(audioRef)

    setIsSongPlaying(false) // clear cashed sound in initial render clear cashed sound

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
  }, [isSongPlaying, audioRef, setIsSongPlaying, alarmSong])
  return isSongPlaying
}
