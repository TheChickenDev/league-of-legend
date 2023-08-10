import styles from './Gameplay.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';
import map from '../../../assets/imgs/homepage/gameplay/map.png';
import { paths } from '../../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Gameplay() {
    useEffect(() => {
        const wrapperSelector = document.getElementById(cx('wrapper'));
        const mapSelector = document.getElementById(cx('map'));

        setTimeout(() => {
            wrapperSelector.addEventListener('mousemove', (e) => {
                if (e.movementX > 0) mapSelector.style.transform = `translateX(-2%)`;
                else mapSelector.style.transform = `translateX(2%)`;
            });

            wrapperSelector.addEventListener('mouseleave', () => {
                mapSelector.style.transform = 'translateX(0)';
            });
        }, 4000);
    }, []);

    return (
        <div id={cx('wrapper')}>
            <div className={cx('label')}>
                <h4>
                    HOW TO PLAY <FontAwesomeIcon icon={faMinus} />
                </h4>
            </div>
            <div id={cx('map')}>
                <img src={map} alt="Error Image" />
            </div>
            <div className={cx('header')}>
                <h2 className={cx('header-title')}>
                    START YOUR <span>LEGEND</span>
                </h2>
                <p className={cx('header-slogan')}>
                    New to League? Get a rundown on the basics for the most popular game mode.
                </p>
                <div className={cx('header-btns')}>
                    <Button yellow big blackText href={'https://signup.leagueoflegends.com/en-us/signup/index#/'}>
                        GET STARTED
                    </Button>
                    <Button blue big blackText to={paths.Game}>
                        PLAY FOR FREE
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Gameplay;
