// lottiefiles sayesinde loading ekranını içerisindeki gifi oluşturdum
import { Player } from "@lottiefiles/react-lottie-player";
// react'te özgü olan useEffect ve useState import ediyoruz
import { useEffect, useState } from "react";
// img componentini import ediyorum
import Img from "./components/Img";
// react icons içerisindeki iconları import ediyorum tema butonunda kullanıyorum
import { FaSun, FaMoon } from "react-icons/fa";

export default function App() {
  // tema değiştirmek için ve img src sini tutmak için stateler oluşturdum
  const [imgSrc, setImgSrc] = useState("./assets/images/img13.webp");
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("ymDark")) ?? false
  );

  // tema değiştirmek için fonksiyon oluşturdum
  const darkModeHanddle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("ymDark", !darkMode);

    !darkMode ? (document.body.className = "dark") : (document.body.className = "light");
  };

  // sayfa render edilince çalışıcak fonskiyon
  useEffect(() => {
    // sayfa renderlenince darkMode statesi true ise sayfa koyu tema yapılıyor
    darkMode ? (document.body.className = "dark") : (document.body.className = "light");
    const loadingScreen = document.querySelector("#loadingScreen");
    const mainSection = document.querySelector(".main-section");
    const headerText = document.querySelector(".header-text");
    // sayfa yüklendiğinde loading ekranı açılıyor ve 3sn sonra gizleniyor
    window.addEventListener("load", () => {
      setTimeout(() => {
        mainSection.classList.add("active");
        headerText.classList.add("active");
      }, 2400);
    });

    setTimeout(() => {
      loadingScreen.classList.add("disable");
      loadingScreen.remove();
    }, 2400);
  }, []);

  // burası ssayfamızın renderlendiği yer
  return (
    <div className='w-full bg-light h-full text-dark dark:bg-dark overflow-auto'>
      {/* Sayfa renderleninice başlatılan ve sorna gizlenen element */}
      <div
        id='loadingScreen'
        className='absolute dark:bg-dark bg-light w-full h-full flex justify-center items-center inset-0'>
        <Player
          autoplay
          loop
          src='https://assets8.lottiefiles.com/temp/lf20_jIG9zu.json'
          style={{ height: "400px", width: "400px" }}></Player>
      </div>
      <div className='h-full justify-between items-center flex flex-col dark:bg-dark'>
        {/* Yazılımcı mekanı header text */}
        <div className='header-text mt-6 relative hidden flex-col items-center justify-center w-full'>
          <h1 className='name-animate text-5xl relative font-bold select-none flex top-5 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-5xl'>
            <span>Y</span>
            <span>a</span>
            <span>z</span>
            <span>ı</span>
            <span>l</span>
            <span>ı</span>
            <span>m</span>
            <span>c</span>
            <span className='b'>ı</span>
            <span>M</span>
            <span>e</span>
            <span>k</span>
            <span>a</span>
            <span>n</span>
            <span>ı</span>
          </h1>
          <p className='mt-5 dark:text-light/80'>Lütfen çarktan bir resime tıklayın :)</p>
          <button
            onClick={() => darkModeHanddle()}
            className='dark-mode absolute dark:text-light right-10 text-2xl'>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        {/* resimlerimizin bulunduğu ana element */}
        <div className='main-section items-center container hidden w-full flex-1 gap-10 dark:bg-dark'>
          {/* büyük resim */}
          <div className='big-img w-full flex-1 flex justify-center items-center py-16'>
            <div className='img-container relative overflow-hidden rounded-sm'>
              <img className='object-cover w-full h-full' src={imgSrc} alt='' />
              <div className='absolute w-full h-20 bg bg-dark/60 text-light z-10 bottom-0 flex items-center px-5 justify-between font-medium'>
                <h1>Tasarımcı: Mark Rise</h1>
                <h1>Tarih: 03/18/1999</h1>
              </div>
            </div>
          </div>
          {/* resimlerin bulunduğu çark */}
          <div className='flex-0 2xl:flex-1 xl:flex-1 lg:flex-0 md:flex-0 sm:flex-0 md:h-[700px] flex justify-center items-center overflow-hidden'>
            <div className='ellipse ellipse-1 relative'>
              <Img setImgSrc={setImgSrc} src='./assets/images/img1.webp' />
              <Img setImgSrc={setImgSrc} src='./assets/images/img2.webp' />
              <Img setImgSrc={setImgSrc} src='./assets/images/img3.webp' />
              <Img setImgSrc={setImgSrc} src='./assets/images/img4.webp' />
              <div className='ellipse ellipse-2'>
                <Img setImgSrc={setImgSrc} src='./assets/images/img5.webp' />
                <Img setImgSrc={setImgSrc} src='./assets/images/img6.webp' />
                <Img setImgSrc={setImgSrc} src='./assets/images/img7.webp' />
                <Img setImgSrc={setImgSrc} src='./assets/images/img8.webp' />
                <div className='ellipse ellipse-3'>
                  <Img setImgSrc={setImgSrc} src='./assets/images/img9.webp' />
                  <Img setImgSrc={setImgSrc} src='./assets/images/img10.webp' />
                  <Img setImgSrc={setImgSrc} src='./assets/images/img11.webp' />
                  <Img setImgSrc={setImgSrc} src='./assets/images/img12.webp' />
                  <div className='ellipse ellipse-4'>
                    <Img setImgSrc={setImgSrc} src='./assets/images/img13.webp' />
                    <Img setImgSrc={setImgSrc} src='./assets/images/img14.webp' />
                    <Img setImgSrc={setImgSrc} src='./assets/images/img15.webp' />
                    <Img setImgSrc={setImgSrc} src='./assets/images/img16.webp' />
                    <div className='ellipse ellipse-5'>
                      <Img setImgSrc={setImgSrc} src='./assets/images/img17.webp' />
                      <Img setImgSrc={setImgSrc} src='./assets/images/img18.webp' />
                      <Img setImgSrc={setImgSrc} src='./assets/images/img19.webp' />
                      <Img setImgSrc={setImgSrc} src='./assets/images/img20.webp' />
                      {/* çarkın ortasındaki animasyon */}
                      <Player
                        autoplay
                        loop
                        src='https://assets8.lottiefiles.com/datafiles/B1zOc97lUJINcA2/data.json'
                        style={{ height: "100px", width: "100px" }}></Player>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
