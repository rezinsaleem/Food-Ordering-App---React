

import { CDN_URL } from '../utils/constant';

const GroCard = (props) => {
  const {groData} = props;



  return (
   <div className="w-[200px] h-auto relative rounded-xl bg-white shadow-xl ml-3.5 mt-3.5 pb-5 hover:cursor-pointer hover:border hover:border-gray-500">
      <img className="w-full h-[200px] object-cover" src={CDN_URL + groData.imageId} alt="img" />
      <h3 className="mx-2.5 py-2.5 text-gray-600 font-medium text-lg">{groData.displayName}</h3>
    </div>
  
  )
}

export default GroCard