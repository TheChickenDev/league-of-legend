import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import * as api from '../../../apiServices/championsServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faMagnifyingGlass, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const roles = ['Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'];

function Search() {
    const [difficulty, setDifficulty] = useState({ min: 0, max: 10 });
    const [role, setRole] = useState();
    const [input, setInput] = useState('');

    const [championsList, setChampionsList] = useState();
    const [championsNameList, setChampionsNameList] = useState([]);
    const [renderList, setRenderList] = useState([]);

    const difficultiesPopupRef = useRef();
    const rolesPopupRef = useRef();
    const searchPopupRef = useRef();

    const [searchPopupItemIndex, setSearchPopupItemIndex] = useState();
    const [mouseOverPopupItem, setMouseOverPopupItem] = useState(false);

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
        setSearchPopupItemIndex(0);
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
        api.search()
            .then((data) => {
                setChampionsList(Object.entries(data));
                setRenderList(Object.keys(data));
                setChampionsNameList(Object.keys(data));
            })
            .catch((error) => console.log(error));
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

    useEffect(() => {
        const searchItemFocused = document.querySelector(`[class="${cx('search-popup-item', 'focused')}"]`);
        if (searchItemFocused) {
            searchItemFocused.classList.remove(cx('focused'));
        }

        const searchItems = document.getElementsByClassName(cx('search-popup-item'));
        if (searchItems[searchPopupItemIndex]) {
            searchItems[searchPopupItemIndex].classList.add(cx('focused'));
            if (searchItems[searchPopupItemIndex].offsetTop > searchPopupRef.current.scrollTop + 360)
                searchPopupRef.current.scrollTop = searchItems[searchPopupItemIndex].offsetTop - 355;
            else if (searchItems[searchPopupItemIndex].offsetTop < searchPopupRef.current.scrollTop)
                searchPopupRef.current.scrollTop = searchItems[searchPopupItemIndex].offsetTop;
        }
    }, [searchPopupItemIndex]);

    function handleSearchKeydown(e) {
        switch (e.key) {
            case 'ArrowDown':
                if (searchPopupItemIndex < championsNameList.length - 1 && !mouseOverPopupItem)
                    setSearchPopupItemIndex(searchPopupItemIndex + 1);
                break;
            case 'ArrowUp':
                if (searchPopupItemIndex > 0 && !mouseOverPopupItem) setSearchPopupItemIndex(searchPopupItemIndex - 1);
                break;
            case 'Enter':
                const name = document.getElementsByClassName(cx('search-popup-item'))[searchPopupItemIndex].innerHTML;
                hideSearchPopupMenu();
                filterChampions(name);
                setInput(name);
                break;
            default:
                break;
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-bar')}>
                <div className={cx('search-input')} onClick={handleSearchInputClick} onKeyDown={handleSearchKeydown}>
                    <div className={cx('search-input-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input
                        value={input}
                        autoComplete="off"
                        id={cx('search-input')}
                        className={cx('input')}
                        type="text"
                        placeholder="SEARCH"
                        onChange={handleInput}
                    />
                    <div id={cx('search-popup')} ref={searchPopupRef}>
                        {(championsNameList.length > 0 &&
                            championsNameList.map((champ, index) => (
                                <div
                                    className={cx('search-popup-item')}
                                    key={index}
                                    onClick={handleSearchPopupItemClick}
                                    onMouseEnter={() => {
                                        setMouseOverPopupItem(true);
                                        setSearchPopupItemIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        setMouseOverPopupItem(false);
                                    }}
                                >
                                    {champ}
                                </div>
                            ))) || <div className={cx('search-popup-nofound-label')}>NO CHAMPION FOUND</div>}
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
        </div>
    );
}

export default Search;
