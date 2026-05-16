import Image from "next/image";
import "./page.css";

export default function Home() {
  // const header = [
  //   {
  //     id: 1,
  //     title: "home",
  //     link: "http://localhost:3000",
  //   },
  //   {
  //     id: 2,
  //     title: "Service",
  //     link: "http://localhost:3000/Service",
  //   },
  //   {
  //     id: 3,
  //     title: "Feature",
  //     link: "http://localhost:3000/Feature",
  //   },
  //   {
  //     id: 4,
  //     title: "product",
  //     link: "http://localhost:3000/Product",
  //   },
  //   {
  //     id: 5,
  //     title: "Testtimonial",
  //     link: "http://localhost:3000/Testimonial",
  //   },
  //   {
  //     id: 6,
  //     title: "FAQ",
  //     link: "http://localhost:3000/FAQ",
  //   },
  // ];
  const our = [
    {
      id: 1,
      icon: "/image/Vector.png",
    },
    {
      id: 2,
      icon: "/image/Vector (1).png",
    },
    {
      id: 3,
      icon: "/image/Logo (5).png",
    },
    {
      id: 4,
      icon: "/image/Logo (4).png",
    },
    {
      id: 5,
      icon: "/image/Logo (1).png",
    },
    {
      id: 6,
      icon: "/image/Logo (2).png",
    },
    {
      id: 7,
      icon: "/image/Logo (5).png",
    },
  ];
  const manage = [
    {
      id: 1,
      title: "Membership Organisations ",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "/image/Icon.png",
    },
    {
      id: 2,
      title: "National  Associations",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "/image/Icon (1).png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: "/image/Icon (2).png",
    },
  ];
  const achivement = [
    {
      id: 1,
      img: "/image/Icon (5).png",
      title: "2,245,341",
      subtitle: "Members",
    },
    {
      id: 2,
      img: "/image/Icon (6).png",
      title: "46,328",
      subtitle: "Clubs",
    },
    {
      id: 3,
      img: "/image/Icon (4).png",
      title: "828,867",
      subtitle: "Event Bookings",
    },
    {
      id: 4,
      img: "/image/Icon (3).png",
      title: "1,926,436",
      subtitle: "Payments",
    },
  ];
  const customer = [
    {
      id: 1,
      icon: "/image/Logo(6).png",
    },
    {
      id: 2,
      icon: "/image/Vector (1).png",
    },
    {
      id: 3,
      icon: "/image/Logo (5).png",
    },
    {
      id: 4,
      icon: "/image/Logo (4).png",
    },
    {
      id: 5,
      icon: "/image/Logo (1).png",
    },
    {
      id: 6,
      icon: "/image/Logo (2).png",
    },
  ];
  const marketing = [
    {
      id: 1,
      img: "/image/image18.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      img: "/image/image19.png",
      title:
        "  What are your safeguarding responsibilities and how can you manage them",
    },
    {
      id: 3,
      img: "/image/image20.png",
      title: " Revamping the Membership Model with Triathlon Australia",
    },
  ];
  // const mangxahoi = [
  //   {
  //     id: 1,
  //     icon: "/image/instaram.png",
  //   },
  //   {
  //     id: 2,
  //     icon: "/image/drippel.png",
  //   },
  //   {
  //     id: 3,
  //     icon: "/image/w.png",
  //   },
  //   {
  //     id: 4,
  //     icon: "/image/ytb.png",
  //   },
  // ];
  // const footerright1 = [
  //   {
  //     id: 1,
  //     title: "About us",
  //   },
  //   {
  //     id: 2,
  //     title: "Blog",
  //   },
  //   {
  //     id: 3,
  //     title: "Contact us",
  //   },
  //   {
  //     id: 4,
  //     title: "Pricing",
  //   },
  //   {
  //     id: 5,
  //     title: "Testimonials",
  //   },
  // ];
  // const footerright2 = [
  //   {
  //     id: 1,
  //     title: "Help center",
  //   },
  //   {
  //     id: 2,
  //     title: "Terms of service",
  //   },
  //   {
  //     id: 3,
  //     title: "Legal",
  //   },
  //   {
  //     id: 4,
  //     title: "Privacy policy",
  //   },
  //   {
  //     id: 5,
  //     title: "Status",
  //   },
  // ];
  return (
    <>
      {/* <header>
        <div className="header-inner">
          <a className="logo">
            <img src="/image/nexccent2.png" />
          </a> */}
      {/* <nav>
            {header.map(function (values) {
              return (
                <a href={values.link} key={values.id}>
                  {values.title}
                </a>
              );
            })}
          </nav> */}
      {/* <div>
            <a className="login-btn">login</a>
            <a className="signup-btn">signup</a>
          </div>
        </div>
      </header> */}
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
          <p className="m2">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="our_2">
            {our.map(function (item) {
              return <img key={item.id} src={item.icon} />;
            })}
          </div>
        </div>
      </section>
      {/* manage section */}
      <section className="manage">
        <div className="our_3">
          <h1 className="m3">
            Manage your entire community <br />
            in a single system
          </h1>
          <p className="m4">Who is Nextcent suitable for?</p>
        </div>
        <div className="our_4">
          {manage.map(function (item) {
            return (
              <div key={item.id}>
                <img src={item.icon} />
                <h3 className="m5">{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* achivement-section */}
      <section className="Achivements_backroud">
        <div className="Achivements">
          <div className="Achivements_left">
            <h1>
              Helping a local <br />
              <span>business reinvent itself</span>
            </h1>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className="Achivements_right">
            {achivement.map(function (item) {
              return (
                <div key={item.id} className="Achivements_right">
                  <div className="Achivements_logobox">
                    <img src={item.img}></img>

                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* frame-section */}
      <section className="frame-inner">
        <div>
          <img src="/image/pana.png" alt="" />
        </div>
        <div className="box1">
          <h1>
            How to design your site footer like <br />
            we did
          </h1>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt <br />
            molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
            Donec quis erat at <br />
            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus
            vehicula leo dui, at porta <br />
            nisi facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer <br />
            in nisi eget nulla commodo faucibus efficitur quis massa. Praesent
            felis est, finibus et nisi <br />
            ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      {/* customer-section */}
      <section className="customer-background">
        <div className="customer">
          <div className="customer-inner">
            <img src="/image/image9.png" alt="" />
          </div>
          <div className="customer-frame">
            <div className="customer-text">
              <p>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h3>Tim Smith</h3>

              <p>British Dragon Boat Racing Association</p>
            </div>
            <div className="customer-banner">
              {customer.map(function (items) {
                return <img key={items.id} src={items.icon} />;
              })}
              <h3>Meet all customers</h3>
            </div>
          </div>
        </div>
      </section>
      {/* marketing-section */}
      <section className="marketing">
        <div className="text-marketing">
          <h1>Caring is the new marketing</h1>
          <p>
            The Nexcent blog is the best place to read about the latest
            membership insights, <br />
            trends and more. See who's joining the community, read about how our
            community <br />
            are increasing their membership income and lot's more.​
          </p>
        </div>
        <div className="imgbox">
          {marketing.map(function (box) {
            return (
              <div key={box.id} className="imgbox1">
                <img src={box.img} />
                <div className="textbox1">
                  <h3>{box.title}</h3>
                  <a href="">Readmore</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* footer-section */}
      {/* <footer className="footer">
        <div className="footer-top">
          <div className="footertext1">
            <h1>
              Pellentesque suscipit <br />
              fringilla libero eu.
            </h1>
            <button>Get a Demo</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-text">
            <div className="logo-footer">
              <div>
                <img src="/image/nexccent2.png" alt="" />
              </div>
              <div className="copyright">
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
              <div className="icon-mxh">
                {mangxahoi.map(function (icon) {
                  return <img key={icon.id} src={icon.icon} />;
                })}
              </div>
            </div>
            <div className="footer-right">
              <div>
                <h3>Company</h3>
                {footerright1.map(function (value) {
                  return (
                    <nav key={value.id}>
                      <a>{value.title}</a>
                    </nav>
                  );
                })}
              </div>
              <div>
                <h3>Support</h3>
                {footerright2.map(function (value) {
                  return (
                    <nav key={value.id}>
                      <a>{value.title}</a>
                    </nav>
                  );
                })}
              </div>
              <div>
                <h3>Stay up to date</h3>
                <div className="email-box">
                  <input type="email" placeholder="Your email address" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}
