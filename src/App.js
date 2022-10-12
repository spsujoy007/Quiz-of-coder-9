import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';

function App() {
    const router = createBrowserRouter([
      
      {path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage> , children: [
      {path: '/home', loader: () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      } , element: <Home></Home>},
      {path: '/', loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
       } , element: <Home></Home>},
      {path: 'topics', element: <Topics></Topics>},
      {path: 'statistics', loader: () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      } , element: <Statistics></Statistics>},
      
      {path: 'blog', element: <Blog></Blog>},
      {path: 'topics/:quizId', 
       loader: ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
       } ,
       element: <Topics></Topics>}
    ]}
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>  
  );
}

export default App;
