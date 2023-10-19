const defaultOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: 'Europe/Paris',
};

export function FormatStamp({
  timeStamp,
  options = defaultOptions,
}: {
  timeStamp: number | null;
  options?: Intl.DateTimeFormatOptions;
}) {
  if (!timeStamp) return <p></p>;
  const formatedStamp = new Intl.DateTimeFormat('fr', options).format(new Date(timeStamp));
  return <p className="text-text-secondary text-xs">{formatedStamp}</p>;
}
