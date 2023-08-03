import Slider from '../../components/HomePage/Slider';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
        </div>
    );
}

export default Home;
