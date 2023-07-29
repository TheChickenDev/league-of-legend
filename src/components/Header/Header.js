import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            This is Header
            <Sidebar />
        </div>
    );
}

export default Header;
