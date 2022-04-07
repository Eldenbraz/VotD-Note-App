import React, { useEffect, useState } from 'react'
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
var buffer_obk_1 = [];
var match1 = []; 
var match2 = [];
var langu = "en";

export default function Home() {
    const [obelisks, setObelisks] = useState(false);
    const [matching, setMatching] = useState(false);

    const blurSelected = (param) => {
      if (!obelisks && !matching)
        return;
      var current = document.getElementById(param)
      if (current.src == "http://localhost:3000/ChosenCard.png") {
        current.src = img_addr[param];
        for (var g = 0; g < 25; g++) {
          if (chosen[g] === param)
          chosen.splice(g, 1)
        }
      } else {
        if (chosen.length >= 3)
          return;
        current.src = "/ChosenCard.png";
        chosen.push(param)
      }
      displaySelected();
    }

    const resetCards = () => {
      for (var y = 0; y < 25; y++) {
        var card = document.getElementById(y)
        card.src = img_addr[y];
        chosen = [];
      }
      for (var x = 0; x < 3; x++) {
        var obk = document.getElementById("chosen_"+(x+1))
        var obk_name = document.getElementById("name_obk_"+(x+1))
        obk.src = "/ChosenCard.png"
        obk_name.textContent = '?'
      }
    }

    const displaySelected = () => {
      for (var t = 0; t < 3; t++) {
        var obk_nb = document.getElementById("chosen_"+(t+1))
        var obk_name = document.getElementById("name_obk_"+(t+1))
        if (t < chosen.length) {
          obk_nb.src = img_addr[parseInt(chosen[t])];
          obk_name.textContent = symbols_en[chosen[t]];
        } else {
          obk_nb.src = "/ChosenCard.png";
          obk_name.textContent = '?';
        }
      }
    }

    const saveObk = () => {
      buffer_obk_1 = chosen;
      resetCards();
    }

    const setEncounter = (param) => {
      if (param == 1) {
        setObelisks(true);
        setMatching(false);
      } else if (param == 2) {
        setMatching(true);
        setObelisks(false);
      }
    }

    const obeliskFct = () => {
      return (
        <div>
          <p id = "name_obk_1" className = "obk_name">?</p>
          <p id = "name_obk_2" className = "obk_name">?</p>
          <p id = "name_obk_3" className = "obk_name">?</p>

          <div className="trapezoid">
               <img id = "chosen_1" src = "/ChosenCard.png" className="elem_trap"/>
               <img id = "chosen_2" src = "/ChosenCard.png" className="elem_trap"/>
               <img id = "chosen_3" src = "/ChosenCard.png" className="elem_trap"/>
               <div className="save_bt" onClick={() => saveObk()}>
                 <p>Save</p>
               </div>
           </div>
        </div>
      )
    }

    const matchingFct = () => {
      return (
        <div className="matchClass">
          <h1 style={{marginTop:"13%"}}>Chose 3 and hit "Send"</h1>
          <p id="match1" className="matchElem">?</p>
          <p id="match2" className="matchElem">?</p>
          <p id="match3" className="matchElem">?</p>
          <div className="save_bt" onClick={() => sendMatch()}>
            <p style={{paddingTop:"5%"}}>Send</p>
          </div>
        </div>
      )
    }

  return (
    <div className="container">
      <Head>
        <title>From the Heavens</title>
        <link rel="icon" href="/votd.png"/>
      </Head>

      <Header/>

      <div>
        <div className="title_desc" onClick={() => resetCards()}>
          <p className="title">Reset!</p>
        </div>
        <div style={{display: "flex", marginTop: "10px"}}>
          <div className="type_bt" onClick={() => setEncounter("1")}>
            <p>Obelisk (p1, p2)</p>
          </div>
          <div className="type_bt" style={{marginLeft: "80px"}} onClick={() => setEncounter("2")}>
            <p>Matching (p3, p4)</p>
          </div>
        </div>
      </div>
    
    <main>
        {/* <div>
          <div className="showSave_bt" onClick={() => showSaved()}>
            <p>Show saved</p>
          </div>
        </div> */}
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
        <div style={{marginBottom: "55px"}}>
          {obelisks && obeliskFct()}
          {matching && matchingFct()}
        </div>

    </main>

    <footer>
        <div>Website Credits: <b>Eldenbraz</b> / Icons credit: <b>@kittystarkkreactions</b></div>{/* <img src="/Engrenage.png" alt="Engrenanges" className="logo" /> */}
      </footer>
    </div>
  )
}
