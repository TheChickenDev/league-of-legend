import styles from './Overview.module.scss';
import classNames from 'classnames/bind';
import Canvas from '../../Canvas';
import { paths } from '../../../routes';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Overview() {
    const champName = useParams().name.slice(1).charAt(0).toUpperCase() + useParams().name.slice(1);

    let defectBorder = 10;
    const [btnHoverBoolen, setBtnHoverBoolen] = useState(false);
    const [drawFunc, setDrawFunc] = useState(() => shrink);

    function draw(ctx, rect) {
        const canvasW = rect.width;
        const canvasH = rect.height;

        ctx.clearRect(0, 0, canvasW, canvasH);
        ctx.strokeStyle = '#0bc4e1';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(defectBorder, 0.5);
        ctx.lineTo(canvasW - 1, 0.5);
        ctx.lineTo(canvasW - 1, canvasH - defectBorder);
        ctx.lineTo(canvasW - 1 - defectBorder, canvasH - 1);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(canvasW - defectBorder, canvasH - 1);
        ctx.lineTo(0.5, canvasH - 1);
        ctx.lineTo(0.5, defectBorder);
        ctx.lineTo(0.5 + defectBorder, 1);
        ctx.stroke();
        ctx.closePath();
    }

    function expand(ctx, rect) {
        defectBorder -= 2;
        draw(ctx, rect);

        if (defectBorder < 0) {
            defectBorder = 0;
        }
    }

    function shrink(ctx, rect) {
        defectBorder += 2;
        draw(ctx, rect);

        if (defectBorder > 10) {
            defectBorder = 10;
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>
                <h4>
                    OVERVIEW <FontAwesomeIcon icon={faMinus} />
                </h4>
            </div>
            <div className={cx('list-btn-wrapper')}>
                <Link
                    to={paths.champions}
                    className={cx('list-btn')}
                    onMouseOver={() => setDrawFunc(() => expand)}
                    onMouseOut={() => setDrawFunc(() => shrink)}
                >
                    <span>CHAMPION LIST</span>
                    <svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path
                                d="M12.8,8.4V4.8c0,0,0.2-3.7-5.8-4.8l0,0C7,0,7,0,6.9,0v0c-6,1.1-5.8,4.8-5.8,4.8v3.6c0,1.9-0.8,2.5-0.8,2.5
		C1.5,15.3,4.5,15,4.5,15c-1.6-2.1,0-5.8,0-5.8C2.2,8.9,2.6,6.5,2.8,5.8c0,0,2.2-0.1,3.3,1.6v4.2L7,12.5l0.8-0.8V7.5
		c1.2-1.8,3.3-1.7,3.3-1.6c0.2,0.7,0.6,3.1-1.7,3.3c0,0,1.6,3.8,0,5.8c0,0,3,0.3,4.2-4.1C13.7,10.9,12.8,10.3,12.8,8.4z"
                            ></path>
                        </g>
                    </svg>
                    <Canvas draw={drawFunc} normal />
                </Link>
            </div>
            <div className={cx('background')}>
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}
                    alt="Error"
                />
                <div className={cx('black-layer')}></div>
            </div>
            <div className={cx('splash-img')}>
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}
                    alt="Error"
                />
            </div>
        </div>
    );
}

export default Overview;
