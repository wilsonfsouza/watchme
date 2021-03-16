import '../styles/header.scss';

interface ContentProps {
    title: string;
}

const Header: React.FunctionComponent<ContentProps> = ({ title }) => {
    return (
        <header>
            <span className="category">Category:<span> {title}</span></span>
        </header>
    )
}

export default Header;