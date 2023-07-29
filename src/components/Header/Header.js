import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar';
import images from '../../assets/svg';
import HeaderItem from './HeaderItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('logo')}>
                <img src={images.logo} alt="LeagueOfLegend" />
            </Link>
            <div className={cx('items')}>
                <HeaderItem>Game</HeaderItem>
                <HeaderItem>Champions</HeaderItem>
                <HeaderItem
                    popupItems={[
                        { title: 'All', path: '/', icon: false },
                        { title: 'Game Updates', path: '/', icon: false },
                        { title: 'Esports', path: '/', icon: false },
                        { title: 'Dev', path: '/', icon: false },
                        { title: 'Lore', path: '/', icon: false },
                        { title: 'Media', path: '/', icon: false },
                        { title: 'Merch', path: '/', icon: false },
                        { title: 'Comunity', path: '/', icon: false },
                        { title: 'Riot Games', path: '/', icon: false },
                    ]}
                >
                    News
                </HeaderItem>
                <HeaderItem tabletResponsive>Patch Notes</HeaderItem>
                <HeaderItem
                    tabletResponsive
                    popupItems={[
                        { title: 'Comunity', path: '/', icon: false },
                        { title: 'League Displays', path: '/', icon: false },
                        { title: 'Riot Mobile', path: '/', icon: false },
                        { title: 'Avatar Creator', path: '/', icon: false },
                    ]}
                >
                    Discover
                </HeaderItem>
                <HeaderItem link>Esports</HeaderItem>
                <HeaderItem link>Universe</HeaderItem>
                <HeaderItem
                    popupItems={[
                        { title: 'Shop', path: '/', icon: true },
                        { title: 'Support', path: '/', icon: true },
                        { title: 'Esports', path: '/', icon: true, hideOnSmallPC: true },
                        { title: 'Universe', path: '/', icon: true, hideOnSmallPC: true },
                        { title: 'Patch Notes', path: '/', icon: true, hideOnTablet: true },
                        { title: 'Discover', path: '/', icon: true, hideOnTablet: true },
                    ]}
                >
                    More
                </HeaderItem>
            </div>
            <div className={cx('functions')}>There are some button</div>
            <Sidebar />
        </div>
    );
}

export default Header;
