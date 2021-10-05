import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <h1> {title} John</h1>
            
        </header>
    )
}

Header.defaultProps = {
    title : 'Facebook messenger'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// inline css styling

// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
