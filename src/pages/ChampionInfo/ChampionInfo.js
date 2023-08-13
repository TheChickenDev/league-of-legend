import styles from './ChampionInfo.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function ChampionInfo() {
    const { name } = useParams();
    return <div className={cx('wrapper')}>{name}</div>;
}

export default ChampionInfo;
