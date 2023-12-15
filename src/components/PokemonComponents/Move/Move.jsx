import React from 'react'

const Move = ({ move }) => {
  return (
    <tr>
      <th>{move.name}</th>
      <td>{move.accuracy}</td>
    </tr>
  )
}

export default Move