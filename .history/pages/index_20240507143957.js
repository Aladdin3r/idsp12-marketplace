import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

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
          <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div class="container">
              <a class="navbar-brand" href="#"><Image src="/stuffnstuff_footer.webp" width={100} height={100}/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Detailed Description</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Links</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="jumbotron">
        <Image src="/stuffnstuff_footer.webp" width={500} height={400}/>
          <p class="lead">The modern and safe marketplace to earn your trust and connect with real people.</p>
          <hr class="my-4"/>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>


        <div id="contact">
          <h4 c>Contact Us</h4>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

      </main>
    </>
  );
}
