import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/imgs/logo-en-us.png';
import Button from '../../Button';
import SliderItem from './SliderItem/SliderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const news = [
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9542bf1619f1fb75/64c2f635c26b1a57fdc0ccd7/TFT_13_15_Banners.jpg?quality=90&crop=1%3A1&width=720',
        label: 'cập nhật trò chơi',
        title: 'đấu trường chân lý - thông tin bản cập nhật 13.15',
        content:
            'Bản cập nhật 13.15 sẽ mang tới một Cổng Dịch Chuyển Khu Vực mới, Đại Sảnh Cửu Trụ, bản làm lại của Sa Mạc Lưu Động và Piltover CŨNG NHƯ một vài cập nhật cân bằng nhỏ. Xin lưu ý, đây là bản cập nhật cuối cùng mà Tinh Võ Đấu Trường và Sàn Đấu Choncc còn hoạt động, vậy nên hãy nhớ hoàn thành vé sự kiện nhé!',
    },
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc897fdbf35b82952/64c17a667b7f98fe3b9ff44d/00HeaderJhin.jpg?quality=90&crop=1%3A1&width=720',
        label: 'đội ngũ phát triển',
        title: 'TÓM TẮT: cập nhật giữa năm từ đội ngũ phát triển',
        content: 'Tóm tắt ngắn gọn về các cập nhật từ Riot Brightmoon và Meddler.',
    },
    {
        img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta48b9e50d325e94c/64be11201add4db8a8fbbb86/Soul-Fighter-Samira---Final.jpg?quality=90&crop=1%3A1&width=720',
        label: 'cập nhật trò chơi',
        title: 'hướng dẫn cosplay tinh võ sư: vòng 1',
        content: 'Hóa thân vào Linh Hồn của những Võ Sư ngày bằng trang phục cosplay của bạn!',
    },
];

function Slider() {
    useEffect(() => {
        const slider = document.getElementById(cx('tablet-slider'));
        let isDragging = false;

        slider.addEventListener('mousedown', () => {
            isDragging = true;
        });

        slider.addEventListener('mouseleave', () => {
            isDragging = false;
            slider.style.transform = 'translateX(0)';
        });

        slider.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const sl = slider.scrollLeft;
                slider.scrollLeft -= e.movementX / 3;
                if (slider.scrollLeft === 0 || slider.scrollLeft === sl) {
                    slider.style.transform = `translateX(${e.movementX * 50}px)`;
                }
            }
        });

        slider.addEventListener('mouseup', () => {
            isDragging = false;
            slider.style.transform = 'translateX(0)';
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('blur-video')}>
                <video className={cx('hideOnMobile')} autoPlay muted loop>
                    <source
                        src="https://www.leagueoflegends.com/static/hero-blurred-7572101a2ce5e003b66483b7fe5c5d36.webm"
                        type="video/webm"
                    />
                </video>
                <video className={cx('mobile-video')} autoPlay muted loop>
                    <source
                        src="https://www.leagueoflegends.com/static/hero-mobile-5e6cfa76937624c2bad0db07f9839fcc.webm"
                        type="video/webm"
                    />
                </video>
            </div>
            <div className={cx('main-video', 'hideOnMobile')}>
                <div className={cx('main-video-container')}>
                    <video autoPlay muted loop>
                        <source
                            src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
                            type="video/webm"
                        />
                    </video>
                    <div className={cx('main-video-bounding')}></div>
                    <div className={cx('test')}></div>
                </div>
            </div>
            <div className={cx('logo')}>
                <div className={cx('logo-img')}>
                    <img src={logo} alt="LeagueOfLegend" />
                </div>
                <Button big blue>
                    PLAY FOR FREE
                </Button>
            </div>
            <div className={cx('news')}>
                <div className={cx('news-content')}>
                    <div className={cx('news-title')}>
                        <h4>
                            TIN TỨC TIÊU BIỂU <FontAwesomeIcon icon={faMinus} />
                        </h4>
                    </div>
                    <div id={cx('tablet-slider')} className={cx('news-items')}>
                        {news.map((item, index) => {
                            return (
                                <SliderItem
                                    key={index}
                                    img={item.img}
                                    label={item.label}
                                    title={item.title}
                                    content={item.content}
                                ></SliderItem>
                            );
                        })}
                    </div>
                    <div className={cx('news-items', 'pc-slider')}>
                        {news.map((item, index) => {
                            return (
                                <SliderItem
                                    key={index}
                                    img={item.img}
                                    label={item.label}
                                    title={item.title}
                                    content={item.content}
                                ></SliderItem>
                            );
                        })}
                    </div>
                    <div className={cx('news-btn')}>
                        <button>
                            XEM TẤT CẢ
                            <FontAwesomeIcon className={cx('news-btn-icon')} icon={faHandPointRight}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
