import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Background from "./Background";
import Logo from "../Images/headout.png";
import MobileApp from "../Images/mobile-app.gif";
import "../Styles/Header.css";

class Header extends Component {
  state = {
    experience: "",
  };
  // aşağıdaki olay; kaydırma işlemi için çalışır diyebiliriz. Örneğin kullanıcı sayfayı aşağıya kaydırdıktan sonra yeni bir sayfay geçtiği zaman sayfanın en üstüne otomatik  olarak kaydırılmasını sağlar Kısaca sayfa yüklendiğinde pencerenin en üstüne kaydırma işlemi sağlar
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  // aşağıdaki kodun amacı elimizdeki form elemanının değeri değiştikçe çağrılan bir fonksiyon ve bu fonksiyon sayesinde herhangi bir event(olay --> tuşa basma vs.) dan sonra bileşenin durumu güncellenir ve kullanıcın datası güncel olarak takip edilir. Kısaca güncel veri tutar
  changeExperience = (event) =>
    this.setState({ experience: event.target.value });

  // render kısmından sonra props objesinden belirli özellikleri içeri tanımlıyoruz.
  render() {
    const { backgroundImagesData, navigationData, selectedCity, histroy } =
      this.props;
    return (
      // arkadaşlar burada havalı bir şey öğreniyoruz :) Bildiğiniz üzere biz birden fazla eleaman kullandığınız zaman ya "div" ya da "<></>" yaparız ama artık elimizde başka bir seçenek var "React.Fragment" bilginiz olsun senior developer lar bu yapıyı daha çok kullanıyor.

      <React.Fragment>
        {/* HeaderNav bileşeni, sayfanın üst kısmındaki navigasyon ve arama bölümünü içeiyor*/}
        <HeaderNav
          changeExperience={this.changeExperience}
          experience={this.state.experience}
          histroy={histroy}
          selectedCity={selectedCity}
          navigationData={navigationData}
        />
        <Background backgroundImagesData={backgroundImagesData} />{" "}
        {/*bu yapı arka plan görüntüsü için kullanılıyor */}
        <div className="search-bar-div">
          <div className="select-city-large">
            <i className="fas fa-map-marker" />{" "}
            {/*Font awesome ikonlarını kullanmak için kullanıyoruz fas fa-map-market harita işaretleyicisi ikonunu belirler.*/}
            {/* Searchbar kısmı ana arama çubuğu kısmı içinde stil, histroy yani geçmiş aramalar ve kullanıcının sectiği şehirleri takip eden bileşen. */}
            <Searchbar
              style={customStyle}
              history={this.props.history}
              selectedCity={this.props.selectedCity}
            />
          </div>
          <div className="select-experience-large">
            <input
              type="text"
              placeholder="Search for experiences"
              onChange={this.changeExperience}
              value={this.state.experience}
            />
            <i className="fas fa-search" />
          </div>
          <button id="go"> Let's Go </button>
        </div>
      </React.Fragment>
    );
  }
}

