import styles from './SliderItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SliderItem({ img, label, title, to, content }) {
    return (
        <Link className={cx('wrapper')} to={to}>
            <div className={cx('img')}>
                <img src={img} alt="Error Image" />
            </div>
            <div className={cx('text')}>
                <h5 className={cx('label')}>{label}</h5>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('content')}>{content}</p>
            </div>
            <div className={cx('borderAnimation')}>
                <div></div>
            </div>
        </Link>
    );
}

export default SliderItem;
