import Highlights from '../../components/Champions/Highlights';
import Search from '../../components/Champions/Search';
import FooterVideo from '../../components/FooterVideo';
import { Fragment } from 'react';

function Champions() {
    return (
        <Fragment>
            <Highlights />
            <Search />
            <FooterVideo />
        </Fragment>
    );
}

export default Champions;
