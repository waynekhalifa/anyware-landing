const Help: React.FC = ({}) => {
  return (
    <div className="cu-main-section cu-main-section-help">
      <div className="cu-main-section__wrapper cu-main-section-help__wrapper">
        <div className="cu-main-section-help__description">
          <div className="cu-main-section-help__icon">
            <svg
              fill="none"
              height={30}
              viewBox="0 0 29 30"
              width={29}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="m0 19.1621h6.9159v-1.6859h-4.0721l1.52203-1.1155c1.65554-1.2169 2.45661-1.9521 2.45661-3.4352 0-1.6859-1.28171-2.7634-3.21763-2.7634-1.66889 0-2.56342.6465-3.48465 1.838l1.44192 1.1029c.69426-.8113 1.18826-1.1916 1.90922-1.1916.73431 0 1.25501.4056 1.25501 1.1535 0 .7352-.45394 1.2169-1.61549 2.1296l-3.11082 2.4211z" />
                <path d="m12.7824 19.1621h1.9626v-1.9141h1.255v-1.5845h-1.255v-5.438h-1.7357l-5.1268 5.6408.33378 1.3817h4.56612zm-2.4833-3.4986 2.4833-2.7634v2.7634z" />
                <path d="m24.9208 25.3459.2105.0382-.0391-.2055c-.2045-1.0745-.4226-2.2467-.6324-3.4212-.123-.6888-.0161-1.3918.2951-2.0089.7718-1.5307 1.2068-3.2545 1.2068-5.0864 0-6.36949-5.2875-11.53299-11.8099-11.53299-2.7569 0-5.29346.92262-7.30308 2.46882-.11235.08644-.24889.13449-.3884.13449h-2.805c-.50547 0-.75453-.54421-.43303-.88544 2.71383-2.88034 6.60574-4.684871 10.92951-4.684871 8.2004 0 14.8482 6.491871 14.8482 14.499991 0 2.2964-.5465 4.4677-1.5194 6.397-.0293.0582-.0392.1241-.0277.1885.2924 1.637.6014 3.2709.866 4.637l.0343.1768c.2208 1.1374.4077 2.0744.5236 2.65l.0778.3852c.0009.0046.0004.0078-.0002.01-.0008.0023-.0022.0047-.0043.0068-.0021.002-.0045.0034-.007.0041l-.003.0007c-.0019.0002-.0042.0001-.0071-.0004l-.3944-.076c-.5895-.1131-1.5491-.2957-2.7138-.5113l-.181-.0335c-1.3989-.2584-3.0721-.5602-4.7484-.8457-.0659-.0113-.1334-.0016-.193.0271-1.9757.95-4.1991 1.4837-6.5506 1.4837-4.95944 0-9.35097-2.3742-12.04783-6.0229-.26326-.3562.00188-.849.47592-.849h2.43964c.17334 0 .33992.074.46073.2015 2.1572 2.2773 5.24394 3.7034 8.67154 3.7034 1.8759 0 3.6411-.4248 5.2085-1.1785.6319-.3039 1.3518-.4084 2.0572-.2882 1.2026.2049 2.403.4179 3.5033.6175z" />
              </g>
            </svg>
          </div>
          <div className="cu-main-section__subheader cu-main-section__subheader_purple cu-main-section-help__subheader">
            #1 Support in Software
          </div>
          <h2 className="cu-main-section__header cu-main-section-help__header">
            24/7 real-time support.
          </h2>
          <p className="cu-main-section__text cu-main-section-help__text">
            ClickUp has the highest rated client support in software. We're here
            24 hours a day, every day of the week, including holidays.
          </p>
          <ul className="cu-main-section-help__list">
            <li className="cu-main-section-help__list-item">Free coaching</li>
            <li className="cu-main-section-help__list-item">Daily webinars</li>
            <li className="cu-main-section-help__list-item">
              Chat &amp; Phone
            </li>
          </ul>
        </div>
        <div className="cu-main-section-help__figure">
          <a href="/help">
            <img
              src="/images/main/help/customer-support.png"
              width={754}
              height={570}
              loading="lazy"
              alt="24/7 customer support"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
