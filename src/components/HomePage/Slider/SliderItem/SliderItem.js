import styles from './SliderItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SliderItem({ img, label, title, content }) {
    return (
        <button className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={img} alt="" />
            </div>
            <div className={cx('text')}>
                <h5 className={cx('label')}>{label}</h5>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('content')}>{content}</p>
            </div>
            <div className={cx('borderAnimation')}>
                <div></div>
            </div>
        </button>
    );
}

export default SliderItem;
