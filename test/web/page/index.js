import { Carousel } from 'antd';

export default () => (
  <div>
    <Carousel effect="fade">
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
    <style jsx="true">{`
      .ant-carousel .slick-slide {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
      }

      .ant-carousel .slick-slide h3 {
        color: #fff;
      }
    `}</style>
  </div>
);