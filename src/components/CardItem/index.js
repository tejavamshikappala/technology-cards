// Write your code here.
import './index.css'

const Welcome = props => {
  const {each, key} = props
  const {title, description, imgUrl, className} = each
  return (
    <div className="forList">
      <li className={className}>
        <div className="container">
          <div className="forSide">
            <h1 className="header">{title}</h1>
            <p className="Para">{description}</p>
          </div>
          <img src={imgUrl} className="image_style" alt={title} />
        </div>
      </li>
    </div>
  )
}
export default Welcome
