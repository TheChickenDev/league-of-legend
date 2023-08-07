import styles from './BoundingCircleAnimation.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function BoundingCircleAnimation() {
    let count1 = 0.05;
    let count2 = 0;
    let speedDecrease = 5;

    function draw() {
        var ctx = document.getElementById(cx('myCanvas')).getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 300, 300); // clear canvas
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 6;

        ctx.beginPath();
        ctx.shadowBlur = 30;
        ctx.arc(100, 100, 50, Math.PI * 0.666667 * count2, Math.PI * 0.666667 * count1);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(100, 100, 50, Math.PI * 0.666667 * (1 + count2), Math.PI * 0.666667 * (count1 + 1));
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(100, 100, 50, Math.PI * 0.666667 * (2 + count2), Math.PI * 0.666667 * (count1 + 2));
        ctx.stroke();
        ctx.closePath();

        count1 += 0.0625 / speedDecrease;
        count2 += 0.05 / speedDecrease;
        if (count2 > 2) speedDecrease += 0.03;
        if (count2 >= 4) {
            count1 = 0;
            count2 = 0;
            speedDecrease = 5;
        }

        window.requestAnimationFrame(draw);
    }

    useEffect(() => {
        draw();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <canvas id={cx('myCanvas')} width="300" height="300" style={{ border: '1px solid #d3d3d3' }}>
            Your browser does not support the HTML canvas tag.
        </canvas>
    );
}

export default BoundingCircleAnimation;
