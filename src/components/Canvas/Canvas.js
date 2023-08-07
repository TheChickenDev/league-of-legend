import styles from './Canvas.module.scss';
import classNames from 'classnames/bind';
import useCanvas from '../../hooks/useCanvas/useCanvas';

const cx = classNames.bind(styles);

function Canvas({ draw, btnAnimation, imgAnimation, boundingAnimation }) {
    const ref = useCanvas(draw);
    return <canvas ref={ref} className={cx({ btnAnimation, imgAnimation, boundingAnimation })}></canvas>;
}

export default Canvas;
