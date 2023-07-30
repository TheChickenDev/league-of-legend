import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/svg';

const cx = classNames.bind(styles);

function Sidebar() {
    console.log(images.logo);
    return (
        <div className={cx('wrapper')}>
            <img src={images.logoHTML} alt="" />
        </div>
    );
}

export default Sidebar;
