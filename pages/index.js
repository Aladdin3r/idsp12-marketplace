import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Video from "@/Components/Video";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stuff n Stuff</title>
        <meta name="description" content="The modern and safe marketplace to earn your trust and connect with real people." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/stuffnstuff_footer.webp" />
      </Head>
      <main className={`${styles.main}`}>

        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div className="container">
              <a className="navbar-brand" href="#"><Image src="/stuffnstuff_footer.webp" width={100} height={100} /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Detailed Description</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Links</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="jumbotron mb-5 ms-5">
          <Image src="/stuffnstuff_footer.webp" width={500} height={400} />
          <p className="lead">The modern and safe marketplace to earn your trust and connect with real people.</p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>

        <div className="jumbotron mb-6 ms-6">
          <Video />
        </div>

        <div id="contact" class="container-sm">
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

      </main>
    </>
  );
}
