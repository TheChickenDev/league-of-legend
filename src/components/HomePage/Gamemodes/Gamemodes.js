import styles from './Gamemodes.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';
import Map from './Map/Map';
import Canvas from '../../Canvas/Canvas';
import border from '../../../assets/svg/homepage/gamemodes/border.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Gamemodes() {
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
            <div className={cx('label')}>
                <h4>
                    GAME MODES <FontAwesomeIcon icon={faMinus} />
                </h4>
            </div>
            <div className={cx('header')}>
                <h2 className={cx('header-title')}>
                    MULTIPLE WAYS TO <span>PLAY</span>
                </h2>
                <div className={cx('header-btns')}>
                    <Button blue medium href={'https://signup.leagueoflegends.com/en-us/signup/index#/'}>
                        PLAY NOW
                    </Button>
                </div>
            </div>
            <Map />
            <div className={cx('video-border')}>
                <Canvas draw={draw} imgAnimation />
                <div className={cx('video-border-svg')}>
                    <img src={border} alt="Error Image" />
                </div>
            </div>
        </div>
    );
}

export default Gamemodes;
