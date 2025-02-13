import React from 'react'

const icon = ({propName}) => {
    if(typeof propName =='string' && propName.includes('png')){
        return <img src={propsName} alt=''/>
    }
    else {
      return <propsName className="w-7 h-7 text-gray-400"/>
    }
}

export default icon