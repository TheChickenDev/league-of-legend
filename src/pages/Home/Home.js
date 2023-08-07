import Champions from '../../components/HomePage/Champions/';
import Slider from '../../components/HomePage/Slider';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <Champions />
        </div>
    );
}

export default Home;
