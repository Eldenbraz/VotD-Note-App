import React from 'react'
import Head from 'next/head'
import Header from './src/header'
import Image from 'next/image'

const img_addr = ["/AscendantPlane.png","/BlackGarden.png","/BlackHeart.png","/Commune.png","/Darkness.png",
                "/Drink.png","/Earth.png","/Enter.png","/Fleet.png","/Give.png",
                "/Grieve.png","/Guardian.png","/Hive.png","/Kill.png","/Light.png",
                "/Love.png","/Pyramid.png","/Savathun.png","/Scorn.png","/Stop.png",
                "/Tower.png","/Traveler.png","/Witness.png","/Worm.png","/Worship.png"];

const symbols_en = ["Ascendant Plane","Black Garden","Black Heart","Commune","Darkness",
                "Drink","Earth","Enter","Fleet","Give",
                "Grieve","Guardian","Hive","Kill","Light",
                "Love","Pyramid","Savathun","Scorn","Stop",
                "Tower","Traveler","Witness","Worm","Worship"];

const symbols_fr = ["Plan Ascendant","Jardin (noir)","Coeur Noir","Communion","Darkness",
                "Coupe","Terre","Entrée","Flotte","Don",
                "Grief","Gardien","Ruche","Kill","Light",
                "Amour","Pyramide","Savathun","Infâmes","Stop",
                "Tour","Voyageur","Witness","Ver","Prière"];

var chosen = [];

export default function Home() {
    const blurSelected = (param) => {
      var current = document.getElementById(param)
      console.log(current.src)
      if (current.src == "http://localhost:3000/ChosenCard.png") {
        current.src = img_addr[param];
        for (var g = 0; g < 25; g++) {
          if (chosen[g] === param)
            chosen.splice(g, 1)
        }
      } else {
        current.src = "/ChosenCard.png";
        chosen.push(param)
      }
    }

    const resetCards = () => {
      for (var y = 0; y < 25; y++) {
        var card = document.getElementById(y)
        card.src = img_addr[y];
        chosen = [];
      }
    }
  return (
    <div className="container">
      <Head>
        <title>In despite of</title>
        <link rel="icon" href="/votd.png"/>
      </Head>

      <Header/>

      <div>
        {/* <div className="title_desc">
          <p className="title">
            Pick your symbols
          </p>
        </div> */}
        <div className="title_desc" onClick={() => resetCards()}>
          <p className="title">Reset!</p>
        </div>
      </div>
    
    <main>
        <div className="icon_grid">
            <img id = "0" src="/AscendantPlane.png" onClick={() => blurSelected('0')}/>
            <img id = "1" src="/BlackGarden.png" onClick={() => blurSelected("1")}/>
            <img id = "2" src="/BlackHeart.png" onClick={() => blurSelected("2")}/>
            <img id = "3" src="/Commune.png" onClick={() => blurSelected("3")}/>
            <img id = "4" src="/Darkness.png" onClick={() => blurSelected("4")}/>
            <img id = "5" src="/Drink.png" onClick={() => blurSelected("5")}/>
            <img id = "6" src="/Earth.png" onClick={() => blurSelected("6")}/>
            <img id = "7" src="/Enter.png" onClick={() => blurSelected("7")}/>
            <img id = "8" src="/Fleet.png" onClick={() => blurSelected("8")}/>
            <img id = "9" src="/Give.png" onClick={() => blurSelected("9")}/>
            <img id = "10" src="/Grieve.png" onClick={() => blurSelected("10")}/>
            <img id = "11" src="/Guardian.png" onClick={() => blurSelected("11")}/>
            <img id = "12" src="/Hive.png" onClick={() => blurSelected("12")}/>
            <img id = "13" src="/Kill.png" onClick={() => blurSelected("13")}/>
            <img id = "14" src="/Light.png" onClick={() => blurSelected("14")}/>
            <img id = "15" src="/Love.png" onClick={() => blurSelected("15")}/>
            <img id = "16" src="/Pyramid.png" onClick={() => blurSelected("16")}/>
            <img id = "17" src="/Savathun.png" onClick={() => blurSelected("17")}/>
            <img id = "18" src="/Scorn.png" onClick={() => blurSelected("18")}/>
            <img id = "19" src="/Stop.png" onClick={() => blurSelected("19")}/>
            <img id = "20" src="/Tower.png" onClick={() => blurSelected("20")}/>
            <img id = "21" src="/Traveler.png" onClick={() => blurSelected("21")}/>
            <img id = "22" src="/Witness.png" onClick={() => blurSelected("22")}/>
            <img id = "23" src="/Worm.png" onClick={() => blurSelected("23")}/>
            <img id = "24" src="/Worship.png" onClick={() => blurSelected("24")}/>

        </div>
    </main>

    <footer>
        <div>Website Credits: <b>Eldenbraz</b> / Icons credit: <b>@kittystarkkreactions</b></div>{/* <img src="/Engrenage.png" alt="Engrenanges" className="logo" /> */}
      </footer>
    </div>
  )
}
