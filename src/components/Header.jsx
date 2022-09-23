
import styled from "styled-components";


const Header = (props) => {
    return (
       <Nav>
              <Logo src="/images/logo.svg" />
                <NavMenu>
                    <a>
                        <img src="/images/home-icon.svg" />
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg" />
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg" />
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src="/images/original-icon.svg" />
                        <span>ORIGINALS</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg" />
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg" />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImg src="/images/IMG_20210326_170000.jpg" />
                <Login>Login</Login>
       </Nav>
    );
    }
const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
    `;
const Logo = styled.img`
    width: 80px;
    `;
const NavMenu = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px;
    margin: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
  
    }
   
       
    @media (max-width: 768px) {
        display: none;
    }
    `;
    const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
    `;
    const UserImg = styled.img`
    height: 100%;
    `;

    export default Header;