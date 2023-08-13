import Home from '../pages/Home';
import Champions from '../pages/Champions';
import Discover from '../pages/Discover';
import Game from '../pages/Game';
import News from '../pages/News';
import PatchNotes from '../pages/PatchNotes';
import Shop from '../pages/Shop';
import Support from '../pages/Support';
import ChampionInfo from '../pages/ChampionInfo';

const paths = {
    home: '/',
    champions: '/champions',
    championInfo: '/champions/:name',
    discover: '/discover',
    game: '/game',
    news: '/news',
    patchNotes: '/patchnotes',
    shop: '/shop',
    support: '/Support',
};

const routes = [
    {
        path: paths.home,
        component: Home,
    },
    {
        path: paths.champions,
        component: Champions,
    },
    {
        path: paths.discover,
        component: Discover,
    },
    {
        path: '/game',
        component: Game,
    },
    {
        path: paths.news,
        component: News,
    },
    {
        path: paths.patchNotes,
        component: PatchNotes,
    },
    {
        path: paths.shop,
        component: Shop,
    },
    {
        path: paths.support,
        component: Support,
    },
    {
        path: paths.championInfo,
        component: ChampionInfo,
    },
];

export { routes, paths };
