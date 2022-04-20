import React from "react";
import Head from "../components/head3d";
import Terminal from "../components/terminal";

class About extends React.Component {
  
  render() {
    return (
      <div className="screen">
      <section className="buttonGroup">
       
       <a href = '#Technologies'> <button>TECHNOLOGIES</button></a>
        <button value="Rockets">PROJECTS</button>
        <button value="Smoke Screen">RESUME</button>
        <button value="Booster Rockets">HOW TO CONTACT ME</button>
      </section>

      <section className="buttonGroup">
        
        <section className="imageDisplay">
          <div className="aspect">
            <Head />
          </div>
        </section>
        <p>Hello...</p>
        <p>
          My name is Cody Gant. I'm a Front End Developer and Full Time Student
          at Daytona State College Majoring in Software Enginering. My passion
          is in computers and their ability to form the world around us in a
          cyber framework.
          <hr />
         Try out the terminal! you can move my head around or change the angles. It gives you a more intimate 
         view of me:) type 'help' to see the commands you can input. commiting!!! hehe
        </p>
      </section>

      <section className="buttonGroup">
       
        <div className="visual1">
          <Terminal />
        </div>

        <div className="visual2"></div>

        <section>
          <p>
            i need a commit for tonight. I am going thru a lot so its kinda hard to code these past two weeks:/
            <hr />
            Sed rhoncus a leo congue sollicitudin. Fusce risus tortor, rutrum id
            egestas at, elementum in dui. Fusce bibendum purus eu turpis
            vestibulum, eget aliquet ante pellentesque. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce egestas, this mf bruh mauris eu vehicula placerat, lacus mi
            hendrerit lacus, ac rhoncus arcu purus eget odio. Aliquam commodo
            mattis lorem vitae porttitor. listen man it be hard to code cut me a break ok?
          </p>
        </section>
      </section>
     
    </div>
    );
  }
}
export default About