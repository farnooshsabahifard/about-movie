import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import MovieList from './pages/movieList';
import GlobalStyle from './globalStyle';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Category from './pages/category';
import CategorySingle from './pages/categorySingle';
import SingleMovie from './pages/singleMovie';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieList title="لیست برترین فیلم ها"/>,
  },
  {
    path: "/category",
    element: <Category title="لیست دسته بندی ها"/>,
  },
  {
    path: "/category/:id",
    element: <CategorySingle title="لیست فیلم ها  " />,
  },
  {
    path: "/movies/:id",
    element: <SingleMovie/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Fragment>
  <GlobalStyle/>
  <RouterProvider router={router} />
  </Fragment>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
