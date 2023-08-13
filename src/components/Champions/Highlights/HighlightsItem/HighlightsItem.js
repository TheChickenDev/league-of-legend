import styles from './HighlightsItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HighlightsItem({ img, label, title, to, href, hot }) {
    const mousePos = { x: 0, y: 0, x0: 0, y0: 0 };

    const props = {};

    let TagName = Link;

    if (href) {
        TagName = 'a';
        props.href = href;
        props.target = '_blank';
        props.rel = 'noreferrer';
    } else if (to) {
        props.to = to;
    }

    return (
        <TagName
            className={cx('wrapper', { hot })}
            {...props}
            onMouseDown={(e) => {
                e.preventDefault();
                mousePos.x0 = e.pageX;
                mousePos.y0 = e.pageY;
            }}
            onMouseUp={(e) => {
                mousePos.x = e.pageX;
                mousePos.y = e.pageY;
            }}
            onClick={(e) => {
                if (mousePos.x !== mousePos.x0 || mousePos.y !== mousePos.y0) e.preventDefault();
            }}
        >
            <div className={cx('img')}>
                <img src={img} alt="Error" />
            </div>
            <div className={cx('text')}>
                <h5 className={cx('label')}>{label}</h5>
                <h2 className={cx('title')}>{title}</h2>
            </div>
            <div className={cx('borderAnimation')}>
                <div></div>
            </div>
        </TagName>
    );
}

export default HighlightsItem;
