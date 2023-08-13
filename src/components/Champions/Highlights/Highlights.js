import styles from './Highlights.module.scss';
import classNames from 'classnames/bind';
import HighlightsItem from './HighlightsItem';
// import { paths } from '../../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const news = [
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7793b5abd3d534fb/6413a86e5e3c7d3d9b1a2c0e/LOL_MILIO_CHAMP_SPOTLIGHT_1920x1080_JDiaz_V002-textless.jpg?quality=90&crop=12%3A7&width=300',
        label: 'Game Updates',
        title: 'Milio Champion Spotlight',
        href: 'https://www.youtube.com/watch?v=_FudDdGOdsE',
    },
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt541a50735cae8db5/64482576b7b7332b233e363b/JaxHeader.jpg?quality=90&crop=12%3A7&width=300',
        label: 'Dev',
        title: 'Champion Roadmap: April 2023',
        to: '/news',
    },
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg?quality=90&crop=12%3A7&width=300',
        label: 'Lore',
        title: 'Previously on Star Guardian',
        to: '/news',
    },
];

function Highlights() {
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
            <div className={cx('label')}>
                <h4>
                    HIGHTLIGHTS <FontAwesomeIcon icon={faMinus} />
                </h4>
            </div>
            <div id={cx('tablet-slider')} className={cx('items')}>
                {news.map((item, index) => {
                    return (
                        <HighlightsItem
                            key={index}
                            img={item.img}
                            label={item.label}
                            title={item.title}
                            to={item.to}
                            href={item.href}
                        ></HighlightsItem>
                    );
                })}
            </div>
            <div className={cx('items', 'pc-slider')}>
                {news.map((item, index) => {
                    return (
                        <HighlightsItem
                            key={index}
                            img={item.img}
                            label={item.label}
                            title={item.title}
                            to={item.to}
                            href={item.href}
                            hot={index === 0 ? true : false}
                        ></HighlightsItem>
                    );
                })}
            </div>
            <div className={cx('header')}>
                <h2 className={cx('header-title')}>
                    CHOOSE YOUR <span>CHAMPION</span>
                </h2>
                <p className={cx('header-subtitle')}>
                    With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or
                    master them all.
                </p>
            </div>
        </div>
    );
}

export default Highlights;
