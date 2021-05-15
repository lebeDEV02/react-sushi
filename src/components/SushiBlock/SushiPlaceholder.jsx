import React from 'react'
import ContentLoader from "react-content-loader"

function SushiPlaceholder() {
		return(
		<ContentLoader 
    speed={2}
    width={280}
    height={286}
    viewBox="0 0 280 286"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="280" height="193" /> 
    <rect x="49" y="200" rx="0" ry="0" width="172" height="27" /> 
    <rect x="158" y="222" rx="0" ry="0" width="22" height="0" /> 
    <rect x="145" y="241" rx="22" ry="22" width="127" height="39" /> 
    <rect x="1" y="243" rx="0" ry="0" width="75" height="34" />
  </ContentLoader>
	)
}

export default SushiPlaceholder
