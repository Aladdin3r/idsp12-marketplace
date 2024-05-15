import HeadArea from "@/Components/HeadArea";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Video from "@/Components/Video";
import NavigationBar from '@/Components/NavigationBar';

export default function Home() {
  return (
    <>
      <HeadArea />
      <main className={`${styles.main}`}>

        <div className="container-fluid">
          <NavigationBar />
        </div>

        <div className="jumbotron mb-6 ms-6">
          <Image src="/stuffnstuff_footer.webp" width={500} height={400} />
          <p className="lead">The modern and safe marketplace to earn your trust and connect with real people.</p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>


        <div id="video" class="container-sm   mt-4">
          <h4 className="mb-3">Marketing Video</h4>
          <div className="jumbotron mb-6 ms-6">
            <Video />
          </div>
        </div>

        <div id="about" class="container-sm  mt-4">
          <h4 className="mb-3">About Us  </h4>
          <div className="jumbotron mb-6 ms-6">
            <p>Team Name:</p>

            <p>Team Memeber:</p>
            <ul>
              <li>Rawan Aladdin</li>
              <li>Andrew Turitsa</li>
              <li>Mia Mackenzie </li>
              <li>Timothy Lee (Layout Design) </li>
            </ul>
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
        <div>
          <div className="mb-12 mt-4">
            &copy; BCIT educational project, Project 1, 2024
          </div>
        </div>

      </main>
    </>
  );
}
