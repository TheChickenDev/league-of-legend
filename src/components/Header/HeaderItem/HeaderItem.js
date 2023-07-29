import styles from './HeaderItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function HeaderItem({ link, popupItems, tabletResponsive, children }) {
    const TagName = popupItems ? HeadlessTippy : Fragment;

    return (
        <div className={cx('wrapper', { link, tabletResponsive })}>
            <TagName
                interactive
                placement="bottom-start"
                render={() => (
                    <div className={cx('popup')} tabIndex="-1">
                        {popupItems &&
                            popupItems.map((item, index) => {
                                return (
                                    <Link
                                        className={cx('item-child', {
                                            hideOnSmallPC: item.hideOnSmallPC,
                                            hideOnTablet: item.hideOnTablet,
                                        })}
                                        key={index}
                                        to={item.path}
                                    >
                                        {item.title}
                                        {item.icon && (
                                            <FontAwesomeIcon
                                                className={cx('item-child-icon')}
                                                icon={faUpRightFromSquare}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                    </div>
                )}
            >
                <Link className={cx('content')}>
                    {children}
                    {(popupItems && <FontAwesomeIcon className={cx('icon')} icon={faCaretDown} />) ||
                        (link && <FontAwesomeIcon className={cx('icon')} icon={faUpRightFromSquare} />)}
                </Link>
            </TagName>
        </div>
    );
}

export default HeaderItem;
