import styles from './Featured.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/imgs/homepage/featured';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import video from '../../../assets/videos/homepage/ss2020_lux_sylas_1920x1080.mp4';
import Button from '../../Button';
import { paths } from '../../../routes';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Featured() {
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

    return (
        <div id={cx('wrapper')}>
            <div className={cx('label')}>
                <h4>
                    FEATURED <FontAwesomeIcon icon={faMinus} />
                </h4>
            </div>
            <div className={cx('header')}>
                <h2 className={cx('header-title')}>
                    MORE TO <span>DISCOVER</span>
                </h2>
            </div>
            <div ref={contentRef} className={cx('content')}>
                <Link className={cx('item')} to={paths.news}>
                    <div className={cx('item-img')}>
                        <img className={cx('item-img')} src={images.featured1} alt="Error" />
                    </div>
                    <h2 className={cx('item-title')}>NRG GO TO WORLDS & DIVE AWARDS | THE DIVE</h2>
                    <div className={cx('borderAnimation')}>
                        <div></div>
                    </div>
                </Link>
                <Link className={cx('item')} to={paths.news}>
                    <div className={cx('item-img')}>
                        <img className={cx('item-img')} src={images.featured2} alt="Error" />
                    </div>
                    <h2 className={cx('item-title')}>PREVIOUSLY ON STAR GUARDIAN</h2>
                    <div className={cx('borderAnimation')}>
                        <div></div>
                    </div>
                </Link>
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

export default Featured;
