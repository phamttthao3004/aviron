import React from 'react';

const Footer = function() {
    return (
        <footer>
            <div className="container">
                <div className="top col-md-12">
                    <img className="logo" src="/images/user/Logo-2.png" alt="Aviron logo" />
                    <ul className="social">
                        <li>
                            <a href="https://avironactive.com/">
                                <i className=" icon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://avironactive.com/">
                                <i className=" icon-gplus" />
                            </a>
                        </li>
                        <li>
                            <a href="https://avironactive.com/">
                                <i className=" icon-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://avironactive.com/">
                                <i className=" icon-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://avironactive.com/">
                                <i className=" icon-facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="end col-md-12">2019 © Power by Aviron Interactive Inc.</div>
            </div>
        </footer>
    );
};

export default Footer;
