import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h3>นวัตกรรมย้อนวัยไบโอแฮคกิ้ง (Biohacking)</h3>
            <p>จะดีกว่าไหมถ้าเราสามารถดูแลสุขภาพได้ถึงระดับยีนส์ในเซลล์ 
              มีงานวิจัยรองรับทางการแพทย์และทางวิทยาศาสตร์รองรับจากการค้นคว้ากว่า 40 ปี 
              โปรแทนดิมถูกคิดค้นและพัฒนาโดย ดร. โจ แมคคอร์ด 
              นักวิทยาศาสตร์ผู้ค้นพบซุปเปอร์ออกไซด์ดิสมิวเทส (SOD) 
              ซึ่งเป็นเอ็นไซม์ที่คัดแยกอนุมูลอิสระออกจากร่างกายมนุษย์ 
              ท่านเป็นผู้ได้รับรางวัลเหรียญทอง Elliott Cresson Medal 
              ซึ่งมอบให้ผู้ที่คิดค้นนวัตกรรมทางวิทยาศาสตร์และการค้นพบใหม่ๆ</p>

          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <Image
              src="/img/protandimdual.png"
              className="img-fluid animated"
              alt="lfvn"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;