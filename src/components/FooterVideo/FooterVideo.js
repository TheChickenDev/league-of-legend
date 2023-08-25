import styles from './FooterVideo.module.scss';
import classNames from 'classnames/bind';
import video from '../../assets/videos/homepage/ss2020_lux_sylas_1920x1080.mp4';
import Button from '../Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { paths } from '../../routes';

const cx = classNames.bind(styles);

function FooterVideo() {
    const videoBtnRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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
    );
}

export default FooterVideo;
