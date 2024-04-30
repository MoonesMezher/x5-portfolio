import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import './SectionHeader.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SectionHeader(props: { image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) {
  return (
    <div className='section-header'>
        <img src={props.image} alt="" loading='lazy' />
        <h1> {props.title} </h1>
    </div>
  )
}

export default SectionHeader