// HeaderNav bileşeni sayfamızda yer alan navigasyon bölümü için kullanılıyor.
export class HeaderNav extends Component {
  static defaultProps = {
    navigationData: [
      {
        id: 1,
        name: "Headout Picks",
      },
      {
        id: 2,
        name: "Best Sellers",
      },
      {
        id: 3,
        name: "Abu Dhabi City Tours",
      },
      {
        id: 4,
        name: "Amsterdam Attractions",
      },
      {
        id: 5,
        name: "Burj Khalifa",
      },
    ],
  };
  // render methodumuz ile browser da görüntülemeyi sağlıyoruz !! Hatırlatma :)
  render() {
    const { navigationData } = this.props;
    return (
      <div className="header-wrap">
        <div className="header-wrapper navbar-fixed-top">
          <div className="header-left">
            <div className="nav">
              <div className="first-line">
                {/* bu kısım ; logo görünütüsü, şehir seçimi ve arama çubuğu kısmı yer alıyor */}
                <Link to={{ pathname: `/` }}>
                  <div>
                    <img id="logo" src={Logo} alt="Headout" />
                  </div>
                </Link>
                <div className="select-city">
                  <Searchbar
                    style={smallSearchbar}
                    history={this.props.history}
                    selectedCity={this.props.selectedCity}
                  />
                </div>
                <div className="select-experience">
                  <input
                    type="text"
                    placeholder="Search for experiences"
                    onChange={this.changeExperience}
                    value={this.props.experience}
                  />
                  <i className="fas fa-search" />
                </div>
              </div>
              <div className="second-line">
                <div className="best-picked">
                  {/*bu kısım navigasyon seçenekleri ni görüntülemek için kullanılıyor */}
                  {navigationData &&
                    navigationData.map(({ id, name }) => (
                      <p key={id}> {name} </p>
                    ))}
                </div>
                <div className="support">
                  {/* bu kısım dil ve destek seçeneği kısmımız */}
                  <p>
                    24/7 Support{" "}
                    <span className="arrow-down">
                      {" "}
                      <i className="fas fa-angle-down" />
                    </span>
                  </p>
                  <p
                    style={{
                      marginRight: "0px",
                    }}
                  >
                    English/USD
                    <span className="arrow-down"> </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="header-right">
              {/* bu kısmımızda indirme bağlantı kısmı ve kullanıcı adımızın görüntülendiği yer */}
              <a
                href="https://lastnamearya.github.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="sign-in">
                  {/* <i className= "fas fa-user-circle sign-in-user />" */}
                  <div className="lastnamearya-img">
                    <img
                      src="https://secure.gravatar.com/avatar/413b990ccd2cf5ba69d609fdba4f0302"
                      alt="lastnamearya"
                    />
                  </div>
                  <p style={{ color: "#ec1943", marginLeft: "5px" }}>
                    lastnamearya
                    <span className="arrow-down">
                      {" "}
                      <i className="fas fa-angle-down" />
                    </span>
                  </p>
                </div>
              </a>
              {/* uygulama indirme bağlantı kısmı */}
              <Link
                to={{ pathname: `/app` }}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="download-app">
                  <img src={MobileApp} id="mobile-app" alt="Download our App" />
                  <p style={{ color: "#24a1b2" }}>Download App</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const options = [
  { value: "new-york", label: "New York" },
  { value: "las-vegas", label: "Las Vegas" },
  { value: "rome", label: "Rome" },
  { value: "paris", label: "Paris" },
  { value: "london", label: "London" },
  { value: "dubai", label: "Dubai" },
  { value: "barcelona", label: "Barcelona" },
  { value: "madrid", label: "Madrid" },
  { value: "singapore", label: "Singapore" },
  { value: "venice", label: "Venice" },
  { value: "milan", label: "Milan" },
  { value: "naples", label: "Naples" },
  { value: "budapest", label: "Budapest" },
  { value: "edinburg", label: "Edinburg" },
  { value: "florence", label: "Florence" },
];

const customStyle = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    color: state.isSelected ? "red" : "#727272",
    padding: 10,
    cursor: "pointer",
    background: state.isSelected ? "white" : "white",
    fontSize: "13px",
    textAlign: "left",
    width: 120,
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '14px',
    marginTop: '10px',
    paddingLeft: '5px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

const smallSearchbar = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: 'none',
        color: state.isSelected ? 'red' : '#727272',
        padding: 10,
        cursor: 'pointer',
        background: state.isSelected ? 'white' : 'white',
        fontSize: '13px',
        textAlign: 'left',
        paddingLeft: '20px',
        width: 150
      }),
      control: () => ({
        width: 150,
        display: "flex",
        fontSize: "11px",
        marginLeft: "15px"
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return {... provided, opacity, transition }; 
      }
};


class Searchbar extends Component {
    state = {
        selectedOption: null
    };
    // bir şehir seçmemizi sağlayan kısım...
    handleChange = selectedOption => {
        // Aşağıda yapılan olay; kullanıcın seçtiği şehirleri bileşenin state kısmında tutan yer.
        this.setState({selectedOption: selectedOption});
        // burada url kısmımız tabi ki seçilen şehre göre güncelleniyor.
        this.changeUrl(selectedOption.value);
    };
    // kullanıcı şehrini seçiyor ve ona göre aşağıda yazılan url kısmına gidiyor. Belki sorabilirsiniz neden history kullandık ? this.props.history url ve geçmiş yönetimi sağlar eğer kullanmasaydık url güncellemesi yapmayacaktı
    changeUrl = url => {
        this.props.history.push(`/cities/${url}`);
    };

    render() {
        const { selectedOption} = this.state;
        const { selectedCity } = this.props;
        if (selectedCity) {
            return (
                <Select
                styles={this.props.style}
                placeholder={selectedCity}
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                className="city-select-dropdown"/>
            );
        } else {
            return (
                <Select
                  styles={this.props.style}
                  placeholder="Select City"
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                  className="city-select-dropdown"
                />
              );
        }
    }
}


export default Header;