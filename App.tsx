import { useState } from "react";

type Page = "home" | "socials" | "music" | "mundillo";

const pageData: Record<Page, { label: string; status: string }> = {
  home: {
    label: "HOME",
    status: "[// leading... // copyright 2800 | unknown]",
  },
  socials: {
    label: "SOCIALS",
    status: "[// socials... no clean carrier found]",
  },
  music: {
    label: "MUSIC",
    status: "[// mystery.midi queued... volume locked]",
  },
  mundillo: {
    label: "MUNDILLO",
    status: "[// mundillo... tiny world rendered]",
  },
};

const socialLinks = [
  {
    label: "instagram",
    value: "@don.jide_",
    href: "https://instagram.com/don.jide_",
    icon: "/instagram_retro.svg",
  },
  {
    label: "tiktok",
    value: "@artist_differnt",
    href: "https://tiktok.com/@artist_differnt",
    icon: "/tiktok_retro.svg",
  },
  {
    label: "soundcloud",
    value: "soundcloud.com/chris-music-lol",
    href: "https://soundcloud.com/chris-music-lol?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    icon: null,
  },
];

const musicLinks = [
  {
    label: "this is spotify",
    description: "play chulo and aura farm in the street, i promsise u, its the best way lol",
    href: "https://open.spotify.com/artist/1hZxPSwbmJJGc8SeLSn0WR",
    icon: "/logos/spotify.png",
  },
  {
    label: "this is soundcloud",
    description: "ngl i dont even know if this works but i have a soundcloud too, its mostly old stuff and random shits but u can check it out if u want",
    href: "https://soundcloud.com/chris-music-lol?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    icon: "/soundcloud_retro.svg",
  },
  {
    label: "this is apple music",
    description: "ur rich we get it bro",
    href: "https://music.apple.com/gb/artist/jide/1739668640",


    icon: "/logos/Apple_Music_icon.svg.png",
  },
];

const navLinks = [pageData.socials, pageData.music, pageData.mundillo];

const jideSelections = [
  {
    label: "chulo",
    link: "https://open.spotify.com/track/...",
  },
  {
    label: "stay back",
    link: "https://open.spotify.com/track/...",
  },
];

const favoriteGames = [
  { label: "Speed Racer", description: "This is the first game i ever played, from the ps2, i used to imitate the pilots poses lol and also get extremely angry when i lost, but i think about this game a lot fr fr " },
  { label: "Watch Dogs 2", description: "Man this game is so good, i love the story and the gameplay is amazing, especially the story, a parallel to our current reality, but from the perspective of a hacker and fighting for justice against big corporations." },
  { label: "Pes 6", description: "we can play football as penguins thats all ill say." },
];

const favoriteMovies = [
  { label: "Black Mirror", description: "This description box wont contain all i have to say about this show" },
  { label: "Fresh Prince of Bel-Air", description: "Got part of my personality from this show lowk" },
  { label: "The office", description: "Amazing show, awkward, how i like it lol" },
  { label: "Vinland Saga", description: "one of the only animes that i sat through and never touched my phone" },
  { label: "Black Panther", description: "pro-black no bap, no cap, no lap, you get it lmao" },
];

const musicalInspirations = [
  { label: "Michael Jackson", description: "This is my goat, cant put it in a box, but i used to come back from school and stay next to the router for wifi and watch MJ from afternoon till night, then i learned to dance to his moves, singing style, allat, GOATED" },
  { label: "Ye", description: "its his music and creative genius, no, im not an AH glazer. " },
  { label: "Rema", description: "mad man, peak in everything" },
];

