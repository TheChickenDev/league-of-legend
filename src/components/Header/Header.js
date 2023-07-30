import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar';
import images from '../../assets/svg';
import HeaderItem from './HeaderItem';
import Login from './Login';
import Tippy, { tippy } from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleExclamation, faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const languages = [
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
    {
        language: 'english',
        code: 'en',
    },
];

function Header() {
    const [language, setLanguage] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('logo')}>
                <img src={images.logo} alt="LeagueOfLegend" />
            </Link>
            <div className={cx('items')}>
                <HeaderItem path={'/'}>Game</HeaderItem>
                <HeaderItem path={'/champions'}>Champions</HeaderItem>
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
                <HeaderItem path={'/patchnotes'} tabletResponsive>
                    Patch Notes
                </HeaderItem>
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
                <HeaderItem link path={'/'}>
                    Esports
                </HeaderItem>
                <HeaderItem link path={'/'}>
                    Universe
                </HeaderItem>
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
            <div className={cx('functions')}>
                <div className={cx('search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <Tippy
                    interactive
                    trigger="click"
                    placement="bottom"
                    render={() => (
                        <div className={cx('warning-popup')} tabIndex="-1">
                            <div className={cx('warning-item')}>
                                <p className={cx('warning-item-label')}>
                                    <FontAwesomeIcon
                                        className={cx('warning-item-label-icon')}
                                        icon={faCircleExclamation}
                                    />
                                    Warning
                                </p>
                                <h3 className={cx('warning-item-title')}>Soul Fighter Hub issues</h3>
                                <p className={cx('warning-item-date')}>JULY 27, 2023 AT 3:47 PM PDT</p>
                                <p className={cx('warning-item-content')}>
                                    We're aware of issues loading the Soul Fighter Hub while patching, please complete
                                    the patch and restart the client to resolve this issue.
                                </p>
                                <button className={cx('warning-item-btn')}>MORE DETAILS</button>
                            </div>
                            <div className={cx('warning-item')}>
                                <p className={cx('warning-item-label')}>
                                    <FontAwesomeIcon
                                        className={cx('warning-item-label-icon')}
                                        icon={faCircleExclamation}
                                    />
                                    Warning
                                </p>
                                <h3 className={cx('warning-item-title')}>Soul Fighter Hub issues</h3>
                                <p className={cx('warning-item-date')}>JULY 27, 2023 AT 3:47 PM PDT</p>
                                <p className={cx('warning-item-content')}>
                                    We're aware of issues loading the Soul Fighter Hub while patching, please complete
                                    the patch and restart the client to resolve this issue.
                                </p>
                                <button className={cx('warning-item-btn')}>MORE DETAILS</button>
                            </div>
                            <a href="/" className={cx('warning-btn')}>
                                VIEW ALL 4 SERVICE STATUES
                            </a>
                        </div>
                    )}
                >
                    <div className={cx('warning')}>
                        <FontAwesomeIcon icon={faCircleExclamation} />
                    </div>
                </Tippy>
                <Tippy
                    interactive
                    trigger="click"
                    placement="bottom"
                    render={() => (
                        <div className={cx('languages-popup')}>
                            {languages.map((item, index) => {
                                const str = index === language ? cx('languages-item', 'active') : cx('languages-item');
                                return (
                                    <Link onClick={() => setLanguage(index)} href="/" className={str}>
                                        {<span>{`${item.language} (${item.code})`}</span>}
                                        {index === language && <FontAwesomeIcon icon={faCheck} />}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                >
                    <div className={cx('languages')}>
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                </Tippy>
                <Login />
            </div>
            <Sidebar />
        </div>
    );
}

export default Header;
