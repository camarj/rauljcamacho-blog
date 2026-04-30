function App() {
  const [route, setRoute] = React.useState("home");
  const [slug, setSlug] = React.useState(null);

  const navigate = (r, s = null) => {
    setRoute(r);
    setSlug(s);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <span className="side-deco left" aria-hidden="true"></span>
      <span className="side-deco right" aria-hidden="true"></span>

      <Header route={route} navigate={(r) => navigate(r)} />

      {route === "home" && <Home navigate={navigate} />}
      {route === "post" && <Post slug={slug} navigate={navigate} />}
      {route === "about" && <About navigate={navigate} />}
      {route === "topics" && <Home navigate={navigate} />}
      {route === "archive" && <Home navigate={navigate} />}

      <Footer />
      <Tweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
