import Slider from '../../components/HomePage/Slider';
import Champions from '../../components/HomePage/Champions/';
import Skins from '../../components/HomePage/Skins';
import Gamemodes from '../../components/HomePage/Gamemodes';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Gameplay from '../../components/HomePage/Gameplay';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <Champions />
            <Skins />
            <Gamemodes />
            <Gameplay />
        </div>
    );
}

export default Home;
