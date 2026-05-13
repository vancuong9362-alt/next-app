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
 const our =[
  {
    id: 1,
    icon: "/image/Vector.png"
  },
  {
    id: 2,
    icon: "/image/Vector (1).png"
  },
  {
    id: 3,
    icon: "/image/Logo (5).png"
  },
  {
    id: 4,
    icon: "/image/Logo (4).png"
  },
    {
    id: 5,
    icon: "/image/Logo (1).png"
  },
  {
    id: 6,
    icon: "/image/Logo (2).png"
  },
  {
    id: 7,
    icon: "/image/Logo (5).png"
  }
 ]
 const manage =[
{
      id: 1,
      title: "Membership  Organisations",
      subtitle: "Our membership management software provides full automation of membership renewals and payments",
      icon: "/image/Icon.png"
    },
    {
      id: 2,
      title: "National  Associations",
      subtitle: "Our membership management software provides full automation of membership renewals and payments",
      icon: "/image/Icon (1).png"
    },
    {
      id: 3,
      title: "Clubs And Groups",
      subtitle: "Our membership management software provides full automation of membership renewals and payments",
      icon: "/image/Icon (2).png"
    },
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
    {/* our clien section */}
    <section className="clients-inner">
      <div className="our">
        <h1 className="m1">Our Clients</h1>
        <p className="m2">We have been working with some Fortune 500+ clients</p>
        <div className="our_2">
          {our.map(function (item){
            return (
              <img key={item.id} 
                   src={item.icon} 
                    />
            );
          })}
        </div>
        </div>
    </section>
    {/* manage section */}
    <section className="manage">
      <div className="our_3">
          <h1 className="m3">
          Manage your entire community <br />in a single system
        </h1>
        <p className="m4">Who is Nextcent suitable for?</p>
      </div>
      <div className="our_4">
          {manage.map(function (item){
          return (
            <div key={item.id} > 
            <img src={item.icon} />
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
             </div>
          )
          })}
      </div>
      
    </section>
    
    </>
);
}
