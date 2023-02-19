function Date() {

  const date = new Date("2023-02-15T23:51:59Z");
  const options = { day: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return <div>{formattedDate}</div>;
}

export default Date;