import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import down_appstore from '../../assets/imgs/footer/down_appstore.png';
import down_ggplay from '../../assets/imgs/footer/down_ggplay.png';
import na_esrb from '../../assets/imgs/footer/na_esrb.png';
import logo from '../../assets/svg/logo';
import { paths } from '../../routes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faReddit, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('download')}>
                <h4 className={cx('download-title')}>TAKE LEAGUE WITH YOU</h4>
                <p className={cx('download-subtitle')}>
                    Download the League app to stay connected to friends and the latest game and esports news.
                </p>
                <div className={cx('download-btns')}>
                    <a
                        className={cx('download-btns-item')}
                        href="https://apps.apple.com/us/app/league-of-legends-friends/id1077150310"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={down_appstore} alt="Error" />
                    </a>
                    <a
                        className={cx('download-btns-item')}
                        href="https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&hl=en&pli=1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={down_ggplay} alt="Error" />
                    </a>
                </div>
            </div>
            <div className={cx('header')}>
                <Link className={cx('header-item')} to={paths.game}>
                    About league of legends
                </Link>
                <a
                    className={cx('header-item')}
                    href="http://leagueoflegends.na-surveyen2.sgizmo.com/s3/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Help us improve
                </a>
                <a
                    className={cx('header-item')}
                    href="https://status.riotgames.com/?locale=en_US"
                    target="_blank"
                    rel="noreferrer"
                >
                    Server status
                </a>
                <Link className={cx('header-item')} to={paths.support}>
                    Support
                </Link>
                <a
                    className={cx('header-item')}
                    href="https://lolesports.com/schedule?leagues=worlds,msi"
                    target="_blank"
                    rel="noreferrer"
                >
                    Esports pro site
                </a>
                <a
                    className={cx('header-item')}
                    href="https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&referrer=singular_click_id%3D72f03af1-6e24-47eb-b90e-68c820b5885a"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download riot mobile companion app
                </a>
            </div>
            <div className={cx('container')}>
                <div className={cx('icons')}>
                    <a
                        className={cx('icons-item')}
                        href="https://www.youtube.com/user/riotgamesinc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a
                        className={cx('icons-item')}
                        href="https://twitter.com/leagueoflegends"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        className={cx('icons-item')}
                        href="https://www.facebook.com/leagueoflegends"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        className={cx('icons-item')}
                        href="https://www.instagram.com/leagueoflegends/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        className={cx('icons-item')}
                        href="https://www.reddit.com/r/leagueoflegends/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faReddit} />
                    </a>
                </div>
                <a className={cx('logo')} href="https://www.riotgames.com/vi" target="_blank" rel="noreferrer">
                    <img src={logo.logoRiot} alt="Error" />
                </a>
                <p className={cx('copyright')}>
                    ™ & © 2023 Riot Games, Inc. League of Legends and all related logos, characters, names and
                    distinctive likenesses thereof are exclusive property of Riot Games, Inc. All Rights Reserved.
                </p>
                <div className={cx('legal')}>
                    <a
                        className={cx('legal-item')}
                        href="https://www.riotgames.com/en/privacy-notice"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Privacy notice
                    </a>
                    <a
                        className={cx('legal-item')}
                        href="https://www.riotgames.com/en/terms-of-service"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Terms of service
                    </a>
                    <a className={cx('legal-item')} href="https://hcmute.edu.vn" target="_blank" rel="noreferrer">
                        Cookie preferences
                    </a>
                </div>
                <div className={cx('rating')}>
                    <a
                        className={cx('rating-img')}
                        href="https://www.esrb.org/ratings-guide/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={na_esrb} alt="Error" />
                    </a>
                    <div className={cx('rating-text')}>
                        Blood
                        <br />
                        Fantasy Violence
                        <br />
                        Mild Suggestive Themes
                        <br />
                        Use of Alcohol and Tobacco
                        <br />
                        Online Interactions Not Rated by the ESRB
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
