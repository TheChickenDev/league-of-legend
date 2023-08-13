import styles from './Map.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/imgs/homepage/gamemodes';
import summonersriftVideo from '../../../../assets/videos/homepage/summonersrift.mp4';
import aramVideo from '../../../../assets/videos/homepage/aram.mp4';
import teamfighttacticsVideo from '../../../../assets/videos/homepage/teamfighttactics.mp4';
import { Fragment, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Map() {
    const [renderIndex, setRenderIndex] = useState(0);

    useEffect(() => {
        document.querySelector(`[class="${cx('backgrounds-item', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('backgrounds-item'))[renderIndex].classList.add(cx('active'));

        document.querySelector(`[class="${cx('roller-item', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('roller-item'))[renderIndex].classList.add(cx('active'));
        document.querySelector(`[class="${cx('roller-item-mobile', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('roller-item-mobile'))[renderIndex].classList.add(cx('active'));

        document.querySelector(`[class="${cx('descriptions-item', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('descriptions-item'))[renderIndex].classList.add(cx('active'));

        document.querySelector(`[class="${cx('videos-item', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('videos-item'))[renderIndex].classList.add(cx('active'));

        const rollerSelector = document.getElementById(cx('roller'));
        if (renderIndex === 0) rollerSelector.style.transform = 'translateY(30%)';
        else if (renderIndex === 1) rollerSelector.style.transform = 'translateY(0)';
        if (renderIndex === 2) rollerSelector.style.transform = 'translateY(-30%)';

        const rollerMobileSelector = document.getElementById(cx('roller-mobile'));
        if (renderIndex === 0) rollerMobileSelector.style.transform = 'translateX(36%)';
        else if (renderIndex === 1) rollerMobileSelector.style.transform = 'translateX(0)';
        if (renderIndex === 2) rollerMobileSelector.style.transform = 'translateX(-36%)';

        const interval = setInterval(() => setRenderIndex(renderIndex < 2 ? renderIndex + 1 : 0), 7000);

        return () => clearInterval(interval);
    }, [renderIndex]);

    return (
        <Fragment>
            <div className={cx('backgrounds')}>
                <div className={cx('backgrounds-item', 'active')}>
                    <img src={images.summonersrift} alt="Error" />
                </div>
                <div className={cx('backgrounds-item')}>
                    <img src={images.aram} alt="Error" />
                </div>
                <div className={cx('backgrounds-item')}>
                    <img src={images.teamfighttactics} alt="Error" />
                </div>
                <div className={cx('backgrounds-black-layer-top')}></div>
                <div className={cx('backgrounds-black-layer-bottom')}></div>
            </div>
            <div className={cx('content')}>
                <div className={cx('videos')}>
                    <div className={cx('videos-item', 'active')}>
                        <video autoPlay muted loop>
                            <source src={summonersriftVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className={cx('videos-item')}>
                        <video autoPlay muted loop>
                            <source src={aramVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className={cx('videos-item')}>
                        <video autoPlay muted loop>
                            <source src={teamfighttacticsVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className={cx('roller-container')}>
                    <div id={cx('roller')}>
                        <button className={cx('roller-item', 'active')} onClick={() => setRenderIndex(0)}>
                            <span className={cx('roller-name')}>SUMMONER'S RIFT</span>
                            <div className={cx('roller-img-wrapper')}>
                                <img className={cx('roller-img')} src={images.summonersriftRoll} alt="Error" />
                            </div>
                            <div className={cx('roller-bg')}></div>
                        </button>
                        <button className={cx('roller-item')} onClick={() => setRenderIndex(1)}>
                            <span className={cx('roller-name')}>ARAM</span>
                            <div className={cx('roller-img-wrapper')}>
                                <img className={cx('roller-img')} src={images.aramRoll} alt="Error" />
                            </div>
                            <div className={cx('roller-bg')}></div>
                        </button>
                        <button className={cx('roller-item')} onClick={() => setRenderIndex(2)}>
                            <span className={cx('roller-name')}>TEAMFIGHT TACTICS</span>
                            <div className={cx('roller-img-wrapper')}>
                                <img className={cx('roller-img')} src={images.teamfighttacticsRoll} alt="Error" />
                            </div>
                            <div className={cx('roller-bg')}></div>
                        </button>
                    </div>
                </div>
                <div className={cx('roller-container-mobile')}>
                    <div id={cx('roller-mobile')}>
                        <button className={cx('roller-item-mobile', 'active')} onClick={() => setRenderIndex(0)}>
                            <div className={cx('roller-img-wrapper')}>
                                <img className={cx('roller-img')} src={images.summonersriftRoll} alt="Error" />
                            </div>
                            <div className={cx('roller-bg-mobile')}>
                                <span className={cx('roller-name-mobile')}>SUMMONER'S RIFT</span>
                            </div>
                        </button>
                        <button className={cx('roller-item-mobile')} onClick={() => setRenderIndex(1)}>
                            <div className={cx('roller-img-wrapper')}>
                                <img className={cx('roller-img')} src={images.aramRoll} alt="Error" />
                            </div>
                            <div className={cx('roller-bg-mobile')}>
                                <span className={cx('roller-name-mobile')}>ARAM</span>
                            </div>
                        </button>
                        <button className={cx('roller-item-mobile')} onClick={() => setRenderIndex(2)}>
                            <div className={cx('roller-img-wrapper')}>
                                <img className={cx('roller-img')} src={images.teamfighttacticsRoll} alt="Error" />
                            </div>
                            <div className={cx('roller-bg-mobile')}>
                                <span className={cx('roller-name-mobile')}>TEAMFIGHT TACTICS</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={cx('descriptions')}>
                    <div className={cx('descriptions-item', 'active')}>
                        <h4 className={cx('description-title')}>THE MOST POPULAR GAME MODE</h4>
                        <p className={cx('description-text')}>
                            Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they
                            destroy yours.
                        </p>
                    </div>
                    <div className={cx('descriptions-item')}>
                        <h4 className={cx('description-title')}>ALL RANDOM, ALL MID</h4>
                        <p className={cx('description-text')}>
                            Battle across an icy bridge as your team of random champions charge toward the enemy Nexus
                            in this chaotically fun 5v5 game mode.
                        </p>
                    </div>
                    <div className={cx('descriptions-item')}>
                        <h4 className={cx('description-title')}>A FREE-FOR-ALL WAR FOR SUPREMACY</h4>
                        <p className={cx('description-text')}>
                            Assemble a squad of champions that battle on your behalf. Outlast all seven of your
                            opponents and become the last person standing.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Map;
