import React, {Component} from "react";
import Slider from 'react-slick'; // bu komponentin amacı resim,slayt vb. yapıları içerikleri döndürmek(Dikey ve yatay olarak) ve bunlar arasında gezinemizi sağlar. Bu yapıyı tabi ki de install yapmamız lazım --->npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/background.css';
// import kısmında .css dosyaları her zaman aşağıya yazılır.
// bu komponent de gördüğünüz üzere iki tane yapı var. Bunlar "React.Component" ve "Component" React.Component daha çok  react bileşenin temelini oluşturuyor. render vs. yapılar yer alır. .Component ise temel bir sınıftır. Daha basit yapılar buraya yazılır 
class BackgroundCaraousel extends React.Component {
    render() {
        var settings = {
            dots: true, // bu ve aşağıdaki yapılar react-slick e ait dots sayfada nokta gösterir ve bu noktaya tıklayarak diğer sayfalara geçiş yaparız.
            fade: true, // sayfalar arası geçişi yumuşatır veya varsayılan olarak kaydırır
            infinite: true, // önemli bir yapı true olursa son slayta geldiğiniz zaman ilk slayta geri döner bir nevi sonsuz döngü  gibi ama false yaparsak son slayta geldiği zaman durur
            speed: 3000, // Geçiş hızını ayarları 3000 = 3 saniye  ye eşittir
            slidesToShow: 1, // Ekranda göreceğimiz slayt sayısını belirleriz
            slidesToScroll: 1, // Bir kaydırma yaptığımız zaman kaç slayt ın geçiceğini bize söyler
            autoplay: true, // otomatik oynatma için kullanıyoruz
            autoplaySpeed: 3000 // otomatik oynatma hızı
        };

        const {backgroundImagesData} = this.props; //  bu yapıda props kullanarak ve bağlayarak bu componentde "vackgroundImagesData" yapısına hızlıca ulaşmamızı sağlıyoruz.


        // burada yaptığımız olaya baktığımız zaman; slider bileşeni settings objesinin datalarını kopyalıyor. Onun bir alt satırında eğer backgroundImagesData var ise döndürür yok ise orayı atlıyor. map içinde id ve url oluşturulmuş. key prop u sayesinde her öge için farklı id oluşturuluyor.
        return (
            <div className="slider-div">
                <Slider {...settings}>
                    {backgroundImagesData && 
                      backgroundImagesData.map(({id, url}) => (
                        <BackgroundImageDiv key = {id} url = {url} />
                      ))}
                </Slider>
            </div>
        );
    }

}
// bir komponentin içinde küçük bir component oluşturmak için "component" bileşenini import ediyoruz. Daha sonra bunun sınıf olduğunu belirtmek için "class" yazmayı da unutmuyoruz tabi ki! 
class BackgroundImageDiv extends Component {
    render() {
        const url = `url(${this.props.url})`; // this.props.url kısmının açıklamasını yaparsak eğer yukarıda BackgroundImagesData kısmında id ve url üretilip bunun dinamik hale gelmesi için render kısmına yazarız. Eğer .Component i kullanmak istemessek tek bir react.Component de birleştirmek istersek örnek kod aşağıda yazacak.(Yorum satırı içinde)
        return (
            <div
            className="background-image-div"
            style={{
                backgroundImage: url
            }}
            />
        );
    }
}


export default BackgroundCaraousel;



// backgroundImagesData.map(({ id, url }) => (
//     <div key={id} className="background-image-div" style={{ backgroundImage: `url(${url})` }} />
//   ))}