import Slider from '../../components/HomePage/Slider';
import Champions from '../../components/HomePage/Champions/';
import Skins from '../../components/HomePage/Skins';
import Gamemodes from '../../components/HomePage/Gamemodes';
import Gameplay from '../../components/HomePage/Gameplay';
import Featured from '../../components/HomePage/Featured';
import { Fragment } from 'react';

function Home() {
    return (
        <Fragment>
            <Slider />
            <Champions />
            <Skins />
            <Gamemodes />
            <Gameplay />
            <Featured />
        </Fragment>
    );
}

export default Home;
