import React from 'react';

const FooterTopCol = (props) => {
    return (
        <div className="col">
            <h6 className="text-primary footer-h6">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled">
                 {
                     props.menuItems.map((item, index) => <li className="footerTopLink" key={index}><a  href={item.link} className="text-secondary">{item.name}</a></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterTopCol;