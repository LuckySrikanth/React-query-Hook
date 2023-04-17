import React from 'react'
import { useQuery } from 'react-query'

const App = () => {
  const {isLoading, error, data} = useQuery({
    queryKey : ['posts'],
    queryFn : () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => 
    res.json(),
    ),
  })

  if(isLoading) {
    return '...Loading'
  }

  if (error) {
    return 'Error in Fetching: ' + {error}
  }

  return (
    <div>
      <center>
        <h1>React-Query  Hook</h1>
        {console.log("data is", data)}
        {
          data.map(eachData => (
            <div key = {eachData.id}>
              <h3> {eachData.id} : {eachData.title}</h3>
              </div>
          ))
        }
      </center>
    </div>
  )
}

export default App