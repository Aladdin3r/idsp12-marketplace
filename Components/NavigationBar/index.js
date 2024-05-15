import Image from "next/image";
export default function NavigationBar(){
    return (<>
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div className="container">
              <a className="navbar-brand" href="#"><Image src="/stuffnstuff_footer.webp" width={100} height={100} /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#video">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Detailed Description</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
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
    </>);
}