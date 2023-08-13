import styles from './ChampionRoller.module.scss';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import svgImages from '../../../../assets/svg/homepage/champions';
import images from '../../../../assets/imgs/homepage/champions';

const cx = classNames.bind(styles);
const renderItems = [
    {
        img: images.assassin,
        logo: svgImages.logoAssassin,
        name: 'akali',
        appellation: 'the rogue assassin',
    },
    {
        img: images.fighter,
        logo: svgImages.logoFighter,
        name: 'yasuo',
        appellation: 'the unforgiven',
    },
    {
        img: images.mage,
        logo: svgImages.logoMage,
        name: 'lux',
        appellation: 'the lady of luminosity',
    },
    {
        img: images.marksman,
        logo: svgImages.logoMarksman,
        name: 'jinx',
        appellation: 'the loose cannon',
    },
    {
        img: images.support,
        logo: svgImages.logoSupport,
        name: 'thresh',
        appellation: 'the chain warden',
    },
    {
        img: images.tank,
        logo: svgImages.logoTank,
        name: 'leona',
        appellation: 'the radiant dawn',
    },
];

function ChampionImage({ renderItem }) {
    const [renderIndex, setRenderIndex] = useState(0);
    function handleRollItemClick(index) {
        setRenderIndex(index);
    }

    useEffect(() => {
        document.getElementById(cx('champion-img')).src = renderItems[renderIndex].img;
        document.getElementById(cx('pseudo-img')).src = renderItems[renderIndex].img;
        document.getElementsByClassName(cx('champion-img-item'))[renderIndex].classList.add(cx('active'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const rollSelector = document.getElementsByClassName(cx('roll-item'));

        document.getElementById(cx('roll-dot')).style.left = `${8.33333 + 16.66667 * renderIndex}%`;

        document.querySelector(`[class="${cx('roll-item', 'active')}"]`).classList.remove(cx('active'));
        rollSelector[renderIndex].classList.add(cx('active'));

        document.getElementById(cx('pseudo-img')).classList.add(cx('animation'));

        document.querySelector(`[class="${cx('champion-img-item', 'active')}"]`).classList.remove(cx('active'));
        document.getElementsByClassName(cx('champion-img-item'))[renderIndex].classList.add(cx('active'));

        document.getElementById(cx('champion-img-name')).innerHTML = renderItems[renderIndex].name;
        document.getElementById(cx('champion-img-appellation')).innerHTML = renderItems[renderIndex].appellation;

        const backgroundLogo = document.getElementById(cx('background-logo'));
        backgroundLogo.classList.add(cx('animation'));

        const timeOut300 = setTimeout(() => {
            backgroundLogo.style.backgroundImage = `url(${renderItems[renderIndex].logo})`;
            backgroundLogo.classList.remove(cx('animation'));
        }, 300);

        const timeOut700 = setTimeout(() => {
            document.getElementById(cx('pseudo-img')).src = renderItems[renderIndex].img;
            document.getElementById(cx('pseudo-img')).classList.remove(cx('animation'));
        }, 700);

        const interval = setInterval(() => {
            setRenderIndex(renderIndex === rollSelector.length - 1 ? 0 : renderIndex + 1);
        }, 6000);

        return () => {
            clearTimeout(timeOut300);
            clearTimeout(timeOut700);
            clearInterval(interval);
        };
    }, [renderIndex]);
    return (
        <Fragment>
            <div id={cx('background-logo')}></div>
            <div className={cx('roll-bar')}>
                <div className={cx('roll-item', 'active')} onClick={(e) => handleRollItemClick(0)}>
                    <div className={cx('roll-item-img')}>
                        <img className={cx('roll-item-border')} src={svgImages.border} alt="Error" />
                        <img className={cx('roll-item-icon')} src={svgImages.logoAssassin} alt="Error" />
                    </div>
                    <h4 className={cx('roll-item-label')}>ASSASSINS</h4>
                </div>
                <div className={cx('roll-item')} onClick={(e) => handleRollItemClick(1)}>
                    <div className={cx('roll-item-img')}>
                        <img className={cx('roll-item-border')} src={svgImages.border} alt="Error" />
                        <img className={cx('roll-item-icon')} src={svgImages.logoFighter} alt="Error" />
                    </div>
                    <h4 className={cx('roll-item-label')}>FIGHTERS</h4>
                </div>
                <div className={cx('roll-item')} onClick={(e) => handleRollItemClick(2)}>
                    <div className={cx('roll-item-img')}>
                        <img className={cx('roll-item-border')} src={svgImages.border} alt="Error" />
                        <img className={cx('roll-item-icon')} src={svgImages.logoMage} alt="Error" />
                    </div>
                    <h4 className={cx('roll-item-label')}>MAGES</h4>
                </div>
                <div className={cx('roll-item')} onClick={(e) => handleRollItemClick(3)}>
                    <div className={cx('roll-item-img')}>
                        <img className={cx('roll-item-border')} src={svgImages.border} alt="Error" />
                        <img className={cx('roll-item-icon')} src={svgImages.logoMarksman} alt="Error" />
                    </div>
                    <h4 className={cx('roll-item-label')}>MARKSMEN</h4>
                </div>
                <div className={cx('roll-item')} onClick={(e) => handleRollItemClick(4)}>
                    <div className={cx('roll-item-img')}>
                        <img className={cx('roll-item-border')} src={svgImages.border} alt="Error" />
                        <img className={cx('roll-item-icon')} src={svgImages.logoSupport} alt="Error" />
                    </div>
                    <h4 className={cx('roll-item-label')}>SUPPORTS</h4>
                </div>
                <div className={cx('roll-item')} onClick={(e) => handleRollItemClick(5)}>
                    <div className={cx('roll-item-img')}>
                        <img className={cx('roll-item-border')} src={svgImages.border} alt="Error" />
                        <img className={cx('roll-item-icon')} src={svgImages.logoTank} alt="Error" />
                    </div>
                    <h4 className={cx('roll-item-label')}>TANKS</h4>
                </div>
                <div id={cx('roll-dot')} className={cx('roll-dot')}></div>
            </div>
            <div className={cx('champion-img-bounding')}>
                <img src="" alt="Error" id={cx('pseudo-img')} />
                {renderItems.map((item, index) => (
                    <div className={cx('champion-img-item')} key={index}>
                        <img id={cx('champion-img')} src={item.img} alt="Error" />
                        <div className={cx('champion-img-text')}>
                            <p id={cx('champion-img-name')}>{item.name}</p>
                            <p id={cx('champion-img-appellation')}>{item.appellation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

export default ChampionImage;
