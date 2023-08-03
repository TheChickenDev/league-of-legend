import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Canvas from '../Canvas';

const cx = classNames.bind(styles);

function Button({ blue, yellow, round, big, small, medium, fullWidth, children }) {
    const [btnHoverBoolen, setBtnHoverBoolen] = useState(false);
    const [drawFunc, setDrawFunc] = useState(() => shrink);

    let defectBorder = 25;

    useEffect(() => {
        if (!btnHoverBoolen) setDrawFunc(() => shrink);
        else setDrawFunc(() => expand);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [btnHoverBoolen]);

    function draw(ctx, rect) {
        const canvasW = rect.width;
        const canvasH = rect.height;

        ctx.clearRect(0, 0, canvasW, canvasH);
        ctx.strokeStyle = '#dbdbdb';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(defectBorder, 0.5);
        ctx.lineTo(canvasW - 1, 0.5);
        ctx.lineTo(canvasW - 1, canvasH - defectBorder);
        ctx.lineTo(canvasW - 1 - defectBorder, canvasH - 0.5);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(canvasW - defectBorder, canvasH - 0.5);
        ctx.lineTo(0.5, canvasH - 0.5);
        ctx.lineTo(0.5, defectBorder);
        ctx.lineTo(0.5 + defectBorder, 0.5);
        ctx.stroke();
        ctx.closePath();
    }

    function expand(ctx, rect) {
        defectBorder -= 5;
        draw(ctx, rect);

        if (defectBorder < 0) {
            defectBorder = 0;
        }
    }

    function shrink(ctx, rect) {
        defectBorder += 5;
        draw(ctx, rect);

        if (defectBorder > 25) {
            defectBorder = 25;
        }
    }

    return (
        (big && (
            <button
                className={cx('btn', { blue, round, yellow, big, small, medium, fullWidth })}
                onMouseOver={() => setBtnHoverBoolen(true)}
                onMouseOut={() => setBtnHoverBoolen(false)}
            >
                {children}
                {big && <Canvas draw={drawFunc} btnAnimation></Canvas>}
            </button>
        )) || <button className={cx('btn', { blue, round, yellow, big, small, medium, fullWidth })}>{children}</button>
    );
}

export default Button;
