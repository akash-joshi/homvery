export default function Header() {
  return (
    <nav
      style={{ position: "absolute", top: "0", width: "100%" }}
      className="navbar navbar-expand-md navbar-light bg-light"
    >
      <a className="navbar-brand" href="/">
        Homvery
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={() => {
              localStorage.clear();
              location.href = "/login";
            }}
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
}
