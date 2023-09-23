export default function Card() {
  return (
    <li>
      <div className="p_img">
        <img src="/img/image1.jpg" alt="product_image" />
      </div>
      <span className="p_name">Product Name</span>
      <span className="p_price">$99.99</span>
      <a href="#!" className="detail">
        more
      </a>
    </li>
  );
}
