const Companies: React.FC = () => {
  return (
    <div className="cu-main-section cu-main-section-companies">
      <div className="cu-main-section__wrapper cu-main-section-companies__wrapper">
        <h2 className="section__header">
          Join 800,000+ highly productive teams
        </h2>
        <div className="join-companies">
          <div className="join-companies__row">
            <div className="join-companies__item">
              <img
                loading="lazy"
                src="/images/join-companies/samsung.png"
                width={120}
                height={18}
                alt="Samsung"
                className="join-companies__logo join-companies__logo_samsung"
                draggable="false"
              />
            </div>
            <div className="join-companies__item">
              <img
                alt="Stanley Security"
                className="join-companies__logo join-companies__logo_stanley-security"
                height={22}
                loading="lazy"
                src="/images/join-companies/stanley-security.svg"
                width={72}
                draggable="false"
              />
            </div>
            <div className="join-companies__item">
              <img
                alt="Booking.com"
                className="join-companies__logo join-companies__logo_booking"
                height={18}
                loading="lazy"
                src="/images/join-companies/booking-com.svg"
                width={108}
                draggable="false"
              />
            </div>
            <div className="join-companies__item">
              <img
                alt="IBM"
                className="join-companies__logo join-companies__logo_ibm"
                height={23}
                loading="lazy"
                src="/images/join-companies/ibm.svg"
                style={{ maxWidth: "58px" }}
                width={58}
                draggable="false"
              />
            </div>
            <div className="join-companies__item">
              <img
                alt="Padres"
                className="join-companies__logo join-companies__logo_padres"
                height={85}
                loading="lazy"
                src="/images/join-companies/padres.svg"
                width={300}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
