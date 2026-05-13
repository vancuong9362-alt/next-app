import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
 const header= [

  {
    id: 1,
    title: "home"
  },
  {
    id: 2,
    title: "Service"
  },
  {
    id: 3,
    title: "Feature"
  },
  {
    id: 4,
    title: "product"
  },
  {
    id: 5,
    title: "Testtimonial"
  },
  {
    id: 6,
    title: "FAQ"
  },
 ];
 const banner =[
  {

  }
 ]
return( 
   <>  
  <header>
        
          <div className="header-inner">
            <a className="logo">
              <img src="/image/nexccent2.png" />
               </a>
          <nav >
            {header.map(function (values){
              return(
            <a key={values.id}>{values.title}</a>
            );
            })}
          </nav>
          <div>
            <a className="login-btn">login</a>
            <a className="signup-btn">signup</a>
          </div>
          </div>
  </header>
     {/* banner-section */}
  <section className="banner-inner">
      <div className="banner">
        <h1 className="b1">Lessons and insights</h1>
        <h1 className="b2">from 8 years</h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button>Register</button>
      </div>
      <div className="banner_2">
        <img src="/image/Illustration.png" alt="Nexcent Illustration " />
      </div>
    </section>

    </>
);
}
