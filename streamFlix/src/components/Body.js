import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import SignUp from './SignUp'
import Watch from './Watch'

const Body = () => {

    const AppRouter =createBrowserRouter([
        {
            path :"/",
            element : <SignUp/>,
        },
        {
            path :"/browse",
            element : <Browse/>
        },
        {
            path :"/browse/watch",
            element : <Watch/>
        }
    ])
  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body
