export const Login = () => {
  const authUri = `${import.meta.env.VITE_AUTH_URI}?client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&scope=user-read-email%20user-top-read&response_type=token&redirect_uri=${
    import.meta.env.VITE_REDIRECT_URI
  }`;

  return (
    <div className="bg-Spotifyblack h-screen grid place-items-center">
      <section className="flex flex-col justify-center items-center max-w-lg">
        <h1 className="text-white font-bold text-5xl text-center">
          Knows what's your top 10 traks on{" "}
          <span className="text-green">Spotify</span>?
        </h1>
        <a
          className="bg-green w-4/12 rounded-full py-3 text-white font-bold mt-7 text-2xl text-center"
          href={authUri}
        >
          Let's See!
        </a>
      </section>
    </div>
  );
};
