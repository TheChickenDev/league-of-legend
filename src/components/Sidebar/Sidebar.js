import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/svg';
import Button from '../Button/Button';
import { Fragment, useEffect, useRef } from 'react';
import { paths } from '../../routes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faMagnifyingGlass, faPaperclip, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    const [searchInput, setSearchInput] = useState('');
    const [showSidebar, setShowSidebar] = useState(false);

    const sidebarRef = useRef();
    const layoutRef = useRef();

    const inputRef = useRef();

    const newsMenuRef = useRef();
    const newsMenuIconRef = useRef();

    const discoverMenuRef = useRef();
    const discoverMenuIconRef = useRef();

    function clearInput() {
        setSearchInput('');
        inputRef.current.focus();
    }

    useEffect(() => {
        if (showSidebar) {
            sidebarRef.current.className = cx('wrapper', 'showSidebar');
            layoutRef.current.className = cx('layout', 'showSidebar');
        } else {
            sidebarRef.current.className = cx('wrapper');
            layoutRef.current.className = cx('layout');
        }
    }, [showSidebar]);

    function handleItemBtn(ref, iconRef) {
        if (ref.current.className.includes(cx('show'))) {
            ref.current.className = cx('item-open-menu');
            iconRef.current.style.transform = '';
        } else {
            ref.current.className = cx('item-open-menu', 'show');
            iconRef.current.style.transform = 'rotate(180deg)';
        }
    }

    return (
        <Fragment>
            <button className={cx('sidebar-btn')} onClick={() => setShowSidebar(true)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div ref={layoutRef} className={cx('layout')}></div>
            <div ref={sidebarRef} className={cx('wrapper')}>
                <div className={cx('header')}>
                    <Link className={cx('logo')} to={paths.Home}>
                        <img src={images.logoLOL} alt="" />
                    </Link>
                    <button className={cx('close-btn')} onClick={() => setShowSidebar(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input
                        ref={inputRef}
                        value={searchInput}
                        className={cx('search-input')}
                        type="text"
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') window.location.href = `/${searchInput}`;
                        }}
                    />
                    <button className={cx('input-clear-btn')} onClick={clearInput}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className={cx('items')}>
                    <Link className={cx('item')} onClick={() => setShowSidebar(false)} to={paths.Game}>
                        <span>GAME</span>
                    </Link>
                    <Link className={cx('item')} onClick={() => setShowSidebar(false)} to={paths.Champions}>
                        <span>CHAMPIONS</span>
                    </Link>
                    <div className={cx('item')} onClick={() => handleItemBtn(newsMenuRef, newsMenuIconRef)}>
                        <span>
                            NEWS{' '}
                            <FontAwesomeIcon
                                ref={newsMenuIconRef}
                                className={cx('item-menu-icon')}
                                icon={faCaretDown}
                            />
                        </span>
                        <div ref={newsMenuRef} className={cx('item-open-menu')}>
                            <Link className={cx('item-child')} to={'/'}>
                                All
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Game Updates
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Esports
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Dev
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Lore
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Media
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Merch
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Community
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Riot Games
                            </Link>
                        </div>
                    </div>
                    <Link className={cx('item')} onClick={() => setShowSidebar(false)} to={paths.PatchNotes}>
                        <span>PATCH NOTES</span>
                    </Link>
                    <div className={cx('item')} onClick={() => handleItemBtn(discoverMenuRef, discoverMenuIconRef)}>
                        <span>
                            DISCOVER{' '}
                            <FontAwesomeIcon
                                ref={discoverMenuIconRef}
                                className={cx('item-menu-icon')}
                                icon={faCaretDown}
                            />
                        </span>
                        <div ref={discoverMenuRef} className={cx('item-open-menu')}>
                            <Link className={cx('item-child')} to={'/'}>
                                Community
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                League Displays
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Esports
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Riot Mobile
                            </Link>
                            <Link className={cx('item-child')} to={'/'}>
                                Avatar Creator
                            </Link>
                        </div>
                    </div>
                    <Link className={cx('item')} onClick={() => setShowSidebar(false)} to={paths.Champions}>
                        <span>
                            ESPORTS <FontAwesomeIcon className={cx('item-menu-icon')} icon={faPaperclip} />
                        </span>
                    </Link>
                    <Link className={cx('item')} onClick={() => setShowSidebar(false)} to={paths.Champions}>
                        <span>
                            UNIVERSE <FontAwesomeIcon className={cx('item-menu-icon')} icon={faPaperclip} />
                        </span>
                    </Link>
                    <Link className={cx('item')} onClick={() => setShowSidebar(false)} to={paths.Champions}>
                        <span>
                            SHOP <FontAwesomeIcon className={cx('item-menu-icon')} icon={faPaperclip} />
                        </span>
                    </Link>
                    <Link className={cx('item')} onClick={() => setShowSidebar(false)} to={paths.Champions}>
                        <span>
                            SUPPORT <FontAwesomeIcon className={cx('item-menu-icon')} icon={faPaperclip} />
                        </span>
                    </Link>
                </div>
                <div className={cx('btns')}>
                    <Button fullWidth>SIGN IN</Button>
                    <br />
                    <Button fullWidth blueRound>
                        PLAY NOW
                    </Button>
                </div>
            </div>
        </Fragment>
    );
}

export default Sidebar;
