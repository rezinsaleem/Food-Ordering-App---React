
import {GROIMG_URL} from '../utils/constant'

const GroCard = (props) => {
  const {groData} = props;



  return (
   <div className="card">
      <img className="restImg" src={GROIMG_URL + groData.imageId} alt="img" />
      <h3>{groData.displayName}</h3>
    </div>
  
  )
}

export default GroCard