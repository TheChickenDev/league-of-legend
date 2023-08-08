import styles from './Skins.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';
import Canvas from '../../Canvas';
import images from '../../../assets/imgs/homepage/skins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import SkinsImg from './SkinsImg';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Skins() {
    let speed = 0;
    let _speed = 0;

    function draw(ctx, rect) {
        const canvasW = rect.width;
        const canvasH = rect.height;

        ctx.clearRect(0, 0, canvasW, canvasH);
        ctx.strokeStyle = '#d0a85c';
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(canvasW / 2 + speed / 2, speed / 2);
        ctx.lineTo(canvasW / 2 + speed, speed);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(canvasW - speed / 2, canvasH / 2 + speed / 2);
        ctx.lineTo(canvasW - speed, canvasH / 2 + speed);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(canvasW / 2 - speed / 2, canvasH - speed / 2);
        ctx.lineTo(canvasW / 2 - speed, canvasH - speed);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(speed / 2, canvasH / 2 - speed / 2);
        ctx.lineTo(speed, canvasH / 2 - speed);
        ctx.stroke();
        ctx.closePath();

        if (speed >= canvasW / 2) {
            speed += canvasW / 300;
            if (speed > canvasW) speed = canvasW;
            ctx.beginPath();
            ctx.moveTo(canvasW / 2 - 4, 0);
            ctx.lineTo(canvasW / 2 + _speed, _speed);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(canvasW, canvasH / 2 + 2);
            ctx.lineTo(canvasW - _speed, canvasH / 2 + _speed);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(canvasW / 2 + 4, canvasH);
            ctx.lineTo(canvasW / 2 - _speed, canvasH - _speed);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(0, canvasH / 2 - 2);
            ctx.lineTo(_speed, canvasH / 2 - _speed);
            ctx.stroke();
            ctx.closePath();

            if (_speed >= canvasW / 2) {
                _speed = 0;
                speed = 0;
            } else _speed += canvasW / 300;
        } else speed += canvasW / 300;
    }

    useEffect(() => {
        document.getElementById(cx('wrapper')).addEventListener('mousemove', (e) => {
            document.getElementById(cx('bubbles')).style.transform = `translateX(${-e.movementX / 5}%)`;
            document.getElementById(cx('header')).style.transform = `translateX(${-e.movementX / 20}%)`;
            document.getElementById(cx('bg1')).style.transform = `translateX(${e.movementX / 40}%)`;
            document.getElementById(cx('skins-border')).style.left = `${e.movementX > 0 ? 49 : 51}%`;
        });

        document.getElementById(cx('wrapper')).addEventListener('mouseleave', (e) => {
            document.getElementById(cx('bubbles')).style.transform = `translateX(0)`;
            document.getElementById(cx('header')).style.transform = `translateX(0)`;
            document.getElementById(cx('bg1')).style.transform = `translateX(0)`;
            document.getElementById(cx('skins-border')).style.left = `50%`;
        });
    }, []);

    return (
        <div id={cx('wrapper')} className={cx('wrapper')}>
            <div className={cx('label')}>
                <h4>
                    CHAMPIONS SKINS <FontAwesomeIcon icon={faMinus} />
                </h4>
            </div>
            <div id={cx('bg1')} className={cx('bg1')}>
                <img src={images.bg1} alt="" />
            </div>
            <div className={cx('bg2')}>
                <img src={images.bg2} alt="" />
            </div>
            <div id={cx('bubbles')} className={cx('bubbles')}>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
                <span className={cx('bubble')} style={{ '--t': Math.random() * 20 }}></span>
            </div>
            <div id={cx('header')} className={cx('header')}>
                <h2 className={cx('header-title')}>
                    SLAY WITH <span>STYLE</span>
                </h2>
                <p className={cx('header-slogan')}>
                    Make it personal by changing up the look of your favorite champions with skins.
                </p>
                <div className={cx('header-btns')}>
                    <Button blue medium>
                        PLAY NOW
                    </Button>
                </div>
            </div>
            <SkinsImg />
            <div id={cx('skins-border')} className={cx('skins-border')}>
                <Canvas draw={draw} imgAnimation />
            </div>
        </div>
    );
}

export default Skins;
