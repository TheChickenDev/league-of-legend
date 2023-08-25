import Overview from '../../components/ChampionInfo/Overview';
import Abilities from '../../components/ChampionInfo/Abilities';
import Skins from '../../components/ChampionInfo/Skins';
import FooterVideo from '../../components/FooterVideo';
import { Fragment } from 'react';

function ChampionInfo() {
    return (
        <Fragment>
            <Overview />
            <Abilities />
            <Skins />
            <FooterVideo />
        </Fragment>
    );
}

export default ChampionInfo;
