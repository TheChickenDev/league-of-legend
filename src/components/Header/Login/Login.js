import Button from '../../Button';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginFunction() {
    return (
        <div className={cx('wrapper')}>
            <Button round href={'https://signup.leagueoflegends.com/en-us/signup/index#/'}>
                SIGN IN
            </Button>
            <div className={cx('space')}></div>
            <Button blue round blackText href={'https://signup.leagueoflegends.com/en-us/signup/index#/'}>
                PLAY NOW
            </Button>
        </div>
    );
}

export default LoginFunction;
