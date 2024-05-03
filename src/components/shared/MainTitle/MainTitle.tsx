import './MainTitle.css'

import { TMainTitleProps } from '../../../types'

const Title = ( { title, img, style } :TMainTitleProps ) => {
  return (
    <div className={`${style}`} >
      <div className='main-title'>
          <img src={img} alt={img} loading='lazy' />
          <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Title