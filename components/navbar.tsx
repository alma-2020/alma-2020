import React, { 
    FC,
    useEffect, 
    useState,
} from 'react'
import Link from 'next/link'
import { 
    NavbarDiv, 
    OpenMenuButton, 
    CloseMenuButton,
    Menu,
    MobileMenuDiv,
    DesktopMenuDiv,
    Overlay,
} from '../styles/navbarStyles'

const Navbar: FC = () => {
    return (
        <NavbarDiv>
            <Link href="/">
                <a className="title">
                    A COOL BLOG
                </a>
            </Link>

            <MobileMenu />
            <DesktopMenu />
        </NavbarDiv>
    );
};

const MobileMenu: FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    useEffect(() => {
        if (typeof document === 'undefined')
            return;

        if (isSidebarOpen) {
            // block scroll while the modal is open and set a margin on the 
            // page with the same width as the scrollbar so that the content 
            // doesn't jump around when the scrollbar appears/disappears 

            let marginRightPx = 0;
            if (window.getComputedStyle) {
                const bodyStyle = window.getComputedStyle(document.body);
                if (bodyStyle) {
                    marginRightPx = parseInt(bodyStyle.marginRight, 10);
                }
            }

            let scrollbarWidthPx = window.innerWidth - document.body.clientWidth;
            Object.assign(document.body.style, {
                overflowY: 'hidden',
                marginRight: `${marginRightPx + scrollbarWidthPx}px`,
            });
        }
        else {
            Object.assign(document.body.style, {
                overflowY: 'unset',
                marginRight: `0px`,
            });
        }
    }, [isSidebarOpen]);

    return (
        <MobileMenuDiv>
            <OpenMenuButton
                onClick={() => setIsSidebarOpen(true)}
            >
                MENU
            </OpenMenuButton>
        
            <Menu isOpen={isSidebarOpen}>
                <CloseMenuButton
                    onClick={() => setIsSidebarOpen(false)}
                >
                    X
                </CloseMenuButton>
            </Menu>

            <Overlay show={isSidebarOpen} />
        </MobileMenuDiv>
    );
};

const DesktopMenu: FC = () => {
    return (
        <DesktopMenuDiv>
            <p>Imagine um menu legal aqui</p>
        </DesktopMenuDiv>
    );
};

export default Navbar;