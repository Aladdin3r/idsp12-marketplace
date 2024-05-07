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
              <a class="navbar-brand" href="#"><Image />></a>
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
          <h1 class="display-3 my-4">STUFF n STUFF</h1>
          <p class="lead">The modern and safe marketplace to earn your trust and connect with real people.</p>
          <hr class="my-4"/>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </main>
    </>
  );
}
