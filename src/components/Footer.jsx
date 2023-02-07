import React from 'react';

import "../styles.css";

function Footer() {
    return <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>;
}

export default Footer;