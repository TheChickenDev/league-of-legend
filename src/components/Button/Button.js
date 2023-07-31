import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ blueRound, fullWidth, children }) {
    return <button className={cx('btn', { blueRound, fullWidth })}>{children}</button>;
}

export default Button;
