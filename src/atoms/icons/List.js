import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const ListIcon = ({ fill }) => (
  <Svg
    title="List Icon"
    viewBox="0 0 77.22 99.29"
    className={fill}
    fill="#010101"
  >
    <path
      d="M34.68,54.8H65.57V44.87H34.68V54.8ZM77.58,0.36H22.42a11.06,11.06,0,0,0-11,11V88.61a11.06,11.06,0,0,0,11,11H77.58a11.06,11.06,0,0,0,11-11V11.39A11.06,11.06,0,0,0,77.58.36Zm0,88.26H22.42V11.39H77.58V88.61ZM65.44,23.35H34.56V33H65.44V23.35Zm0,43.3H34.56v9.65H65.44V66.66Z"
      transform="translate(-11.39 -0.36)"
    />
  </Svg>
)

ListIcon.propTypes = {
  fill: PropTypes.string,
}

export default ListIcon
