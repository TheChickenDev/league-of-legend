import Button from '../../Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginFunction() {
    return (
        <div className={cx('wrapper')}>
            <Button>SIGN IN</Button>
            <Button blueRound>PLAY NOW</Button>
        </div>
    );
}

export default LoginFunction;
