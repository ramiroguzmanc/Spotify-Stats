export const Login = () => {
  const authUri = `${import.meta.env.VITE_AUTH_URI}?client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&scope=user-read-email%20user-top-read&response_type=token&redirect_uri=${
    import.meta.env.VITE_REDIRECT_URI
  }`;

  return (
    <a href={authUri}>
      <div className="bg-green w-24 rounded text-white font-bold">Login</div>
    </a>
  );
};