const visualInspirations = [
  { label: "The office", description: "I wish i made this show fr, the camera work is interesting" },
  { label: "Entergalactic", description: "Honestly one of the best animation styles i've ever seen, if u know how to do something like that, pls find yourself in the socials page, ty lol" },
  { label: "vaporwave color palettes", description: "nostalgic neon" },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [status, setStatus] = useState(pageData.home.status);

  const goToPage = (page: Page) => {
    setCurrentPage(page);
    setStatus(pageData[page].status);
  };

  const renderPageContent = () => {
    if (currentPage === "home") {
      return (
        <>
          <h1 className="site-title" aria-label="the unseen world">
            the|guidelines
          </h1>

          <div className="specter" aria-hidden="true">
            <div className="specter-face" />
          </div>

          <nav className="link-row" aria-label="Main links">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                className="terminal-button"
                onClick={() => goToPage(link.label.toLowerCase() as Page)}
              >
                [ {link.label} ]
              </button>
            ))}
          </nav>

          <p className="enter-line">&gt; enter | the | void | latest. updates (11.03.00) &lt;</p>
        </>
      );
    }

    if (currentPage === "socials") {
      return (
        <div className="site-content" aria-label="socials page">
          <h1 className="site-title">SOCIALS</h1>
          <p className="enter-line">
            connect through the nodes below. carriers are unstable but still active.
          </p>
          <div className="link-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "16px", marginTop: "32px" }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="terminal-button"
                style={{ textAlign: "left" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {link.icon && <img src={link.icon} alt="" style={{ width: "24px", height: "24px" }} />}
                  <div>[ {link.label} ]</div>
                </div>
                <small style={{ display: "block", fontWeight: 400, marginTop: "6px", color: "#b6ddff", fontSize: "0.9rem" }}>
                  {link.value}
                </small>
              </a>
            ))}
          </div>
          <button type="button" className="terminal-button" style={{ marginTop: "32px" }} onClick={() => goToPage("home")}>[ HOME ]</button>
        </div>
      );
    }

    if (currentPage === "music") {
      return (
        <div className="site-content" aria-label="music page">
          <h1 className="site-title">MUSIC</h1>
          <p className="enter-line">
            playback sequences, archived tracks, and live stream hints from the unknown.
          </p>
          <div className="link-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "16px", marginTop: "32px" }}>
            {musicLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="terminal-button"
                style={{ textAlign: "left" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {link.icon && <img src={link.icon} alt="" style={{ width: "24px", height: "24px" }} />}
                  <div>[ {link.label} ]</div>
                </div>
                <small style={{ display: "block", fontWeight: 400, marginTop: "6px", color: "#b6ddff", fontSize: "0.9rem" }}>
                  {link.description}
                </small>
              </a>
            ))}
          </div>
          <button type="button" className="terminal-button" style={{ marginTop: "32px" }} onClick={() => goToPage("home")}>[ HOME ]</button>
        </div>
      );
    }

    return (
      <div className="site-content" aria-label="mundillo page">
        <h1 className="site-title">MUNDILLO</h1>
        
        {/* JIDE'S SELECTIONS */}
        <div style={{ width: "100%", marginTop: "40px" }}>
          <h2 style={{ color: "#25e9ef", fontSize: "1.4rem", fontWeight: 800, marginBottom: "16px", textAlign: "center" }}>
            jide's selections
          </h2>
          <div className="link-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "12px" }}>
            {jideSelections.map((track) => (
              <a
                key={track.label}
                href={track.link}
                target="_blank"
                rel="noreferrer noopener"
                className="terminal-button"
              >
                [ {track.label} ]
              </a>
            ))}
          </div>
        </div>

        {/* FAVORITE GAMES */}
        <div style={{ width: "100%", marginTop: "32px" }}>
          <h2 style={{ color: "#25e9ef", fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px", textAlign: "center" }}>
            favorite games
          </h2>
          <div className="link-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "8px" }}>
            {favoriteGames.map((game) => (
              <div
                key={game.label}
                className="terminal-button"
                style={{ textAlign: "left", cursor: "default" }}
              >
                <div>[ {game.label} ]</div>
                <small style={{ display: "block", fontWeight: 400, marginTop: "4px", color: "#b6ddff", fontSize: "0.85rem" }}>
                  {game.description}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* FAVORITE MOVIES */}
        <div style={{ width: "100%", marginTop: "32px" }}>
          <h2 style={{ color: "#25e9ef", fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px", textAlign: "center" }}>
            favorite movies
          </h2>
          <div className="link-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "8px" }}>
            {favoriteMovies.map((movie) => (
              <div
                key={movie.label}
                className="terminal-button"
                style={{ textAlign: "left", cursor: "default" }}
              >
                <div>[ {movie.label} ]</div>
                <small style={{ display: "block", fontWeight: 400, marginTop: "4px", color: "#b6ddff", fontSize: "0.85rem" }}>
                  {movie.description}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* MUSICAL INSPIRATIONS */}
        <div style={{ width: "100%", marginTop: "32px" }}>
          <h2 style={{ color: "#25e9ef", fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px", textAlign: "center" }}>
            musical inspirations
          </h2>
          <div className="link-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "8px" }}>
            {musicalInspirations.map((artist) => (
              <div
                key={artist.label}
                className="terminal-button"
                style={{ textAlign: "left", cursor: "default" }}
              >
                <div>[ {artist.label} ]</div>
                <small style={{ display: "block", fontWeight: 400, marginTop: "4px", color: "#b6ddff", fontSize: "0.85rem" }}>
                  {artist.description}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL INSPIRATIONS */}
        <div style={{ width: "100%", marginTop: "32px" }}>
          <h2 style={{ color: "#25e9ef", fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px", textAlign: "center" }}>
            visual inspirations
          </h2>
          <div className="link-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "8px" }}>
            {visualInspirations.map((visual) => (
              <div
                key={visual.label}
                className="terminal-button"
                style={{ textAlign: "left", cursor: "default" }}
              >
                <div>[ {visual.label} ]</div>
                <small style={{ display: "block", fontWeight: 400, marginTop: "4px", color: "#b6ddff", fontSize: "0.85rem" }}>
                  {visual.description}
                </small>
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="terminal-button" style={{ marginTop: "40px" }} onClick={() => goToPage("home")}>[ HOME ]</button>
      </div>
    );
  };

  return (
    <main className="terminal-page min-h-screen overflow-hidden text-white">
      <div className="ambient-glow" />
      <div className="static-noise" />
      <div className="scanlines" />
      <div className="screen-vignette" />

      <svg className="wire-map" viewBox="0 0 1200 720" aria-hidden="true">
        <path d="M73 390 L204 454 L366 397 L458 248 L339 263 L168 500 L118 646 L343 613 L430 518" />
        <path d="M782 191 L984 61 L932 190 L1039 271 L1000 345 L1116 472" />
        <path d="M129 383 L265 612 L483 491 L601 570 L804 545" />
        <path d="M602 138 L728 205 L643 291 L780 369 L887 297" />
      </svg>

      <header className="topline">[_mystery.midi // {pageData[currentPage].label.toLowerCase()}]</header>
      {renderPageContent()}

      <footer className="status-bar">
        <span>{status}</span>
        <span>
          visitors: <strong>0013874</strong>
        </span>
      </footer>
    </main>
  );
}

export default App;
