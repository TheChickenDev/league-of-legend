import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import Canvas from '../Canvas';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Button({ blue, yellow, round, big, small, medium, fullWidth, blackText, href, to, onClick, children }) {
    const [btnHoverBoolen, setBtnHoverBoolen] = useState(false);
    const [drawFunc, setDrawFunc] = useState(() => shrink);

    let defectBorder = 25;

    let TagName = 'button';
    let props = {
        onClick,
    };

    if (href) {
        TagName = 'a';
        props.href = href;
        props.target = '_blank';
        props.rel = 'noreferrer';
    } else if (to) {
        TagName = Link;
        props.to = to;
    }

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
            <TagName
                {...props}
                className={cx('btn', { blue, round, yellow, big, small, medium, fullWidth, blackText })}
                onMouseOver={() => setBtnHoverBoolen(true)}
                onMouseOut={() => setBtnHoverBoolen(false)}
            >
                {children}
                {big && <Canvas draw={drawFunc} btnAnimation></Canvas>}
            </TagName>
        )) || (
            <TagName
                {...props}
                className={cx('btn', { blue, round, yellow, big, small, medium, fullWidth, blackText })}
            >
                {children}
            </TagName>
        )
    );
}

Button.propTypes = {
    blue: PropTypes.bool,
    yellow: PropTypes.bool,
    round: PropTypes.bool,
    big: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    fullWidth: PropTypes.bool,
    blackText: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
