import HeadArea from "@/Components/HeadArea";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Video from "@/Components/Video";
import NavigationBar from '@/Components/NavigationBar';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeadArea />
      <main className={`${styles.main}`}>

        <div className="container-fluid">
          <NavigationBar />
        </div>

        <div className="jumbotron mb-6 sm-6">
          <Image src="/stuffnstuff_footer.webp" width={500} height={400} className="center-block" />
          <p className="lead">The modern and safe marketplace to earn your trust and connect with real people.</p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>


        <div id="video" class="container-sm   mt-4">
          <div class="row">
            <h4 className="mb-3">Marketing Video</h4>
            <div className="jumbotron mb-12 ms-12">
              <Video />
            </div>
          </div>
        </div>

        <div id="about" class="container-sm  mt-4">
          <div class="row">
            <h4 className="mb-3">About Us  </h4>
            <div className="jumbotron mb-6 ms-6">
              <p>Team Name:</p>

              <p>Team Memeber:</p>
              <ul>
                <li>Rawan Aladdin</li>
                <li>Andrew Turitsa</li>
                <li>Mia Mackenzie </li>
                <li>Timothy Le </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="features" class="container-sm  mt-4">
          <h4 className="mb-3">Features & Additional persuasive  </h4>
          <div className="jumbotron mb-6 ms-6">
            <p>SafeExchange’s boasts an in-depth screening process for account creation, some required steps for new users to complete are:</p>
            <ul>
              <li> 2 factor authentication paired to the user’s email address</li>
              <li>A recaptcha image recognition features</li>
            </ul>
            <p>In terms of user experience for SafeExchange’s buyers and sellers, app has:</p>
            <ul>
              <li>Many visible category selectors directly accessible from the home page</li>
              <li>Simple chat and contact management allowing users to delete and block any unwanted profiles in seconds</li>
              <li>The option for users to bookmark listings and easily view the bookmarks from their profile page.</li>
            </ul>


          </div>
        </div>
        <div id="description" class="container-sm  mt-4">
          <h4 className="mb-3"> About SafeExchange’s  </h4>
          <div className="jumbotron mb-6 ms-6">
            SafeExchange’s is a user run marketplace that aims to combat the two primary sources of frustration found within in online ~check that~ marketplaces: Scammers and product browsing. Our platform enforces users to undergo a comprehensive screening process prior to account creation and listing placed on the marketplace will not be accepted without sufficient description. This increased strictness allows our marketplace to exhibit a trait that is becoming increasing valuable throughout all digitalized industries: Human trust. The increased requirements for product description allows for a more thorough filtering system with plenty of accurate category selector for buyers to quickly search or browse items that they can rest assured are real listings from real sellers. We hope that our marketplace can serve as a partial relief from the constant concern of online scammers while providing an added layer of convenience for both our buyers and sellers.

          </div>
        </div>



        <div id="download" className="container-md  mt-4">
          <div className="row">
            <div className="col-md-6 justify-content-center">
              <h4>Download</h4>
              <p>The application available on App Store and Google Store.</p>
              <Link href="https://www.figma.com/proto/WFyzAHRx2f6lgYz3UGSxS0/Wireframes?node-id=505-1373&t=apEVDRjpynC4Iaa1-0&scaling=scale-down&page-id=299%3A2268&starting-point-node-id=505%3A1373&show-proto-sidebar=1">
                <Image src='/download2.jpeg' width={200} height={124} />
              </Link>
            </div>
            <div className="col-md-6">
              <Image src='/app_cover.png' width={300} height={700} />
            </div>
          </div>

        </div>

        <div id="contact" class="container-sm mt-4">
          <h4 className="mb-3">Contact Us</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control custom-width" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control custom-width" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control custom-width" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div id="contact" >
          <div className="mb-12 mt-4">
            &copy; BCIT educational project, Project 1, 2024
          </div>
        </div>

      </main>
    </>
  );
}
