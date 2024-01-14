import React from 'react';
import { HeaderNav } from './Header/index';
import Download from "./Download";
import TopCities from "./TopCities";
import Footer from "./footer";

class AppStore extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    } //sayfanın yüklenmesi (didMount olması) veya bir yönlendirme sonrasında kullanıcının sayfanın en üstüne otomatik olarak kaydırılması için yazdığımız bir fonksiyon.

    render(){
        return(
            <div
                style={{
                    textAlign: "center",
                }}
            >
                <HeaderNav />
                <div style={{paddingTop: '110px'}}>
                    <Download />
                </div>
                <TopCities />
                <Footer />
            </div>
        )
    }
}

//NOT: Bu bir functional component değil, class based component. functional'daki mantık: prop --> component'ın function'ı --> JSX şeklinde. Class based component'ta mantık: prop --> constructor'ı --> render() --> JSX şeklinde. Functional component'ta state yönetimi hook'larla çözüldüğü için class baset component'lar artık kullanılmıyor. 
