import React, { Component } from "react";
import Select from "react-select"; // bu kütüphane sayesinde kullanıcı için çoklu menü veya açılabilir bir menü yapabiliriz.
// option kısmı react-select kütüphanesi eklenmeden bir şey ifade etmiyor.
const options = [
  { value: "New York", label: "New York" },
  { value: "Las Vegas", label: "Las Vegas" },
  { value: "Rome", label: "Rome" },
  { value: "Paris", label: "Paris" },
  { value: "London", label: "London" },
  { value: "Dubai", label: "Dubai" },
  { value: "Barcelona", label: "Barcelona" },
  { value: "Madrid", label: "Madrid" },
  { value: "Singapore", label: "Singapore" },
  { value: "Venice", label: "Venice" },
  { value: "Milan", label: "Milan" },
  { value: "Naples", label: "Naples" },
  { value: "Budapest", label: "Budapest" },
  { value: "Edinburg", label: "Edinburg" },
  { value: "Florence", label: "Florence" },
];

// options ile değer ve etiketleri oluşturuduktan sonra bu etiketlerin görünüş biçimini aşağıda belirliyoruz.
// görünümü özelleştirmek için iki tane parametre veriyoruz. provided nesnesi varsayılan özellikleri kapsıyor.
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none", // seçenekler arasındaki alt çizgileri kaldırır.
    color: state.isSelected ? "red" : "#727272", // eğer seçenek seçili ise kırmızı değil ise gri ye benzer bir ton yapacaktır
    padding: 10,
    cursor: "pointer", // seçenek üstüne geldiği zaman fare imlecinin şeklini gösteriyor. başka örnek imleç şekli cursor: crosshair;
    background: state.isSelected ? "white" : "white",
    fonstSize: "13px",
    textAlign: "left",
    paddingLeft: "20px",
    width: 150,
  }),
  // aşağı daki yapı ana kontrol kısmımız diyebiliriz.
  control: () => ({
    width: 150,
    display: "flex",
    marginTop: "10px",
    marginLeft: "30px",
    fontSize: "14px",
  }),
  // aşağıdaki yapı ise seçim kutumuzda sadece yalnızca bir değer gösterildiğinde aşağıda belirlediğimiz özellikler devreye girer.
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

// bu arada yukarıdaki singleValue, Control gibi isimler standar kullanılan isimlerdir.
// aşağıda Searchbar class isimli bir component oluşturuyoruz.
// aşağıdaki Searchbar class komponenti kullanıcının yazdığı değeri temsil ediyor. Yani kullanıcının yazdığı değeri tutar.
class Searchbar extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption }); // gördüğümüz üzere yukarıda biz herhangi bir useState hook u eklemedik ama burada "setState adlı bir yapı var. Bunun sebebine bakalım. Component isimli bileşenlerde bu şekilde kullanbiliyoruz ama fonksiyonel bileşenler de ise tabiki de useState i önceden tanımlamamız lazım."
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="search-bar">
        <div className="select-city-large">
          <div className="select-div">
            <Select
              styles={customStyles}
              placeholder="Select City"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="select-experience-large"/>
        <button id="go" >Let's Go</button>
      </div>
    );
  }
}

export default Searchbar;


// eğer içinde komponent oluşturmak istemiyoruz o zaman ;
// "class Searchbar extends Component " sil daha sonra aşağıdaki kodları ekle;

// const Searchbar = () => {
//     const [selectedOption, setSelectedOption] = useState(null);

// **  
//     const handleChange = selectedOption => {
//       setSelectedOption(selectedOption);
//     };
// **

//  Daha sonra render kısmını sil ve render() yerine return() yapısını ekle.


