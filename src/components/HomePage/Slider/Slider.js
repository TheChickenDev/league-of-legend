import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/imgs/logo/logo-en-us.png';
import Button from '../../Button';
import SliderItem from './SliderItem/SliderItem';
import heroVideo from '../../../assets/videos/homepage/hero.webm';
import heroMobileVideo from '../../../assets/videos/homepage/heroMobile.webm';
import heroBlurredVideo from '../../../assets/videos/homepage/heroBlurred.webm';
import { paths } from '../../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const news = [
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9542bf1619f1fb75/64c2f635c26b1a57fdc0ccd7/TFT_13_15_Banners.jpg?quality=90&crop=1%3A1&width=720',
        label: 'Game Updates',
        title: 'Teamfight Tactics patch 13.15 notes',
        content:
            '13.15 brings an all new Region Portal, The Hall Of The Nine, reworks to Shifting Sands and Piltover, AND a few lighter balance changes. As a reminder, this is our last patch with Soul Brawl and the Choncc Dome available, so finish up that event pass!',
    },
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9814bd5d2bf9e3c6/64bb247d15da40b696f8b962/TFT_SOUL23_ArticleBanner_MiniCine_1920x1080_v002.jpg?quality=90&crop=1%3A1&width=240',
        label: 'Media',
        title: 'The Choncc Dome Event',
        content: 'TFT’s first event on both PC and mobile runs from July 19 until August 15!',
    },
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta48b9e50d325e94c/64be11201add4db8a8fbbb86/Soul-Fighter-Samira---Final.jpg?quality=90&crop=1%3A1&width=720',
        label: 'Dev',
        title: 'TL;DW: Mid-Year Check-In Dev Update',
        content: 'A short rundown of updates from Riot Brightmoon and Meddler.',
    },
];

function Slider() {
    useEffect(() => {
        const slider = document.getElementById(cx('tablet-slider'));
        let isDragging = false;

        slider.addEventListener('mousedown', () => {
            isDragging = true;
        });

        slider.addEventListener('mouseleave', () => {
            isDragging = false;
            slider.style.transform = 'translateX(0)';
        });

        slider.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const sl = slider.scrollLeft;
                slider.scrollLeft -= e.movementX / 3;
                if (slider.scrollLeft === 0 || slider.scrollLeft === sl) {
                    slider.style.transform = `translateX(${e.movementX * 50}px)`;
                }
            }
        });

        slider.addEventListener('mouseup', () => {
            isDragging = false;
            slider.style.transform = 'translateX(0)';
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('blur-video')}>
                <video className={cx('hideOnMobile')} autoPlay muted loop>
                    <source src={heroBlurredVideo} type="video/webm" />
                </video>
                <video className={cx('mobile-video')} autoPlay muted loop>
                    <source src={heroMobileVideo} type="video/webm" />
                </video>
                <div className={cx('logo')}>
                    <div className={cx('logo-img')}>
                        <img src={logo} alt="LeagueOfLegend" />
                    </div>
                    <div className={cx('logo-btn')}>
                        <Button big blue blackText to={paths.Game}>
                            PLAY FOR FREE
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('main-video', 'hideOnMobile')}>
                <div className={cx('main-video-container')}>
                    <video autoPlay muted loop>
                        <source src={heroVideo} type="video/webm" />
                    </video>
                    <div className={cx('main-video-bounding')}></div>
                    <div className={cx('test')}></div>
                </div>
            </div>
            <div className={cx('news')}>
                <div className={cx('news-label')}>
                    <h4>
                        FEATURED NEWS <FontAwesomeIcon icon={faMinus} />
                    </h4>
                </div>
                <div className={cx('news-content')}>
                    <div id={cx('tablet-slider')} className={cx('news-items')}>
                        {news.map((item, index) => {
                            return (
                                <SliderItem
                                    key={index}
                                    img={item.img}
                                    label={item.label}
                                    title={item.title}
                                    content={item.content}
                                    to={paths.News}
                                ></SliderItem>
                            );
                        })}
                    </div>
                    <div className={cx('news-items', 'pc-slider')}>
                        {news.map((item, index) => {
                            return (
                                <SliderItem
                                    key={index}
                                    img={item.img}
                                    label={item.label}
                                    title={item.title}
                                    content={item.content}
                                    to={paths.News}
                                ></SliderItem>
                            );
                        })}
                    </div>
                    <div className={cx('news-btn-wrapper')}>
                        <Link to={paths.News} className={cx('news-btn')}>
                            VIEW ALL
                            <FontAwesomeIcon className={cx('news-btn-icon')} icon={faHandPointRight}></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
