import * as React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RootLayout from './layout/RootLayout';
import ListBeersPage from './pages/beers';
import BeerDetailsPage from './pages/BeerDetailPage';
import RandomBeerPage from './pages/random-beer';
import NewBeerForm from './pages/new-beer';


const routes = [
  { path: '/', element: <RootLayout /> },
  { path: '/home', element: <HomePage /> },
  { path: '/beers', element: <ListBeersPage /> },
  { path: '/beers/:beerId', element: <BeerDetailsPage /> },
  { path: '/random-beer', element: <RandomBeerPage /> },
  { path: '/new-beer', element: <NewBeerForm /> },
];

const router = createBrowserRouter({
  routes,
});

function App() {
  return (
    <RouterProvider router={router}>
      <Route path="/" element={<RootLayout />}>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Route>
    </RouterProvider>
  );
}

export default App;