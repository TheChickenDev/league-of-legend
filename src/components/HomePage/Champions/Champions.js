import styles from './Champions.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';
import Canvas from '../../Canvas/';
import ChampionRoller from './ChampionRoller';
import { paths } from '../../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Champions() {
    let firstPoint = 0.05;
    let secondPoint = 0;
    let speedDecrease = 5;

    function draw(ctx, rect) {
        const canvasW = rect.width;
        const canvasH = rect.height;

        ctx.clearRect(0, 0, canvasW, canvasH);
        ctx.strokeStyle = '#d0a85c';
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.arc(
            canvasW / 2,
            canvasH / 2,
            canvasH / 2 - 2,
            Math.PI * 0.666667 * secondPoint,
            Math.PI * 0.666667 * firstPoint,
        );
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(
            canvasW / 2,
            canvasH / 2,
            canvasH / 2 - 2,
            Math.PI * 0.666667 * (1 + secondPoint),
            Math.PI * 0.666667 * (firstPoint + 1),
        );
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(
            canvasW / 2,
            canvasH / 2,
            canvasH / 2 - 2,
            Math.PI * 0.666667 * (2 + secondPoint),
            Math.PI * 0.666667 * (firstPoint + 2),
        );
        ctx.stroke();
        ctx.closePath();

        firstPoint += 0.0625 / speedDecrease;
        secondPoint += 0.05 / speedDecrease;
        if (secondPoint > 2) speedDecrease += 0.03;
        if (secondPoint >= 4) {
            firstPoint = 0;
            secondPoint = 0;
            speedDecrease = 5;
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-label')}>
                    <h4>
                        CHAMPIONS <FontAwesomeIcon icon={faMinus} />
                    </h4>
                </div>
                <h2 className={cx('header-title')}>
                    CHOOSE YOUR <span>CHAMPION</span>
                </h2>
                <p className={cx('header-slogan')}>
                    Whether you like to dive straight into the fray, support your teammates, or something in between,
                    there’s a spot for you on the Rift.
                </p>
                <div className={cx('header-btns')}>
                    <Button yellow medium to={paths.Champions}>
                        DISCOVER MORE CHAMIONS
                    </Button>
                    <Button blue medium to={paths.Game}>
                        PLAY NOW
                    </Button>
                </div>
            </div>
            <div className={cx('content')}>
                <ChampionRoller />
                <div className={cx('champion-img-animation')}>
                    <div className={cx('pseudo-tag')}></div>
                    <div className={cx('champion-img-border')}>
                        <Canvas draw={draw} imgAnimation></Canvas>
                    </div>
                </div>
                <div className={cx('video')}>
                    <video autoPlay muted loop>
                        <source
                            src="https://www.leagueoflegends.com/static/marksman-bd0982ab3e28c88198cb868ce386bd06.webm"
                            type="video/webm"
                        />
                    </video>
                    <div className={cx('video-border')}></div>
                </div>
            </div>
        </div>
    );
}

export default Champions;
