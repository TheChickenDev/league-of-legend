import styles from './SkinsImg.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/imgs/homepage/skins';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const renderItems = [images.assassin1, images.assassin2, images.assassin3, images.assassin4];

function SkinsImg() {
    const [renderIndex, setRenderIndex] = useState(0);

    useEffect(() => {
        document.getElementById(cx('skins-item-img-pseudo')).src = renderItems[renderIndex];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const activeItem = document.querySelector(`[class="${cx('skins-item', 'active')}"]`);
        if (activeItem) activeItem.classList.remove(cx('active'));

        document.getElementsByClassName(cx('skins-item'))[renderIndex].classList.add(cx('active'));
        document.getElementById(cx('skins-item-pseudo')).classList.remove(cx('active'));

        const timer800 = setTimeout(() => {
            document.getElementById(cx('skins-item-img-pseudo')).src = renderItems[renderIndex];
            document.getElementById(cx('skins-item-pseudo')).classList.add(cx('active'));
        }, 800);

        const timer2450 = setTimeout(() => {
            setRenderIndex(renderIndex === 3 ? 0 : renderIndex + 1);
        }, 2450);

        return () => {
            clearTimeout(timer2450);
            clearTimeout(timer800);
        };
    }, [renderIndex]);
    return (
        <div className={cx('skins')}>
            {renderItems.map((item, index) => (
                <div className={cx('skins-item')} key={index}>
                    <img className={cx('skins-item-img')} src={item} alt="Error" />
                </div>
            ))}
            <div id={cx('skins-item-pseudo')}>
                <img id={cx('skins-item-img-pseudo')} src="" alt="Error" />
            </div>
        </div>
    );
}

export default SkinsImg;
