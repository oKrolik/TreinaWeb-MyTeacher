import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/images/myteacher.png"/>
            </div>
            <p>Find the perfect teacher!</p>
        </HeaderContainer>
    )
}

export default Header;