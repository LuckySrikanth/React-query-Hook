
**ReactQuery Posts Viewer** is a simple React app that uses **React Query** to fetch and display posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

This project demonstrates how to handle API data fetching, loading states, and errors using the `useQuery` hook.

---

### 📌 Features

✅ Fetches posts from a mock API
✅ Displays loading state while fetching
✅ Handles and displays errors
✅ Clean functional React component with hooks

---

### 🛠 Tech Stack

* React
* React Query
* Fetch API

---


### 🗂 Example Code

```javascript
import React from 'react'
import { useQuery } from 'react-query'

const App = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then(res =>
        res.json()
      ),
  })

  if (isLoading) {
    return '...Loading'
  }

  if (error) {
    return `Error in Fetching: ${error.message}`
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React-Query Hook</h1>
      {data.map(eachData => (
        <div key={eachData.id}>
          <h3>{eachData.id} : {eachData.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default App
```

---

### ⚠️ Notes

* The app uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock API.
* You can easily extend this app to handle mutations, pagination, or other endpoints using React Query.

---

### 🙌 Credits

Made with ❤️ using **React** + **React Query**
