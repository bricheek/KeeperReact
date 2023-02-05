//import './src/styles.css';

function Footer() {
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return <footer>Copyright Brian Cheek {year}.</footer>;
}

export default Footer;