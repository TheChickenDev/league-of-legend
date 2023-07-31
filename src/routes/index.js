import Home from '../pages/Home';
import Champions from '../pages/Champions';
import Discover from '../pages/Discover';
import Game from '../pages/Game';
import News from '../pages/News';
import PatchNotes from '../pages/PatchNotes';
import Shop from '../pages/Shop';
import Support from '../pages/Support';

const paths = {
    Home: '/',
    Champions: '/champions',
    Discover: '/discover',
    Game: '/game',
    News: '/news',
    PatchNotes: '/patchnotes',
    Shop: '/shop',
    Support: '/Support',
};

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/champions',
        component: Champions,
    },
    {
        path: '/discover',
        component: Discover,
    },
    {
        path: '/game',
        component: Game,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path: '/patchnotes',
        component: PatchNotes,
    },
    {
        path: '/shop',
        component: Shop,
    },
    {
        path: '/support',
        component: Support,
    },
];

export { routes, paths };
