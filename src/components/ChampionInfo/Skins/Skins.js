import styles from './Skins.module.scss';
import classNames from 'classnames/bind';
import * as api from '../../../apiServices/championsServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Skins() {
    const champName = useParams().name.charAt(0).toUpperCase() + useParams().name.slice(1);
    const [champInfo, setChampInfo] = useState();

    const [index, setIndex] = useState(0);

    const skinsRef = useRef();
    const mobileSkinsRef = useRef();

    useEffect(() => {
        api.championInfo(champName)
            .then((data) => setChampInfo(data))
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const activatedBanner = document.querySelector(`[class="${cx('banners-item', 'active')}"]`);
        const banners = document.getElementsByClassName(cx('banners-item'));

        if (activatedBanner) {
            activatedBanner.classList.remove(cx('active'));
            banners[index].classList.add(cx('active'));
            skinsRef.current.style.transform = `translateY(${-100 * index + 100}px)`;
            mobileSkinsRef.current.style.transform = `translateX(${-110 * index - 55}px)`;
        }

        const interval = setInterval(() => {
            if (index < banners.length - 1) setIndex(index + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        champInfo && (
            <div className={cx('wrapper')}>
                <div className={cx('label')}>
                    <h4>
                        AVAILABLE SKINS <FontAwesomeIcon className={cx('label-icon')} icon={faMinus} />
                    </h4>
                </div>
                <div className={cx('content')}>
                    <div className={cx('banners')}>
                        <div className={cx('sidebar')}>
                            <div className={cx('sidebar-bg')}></div>
                            <h2 className={cx('skins-title')}>
                                AVAILABLE
                                <br />
                                SKINS
                            </h2>
                            <div className={cx('skins-container')}>
                                <div className={cx('skins-items')} ref={skinsRef}>
                                    {champInfo.skins.map((item, i) => (
                                        <div
                                            className={cx('skins-item', i === index && 'active')}
                                            key={i}
                                            onClick={() => setIndex(i)}
                                        >
                                            <div className={cx('skins-item-img')}>
                                                <img
                                                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
                                                        champName + '_' + item.num
                                                    }.jpg`}
                                                    alt="Error"
                                                />
                                            </div>
                                            <h4 className={cx('skins-item-name')}>{i === 0 ? champName : item.name}</h4>
                                            <div className={cx('skins-item-border')}>
                                                <div className={cx('skins-item-border-1')}></div>
                                                <div className={cx('skins-item-border-2')}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={cx('bottombar')}>
                            <div className={cx('bottombar-items')} ref={mobileSkinsRef}>
                                {champInfo.skins.map((item, i) => (
                                    <div
                                        className={cx('bottombar-item', i === index && 'active')}
                                        key={i}
                                        onClick={() => setIndex(i)}
                                    >
                                        <div className={cx('bottombar-item-img')}>
                                            <img
                                                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
                                                    champName + '_' + item.num
                                                }.jpg`}
                                                alt="Error"
                                            />
                                            <div className={cx('bottombar-item-border')}>
                                                <div className={cx('bottombar-item-border-1')}></div>
                                                <div className={cx('bottombar-item-border-2')}></div>
                                            </div>
                                        </div>
                                        <h4 className={cx('bottombar-item-name')}>{i === 0 ? champName : item.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {champInfo.skins.map((item, i) => (
                            <div className={cx('banners-item', i === index && 'active')} key={i}>
                                <img
                                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
                                        champName + '_' + item.num
                                    }.jpg`}
                                    alt="Error"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default Skins;
