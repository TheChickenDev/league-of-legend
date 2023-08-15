import styles from './Canvas.module.scss';
import classNames from 'classnames/bind';
import useCanvas from '../../hooks/useCanvas/useCanvas';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Canvas({ draw, btnAnimation, imgAnimation, normal }) {
    const ref = useCanvas(draw);
    return <canvas ref={ref} className={cx({ btnAnimation, imgAnimation, normal })}></canvas>;
}

Canvas.propTypes = {
    draw: PropTypes.func,
    btnAnimation: PropTypes.bool,
    imgAnimation: PropTypes.bool,
    boundingAnimation: PropTypes.bool,
};

export default Canvas;
