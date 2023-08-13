import styles from './HeaderItem.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderItem({ link, popupItems, tabletResponsive, path, hideOnSearch, children }) {
    return (
        <div className={cx('wrapper', { link, tabletResponsive, hideOnSearch })}>
            {popupItems ? (
                <Tippy
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
                                                showOnSearch: item.showOnSearch,
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
                    <Link className={cx('content')} to={path}>
                        {children}
                        {(popupItems && <FontAwesomeIcon className={cx('icon')} icon={faCaretDown} />) ||
                            (link && <FontAwesomeIcon className={cx('icon')} icon={faUpRightFromSquare} />)}
                    </Link>
                </Tippy>
            ) : (
                <Link className={cx('content')} to={path}>
                    {children}
                    {(popupItems && <FontAwesomeIcon className={cx('icon')} icon={faCaretDown} />) ||
                        (link && <FontAwesomeIcon className={cx('icon')} icon={faUpRightFromSquare} />)}
                </Link>
            )}
        </div>
    );
}

HeaderItem.propTypes = {
    link: PropTypes.bool,
    popupItems: PropTypes.array,
    tabletResponsive: PropTypes.bool,
    hideOnSearch: PropTypes.bool,
    path: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default HeaderItem;
