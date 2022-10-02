
// img componentini fazladan kod yazmamak için oluşturdum
export default function Img({src, setImgSrc}) {
  return (
    <img
      onClick={(e) => setImgSrc(e.target.src)}
      className='ellipse_img'
      src={src}
      alt='ellipse_img'
    />
  );
}
