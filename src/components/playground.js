import { useState } from 'react'

const ThumbRating = ({ id, title }) => {
  const [thumbsUpCount, setthumbsUpCount] = useState(0)
  const [thumbsDownCount, setthumbsDownCount] = useState(0)
  const [ratings, setRatings] = useState([])

  const newUpVote = (id) => {
    console.log(id)
    if (thumbsUpCount === 0 && thumbsDownCount === 0) {
      setthumbsUpCount(thumbsUpCount + 1)
      const obj = {
        id,
        title,
        thumbsUpCount: thumbsUpCount + 1,
        thumbsDownCount: thumbsDownCount,
      }
      setRatings([obj])
    } else {
      setthumbsUpCount(thumbsUpCount + 1)
      handleThumbsUp(id)
    }
  }

  const handleThumbsUp = (id) => {
    const objectToBeUpdated = ratings.find((obj) => obj.id === id)
    objectToBeUpdated.thumbsUpCount += 1 // I assumed you will always update by one
    setRatings([objectToBeUpdated])
  }

  return (
    <div className='thumb-rating'>
      <p>Would you recommend this movie?</p>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                <button className='thumbs-up' onClick={() => newUpVote(id)}>
                  <i className='fa fa-thumbs-up fa-4x' />
                </button>
              </div>
            </td>
            <td>
              <div>
                <button
                  className='thumbs-down'
                  onClick={() => setthumbsDownCount(thumbsDownCount + 1)}
                >
                  <i className='fa fa-thumbs-down fa-4x' />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h2>Yes: {thumbsUpCount} </h2>
            </td>
            <td>
              <h2>No: {thumbsDownCount} </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ThumbRating
