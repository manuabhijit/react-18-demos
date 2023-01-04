function Books({name, imageUrl}) {
  return (
    <div>
      {name}
      <br />
      <a href={imageUrl}>Visit</a>
      {/* <img src={imageUrl} alt="imageUrl" srcset="imageUrl" /> */}
    </div>
  );
}

export default Books;
