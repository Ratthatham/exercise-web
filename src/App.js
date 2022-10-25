import React from 'react'
import { useGetPlayerStatisticsByTeamIdQuery } from './redux/apiFootBall/apiFootBall'



const App = () => {
  const {data, isLoading, error} = useGetPlayerStatisticsByTeamIdQuery();


  return (
    <div>
      App
      {
        console.log(data)
      }
    </div>
  )
}

export default App

