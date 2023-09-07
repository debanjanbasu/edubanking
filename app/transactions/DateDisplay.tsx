const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export default function DateDisplay() {
  return <div style={{ fontSize: "12px", color: "grey" }}>
    {formatDate(new Date())}
  </div>;
}
