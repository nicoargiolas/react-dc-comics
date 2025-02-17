import List from "./List.jsx";

const dcComics = ["DC COMICS", "Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"];
const shop = ["SHOP", "Shop DC", "Shop DC Collectibles"];
const dc = ["DC", "Terms Of Use", "Privacy Policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];
const sites = ["SITES", "DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];


export default function Header() {
    return <footer>
        <div className="footer-menu">
            <div className="container">
                <div className="footer-menu-col">
                    {List(dcComics)}
                    {List(shop)}
                </div>
                <div className="footer-menu-col">
                    {List(dc)}
                </div>
                <div className="footer-menu-col">
                    {List(sites)}
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="sign-up"> <span> SIGN-UP NOW! </span> </div>
                <div className="follow-us">
                    <span> FOLLOW US </span>
                    <img src="../../public/img/footer-facebook.png" alt="" />
                    <img src="../../public/img/footer-twitter.png" alt="" />
                    <img src="../../public/img/footer-youtube.png" alt="" />
                    <img src="../../public/img/footer-pinterest.png" alt="" />
                    <img src="../../public/img/footer-periscope.png" alt="" />
                </div>
            </div>
        </div>
    </footer>
}