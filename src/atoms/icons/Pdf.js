import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const PdfIcon = ({ fill }) => (
  <Svg title="PDF Icon" viewBox="0 0 63 63" className={fill}>
    <defs>
      <clipPath id="a" transform="translate(-15)">
        <path
          d="M87,0a1,1,0,0,0-1-1H16a1,1,0,0,0-1,1V127a1,1,0,0,0,1,1h96a1,1,0,0,0,1-1L114,99a1,1,0,0,0-1-1H52a1,1,0,0,1-1-1V69a1,1,0,0,1,1-1h61a1,1,0,0,0,1-1V27a1,1,0,0,0-1-1H88a1,1,0,0,1-1-1V0Z"
          fill="none"
        />
      </clipPath>
      <clipPath id="b" transform="translate(-15)">
        <rect x="89" y="-2" width="26" height="26" rx="1" ry="1" fill="none" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        d="M113,1a1,1,0,0,0-1-1H16a1,1,0,0,0-1,1V127a1,1,0,0,0,1,1h96a1,1,0,0,0,1-1V1Z"
        transform="translate(-15)"
      />
    </g>
    <g clipPath="url(#b)">
      <polygon points="74 0 74 24 98 24 74 0" />
    </g>
    <g style={{ isolation: 'isolate' }}>
      <path
        d="M69.39,85.33a4.12,4.12,0,0,1-2.71.79H64.44V90H62.19V79.2h4.64a3.74,3.74,0,0,1,2.56.83,3.26,3.26,0,0,1,1,2.59A3.35,3.35,0,0,1,69.39,85.33Zm-1.72-3.89a1.82,1.82,0,0,0-1.2-.36h-2v3.18h2a1.72,1.72,0,0,0,1.2-.39,1.58,1.58,0,0,0,.43-1.23A1.49,1.49,0,0,0,67.67,81.44Z"
        transform="translate(-15)"
      />
      <path
        d="M78.47,79.44a3.56,3.56,0,0,1,1.84,1.37,4.81,4.81,0,0,1,.77,1.74,8.38,8.38,0,0,1,.21,1.79A7.18,7.18,0,0,1,80.42,88a3.91,3.91,0,0,1-3.62,2H72.15V79.2H76.8A5.67,5.67,0,0,1,78.47,79.44Zm-4.13,1.64v7h2.08a2.25,2.25,0,0,0,2.23-1.57A5.54,5.54,0,0,0,79,84.49,5.06,5.06,0,0,0,78.48,82a2.18,2.18,0,0,0-2.06-.88H74.34Z"
        transform="translate(-15)"
      />
      <path
        d="M83,79.22h7.7v1.9H85.22V83.6H90v1.88H85.22V90H83V79.22Z"
        transform="translate(-15)"
      />
    </g>
  </Svg>
)

PdfIcon.propTypes = {
  fill: PropTypes.string,
}

export default PdfIcon
