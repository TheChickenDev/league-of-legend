import styles from './Abilities.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/svg/homepage/champions';
import * as api from '../../../apiServices/championsServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Abilities() {
    const champName = useParams().name.charAt(0).toUpperCase() + useParams().name.slice(1);
    const [champInfo, setChampInfo] = useState();
    const [champVideoKey, setChampVideoKey] = useState('');

    const [index, setIndex] = useState(0);

    useEffect(() => {
        api.championInfo(champName)
            .then((data) => setChampInfo(data))
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!champInfo) return;
        const l = champInfo.key.length;
        setChampVideoKey(l === 1 ? '000' + champInfo.key : l === 2 ? '00' + champInfo.key : '0' + champInfo.key);
    }, [champInfo]);

    useEffect(() => {
        const activatedSkill = document.querySelector(`[class="${cx('left-skills-item', 'active')}"]`);
        if (activatedSkill) {
            activatedSkill.classList.remove(cx('active'));
            document.getElementsByClassName(cx('left-skills-item'))[index].classList.add(cx('active'));
        }

        const activatedDetails = document.querySelector(`[class="${cx('left-details-item', 'active')}"]`);
        if (activatedDetails) {
            activatedDetails.classList.remove(cx('active'));
            document.getElementsByClassName(cx('left-details-item'))[index].classList.add(cx('active'));
        }

        const activatedVideo = document.querySelector(`[class="${cx('videos-item', 'active')}"]`);
        if (activatedVideo) {
            activatedVideo.classList.remove(cx('active'));
            document.getElementsByClassName(cx('videos-item'))[index].classList.add(cx('active'));
        }

        const dot = document.getElementById(cx('left-skills-dot'));
        if (dot) {
            dot.style.left = `calc(${20 * index}% + 44px)`;
        }

        const interval = setInterval(() => {
            setIndex(index < 4 ? index + 1 : 0);
        }, 8000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        champInfo &&
        champVideoKey && (
            <div className={cx('wrapper')}>
                <div className={cx('label')}>
                    <h4>
                        ABILITIES <FontAwesomeIcon icon={faMinus} />
                    </h4>
                </div>
                <div className={cx('background')}>
                    <img src={images[`logo${champInfo.tags[0]}`]} alt="" />
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-block')}>
                        <h2 className={cx('left-title')}>ABILITIES</h2>
                        <div className={cx('left-skills')}>
                            <div className={cx('left-skills-item', 'active')} onClick={() => setIndex(0)}>
                                <div className={cx('left-skills-img')}>
                                    <div className={cx('left-skills-border')}>
                                        <div className={cx('left-skills-border-1')}></div>
                                        <div className={cx('left-skills-border-2')}></div>
                                    </div>
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/passive/${champInfo.passive.image.full}`}
                                        alt="Error"
                                    />
                                </div>
                            </div>
                            <div className={cx('left-skills-item')} onClick={() => setIndex(1)}>
                                <div className={cx('left-skills-img')}>
                                    <div className={cx('left-skills-border')}>
                                        <div className={cx('left-skills-border-1')}></div>
                                        <div className={cx('left-skills-border-2')}></div>
                                    </div>
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${champInfo.spells[0].image.full}`}
                                        alt="Error"
                                    />
                                </div>
                            </div>
                            <div className={cx('left-skills-item')} onClick={() => setIndex(2)}>
                                <div className={cx('left-skills-img')}>
                                    <div className={cx('left-skills-border')}>
                                        <div className={cx('left-skills-border-1')}></div>
                                        <div className={cx('left-skills-border-2')}></div>
                                    </div>
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${champInfo.spells[1].image.full}`}
                                        alt="Error"
                                    />
                                </div>
                            </div>
                            <div className={cx('left-skills-item')} onClick={() => setIndex(3)}>
                                <div className={cx('left-skills-img')}>
                                    <div className={cx('left-skills-border')}>
                                        <div className={cx('left-skills-border-1')}></div>
                                        <div className={cx('left-skills-border-2')}></div>
                                    </div>
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${champInfo.spells[2].image.full}`}
                                        alt="Error"
                                    />
                                </div>
                            </div>
                            <div className={cx('left-skills-item')} onClick={() => setIndex(4)}>
                                <div className={cx('left-skills-img')}>
                                    <div className={cx('left-skills-border')}>
                                        <div className={cx('left-skills-border-1')}></div>
                                        <div className={cx('left-skills-border-2')}></div>
                                    </div>
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${champInfo.spells[3].image.full}`}
                                        alt="Error"
                                    />
                                </div>
                            </div>
                            <div className={cx('left-skills-line')}></div>
                            <div id={cx('left-skills-dot')}></div>
                        </div>
                        <div className={cx('left-details')}>
                            <div className={cx('left-details-item', 'active')}>
                                <h4 className={cx('left-details-key')}>PASSIVE</h4>
                                <h2 className={cx('left-details-name')}>{champInfo.passive.name}</h2>
                                <p
                                    className={cx('left-details-desc')}
                                    dangerouslySetInnerHTML={{ __html: champInfo.passive.description }}
                                ></p>
                            </div>
                            <div className={cx('left-details-item')}>
                                <h4 className={cx('left-details-key')}>Q</h4>
                                <h2 className={cx('left-details-name')}>{champInfo.spells[0].name}</h2>
                                <p
                                    className={cx('left-details-desc')}
                                    dangerouslySetInnerHTML={{ __html: champInfo.spells[0].description }}
                                ></p>
                            </div>
                            <div className={cx('left-details-item')}>
                                <h4 className={cx('left-details-key')}>W</h4>
                                <h2 className={cx('left-details-name')}>{champInfo.spells[1].name}</h2>
                                <p
                                    className={cx('left-details-desc')}
                                    dangerouslySetInnerHTML={{ __html: champInfo.spells[1].description }}
                                ></p>
                            </div>
                            <div className={cx('left-details-item')}>
                                <h4 className={cx('left-details-key')}>E</h4>
                                <h2 className={cx('left-details-name')}>{champInfo.spells[2].name}</h2>
                                <p
                                    className={cx('left-details-desc')}
                                    dangerouslySetInnerHTML={{ __html: champInfo.spells[2].description }}
                                ></p>
                            </div>
                            <div className={cx('left-details-item')}>
                                <h4 className={cx('left-details-key')}>R</h4>
                                <h2 className={cx('left-details-name')}>{champInfo.spells[3].name}</h2>
                                <p
                                    className={cx('left-details-desc')}
                                    dangerouslySetInnerHTML={{ __html: champInfo.spells[3].description }}
                                ></p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-block')}>
                        <div className={cx('videos')}>
                            <div className={cx('videos-border')}>
                                <div className={cx('videos-border-1')}></div>
                                <div className={cx('videos-border-2')}></div>
                            </div>
                            <video className={cx('videos-item', 'active')} autoPlay loop muted>
                                <source
                                    src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champVideoKey}/ability_${champVideoKey}_P1.webm`}
                                    type="video/webm"
                                />
                            </video>
                            <video className={cx('videos-item')} autoPlay loop muted>
                                <source
                                    src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champVideoKey}/ability_${champVideoKey}_Q1.webm`}
                                    type="video/webm"
                                />
                            </video>
                            <video className={cx('videos-item')} autoPlay loop muted>
                                <source
                                    src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champVideoKey}/ability_${champVideoKey}_W1.webm`}
                                    type="video/webm"
                                />
                            </video>
                            <video className={cx('videos-item')} autoPlay loop muted>
                                <source
                                    src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champVideoKey}/ability_${champVideoKey}_E1.webm`}
                                    type="video/webm"
                                />
                            </video>
                            <video className={cx('videos-item')} autoPlay loop muted>
                                <source
                                    src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champVideoKey}/ability_${champVideoKey}_R1.webm`}
                                    type="video/webm"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Abilities;
