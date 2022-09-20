export const msToMinsAndSecs = (ms: number): string => {
  const mins = Math.trunc(ms / 60000);
  const secs = Math.trunc((ms % 60000) / 1000);
  const str = secs < 10 ? `${mins}:0${secs}` : `${mins}:${secs}`;

  return str;
};
