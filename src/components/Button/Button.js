import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ blueRound, children }) {
    return <button className={cx('btn', { blueRound })}>{children}</button>;
}

export default Button;
