import React from 'react';
import './index.css';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img25 from './assets/25.png';
import img26 from './assets/26.png';
import img27 from './assets/27.png';
import img28 from './assets/28.png';
import img29 from './assets/29.png';
import img30 from './assets/30.png';
import img31 from './assets/31.png';
import img32 from './assets/32.png';
import img33 from './assets/33.png';

export default function Coffee() {
  return (
    <>
      <div id="coffee-story">
        <div className="page-header">
          <h1>Chuyện Nhà</h1>
          <div className="page_content">
            <p className="page_content_p">
              <span>
                <span>
                  <span>
                    &nbsp;The Coffee House sẽ là&nbsp;nơi mọi người xích lại gần
                    nhau, đề cao giá trị kết nối con người và sẻ chia thân tình
                    bên những tách cà phê, ly trà đượm hương,&nbsp;truyền cảm
                    hứng về lối sống hiện đại.
                  </span>
                </span>
              </span>
            </p>
          </div>
          <ul className="page_tabs">
            <li>
              <a className="page_filter active" href="#">
                Tất cả
              </a>
            </li>
            <li>
              <a className="page_filter" href="#">
                Coffeeholic
              </a>
            </li>
            <li>
              <a className="page_filter" href="#">
                Teaholic
              </a>
            </li>
            <li>
              <a className="page_filter" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-header">
        <div className="blog-header-left">
          <div className="blog-header-left-img">
            <a href="#">
              <img src={img4} alt="" />
            </a>
          </div>
          <div className="blog-header-left-content">
            <h3>
              <a href="#">
                NĂM MỚI, UỐNG "KHỞI ĐẦU SUNG" - NHẬN LÌ XÌ KHỦNG TẠI THE COFFEE
                HOUSE
              </a>
            </h3>
            <p className="article_published_at">
              <span>21/01/2022</span>
            </p>
            <p className="article_excerpt">
              Không chỉ mở cửa tưng bừng khắp cả nước, The Coffee House còn chơi
              lớn - lì xì cực khủng cho khách hàng ghé quán dịp Tết.
            </p>
            <ul className="article_hashtag has_hashtag">
              <li>
                <a href="#">inthemood</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-header-right">
          <div className="blog-header-right-img">
            <a href="#">
              <img src={img5} alt="" />
            </a>
          </div>
          <div className="blog-header-right-content">
            <h3>
              <a href="#">
                NHỮNG LOẠI TRÀ CÓ HƯƠNG VÀ VỊ “ĐỔ GỤC” KHÁCH THĂM XUÂN NHÀ BẠN
              </a>
            </h3>
            <p className="article_published_at">
              <span>21/01/2022</span>
            </p>
            <p className="article_excerpt">
              Tết đang “lấp ló đầu ngõ” và bạn đang chuẩn bị cho một năm mới an
              khang, sum vầy. Tìm kiếm những thức trà, thức bánh thật ngon để
              tiếp đãi khách đến thăm nhà. Nếu vậy, Nhà sẽ bật mí những loại trà
              có hương và vị “đổ gục” những vị khách đến thăm xuân nhà bạn nhé!
            </p>
            <ul className="article_hashtag has_hashtag">
              <li>
                <a href="#">inthemood</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog1">
        <div className="blog1-img">
          <img src={img6} alt="" />
        </div>
        <div className="blog-content">
          <h2>Coffeeholic</h2>
          <div className="story-menu">
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img25} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a
                    href="#"
                    title="CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT"
                  >
                    CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG
                    NHẤT
                  </a>
                </h3>
                <span>11/03/2022</span>
                <p>
                  Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử
                  dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với
                  nhiều đặc điểm riêng, không...
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img26} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a
                    href="#"
                    title="BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ"
                  >
                    BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ
                  </a>
                </h3>
                <span>07/03/2022</span>
                <p>
                  Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những
                  tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý tưởng để
                  pha...
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img27} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a href="#" title="CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ">
                    CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ
                  </a>
                </h3>
                <span>4/03/2022</span>
                <p>
                  Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều
                  người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc
                  phin đã trở thành...
                </p>
              </div>
            </div>
          </div>
          <div className="view_more">
            <a className="page_filtervm" href="#">
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </div>
      <div className="blog2">
        <div className="blog2-img">
          <img src={img7} alt="" />
        </div>
        <div className="blog-content2">
          <h2>Teaholic</h2>
          <div className="story-menu">
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img28} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a
                    href="#"
                    title="TRÀ HOA HIBISCUS - TỪ LỤC ĐỊA ĐEN BƯỚC RA THẾ GIỚI"
                  >
                    TRÀ HOA HIBISCUS - TỪ LỤC ĐỊA ĐEN BƯỚC RA THẾ GIỚI
                  </a>
                </h3>
                <span>11/03/2022</span>
                <p>
                  Hibiscus vốn là thực vật bản địa của Châu Phi, theo dòng chảy
                  thời gian loại cây này dần trở nên phổ biến trên toàn thế
                  giới.Nguồn gốc trà HibiscusHibiscus là...
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img29} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a href="#" title="8 LOẠI TRÀ HOA ĐƯỢC LÒNG PHÁI ĐẸP">
                    8 LOẠI TRÀ HOA ĐƯỢC LÒNG PHÁI ĐẸP
                  </a>
                </h3>
                <span>07/03/2022</span>
                <p>
                  Đối với phụ nữ, thưởng trà hoa không chỉ để hít hà hương thơm
                  hay trải nghiệm mùi vị rất riêng, mà còn là cách chăm chút sức
                  khỏe, vỗ...
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img30} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a
                    href="#"
                    title="CHỌN NHIỆT ĐỘ NƯỚC ĐỂ PHA TRÀ ĐÚNG CHUẨN CHUYÊN GIA"
                  >
                    CHỌN NHIỆT ĐỘ NƯỚC ĐỂ PHA TRÀ ĐÚNG CHUẨN CHUYÊN GIA
                  </a>
                </h3>
                <span>4/03/2022</span>
                <p>
                  Tùy thuộc vào từng loại trà, cần sử dụng nước sôi với nhiệt độ
                  tương thích để khi pha chế có thể khơi dậy đầy đủ hương vị
                  thơm ngon...
                </p>
              </div>
            </div>
          </div>
          <div className="view_more">
            <a className="page_filtervm" href="#">
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </div>
      <div className="blog1">
        <div className="blog1-img">
          <img src={img8} alt="" />
        </div>
        <div className="blog-content">
          <h2>Blog</h2>
          <div className="story-menu">
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img31} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a href="#" title="LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?">
                    LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?
                  </a>
                </h3>
                <span>11/03/2022</span>
                <p>
                  Tadaaaa, hết Tết thì Valentine đầy yêu thương lại đang đến rồi
                  nè. Lễ tình nhân, dẫn crush đi quán nào? Nhất định phải cùng
                  người ấy đến Nhà hẹn...
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img32} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a
                    href="#"
                    title="THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ TƯỞNG ĐỂ HỘI HỌP BẠN BÈ MÙA TẾT NÀY"
                  >
                    THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ TƯỞNG ĐỂ HỘI HỌP BẠN BÈ
                    MÙA TẾT NÀY
                  </a>
                </h3>
                <span>07/03/2022</span>
                <p>
                  Những ngày cuối năm, đầu năm mới, bạn lên kế hoạch để gặp gỡ
                  những người yêu, thương, quý, mến... Vậy bạn đã tìm được điểm
                  hẹn lý tưởng chưa,...
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="story-item-top">
                <a href="#">
                  <img src={img33} alt="" />
                </a>
              </div>
              <div className="story-item-info">
                <h3>
                  <a
                    href="#"
                    title="CHAI FRESH LUÔN BÊN BẠN TRONG MỌI KHOẢNH KHẮC"
                  >
                    CHAI FRESH LUÔN BÊN BẠN TRONG MỌI KHOẢNH KHẮC
                  </a>
                </h3>
                <span>4/03/2022</span>
                <p>
                  Với sự kết nối của The Coffee House, những thức trà và cà phê
                  dạng chai Fresh sẽ là người bạn thân thiết, tuyệt vời của bạn
                  trên mọi nẻo...
                </p>
              </div>
            </div>
          </div>
          <div className="view_more">
            <a className="page_filtervm" href="#">
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
