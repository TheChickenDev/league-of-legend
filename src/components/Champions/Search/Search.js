import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import video from '../../../assets/videos/homepage/ss2020_lux_sylas_1920x1080.mp4';
import Button from '../../Button';
import { paths } from '../../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faMagnifyingGlass, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);

const roles = ['Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'];

function Search() {
    const [difficulty, setDifficulty] = useState({ min: 0, max: 10 });
    const [role, setRole] = useState();
    const [input, setInput] = useState('');

    const [championsList, setChampionsList] = useState();
    const [championsNameList, setChampionsNameList] = useState();
    const [renderList, setRenderList] = useState();

    const difficultiesPopupRef = useRef();
    const rolesPopupRef = useRef();
    const searchPopupRef = useRef();

    // Search section

    function handleSearchInputClick() {
        document.getElementById(cx('search-input')).focus();
        showSearchPopupMenu();
    }

    function handleSearchPopupItemClick(e) {
        e.stopPropagation();

        hideSearchPopupMenu();
        filterChampions(e.target.innerHTML);
        setInput(e.target.innerHTML);
    }

    function showSearchPopupMenu() {
        document.getElementById(cx('search-popup')).classList.add(cx('active'));
    }

    function hideSearchPopupMenu() {
        document.getElementById(cx('search-popup')).classList.remove(cx('active'));
    }

    // Difficulties section

    function handleDifficultyItemClick(e, index) {
        e.stopPropagation();

        const activeDiffItem = document.querySelector(`[class="${cx('difficulties-item', 'active')}"]`);
        if (activeDiffItem) activeDiffItem.classList.remove(cx('active'));
        document.getElementsByClassName(cx('difficulties-item'))[index].classList.add(cx('active'));

        const activeDiffSelector = document.querySelector(`[class="${cx('difficulties-selector', 'active')}"]`);
        if (activeDiffSelector) activeDiffSelector.classList.remove(cx('active'));
        document.getElementsByClassName(cx('difficulties-selector'))[index + 1].classList.add(cx('active'));

        document.getElementById(cx('difficulties-clear')).classList.add(cx('active'));

        hideDiffPopupMenu();

        setDifficulty(index === 0 ? { min: 0, max: 3 } : index === 1 ? { min: 4, max: 7 } : { min: 8, max: 10 });
    }

    function handleDifficultyClearClick(e) {
        e.stopPropagation();

        document.getElementById(cx('difficulties-clear')).classList.remove(cx('active'));
        document.querySelector(`[class="${cx('difficulties-selector', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('difficulties-selector'))[0].classList.add(cx('active'));
        document.querySelector(`[class="${cx('difficulties-item', 'active')}"]`).classList.remove(cx('active'));

        setDifficulty({ min: 0, max: 10 });
    }

    function hideDiffPopupMenu() {
        document.getElementById(cx('difficulties-popup')).classList.remove(cx('active'));
        document.getElementById(cx('difficulties-icon')).classList.remove(cx('active'));
        document.getElementById(cx('difficulties')).classList.remove(cx('active'));
    }

    function showDiffPopupMenu() {
        document.getElementById(cx('difficulties-popup')).classList.add(cx('active'));
        document.getElementById(cx('difficulties-icon')).classList.add(cx('active'));
        document.getElementById(cx('difficulties')).classList.add(cx('active'));
    }

    // Roles section

    function filterChampions(searchStr) {
        const namesList = [];

        if (championsList) {
            const temp = championsList.filter(
                (champ) =>
                    champ[1].info.difficulty <= difficulty.max &&
                    champ[1].info.difficulty >= difficulty.min &&
                    champ[0].toLowerCase().includes(searchStr.toLowerCase()),
            );

            if (role)
                temp.forEach((champ) => {
                    if (champ[1].tags.includes(role)) {
                        namesList.push(champ[0]);
                    }
                });
            else {
                temp.forEach((champ) => {
                    namesList.push(champ[0]);
                });
            }
            setRenderList(namesList);
        }
    }

    useEffect(() => {
        filterChampions(input);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role, difficulty]);

    function handleRolesItemClick(e, index) {
        e.stopPropagation();

        document.querySelector(`[class="${cx('roles-pc-item', 'active')}"]`).classList.remove(cx('active'));
        e.target.classList.add(cx('active'));

        if (e.target.innerHTML !== 'ALL') {
            document.getElementById(cx('roles-mobile-title')).innerHTML = e.target.innerHTML;
            document.getElementById(cx('roles-mobile-clear')).classList.add(cx('active'));
        } else {
            document.getElementById(cx('roles-mobile-title')).innerHTML = 'ALL ROLES';
            document.getElementById(cx('roles-mobile-clear')).classList.remove(cx('active'));
        }

        hideRolesPopupMenu();
        setRole(roles[index]);
    }

    function handleRolesMobileItemClick(e, index) {
        e.stopPropagation();

        const activeRolesItem = document.querySelector(`[class="${cx('roles-mobile-item', 'active')}"]`);
        if (activeRolesItem) activeRolesItem.classList.remove(cx('active'));
        e.target.classList.add(cx('active'));

        document.getElementById(cx('roles-mobile-title')).innerHTML = e.target.innerHTML;

        document.getElementById(cx('roles-mobile-clear')).classList.add(cx('active'));

        document.querySelector(`[class="${cx('roles-pc-item', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('roles-pc-item'))[index + 1].classList.add(cx('active'));

        hideRolesPopupMenu();
        setRole(roles[index]);
    }

    function handleRolesMobileClearClick(e) {
        e.stopPropagation();
        document.querySelector(`[class="${cx('roles-mobile-item', 'active')}"]`).classList.remove(cx('active'));
        document.getElementById(cx('roles-mobile-title')).innerHTML = 'ALL ROLES';
        document.getElementById(cx('roles-mobile-clear')).classList.remove(cx('active'));

        document.querySelector(`[class="${cx('roles-pc-item', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('roles-pc-item'))[0].classList.add(cx('active'));
    }

    function hideRolesPopupMenu() {
        document.getElementById(cx('roles-mobile-popup')).classList.remove(cx('active'));
        document.getElementById(cx('roles-mobile-icon')).classList.remove(cx('active'));
    }

    function showRolesPopupMenu() {
        document.getElementById(cx('roles-mobile-popup')).classList.add(cx('active'));
        document.getElementById(cx('roles-mobile-icon')).classList.add(cx('active'));
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (difficultiesPopupRef.current && !difficultiesPopupRef.current.contains(event.target)) {
                hideDiffPopupMenu();
            }
            if (rolesPopupRef.current && !rolesPopupRef.current.contains(event.target)) {
                hideRolesPopupMenu();
            }
            if (searchPopupRef.current && !searchPopupRef.current.contains(event.target)) {
                hideSearchPopupMenu();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // API

    useEffect(() => {
        axios
            .get('http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json')
            .then((response) => {
                setChampionsList(Object.entries(response.data.data));
                setRenderList(Object.keys(response.data.data));
                setChampionsNameList(Object.keys(response.data.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // Video
    const contentRef = useRef();
    const videoBtnRef = useRef();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: contentRef.current,
            toggleActions: 'restart reverse none none',
            start: 'top 100%',
            end: 'bottom 30%',
            scrub: true,
            toggleClass: cx('active'),
        });

        ScrollTrigger.create({
            trigger: videoBtnRef.current,
            toggleActions: 'restart reverse none none',
            start: 'top 100%',
            end: 'bottom 100%',
            scrub: true,
            toggleClass: cx('active1st'),
        });

        ScrollTrigger.create({
            trigger: videoBtnRef.current,
            toggleActions: 'restart reverse none none',
            start: 'top 104%',
            end: 'bottom 104%',
            scrub: true,
            toggleClass: cx('active2nd'),
        });
    }, []);

    // Search

    function handleInput(e) {
        setInput(e.target.value);
    }

    useEffect(() => {
        if (championsList) {
            const temp = [];
            championsList.forEach((champ) => {
                if (champ[0].toLowerCase().includes(input.toLowerCase())) temp.push(champ[0]);
            });
            setChampionsNameList(temp);

            if (input === '') {
                setRenderList(championsList.map((champ) => champ[0]));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-bar')}>
                <div className={cx('search-input')} onClick={handleSearchInputClick}>
                    <div className={cx('search-input-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input
                        value={input}
                        id={cx('search-input')}
                        className={cx('input')}
                        type="text"
                        placeholder="SEARCH"
                        onChange={handleInput}
                    />
                    <div id={cx('search-popup')} ref={searchPopupRef}>
                        {(championsNameList &&
                            championsNameList.map((champ, index) => (
                                <div
                                    className={cx('search-popup-item')}
                                    key={index}
                                    onClick={handleSearchPopupItemClick}
                                >
                                    {champ}
                                </div>
                            ))) || <div className={cx('search-popup-item')}>NO CHAMPION FOUNDED</div>}
                    </div>
                </div>
                <div className={cx('roles-pc')}>
                    <button
                        className={cx('roles-pc-item', 'active')}
                        onClick={(e) => {
                            handleRolesItemClick(e, -1);
                        }}
                    >
                        ALL
                    </button>
                    <button
                        className={cx('roles-pc-item')}
                        onClick={(e) => {
                            handleRolesItemClick(e, 0);
                        }}
                    >
                        ASSASSINS
                    </button>
                    <button
                        className={cx('roles-pc-item')}
                        onClick={(e) => {
                            handleRolesItemClick(e, 1);
                        }}
                    >
                        FIGHTERS
                    </button>
                    <button
                        className={cx('roles-pc-item')}
                        onClick={(e) => {
                            handleRolesItemClick(e, 2);
                        }}
                    >
                        MAGES
                    </button>
                    <button
                        className={cx('roles-pc-item')}
                        onClick={(e) => {
                            handleRolesItemClick(e, 3);
                        }}
                    >
                        MARKSMEN
                    </button>
                    <button
                        className={cx('roles-pc-item')}
                        onClick={(e) => {
                            handleRolesItemClick(e, 4);
                        }}
                    >
                        SUPPORTS
                    </button>
                    <button
                        className={cx('roles-pc-item')}
                        onClick={(e) => {
                            handleRolesItemClick(e, 5);
                        }}
                    >
                        TANKS
                    </button>
                </div>
                <div className={cx('roles-mobile')} onClick={showRolesPopupMenu}>
                    <h4 id={cx('roles-mobile-title')}>ALL ROLES</h4>
                    <button id={cx('roles-mobile-clear')} onClick={(e) => handleRolesMobileClearClick(e)}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <FontAwesomeIcon id={cx('roles-mobile-icon')} icon={faAngleDoubleDown} />
                    <div id={cx('roles-mobile-popup')} ref={rolesPopupRef}>
                        <button className={cx('roles-mobile-item')} onClick={(e) => handleRolesMobileItemClick(e, 0)}>
                            ASSASSINS
                        </button>
                        <button className={cx('roles-mobile-item')} onClick={(e) => handleRolesMobileItemClick(e, 1)}>
                            FIGHTERS
                        </button>
                        <button className={cx('roles-mobile-item')} onClick={(e) => handleRolesMobileItemClick(e, 2)}>
                            MAGES
                        </button>
                        <button className={cx('roles-mobile-item')} onClick={(e) => handleRolesMobileItemClick(e, 3)}>
                            MARKSMEN
                        </button>
                        <button className={cx('roles-mobile-item')} onClick={(e) => handleRolesMobileItemClick(e, 4)}>
                            SUPPORTS
                        </button>
                        <button className={cx('roles-mobile-item')} onClick={(e) => handleRolesMobileItemClick(e, 5)}>
                            TANKS
                        </button>
                    </div>
                </div>

                <div id={cx('difficulties')} onClick={showDiffPopupMenu}>
                    <h4 className={cx('difficulties-selector', 'active')}>ALL DIFFICULTIES</h4>
                    <div className={cx('difficulties-selector')}>
                        <span className={cx('dark')}></span>
                        <span className={cx('light')}></span>
                        <span className={cx('light')}></span>
                    </div>
                    <div className={cx('difficulties-selector')}>
                        <span className={cx('dark')}></span>
                        <span className={cx('dark')}></span>
                        <span className={cx('light')}></span>
                    </div>
                    <div className={cx('difficulties-selector')}>
                        <span className={cx('dark')}></span>
                        <span className={cx('dark')}></span>
                        <span className={cx('dark')}></span>
                    </div>
                    <button
                        id={cx('difficulties-clear')}
                        onClick={(e) => {
                            handleDifficultyClearClick(e);
                        }}
                    >
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <FontAwesomeIcon id={cx('difficulties-icon')} icon={faAngleDoubleDown} />
                    <div id={cx('difficulties-popup')} ref={difficultiesPopupRef}>
                        <button
                            className={cx('difficulties-item')}
                            onClick={(e) => {
                                handleDifficultyItemClick(e, 0);
                            }}
                        >
                            <span className={cx('dark')}></span>
                            <span className={cx('light')}></span>
                            <span className={cx('light')}></span>
                        </button>
                        <button
                            className={cx('difficulties-item')}
                            onClick={(e) => {
                                handleDifficultyItemClick(e, 1);
                            }}
                        >
                            <span className={cx('dark')}></span>
                            <span className={cx('dark')}></span>
                            <span className={cx('light')}></span>
                        </button>
                        <button
                            className={cx('difficulties-item')}
                            onClick={(e) => {
                                handleDifficultyItemClick(e, 2);
                            }}
                        >
                            <span className={cx('dark')}></span>
                            <span className={cx('dark')}></span>
                            <span className={cx('dark')}></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('champions-wrapper')}>
                <div className={cx('champions')}>
                    {renderList &&
                        renderList.map((champ, index) => (
                            <Link key={index} className={cx('champion')} to={`/champions/${champ.toLowerCase()}`}>
                                <div className={cx('champion-img')}>
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`}
                                        alt=""
                                    />
                                </div>
                                <div className={cx('champion-name')}>
                                    <h4>{champ}</h4>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
            <div className={cx('video')}>
                <video autoPlay muted loop>
                    <source src={video} />
                </video>
                <div ref={videoBtnRef} className={cx('video-btn')}>
                    <Button blue big blackText to={paths.game}>
                        PLAY FOR FREE
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Search;
