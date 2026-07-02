import React, { useState,useEffect } from 'react';

import './stylee.css';
import bloodType from './image/bloodType.png';
import background from './image/background.jpeg';

import bloodsample from './image/bloodsample.png';
import brk from './image/break.png';
import doc from './image/docperm.png';
import donroom from './image/donroom.png';
import doncert from './image/doncert.png';
import drink from './image/Drink.png';

import eat from './image/eat.png';
import gym from './image/gym.png';

import leave from './image/Leave.png';

import nodrink from './image/no-drink.png';
import reception from './image/reception.png';
import sleep from './image/sleep.png';

export default function Home()
 {

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const targetElements = document.querySelectorAll('[data-target]');

    const handleClick = (tab) => {
      const setData = document.querySelector(tab.dataset.target);

      if (setData) {
        document.querySelectorAll('[data-target-content]').forEach((content) => {
          content.classList.remove('active');
        });

        targetElements.forEach((t) => {
          t.classList.remove('active');
        });

        tab.classList.add('active');
        setData.classList.add('active');
        setActiveTab(tab);
      } else {
        console.error('No content found for target:', tab.dataset.target);
      }
    };

    targetElements.forEach((tab) => {
      tab.addEventListener('click', () => handleClick(tab));
    });

    return () => {
      // Cleanup event listeners when component unmounts
      targetElements.forEach((tab) => {
        tab.removeEventListener('click', () => handleClick(tab));
      });
    };
  }, []);
  
  return (

    <div className="container">
      <div className="banner">
      <div className="content">
          <h1>kindred hearts</h1>
          <p>“Blood Donation Is A Small Act Of Kindness That Does Great And
              Big Wonders.”</p>

          <div>
              <button type="button" onClick={()=>{window.location.href="./admin"}} ><span></span>Login</button>
              
          </div>
      </div>
      </div>

      <section id="about" class="about grid">
      <div className="about__container">
        <h2>About Kindred Hearts</h2>
        <p>
          Kindred Hearts is an innovative approach to health treatment in
          India. We provide immediate access to blood donors across India, 24
          hours a day, 7 days a week. Kindred Hearts is one of many
          community organizations that work together as one network.
        </p>
        <a href="#" className="button "
          >Learn More About us <span class="arrow "></span
        ></a>
      </div>
    </section>
    <section id="blood" className="acceptable">
      <div className="grid">
        <div className="acceptable__header">
          <h2>blood donation</h2>
          <p>
            You can usually donate blood two to three times during the year,
            every 16 weeks so that there is enough time period for your blood to
            build up its iron stock between each donation.
            <span>
              Choose Your Blood Type
            </span>
          </p>
          <ul className="acceptable__header--menu">
            <li data-target="#Type_1">A+</li>
            <li data-target="#Type_2 ">A-</li>
            <li data-target="#Type_3 ">AB+</li>
            <li data-target="#Type_4 ">AB-</li>
            <li data-target="#Type_5 ">O+</li>
            <li data-target="#Type_6 ">O-</li>
            <li data-target="#Type_7 ">B+</li>
            <li data-target="#Type_8 ">B-</li>
          </ul>
        </div>
        <div className="acceptable__main">
         
          <div className="main-grid " id="Type_1" data-target-content>
            <div className="content-desc">
              <h2 className="content-desc__header">A+</h2>
              <div className="content-desc__main">
                <p>
                  The bearer of this superfamily is characterized by the body
                  the process of metabolism is very rapid sensitivity of the
                  gastrointestinal tract but has a very weak immune system has
                  the capacity to cope with environmental changes and food there
                  are some foods that fit his body like
                  <span> seafood, vegetables, legumes </span> and prefers not to
                  eat red meat and dairy derivatives, wheat . Blood Type A is
                  more likely to
                  <span>
                    accumulate and accumulate mucosa in the digestive tract than
                    other species.</span
                  >
                </p>
                <ul className="main-type">
                  <li>
                    <h3>Receive</h3>
                    <ul>
                      <li>A+</li>
                      <li>A-</li>
                      <li>O+</li>
                      <li>O-</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Donates</h3>
                    <ul>
                      <li>A+</li>
                      <li>AB+</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-img">
              <img src={bloodType}alt="acceptable" />
            </div>
          </div>
          
          <div className="main-grid" id="Type_2" data-target-content>
            <div className="content-desc">
              <h2 className="content-desc__header">A-</h2>
              <div className="content-desc__main">
                <p>
                  The bearer of this superfamily is characterized by the body
                  the process of metabolism is very rapid sensitivity of the
                  gastrointestinal tract but has a very weak immune system has
                  the capacity to cope with environmental changes and food there
                  are some foods that fit his body like
                  <span> seafood, vegetables, legumes </span> and prefers not to
                  eat red meat and dairy derivatives, wheat . Blood Type A is
                  more likely to
                  <span>
                    accumulate and accumulate mucosa in the digestive tract than
                    other species.</span
                  >
                </p>
                <ul className="main-type">
                  <li>
                    <h3>Receive</h3>
                    <ul>
                      <li>A-</li>
                      <li>O-</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Donates</h3>
                    <ul>
                      <li>A+</li>
                      <li>A-</li>
                      <li>AB+</li>
                      <li>AB-</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-img">
              <img src={bloodType} alt="acceptable" />
            </div>
          </div>

          
          <div className="main-grid" id="Type_3" data-target-content>
            <div className="content-desc">
              <h2 className="content-desc__header">AB+</h2>
              <div className="content-desc__main">
                <p>
                  It's called the stingy species because it doesn't accept blood
                  from any other species, but it only gives blood to its
                  species. The bearer of this superfamily is characterized by
                  device regions of weak and foods that fit the nature of his
                  body is a combination of special food with A blood type B in
                  addition to that, his body more susceptible to certain
                  diseases
                  <span>such as diabetes, anemia, and cancer </span>.
                </p>
                <ul className="main-type">
                  <li>
                    <h3>Receive</h3>
                    <ul>
                      <li>Every One</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Donates</h3>
                    <ul>
                      <li>AB+</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-img">
              <img src={bloodType} alt="acceptable" />
            </div>
          </div>

          
          <div className="main-grid" id="Type_4" data-target-content>
            <div className="content-desc">
              <h2 className="content-desc__header">AB-</h2>
              <div className="content-desc__main">
                <p>
                  It's called the stingy species because it doesn't accept blood
                  from any other species, but it only gives blood to its
                  species. The bearer of this superfamily is characterized by
                  device regions of weak and foods that fit the nature of his
                  body is a combination of special food with A blood type B in
                  addition to that, his body more susceptible to certain
                  diseases
                  <span> such as diabetes, anemia, and cancer</span>.
                </p>
                <ul className="main-type">
                  <li>
                    <h3>Receive</h3>
                    <ul>
                      <li>AB-</li>
                      <li>A-</li>
                      <li>B-</li>
                      <li>O-</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Donates</h3>
                    <ul>
                      <li>AB+</li>
                      <li>AB-</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-img">
              <img src={bloodType} alt="acceptable" />
            </div>
          </div>

          
          <div className="main-grid" id="Type_5" data-target-content>
            <div className="content-desc">
              <h2 className="content-desc__header">O+</h2>
              <div className="content-desc__main">
                <p>
                  Allow a platoon of blood-precious because it does not contain
                  antibodies to the head of this platoon does not take blood
                  only from the species itself, but it gives the blood of the
                  factions other, heat blood type O is characterized by the fact
                  that her digestive system strong and suitable for an active
                  also there is a range of foods to fit his body too
                  <span>
                    such as vegetables, fruits, red meat, legumes, and wheat </span
                  >. These persons are exposed to coagulopathy, clots,
                  arthritis, allergies and ulcers.
                </p>
                <ul className="main-type">
                  <li>
                    <h3>Receive</h3>
                    <ul>
                      <li>O+</li>
                      <li>O-</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Donates</h3>
                    <ul>
                      <li>AB+</li>
                      <li>O+</li>
                      <li>B+</li>
                      <li>A+</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-img">
              <img src={bloodType} alt="acceptable" />
            </div>
          </div>

         
          <div className="main-grid" id="Type_6" data-target-content>
            <div className="content-desc">
              <h2 className="content-desc__header">O-</h2>
              <div className="content-desc__main">
                <p>
                  Allow a platoon of blood-precious because it does not contain
                  antibodies to the head of this platoon does not take blood
                  only from the species itself, but it gives the blood of the
                  factions other, heat blood type O is characterized by the fact
                  that her digestive system strong and suitable for an active
                  also there is a range of foods to fit his body too
                  <span>
                    such as vegetables, fruits, red meat, legumes, and
                    wheat</span
                  >. These persons are exposed to coagulopathy, clots,
                  arthritis, allergies and ulcers.
                </p>
                <ul className="main-type">
                  <li>
                    <h3>Receive</h3>
                    <ul>
                      <li>O-</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Donates</h3>
                    <ul>
                      <li>Every One</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-img">
              <img src={bloodType} alt="acceptable" />
            </div>
          </div>

          
          <div className="main-grid" id="Type_7" data-target-content>
            <div className="content-desc">
              <h2 className="content-desc__header">B+</h2>
              <div className="content-desc__main">
                <p>
                  The bearer of this superfamily is characterized by the ability
                  to cope with changes in food and Environmental has a strong
                  immune system and a nervous system balanced .There are a range
                  of foods suitable to the nature of his body but would prefer
                  not to excessive in some foods
                  <span>
                    such as legumes, vegetables, milk and dairy products and
                    fruits </span
                  >. The risks of this species are their vulnerability to
                  diseases such as osteoporosis, diabetes and chronic fatigue.
                </p>
                <ul className="main-type">
                  <li>
                    <h3>Receive</h3>
                    <ul>
                      <li>B+</li>
                      <li>B-</li>
                      <li>O+</li>
                      <li>O-</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Donates</h3>
                    <ul>
                      <li>AB+</li>
                      <li>B+</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-img">
              <img src={bloodType} alt="acceptable" />
            </div>
          </div>

          
          <div className="main-grid" id="Type_8" data-target-content>
            <div className="content-desc">
              <h2 className="content-desc__header">B-</h2>
              <div className="content-desc__main">
                <p>
                  The bearer of this superfamily is characterized by the ability
                  to cope with changes in food and Environmental has a strong
                  immune system and a nervous system balanced .There are a range
                  of foods suitable to the nature of his body but would prefer
                  not to excessive in some foods
                  <span>
                    such as legumes, vegetables, milk and dairy products and
                    fruits</span
                  >. The risks of this species are their vulnerability to
                  diseases such as osteoporosis, diabetes and chronic fatigue.
                </p>
                <ul className="main-type">
                  <li>
                    <h3>Receive</h3>
                    <ul>
                      <li>B-</li>
                      <li>O-</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Donates</h3>
                    <ul>
                      <li>B+</li>
                      <li>B-</li>
                      <li>AB+</li>
                      <li>AB-</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-img">
              <img src={bloodType} alt="acceptable" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="instructions" className="care-section grid">
      <h2>Pre donation instructions</h2>
      <div className="care-section__content">
        <div>
          <img src={sleep} alt="sleep photo" />
          <p>Get enough sleep on the night of the donation.</p>
        </div>
        <div>
          <img src={eat} alt="Eat photo" />
          <p>Eat a balanced meal two hours before donating.</p>
        </div>
        <div>
          <img src={nodrink} alt="no drink photo" />
          <span className="icon icon--error"></span>
          <p>You should not drink liquids with caffeine.</p>
        </div>
      </div>
    </section>
  
    <section className="instructions grid ">
      <div className="instructions-header">
        <h2>Donation instructions</h2>
        <span className="icon"></span>
      </div>
      <div className="instructions-main">
        <div className="instructions-main__desc">
          <div className="left">
            <img src={reception} alt="image some instructions" />
          </div>
          <div className="right">
            <h3>Go to the reception</h3>
            <p>The donor starts their journey by contacting the registry.</p>
          </div>
        </div>
        <div className="instructions-main__desc">
          <div className="left">
            <img src={bloodsample} alt="image some instructions" />
          </div>
          <div className="right">
            <h3>Take blood sample</h3>
            <p>
              Take a blood sample and test to determine whether or not to
              donate.
            </p>
          </div>
        </div>
        <div className="instructions-main__desc">
          <div className="left">
            <img
              src={doc}
              alt="image some instructions"
            />
          </div>
          <div className="right">
            <h3>Doctor's permit</h3>
            <p>The doctor makes a decision about accepting a blood donation.</p>
          </div>
        </div>
        <div className="instructions-main__desc">
          <div className="left">
            <img src={eat} alt="image some instructions" />
          </div>
          <div className="right">
            <h3>Food</h3>
            <p>
              Before donating it is necessary to eat a meal, do not donate blood
              on an empty stomach.
            </p>
          </div>
        </div>
        <div className="instructions-main__desc">
          <div className="left">
            <img src={donroom} alt="image some instructions" />
          </div>
          <div className="right">
            <h3>Blood donation</h3>
            <p>
              The donation is made in the donation room.
            </p>
          </div>
        </div>
        <div className="instructions-main__desc">
          <div className="left">
            <img
              src={doncert}
              alt="image some instructions"
            />
          </div>
          <div className="right">
            <h3>Donor's certificate</h3>
            <p>
              After donating, the donor's certificate will be issued.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="instructions" className="care-section grid">
      <h2>Post donation instructions</h2>
      <div className="care-section__content">
        <div>
          <img src={drink} alt="drink photo" />
          <p>You should drink more fluids than usual.</p>
        </div>
        <div>
          <img src={brk} alt="break photo" />
          <p>After donating, take a break and snack.</p>
        </div>
        <div>
          <img src={leave} alt="leave photo" />
          <p>After 10-15 minutes you can leave the place.</p>
        </div>
        <div>
          <img src={gym} alt="gym photo" />
          <span className="icon icon--error"></span>
          <p>Avoid heavy physical activity for 5 hours.</p>
        </div>
      </div>
    </section>
    <footer className="footer" id="footer">
      <div className="footer__containers">
        <div>
          
          
          <p className="footer__p">
            &copy; 2024 Created By pranav n prachi All Rights Reserved
          </p>
        </div>
        
      </div>
      <div className="footer__quotes">
        <p className="quotes">Every Blood Donor Is A Life Saver</p>
      </div>
    </footer>
        
        </div>
       
     
  )
  
}
