import { createBrowserRouter } from 'react-router-dom';
import DeckManager from '../../pages/DeckManager/DeckManager';
import GameHall from '../../pages/GameHall/GameHall';
import Login from '../../pages/Landing/components/Login/Login';
import Registration from '../../pages/Landing/components/Registration/Registration';
import Landing from '../../pages/Landing/Landing';

export default createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Registration />,
      },
    ],
  },
  {
    path: '/hall',
    element: <GameHall />,
  },
  {
    path: '/decks',
    element: <DeckManager />,
  },
]);
