const Teams: React.FC = () => {
  return (
    <div className="cu-main-section cu-main-section-teams cu-main-section_rounded cu-main-section_blue">
      <div className="cu-main-section-teams__wrapper hide-on-desktop">
        <nav
          className="cu-main-section-teams__tabs-nav"
          aria-label="Team types Navigation"
        >
          <a
            href="#"
            cu-data-tab-nav="project-management-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item"
          >
            Project Management
          </a>
          <a
            href="#"
            cu-data-tab-nav="engineering-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item"
          >
            Engineering
          </a>
          <a
            href="#"
            cu-data-tab-nav="sales-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item"
          >
            Sales
          </a>
          <a
            href="#"
            cu-data-tab-nav="marketing-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item"
          >
            Marketing
          </a>
          <a
            href="#"
            cu-data-tab-nav="product-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item cu-tab__item_active"
          >
            Product
          </a>
          <a
            href="#"
            cu-data-tab-nav="design-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item"
          >
            Design
          </a>
          <a
            href="#"
            cu-data-tab-nav="finance-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item"
          >
            Finance
          </a>
          <a
            href="#"
            cu-data-tab-nav="hr-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item"
          >
            HR
          </a>
          <a
            href="#"
            cu-data-tab-nav="it-teams-tab"
            className="cu-main-section-teams__tabs-nav-item cu-tab__item"
          >
            IT
          </a>
        </nav>
      </div>
      <div className="cu-main-section__wrapper cu-main-section-teams__wrapper">
        <div className="cu-main-section__subheader cu-main-section__subheader_blue cu-main-section-teams__subheader">
          built for everyone
        </div>
        <h2 className="cu-main-section__header cu-main-section-teams__header">
          Built for teams from 1 to 1,000+.
        </h2>
        <div className="cu-main-section-teams__tabs cu-tab">
          <nav
            className="cu-main-section-teams__tabs-nav show-on-desktop"
            aria-label="Team types Navigation"
          >
            <a
              href="#"
              cu-data-tab-nav="project-management-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item"
            >
              Project Management
            </a>
            <a
              href="#"
              cu-data-tab-nav="engineering-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item"
            >
              Engineering
            </a>
            <a
              href="#"
              cu-data-tab-nav="sales-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item"
            >
              Sales
            </a>
            <a
              href="#"
              cu-data-tab-nav="marketing-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item"
            >
              Marketing
            </a>
            <a
              href="#"
              cu-data-tab-nav="product-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item cu-tab__item_active"
            >
              Product
            </a>
            <a
              href="#"
              cu-data-tab-nav="design-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item"
            >
              Design
            </a>
            <a
              href="#"
              cu-data-tab-nav="finance-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item"
            >
              Finance
            </a>
            <a
              href="#"
              cu-data-tab-nav="hr-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item"
            >
              HR
            </a>
            <a
              href="#"
              cu-data-tab-nav="it-teams-tab"
              className="cu-main-section-teams__tabs-nav-item cu-tab__item"
            >
              IT
            </a>
          </nav>
          <div className="cu-main-section-teams__tabs-content cu-tab__content">
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel"
              cu-data-tab-panel="project-management-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={22}
                        viewBox="0 0 28 22"
                        width={28}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m3.90798 11.7969c-.17812-.3118-.32158-.5826-.43026-.7969.10868-.2143.25214-.4851.43026-.7968.47031-.82301 1.17342-1.91563 2.10469-3.0021 1.88302-2.19686 4.54643-4.20106 7.98763-4.20106 3.4413 0 6.1047 2.0042 7.9877 4.20106.9313 1.08647 1.6344 2.17909 2.1047 3.0021.1781.3117.3215.5825.4302.7968-.1087.2143-.2521.4851-.4302.7969-.4703.823-1.1734 1.9156-2.1047 3.0021-1.883 2.1968-4.5464 4.201-7.9877 4.201-3.4412 0-6.10461-2.0042-7.98763-4.201-.93127-1.0865-1.63438-2.1791-2.10469-3.0021zm23.31742-1.3231c.0003.0005.0005.001-1.2251.5262 1.2256.5253 1.2254.5257 1.2251.5262l-.0005.0012-.0013.0031-.0037.0085-.012.0272c-.0099.0226-.0239.0537-.0418.093-.0359.0785-.0879.1895-.1559.3284-.1359.2775-.3365.6673-.6022 1.1323-.5297.927-1.3266 2.1677-2.3953 3.4145-2.117 2.4698-5.4536 5.1323-10.0124 5.1323-4.5587 0-7.89534-2.6625-10.01232-5.1323-1.06873-1.2468-1.86562-2.4875-2.39531-3.4145-.26569-.465-.46635-.8548-.602261-1.1323-.068005-.1389-.119944-.2499-.155841-.3284-.017953-.0393-.031907-.0704-.041864-.093l-.011944-.0272-.003728-.0085-.001304-.0031-.000511-.0012c-.000217-.0005-.000418-.0009 1.225113-.5262-1.225531-.5252-1.22533-.5257-1.225113-.5262l.000511-.0012.001304-.003.003728-.0086.011944-.0272c.009957-.0225.023911-.0537.041864-.0929.035897-.0785.087836-.1895.155841-.3284.135911-.27747.336571-.66736.602261-1.13231.52969-.92697 1.32658-2.16768 2.39531-3.41454 2.11698-2.4698 5.45362-5.132276 10.01232-5.132276 4.5588 0 7.8954 2.662476 10.0124 5.132276 1.0687 1.24686 1.8656 2.48757 2.3953 3.41454.2657.46495.4663.85484.6022 1.13231.068.1389.12.2499.1559.3284.0179.0392.0319.0704.0418.0929l.012.0272.0037.0086.0013.003zm-1.2251.5262 1.2256-.5252c.1437.3354.1437.7151 0 1.0505zm-25.225501-.5252 1.225531.5252-1.225531.5253c-.143742-.3354-.143742-.7151 0-1.0505zm10.558901.5252c0-1.47272 1.1939-2.66663 2.6666-2.66663 1.4728 0 2.6667 1.19391 2.6667 2.66663 0 1.4728-1.1939 2.6667-2.6667 2.6667-1.4727 0-2.6666-1.1939-2.6666-2.6667zm2.6666-5.33329c-2.9455 0-5.33331 2.38781-5.33331 5.33329 0 2.9456 2.38781 5.3334 5.33331 5.3334s5.3334-2.3878 5.3334-5.3334c0-2.94548-2.3879-5.33329-5.3334-5.33329z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Visualize &amp; plan
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Manage any project from start to finish with highly
                        customizable views that make project planning a breeze.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={30}
                        viewBox="0 0 30 30"
                        width={30}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m7.50008 3c-1.03553 0-1.875.83947-1.875 1.875s.83947 1.875 1.875 1.875 1.875-.83947 1.875-1.875-.83947-1.875-1.875-1.875zm3.88572 4.81937c.6209-.81807.9893-1.83819.9893-2.94437 0-2.69239-2.1826-4.875-4.87502-4.875-2.69239 0-4.875 2.18261-4.875 4.875 0 1.10619.36843 2.12632.98928 2.94439-1.93616 1.1578-3.308689 3.15571-3.6024945 5.49361-.1032964.8219.4792975 1.572 1.3012545 1.6753.82197.1033 1.57204-.4793 1.67533-1.3013.27773-2.2099 2.18461-3.937 4.51163-3.937 2.32707 0 4.23402 1.7271 4.51182 3.937.1033.822.8533 1.4046 1.6753 1.3013s1.4045-.8534 1.3013-1.6753c-.2939-2.338-1.6665-4.33584-3.6027-5.49363zm5.1144-1.81937c0-.82843.6715-1.5 1.5-1.5 1.9878 0 3.8501.97882 5.1856 2.31434s2.3144 3.19786 2.3144 5.18566c0 .8284-.6716 1.5-1.5 1.5-.8285 0-1.5-.6716-1.5-1.5 0-1.0122-.5212-2.14986-1.4357-3.06434s-2.0522-1.43566-3.0643-1.43566c-.8285 0-1.5-.67157-1.5-1.5zm5.9999 12c-1.0356 0-1.875.8395-1.875 1.875s.8394 1.875 1.875 1.875c1.0355 0 1.875-.8395 1.875-1.875s-.8395-1.875-1.875-1.875zm3.8857 4.8194c.6209-.8181.9893-1.8382.9893-2.9444 0-2.6924-2.1826-4.875-4.875-4.875s-4.875 2.1826-4.875 4.875c0 1.1062.3684 2.1263.9893 2.9444-1.9362 1.1578-3.3087 3.1557-3.6025 5.4936-.1033.8219.4793 1.572 1.3012 1.6753.822.1033 1.5721-.4793 1.6754-1.3013.2777-2.2099 2.1846-3.937 4.5116-3.937 2.3271 0 4.234 1.7271 4.5118 3.937.1033.822.8533 1.4046 1.6753 1.3013s1.4046-.8534 1.3013-1.6753c-.2939-2.338-1.6665-4.3358-3.6027-5.4936zm-20.38564-6.3194c.82843 0 1.5.6716 1.5 1.5 0 1.0122.52118 2.1499 1.43566 3.0643.91448.9145 2.05218 1.4357 3.06438 1.4357.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5c-1.9879 0-3.85018-.9788-5.1857-2.3143-1.33552-1.3356-2.31434-3.1979-2.31434-5.1857 0-.8284.67157-1.5 1.5-1.5z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Collaborate
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Work with your team in real-time with Chat, assign
                        comments for action items, and never miss a beat with
                        notifications that bring everything in one place.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 26 26"
                        width={26}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m10.1339.866117c.4881.488153.4881 1.279613 0 1.767763l-5.00002 5c-.48815.48816-1.27961.48816-1.76776 0l-2.500003-2.5c-.488156-.48815-.488156-1.27961 0-1.76776.488153-.48816 1.279613-.48816 1.767763 0l1.61612 1.61611 4.11612-4.116113c.48815-.488156 1.27961-.488156 1.76778 0zm1.6161 4.633883c0-.69036.5596-1.25 1.25-1.25h11.25c.6904 0 1.25.55964 1.25 1.25s-.5596 1.25-1.25 1.25h-11.25c-.6904 0-1.25-.55964-1.25-1.25zm-1.6161 4.11612c.4881.48818.4881 1.27958 0 1.76778l-5.00002 5c-.48815.4881-1.27961.4881-1.76776 0l-2.500003-2.5c-.488156-.4882-.488156-1.2796 0-1.7678.488153-.4881 1.279613-.4881 1.767763 0l1.61612 1.6161 4.11612-4.11608c.48815-.48816 1.27961-.48816 1.76778 0zm1.6161 4.63388c0-.6904.5596-1.25 1.25-1.25h11.25c.6904 0 1.25.5596 1.25 1.25s-.5596 1.25-1.25 1.25h-11.25c-.6904 0-1.25-.5596-1.25-1.25zm-1.6161 4.1161c.4881.4882.4881 1.2796 0 1.7678l-5.00002 5c-.48815.4881-1.27961.4881-1.76776 0l-2.500003-2.5c-.488156-.4882-.488156-1.2796 0-1.7678.488153-.4881 1.279613-.4881 1.767763 0l1.61612 1.6161 4.11612-4.1161c.48815-.4881 1.27961-.4881 1.76778 0zm1.6161 4.6339c0-.6904.5596-1.25 1.25-1.25h11.25c.6904 0 1.25.5596 1.25 1.25s-.5596 1.25-1.25 1.25h-11.25c-.6904 0-1.25-.5596-1.25-1.25z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Track progress
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Add visual widgets for team members, tasks, sprints,
                        time tracking, statuses, docs, embeds, and more.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-4392236"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={650}
                  loading="lazy"
                  alt="Project Management"
                  src="/images/main/teams/project-management.png"
                  width={980}
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel"
              cu-data-tab-panel="engineering-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={29}
                        viewBox="0 0 35 29"
                        width={35}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m11.2493 3.50004c-4.37221 0-7.91662 3.54441-7.91662 7.91666 0 4.3723 3.54441 7.9167 7.91662 7.9167h18.3442l-3.6304-3.6304c-.6183-.6184-.6183-1.6209 0-2.2392s1.6208-.6183 2.2392 0l6.3333 6.3333c.6183.6184.6183 1.6209 0 2.2392l-6.3333 6.3333c-.6184.6184-1.6209.6184-2.2392 0-.6183-.6183-.6183-1.6208 0-2.2391l3.6304-3.6305h-18.3442c-6.12111 0-11.083284-4.9621-11.083284-11.0833 0-6.12115 4.962174-11.083326 11.083284-11.083326 6.1212 0 11.0834 4.962176 11.0834 11.083326v3.1667c0 .8744-.7089 1.5833-1.5834 1.5833-.8744 0-1.5833-.7089-1.5833-1.5833v-3.1667c0-4.37225-3.5444-7.91666-7.9167-7.91666z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Develop better products, faster.
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        From backlog to release, prioritize and plan your
                        initiatives, epics, tasks, and docs—all on a shared
                        platform with your key stakeholders.&nbsp;
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 29 26"
                        width={29}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m15.621 3.62678c-.5701-.98411-1.9823-.98411-2.5524 0l-9.9919 17.24722c-.57456.9918.13591 2.2373 1.27622 2.2373h19.98378c1.1403 0 1.8508-1.2455 1.2763-2.2373zm-5.0305-1.45553c1.6772-2.894993 5.8315-2.895005 7.5086-.00001l9.9919 17.24726c1.6903 2.9175-.3998 6.5815-3.7543 6.5815h-19.98378c-3.354489 0-5.44454-3.664-3.754307-6.5815zm3.7543 4.33004c.7922 0 1.4345.64666 1.4345 1.44435v6.49956c0 .7977-.6423 1.4444-1.4345 1.4444s-1.4344-.6467-1.4344-1.4444v-6.49956c0-.79769.6422-1.44435 1.4344-1.44435zm0 11.55481c.7922 0 1.4345.6466 1.4345 1.4443v.7222c0 .7977-.6423 1.4444-1.4345 1.4444s-1.4344-.6467-1.4344-1.4444v-.7222c0-.7977.6422-1.4443 1.4344-1.4443z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Visibility—Without the busy work
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Agile dashboards provide better insights, automatic
                        progress tracking and updates, and reduce redundant
                        meetings.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        viewBox="0 0 496 512"
                        width={31}
                        height={29}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zm65.8-383.2c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zm-147.6 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Seamless DevOps integrations
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Connect your existing development workflows with native
                        integrations for GitHub, GitLab Bitbucket, Sentry,
                        Slack, Figma, and more.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-5874101"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={856}
                  loading="lazy"
                  alt="Agile"
                  src="/images/main/teams/Engineering.png"
                  width={1401}
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel"
              cu-data-tab-panel="sales-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={28}
                        viewBox="0 0 28 28"
                        width={28}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipRule="evenodd" fill="#2a2e34" fillRule="evenodd">
                          <path d="m14.0033 9.23811c-2.6299 0-4.76187 2.13199-4.76187 4.76189s2.13197 4.7619 4.76187 4.7619c2.63 0 4.7619-2.132 4.7619-4.7619s-2.1319-4.76189-4.7619-4.76189zm-2.0952 4.76189c0-1.1572.9381-2.0952 2.0952-2.0952 1.1572 0 2.0953.938 2.0953 2.0952s-.9381 2.0953-2.0953 2.0953c-1.1571 0-2.0952-.9381-2.0952-2.0953z" />
                          <path d="m11.3541.666626c-.5914 0-1.1122.389624-1.2791.957034l-.95255 3.23797-.60033.34626-3.29717-.78148c-.573-.13581-1.16725.12037-1.46191.63023l-2.64073 4.56931c-.296248.51255-.219001 1.15915.18966 1.58755l2.33066 2.443v.6869l-2.33066 2.443c-.408661.4284-.485908 1.075-.18966 1.5876l2.64073 4.5693c.29466.5098.88891.766 1.46191.6302l3.29717-.7815.60033.3463.95255 3.238c.1669.5674.6877.957 1.2791.957h5.2815c.5891 0 1.1084-.3866 1.2773-.9509l.9708-3.2423.6004-.3462 3.2843.7951c.5747.1391 1.1723-.1168 1.4681-.6287l2.6408-4.5693c.295-.5106.2197-1.1543-.1853-1.5829l-2.3252-2.461v-.6943l2.3252-2.461c.405-.4286.4803-1.0723.1853-1.58285l-2.6408-4.56931c-.2958-.51192-.8934-.76786-1.4681-.62873l-3.2843.79512-.6004-.34626-.9708-3.24227c-.1689-.56431-.6882-.950874-1.2773-.950874zm.176 5.459634.8216-2.79297h3.2913l.8382 2.79913c.0976.32607.3162.60246.6111.77253l1.5212.8774c.2965.17099.6473.22144.9799.14091l2.8333-.68592 1.6445 2.84546-2.0069 2.1241c-.2339.2475-.3642.5751-.3642.9157v1.7548c0 .3405.1303.6681.3642.9157l2.0069 2.124-1.6445 2.8455-2.8333-.6859c-.3326-.0806-.6834-.0301-.9799.1409l-1.5212.8774c-.2949.17-.5135.4464-.6111.7725l-.8382 2.7991h-3.2913l-.8216-2.7929c-.0967-.3287-.3162-.6076-.613-.7787l-1.52121-.8774c-.29453-.1699-.64283-.2209-.97367-.1424l-2.84682.6747-1.64448-2.8455 2.00979-2.1067c.23659-.248.36859-.5776.36859-.9203v-1.7548c0-.3428-.132-.6724-.36859-.9204l-2.00979-2.1067 1.64448-2.84548 2.84682.67474c.33084.07841.67914.02747.97367-.1424l1.52121-.87741c.2968-.17117.5163-.45002.613-.77869z" />
                        </g>
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Automate sales processes
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Keep deals moving through your pipeline with automations
                        that assign leads, track follow-up, and trigger lead
                        status updates for your team.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={22}
                        viewBox="0 0 28 22"
                        width={28}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#000">
                          <path
                            clipRule="evenodd"
                            d="m4.40033 3.00004c-.46044 0-1.06667.46134-1.06667 1.33333v13.33333c0 .872.60623 1.3333 1.06667 1.3333h19.19997c.4605 0 1.0667-.4613 1.0667-1.3333v-13.33333c0-.87199-.6062-1.33333-1.0667-1.33333zm-3.733338 1.33333c0-2.07352 1.542808-3.999996 3.733338-3.999996h19.19997c2.1906 0 3.7334 1.926476 3.7334 3.999996v13.33333c0 2.0735-1.5428 4-3.7334 4h-19.19997c-2.19053 0-3.733338-1.9265-3.733338-4z"
                            fillRule="evenodd"
                          />
                          <path d="m15.3337 3.00004h2.6666v15.99996h-2.6666z" />
                          <path d="m19.3337 5.66671c0-.73638.5969-1.33334 1.3333-1.33334h1.3333c.7364 0 1.3334.59696 1.3334 1.33334s-.597 1.33333-1.3334 1.33333h-1.3333c-.7364 0-1.3333-.59695-1.3333-1.33333z" />
                          <path d="m19.3337 9.66671c0-.73638.5969-1.33334 1.3333-1.33334h1.3333c.7364 0 1.3334.59696 1.3334 1.33334 0 .73639-.597 1.33329-1.3334 1.33329h-1.3333c-.7364 0-1.3333-.5969-1.3333-1.33329z" />
                          <path d="m19.3337 13.6667c0-.7364.5969-1.3333 1.3333-1.3333h1.3333c.7364 0 1.3334.5969 1.3334 1.3333s-.597 1.3333-1.3334 1.3333h-1.3333c-.7364 0-1.3333-.5969-1.3333-1.3333z" />
                        </g>
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Manage accounts
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Track prospects, clients, and deals on a List, Board, or
                        Table view that make it easy to visualize your accounts
                        at a glance.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={28}
                        viewBox="0 0 28 28"
                        width={28}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipRule="evenodd" fill="#2a2e34" fillRule="evenodd">
                          <path d="m14.0003 5.99996c.7364 0 1.3334.59695 1.3334 1.33333v6.66671c0 .3536-.1405.6927-.3906.9428l-4.6666 4.6666c-.52073.5207-1.36495.5207-1.88565 0s-.5207-1.3649 0-1.8856l4.27615-4.2761v-6.11441c0-.73638.5969-1.33333 1.3333-1.33333z" />
                          <path d="m14.0003 3.33329c-5.89101 0-10.66664 4.77563-10.66664 10.66671 0 5.891 4.77563 10.6666 10.66664 10.6666 5.8911 0 10.6667-4.7756 10.6667-10.6666 0-5.89108-4.7756-10.66671-10.6667-10.66671zm-13.333308 10.66671c0-7.36384 5.969538-13.333374 13.333308-13.333374 7.3638 0 13.3334 5.969534 13.3334 13.333374 0 7.3638-5.9696 13.3333-13.3334 13.3333-7.36377 0-13.333308-5.9695-13.333308-13.3333z" />
                        </g>
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Real-time reporting
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        See how deals track over time, who is closing, and how
                        your team is performing overall with customizable
                        Dashboards.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-6331882"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={846}
                  loading="lazy"
                  alt="Sales"
                  src="/images/main/teams/salesv2@2x.png"
                  width={1274}
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel"
              cu-data-tab-panel="marketing-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={27}
                        viewBox="0 0 29 27"
                        width={29}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m23.1859 7.88573 1.0747-2.19082c.0301-.06143.0796-.11127.1408-.14187l2.2365-1.11822c.2322-.11613.2297-.44842-.0042-.56107l-2.2281-1.07277c-.0638-.03072-.1153-.08219-.146-.14599l-1.0727-2.228057c-.1127-.233961-.445-.236441-.5611-.004187l-1.1182 2.236444c-.0306.0612-.0805.11066-.1419.1408l-2.1908 1.07474c-.2312.11342-.2337.44211-.0043.55901l2.1993 1.12037c.0588.02996.1066.07778.1366.1366l1.1204 2.19924c.1169.22946.4455.22698.559-.00422zm-20.41462-2.6728c-.62218-1.53531.90662-3.06413 2.44194-2.44194l4.11674 1.6683 3.39974-2.85879c1.2679-1.066171 3.1943-.08462 3.077 1.56782l-.3145 4.43079 3.7695 2.34991c1.4057.87638 1.0675 3.01188-.5403 3.41088l-2.8951.7186 10.3076 10.3076c.4881.4882.4881 1.2796 0 1.7678-.4882.4881-1.2796.4881-1.7678 0l-10.3074-10.3074-.7185 2.8946c-.3991 1.6078-2.5345 1.9461-3.41089.5403l-2.34991-3.7695-4.43078.3145c-1.65244.1173-2.634006-1.8091-1.56783-3.077l2.85879-3.39973zm2.8716.42966 1.25505 3.09701c.26093.64386.14446 1.3792-.30266 1.9109l-2.15066 2.5576 3.33327-.2366c.69298-.0491 1.35636.2889 1.72389.8784l1.76783 2.8357.805-3.2432c.1674-.6743.6938-1.2007 1.3681-1.3681l3.2432-.805-2.8357-1.76782c-.5896-.36753-.9276-1.03091-.8784-1.72389l.2366-3.33327-2.5576 2.15066c-.5317.44712-1.26705.56359-1.91091.30266zm-.13227 17.55231-1.07474 2.1908c-.11342.2312-.44211.2337-.55901.0043l-1.12037-2.1993c-.02996-.0588-.07778-.1066-.1366-.1366l-2.199241-1.1204c-.229463-.1169-.226983-.4455.004218-.559l2.190823-1.0747c.06143-.0301.11127-.0796.14187-.1408l1.11822-2.2365c.11613-.2322.44843-.2297.56107.0042l1.07277 2.2281c.03072.0638.0822.1153.146.146l2.22805 1.0727c.23396.1127.23644.445.00418.5611l-2.23643 1.1182c-.06121.0306-.11067.0805-.14081.1419zm19.50539-5.2812.9027-1.8402c.0253-.0516.0669-.0935.1183-.1192l1.8785-.9392c.1951-.0976.193-.3767-.0035-.4713l-1.8715-.9011c-.0536-.0258-.0968-.069-.1226-.1226l-.9011-1.8715c-.0946-.1965-.3737-.1986-.4713-.0035l-.9392 1.8785c-.0257.0514-.0676.093-.1192.1183l-1.8402.9027c-.1942.0953-.1963.3714-.0036.4696l1.8473.941c.0494.0252.0896.0654.1148.1148l.941 1.8473c.0982.1927.3743.1906.4696-.0036z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Campaign management
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Plan your marketing campaigns on a flexible timeline
                        that makes it easy to track promotions, ad campaigns,
                        events, and more.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={30}
                        viewBox="0 0 30 30"
                        width={30}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m7.50008 3c-1.03553 0-1.875.83947-1.875 1.875s.83947 1.875 1.875 1.875 1.875-.83947 1.875-1.875-.83947-1.875-1.875-1.875zm3.88572 4.81937c.6209-.81807.9893-1.83819.9893-2.94437 0-2.69239-2.1826-4.875-4.87502-4.875-2.69239 0-4.875 2.18261-4.875 4.875 0 1.10619.36843 2.12632.98928 2.94439-1.93616 1.1578-3.308689 3.15571-3.6024945 5.49361-.1032964.8219.4792975 1.572 1.3012545 1.6753.82197.1033 1.57204-.4793 1.67533-1.3013.27773-2.2099 2.18461-3.937 4.51163-3.937 2.32707 0 4.23402 1.7271 4.51182 3.937.1033.822.8533 1.4046 1.6753 1.3013s1.4045-.8534 1.3013-1.6753c-.2939-2.338-1.6665-4.33584-3.6027-5.49363zm5.1144-1.81937c0-.82843.6715-1.5 1.5-1.5 1.9878 0 3.8501.97882 5.1856 2.31434s2.3144 3.19786 2.3144 5.18566c0 .8284-.6716 1.5-1.5 1.5-.8285 0-1.5-.6716-1.5-1.5 0-1.0122-.5212-2.14986-1.4357-3.06434s-2.0522-1.43566-3.0643-1.43566c-.8285 0-1.5-.67157-1.5-1.5zm5.9999 12c-1.0356 0-1.875.8395-1.875 1.875s.8394 1.875 1.875 1.875c1.0355 0 1.875-.8395 1.875-1.875s-.8395-1.875-1.875-1.875zm3.8857 4.8194c.6209-.8181.9893-1.8382.9893-2.9444 0-2.6924-2.1826-4.875-4.875-4.875s-4.875 2.1826-4.875 4.875c0 1.1062.3684 2.1263.9893 2.9444-1.9362 1.1578-3.3087 3.1557-3.6025 5.4936-.1033.8219.4793 1.572 1.3012 1.6753.822.1033 1.5721-.4793 1.6754-1.3013.2777-2.2099 2.1846-3.937 4.5116-3.937 2.3271 0 4.234 1.7271 4.5118 3.937.1033.822.8533 1.4046 1.6753 1.3013s1.4046-.8534 1.3013-1.6753c-.2939-2.338-1.6665-4.3358-3.6027-5.4936zm-20.38564-6.3194c.82843 0 1.5.6716 1.5 1.5 0 1.0122.52118 2.1499 1.43566 3.0643.91448.9145 2.05218 1.4357 3.06438 1.4357.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5c-1.9879 0-3.85018-.9788-5.1857-2.3143-1.33552-1.3356-2.31434-3.1979-2.31434-5.1857 0-.8284.67157-1.5 1.5-1.5z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Collaborate on marketing assets
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Draft and edit documents with your team, annotate design
                        files, and manage all of your marketing assets in one
                        place.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={30}
                        viewBox="0 0 26 30"
                        width={26}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m5.91667.833374c.7824 0 1.41666.634266 1.41666 1.416666v1.41667h11.33337v-1.41667c0-.7824.6342-1.416666 1.4166-1.416666s1.4167.634266 1.4167 1.416666v1.59519c2.4441.62906 4.25 2.84771 4.25 5.48814v14.16663c0 3.1297-2.5371 5.6667-5.6667 5.6667h-14.16663c-3.12962 0-5.66667-2.537-5.66667-5.6667v-14.16663c0-2.64043 1.80593-4.85908 4.25-5.48814v-1.59519c0-.7824.63426-1.416666 1.41667-1.416666zm0 5.666666c-1.56481 0-2.83334 1.26853-2.83334 2.83333v1.41663h19.83337v-1.41663c0-1.5648-1.2686-2.83333-2.8334-2.83333zm17.00003 7.08336h-19.83337v9.9166c0 1.5648 1.26853 2.8334 2.83334 2.8334h14.16663c1.5648 0 2.8334-1.2686 2.8334-2.8334z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Content calendars
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Visualize your content schedule on a calendar with
                        dates, assignees, and Custom Statuses that make it easy
                        to understand where your content stands at a glance.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-4391884"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={650}
                  loading="lazy"
                  alt="Marketing"
                  src="/images/main/teams/marketing.png"
                  width={980}
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel cu-tab__panel_active"
              cu-data-tab-panel="product-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={33}
                        viewBox="0 0 31 33"
                        width={31}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m.875 14.875c0-8.07716 6.54784-14.625 14.625-14.625 8.0772 0 14.625 6.54784 14.625 14.625 0 5.523-3.2101 9.9856-6.4069 12.9692-1.6165 1.5088-3.2876 2.696-4.6774 3.5135-.6942.4083-1.3368.7354-1.8841.9662-.4646.196-1.0917.4261-1.6566.4261s-1.192-.2301-1.6566-.4261c-.5473-.2308-1.1899-.5579-1.8841-.9662-1.3898-.8175-3.06089-2.0047-4.67744-3.5135-3.19673-2.9836-6.40686-7.4462-6.40686-12.9692zm14.625-11.375c-6.28224 0-11.375 5.09276-11.375 11.375 0 4.227 2.47737 7.8894 5.37439 10.5933 1.43031 1.3349 2.90761 2.3822 4.10771 3.0881.6008.3534 1.1134.6102 1.4993.773.1935.0816.3213.1249.3936.1476.0723-.0227.2001-.066.3936-.1476.3859-.1628.8985-.4196 1.4993-.773 1.2001-.7059 2.6774-1.7532 4.1077-3.0881 2.897-2.7039 5.3744-6.3663 5.3744-10.5933 0-6.28224-5.0928-11.375-11.375-11.375zm-4.875 11.375c0-2.6924 2.1826-4.875 4.875-4.875s4.875 2.1826 4.875 4.875-2.1826 4.875-4.875 4.875-4.875-2.1826-4.875-4.875zm4.875-1.625c-.8975 0-1.625.7275-1.625 1.625s.7275 1.625 1.625 1.625 1.625-.7275 1.625-1.625-.7275-1.625-1.625-1.625z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Prioritize, Plan, and Deliver
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Consolidate all feedback, ideas, epics, and sprints into
                        a unified&nbsp; product roadmap—providing stakeholders
                        full context and visibility into what's coming
                        next.&nbsp;
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={29}
                        viewBox="0 0 35 29"
                        width={35}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m11.2493 3.50004c-4.37221 0-7.91662 3.54441-7.91662 7.91666 0 4.3723 3.54441 7.9167 7.91662 7.9167h18.3442l-3.6304-3.6304c-.6183-.6184-.6183-1.6209 0-2.2392s1.6208-.6183 2.2392 0l6.3333 6.3333c.6183.6184.6183 1.6209 0 2.2392l-6.3333 6.3333c-.6184.6184-1.6209.6184-2.2392 0-.6183-.6183-.6183-1.6208 0-2.2391l3.6304-3.6305h-18.3442c-6.12111 0-11.083284-4.9621-11.083284-11.0833 0-6.12115 4.962174-11.083326 11.083284-11.083326 6.1212 0 11.0834 4.962176 11.0834 11.083326v3.1667c0 .8744-.7089 1.5833-1.5834 1.5833-.8744 0-1.5833-.7089-1.5833-1.5833v-3.1667c0-4.37225-3.5444-7.91666-7.9167-7.91666z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Customize your workflows
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Create custom agile workflows tailor-fit for product
                        management, and automate handoffs to design and
                        engineering.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 28 26"
                        width={28}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m13.9996 2.6875c-.6903 0-1.25.55964-1.25 1.25s.5597 1.25 1.25 1.25c.6904 0 1.25-.55964 1.25-1.25s-.5596-1.25-1.25-1.25zm-3.75 1.25c0-2.07107 1.679-3.75 3.75-3.75 2.0711 0 3.75 1.67893 3.75 3.75 0 1.63277-1.0435 3.02182-2.5 3.53662v2.92678c.6908.2441 1.2887.685 1.7264 1.2552l2.7844-.9047c.0395-1.5443 1.0381-2.96598 2.591-3.47053 1.9697-.64 4.0853.43794 4.7253 2.40765.64 1.96968-.438 4.08528-2.4077 4.72528-1.5528.5045-3.1964-.0587-4.1361-1.2848l-2.7845.9048c-.0189.7527-.2597 1.4502-.6593 2.0298l1.7205 2.3682c1.4809-.4397 3.1416.0707 4.1013 1.3917 1.2174 1.6755.846 4.0207-.8296 5.238-1.6755 1.2173-4.0206.8459-5.238-.8296-.9597-1.321-.9319-3.0581-.0562-4.3307l-1.7203-2.3677c-.3382.1002-.6964.154-1.0672.154s-.7291-.0538-1.0674-.1541l-1.7204 2.3678c.8758 1.2726.9035 3.0097-.0562 4.3307-1.21735 1.6755-3.56249 2.0469-5.23801.8296-1.67553-1.2174-2.04697-3.5625-.82962-5.238.95972-1.321 2.6204-1.8314 4.10131-1.3917l1.72072-2.3684c-.3995-.5796-.6402-1.2771-.6592-2.0297l-2.78425-.9047c-.93968 1.2262-2.58321 1.7894-4.13607 1.2848-1.9697-.64-3.047644-2.7556-2.407648-4.72527.639998-1.96971 2.755578-3.04765 4.725278-2.40765 1.55286.50455 2.55146 1.92623 2.59098 3.47052l2.78421.9046c.4377-.5702 1.0356-1.011 1.7263-1.2551v-2.92678c-1.4565-.5148-2.5-1.90385-2.5-3.53662zm14.4494 6.5236c-.2133-.65661-.9185-1.01592-1.5751-.80259-.6565.21333-1.0159.91849-.8025 1.57509.2133.6566.9185 1.0159 1.5751.8026.6565-.2134 1.0159-.9186.8025-1.5751l1.1888-.3863zm-19.82343-.80258c-.65657-.21333-1.36176.14598-1.5751.80258-.21333.6565.14599 1.3617.80255 1.5751.65657.2133 1.36176-.146 1.5751-.8026.21333-.6566-.14599-1.36175-.80255-1.57508zm9.12403 3.02898c-.6903 0-1.25.5596-1.25 1.25s.5597 1.25 1.25 1.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25zm-5.14309 8.3289c-.55851-.4058-1.34022-.282-1.746.2765s-.28197 1.3403.27654 1.746c.55851.4058 1.34022.282 1.746-.2765s.28197-1.3402-.27654-1.746zm12.03189.2766c-.4058-.5586-1.1875-.6824-1.746-.2766s-.6823 1.1875-.2765 1.746c.4057.5585 1.1875.6823 1.746.2766.5585-.4058.6823-1.1875.2765-1.746z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        All-in-one platform
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Connect product briefs,&nbsp;whiteboards,&nbsp;docs, and
                        more directly to your epics and stories for better
                        visibility—without the busy work.&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-5874101"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={650}
                  loading="lazy"
                  alt="Product"
                  src="/images/main/teams/product.png"
                  width={980}
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel"
              cu-data-tab-panel="design-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 26 26"
                        width={26}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m3.08333.25c-1.5648 0-2.83333 1.26853-2.83333 2.83333v8.49997c.000001 1.5648 1.26853 2.8334 2.83333 2.8334h8.49997c1.5648 0 2.8334-1.2686 2.8334-2.8334v-8.49997c0-1.5648-1.2686-2.833331-2.8334-2.83333zm0 11.3333v-8.49997h8.49997v8.49997zm0 4.25c-1.5648 0-2.833329 1.2686-2.833329 2.8334v4.25c0 1.5648 1.268529 2.8333 2.833329 2.8333h4.25c1.56481 0 2.83337-1.2685 2.83337-2.8333v-4.25c0-1.5648-1.26856-2.8334-2.83337-2.8334zm0 7.0834v-4.25h4.25v4.25zm11.33337-7.0834c-1.5648 0-2.8334 1.2686-2.8334 2.8334v4.25c0 1.5648 1.2686 2.8333 2.8334 2.8333h8.5c1.5648 0 2.8333-1.2685 2.8333-2.8333v-4.25c0-1.5648-1.2685-2.8334-2.8333-2.8334zm0 7.0834v-4.25h8.5v4.25zm4.25-22.666701c-1.5648 0-2.8334 1.268531-2.8334 2.833331v8.49997c0 1.5648 1.2686 2.8334 2.8334 2.8334h4.25c1.5648 0 2.8333-1.2686 2.8333-2.8334v-8.49997c0-1.5648-1.2685-2.833331-2.8333-2.833331zm0 11.333301v-8.49997h4.25v8.49997z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Manage creative workflows
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Bring all of your design projects into one place with
                        ClickUp's customizable views—see project details on a
                        List, workflows on a Board, or due dates on a Calendar.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 32 26"
                        width={32}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m20.9578 3.08333c-.9958 0-1.8986.38496-2.5728 1.01691-.5708.53509-1.4673.50612-2.0024-.06469-.5351-.57082-.5061-1.46734.0647-2.00243 1.1784-1.104644 2.7668-1.78312 4.5105-1.78312 3.6431 0 6.5964 2.95329 6.5964 6.59635 0 1.87676-.7838 3.57045-2.0418 4.77165 3.243 1.5179 5.5969 4.6075 6.0595 8.2887.0976.7763-.4527 1.4847-1.229 1.5822-.7763.0976-1.4847-.4526-1.5822-1.2289-.4819-3.8342-3.7849-6.8173-7.8029-6.8173-.7824 0-1.4166-.6343-1.4166-1.4167s.6342-1.4166 1.4166-1.4166c2.0783 0 3.7631-1.68479 3.7631-3.76305s-1.6848-3.76302-3.7631-3.76302zm-9.9168 4.25c-2.07822 0-3.76298 1.68477-3.76298 3.76307 0 2.0782 1.68476 3.763 3.76298 3.763 2.0783 0 3.7631-1.6848 3.7631-3.763 0-2.0783-1.6848-3.76307-3.7631-3.76307zm4.5546 8.53467c1.258-1.2012 2.0418-2.8949 2.0418-4.7716 0-3.64311-2.9533-6.5964-6.5964-6.5964-3.64302 0-6.59631 2.95329-6.59631 6.5964 0 1.8767.78377 3.5704 2.04185 4.7716-3.24293 1.518-5.5967 4.6075-6.059318 8.2887-.097558.7763.45267 1.4847 1.228968 1.5822.7763.0976 1.4847-.4526 1.58225-1.2289.48186-3.8343 3.7847-6.8173 7.80256-6.8173 4.018 0 7.321 2.9831 7.8029 6.8173.0975.7763.8059 1.3265 1.5822 1.2289.7763-.0975 1.3266-.8059 1.229-1.5822-.4626-3.6812-2.8165-6.7708-6.0595-8.2887z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Collaborate on designs
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Design with popular tools like Figma and Invision
                        directly in ClickUp with our native integrations - tag
                        your team for updates, and keep all of your assets in
                        one place.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 30 26"
                        width={30}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m15.3739 4.195c.5868-1.01637 1.8864-1.36461 2.9028-.7778 1.0164.5868 1.3646 1.88643.7778 2.9028-.987 1.70959.2468 3.8466 2.2208 3.8466h2.2698c2.014 0 3.385 2.0421 2.6224 3.9061l-2.8977 7.0833c-.4356 1.0649-1.4719 1.7606-2.6224 1.7606h-7.0634c-1.5648 0-2.8333-1.2686-2.8333-2.8334v-7.0833c0-.6549.2204-1.2543.592-1.7337.3844-.4958.6712-1.0384.8837-1.57409.0379-.09544.0834-.18997.1371-.28291zm-5.66123 4.17501c.05987-.12766.12554-.25361.19706-.37748l3.01047-5.2142c1.3692-2.371529 4.4016-3.184078 6.7732-1.814872 2.2389 1.292682 3.0883 4.067902 2.0241 6.369782h1.8276c4.0279 0 6.7699 4.08426 5.2448 7.81226l-2.8977 7.0833c-.8713 2.1297-2.9438 3.5211-5.2448 3.5211h-7.0634c-1.3785 0-2.642-.4922-3.62436-1.3104-.64936.7996-1.64034 1.3105-2.75066 1.3105h-1.77083c-2.54281 0-4.604166-2.0614-4.604166-4.6042v-9.2083c0-2.54281 2.061356-4.60417 4.604166-4.60417h1.77083c.97768 0 1.86282.39615 2.50369 1.03668zm-1.79535 4.62989v-2.1249c0-.3912-.31713-.7083-.70834-.7083h-1.77083c-.978 0-1.77083.7928-1.77083 1.7708v9.2083c0 .978.79283 1.7709 1.77083 1.7709h1.77083c.39121 0 .70834-.3172.70834-.7084v-2.1251z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Fast-track feedback &amp; approvals
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Proof and annotate design files with your team, invite
                        Guests, and assign comments for quick feedback and
                        approval.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-38266477"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={650}
                  loading="lazy"
                  alt="Design"
                  src="/images/main/teams/design.png"
                  width={980}
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel"
              cu-data-tab-panel="finance-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={28}
                        viewBox="0 0 16 28"
                        width={16}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m9.33271 1.99996c0-.73638-.59696-1.333334-1.33334-1.333334s-1.33333.596954-1.33333 1.333334v.94022c-1.12207.15534-2.13705.54055-2.99677 1.12177-1.25133.84598-2.13113 2.09486-2.42476 3.54905-.295414 1.46299.02339 3.0287.97879 4.4618.85148 1.2773 2.20955 1.8746 3.44588 2.2338.32746.0952.66264.178.99686.2529v7.0637c-1.32514-.3412-2.66188-.9943-3.79894-1.969-.55911-.4792-1.40084-.4144-1.880069.1447-.47923.5591-.414481 1.4008.144619 1.88 1.62967 1.3969 3.58943 2.2941 5.53439 2.678v1.6431c0 .7363.59695 1.3333 1.33333 1.3333s1.33334-.597 1.33334-1.3333v-1.442c.25683-.0133.51032-.0365.75959-.0698 1.453-.1937 2.8426-.7396 3.8866-1.7286 1.0694-1.0131 1.6871-2.4103 1.6871-4.093 0-1.9971-.6691-3.4622-1.8556-4.4768-1.1087-.9481-2.5376-1.382-3.8015-1.6702-.22332-.0509-.45013-.0989-.67619-.1449v-6.67298c.99369.22039 2.09749.66789 3.28419 1.42304.6212.39535 1.4453.21222 1.8407-.40903.3953-.62125.2122-1.44537-.4091-1.84072-1.6187-1.03014-3.218-1.63937-4.71579-1.88523zm-2.66667 3.65042c-.59437.12747-1.10013.34823-1.50322.62074-.72089.48737-1.16053 1.15519-1.3044 1.86768-.14209.7037-.01645 1.55463.58369 2.4548.3216.4825.92507.8483 1.97119 1.1523.08288.0241.16712.0474.25274.0701zm2.66667 9.45042v6.7856c.13787-.0098.27368-.0236.40712-.0414 1.04697-.1396 1.86577-.5104 2.40507-1.0213.5139-.4869.8545-1.1731.8545-2.1571 0-1.3362-.4127-2.0145-.922-2.4501-.5872-.5021-1.4684-.8249-2.66126-1.0969-.02779-.0063-.0556-.0126-.08343-.0188z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Manage budgets
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Manage budgets and accounts with lightning-fast
                        spreadsheets that can be organized into a visual
                        database.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 26 26"
                        width={26}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m1.4948 1.4948c.79703-.797034 1.87803-1.2448 3.0052-1.2448h17c1.1272 0 2.2082.447767 3.0052 1.2448.797.79703 1.2448 1.87803 1.2448 3.0052v17c0 1.1272-.4478 2.2082-1.2448 3.0052s-1.878 1.2448-3.0052 1.2448h-17c-1.12717 0-2.20817-.4478-3.0052-1.2448-.797033-.797-1.2448-1.878-1.2448-3.0052v-17c0-1.12717.447766-2.20817 1.2448-3.0052zm3.0052 1.58853c-.37572 0-.73606.14926-1.00173.41494-.26568.26567-.41494.62601-.41494 1.00173v17c0 .3757.14926.7361.41494 1.0017.26567.2657.62601.415 1.00173.415h17c.3757 0 .7361-.1493 1.0017-.415.2657-.2656.415-.626.415-1.0017v-17c0-.37572-.1493-.73606-.415-1.00173-.2656-.26568-.626-.41494-1.0017-.41494zm14.1667 2.83334c.7824 0 1.4166.63426 1.4166 1.41666v11.33337c0 .7824-.6342 1.4166-1.4166 1.4166s-1.4167-.6342-1.4167-1.4166v-11.33337c0-.7824.6343-1.41666 1.4167-1.41666zm-5.6667 4.25003c.7824 0 1.4167.6342 1.4167 1.4166v7.0834c0 .7824-.6343 1.4166-1.4167 1.4166s-1.4167-.6342-1.4167-1.4166v-7.0834c0-.7824.6343-1.4166 1.4167-1.4166zm-5.66667 4.25c.78241 0 1.41667.6342 1.41667 1.4166v2.8334c0 .7824-.63426 1.4166-1.41667 1.4166-.7824 0-1.41666-.6342-1.41666-1.4166v-2.8334c0-.7824.63426-1.4166 1.41666-1.4166z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Create and share reports
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Create highly visual Dashboards that bring all of your
                        reporting in one place; add customizable widgets for
                        invoices, payment reminders, special requests, and more.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={28}
                        viewBox="0 0 28 28"
                        width={28}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipRule="evenodd" fill="#292d34" fillRule="evenodd">
                          <path d="m22.0147.5h-17.5147c-2.20914 0-4 1.79086-4 4v19c0 2.2091 1.79086 4 4 4h19c2.2091 0 4-1.7909 4-4v-11.5147l-2 2v9.5147c0 1.1046-.8954 2-2 2h-19c-1.10457 0-2-.8954-2-2v-19c0-1.10457.89543-2 2-2h15.5147z" />
                          <path d="m27.0607 3.93934c.5857.58579.5857 1.53553 0 2.12132l-11.9938 11.99384-.0055.0055c-.5858.5858-1.5363.5864-2.1221.0007l-5.99996-6c-.58579-.5858-.58579-1.5356 0-2.12136.58579-.58579 1.53553-.58579 2.12132 0l4.93934 4.93936 10.9393-10.93936c.5858-.58579 1.5356-.58579 2.1214 0z" />
                        </g>
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Automate routine tasks and reminders
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Automatically create reporting tasks, assign work,
                        notify your team when collections notices need to go
                        out, and more.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-38266559"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={650}
                  loading="lazy"
                  alt="Finance"
                  src="/images/main/teams/finance.png"
                  width={980}
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel"
              cu-data-tab-panel="hr-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={20}
                        viewBox="0 0 28 20"
                        width={28}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m10.25 2.5c-2.0279 0-3.67186 1.64395-3.67186 3.67188 0 2.02792 1.64396 3.67187 3.67186 3.67187s3.6719-1.64395 3.6719-3.67187c0-2.02793-1.644-3.67188-3.6719-3.67188zm4.1574 8.2335c1.2378-1.12872 2.0145-2.75447 2.0145-4.56162 0-3.40864-2.7632-6.17188-6.1719-6.17188-3.40861 0-6.17186 2.76324-6.17186 6.17188 0 1.80716.7767 3.43292 2.0145 4.56162-3.11926 1.4065-5.391252 4.3475-5.832752 7.8606-.08608.685.399414 1.3101 1.084382 1.3961.68497.0861 1.31003-.3994 1.39611-1.0843.46391-3.6915 3.64322-6.5621 7.50962-6.5621 3.8665 0 7.046 2.8706 7.5099 6.5621.0861.6849.7111 1.1704 1.3961 1.0843.685-.086 1.1705-.7111 1.0844-1.3961-.4415-3.5132-2.7137-6.4541-5.833-7.8606zm8.3427-6.9835c.6904 0 1.25.55964 1.25 1.25v2.5h2.5c.6904 0 1.25.55964 1.25 1.25s-.5596 1.25-1.25 1.25h-2.5v2.5c0 .6904-.5596 1.25-1.25 1.25-.6903 0-1.25-.5596-1.25-1.25v-2.5h-2.5c-.6903 0-1.25-.55964-1.25-1.25s.5597-1.25 1.25-1.25h2.5v-2.5c0-.69036.5597-1.25 1.25-1.25z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Employee onboarding
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Build a scalable onboarding program with individualized
                        tasks and employee requirements to bring everyone up to
                        speed from day one.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={22}
                        viewBox="0 0 32 22"
                        width={32}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m0 4.33337c0-2.20913 1.79086-3.999996 4-3.999996h24c2.2091 0 4 1.790866 4 3.999996v13.33333c0 2.2091-1.7909 4-4 4h-24c-2.20914 0-4-1.7909-4-4zm4-1.33333c-.73638 0-1.33333.59695-1.33333 1.33333v13.33333c0 .7364.59695 1.3333 1.33333 1.3333h24c.7364 0 1.3333-.5969 1.3333-1.3333v-13.33333c0-.73638-.5969-1.33333-1.3333-1.33333zm6.6667 4c-.9313 0-1.6667.73598-1.6667 1.66667 0 .96315.65771 1.66669 1.6667 1.66669 1.0089 0 1.6666-.70354 1.6666-1.66669 0-.93069-.7354-1.66667-1.6666-1.66667zm3.4749 4.30766c.5474-.7342.8584-1.65215.8584-2.64099 0-2.40265-1.9285-4.33334-4.3333-4.33334-2.40486 0-4.33337 1.93069-4.33337 4.33334 0 .98884.311 1.90679.85841 2.64099-1.69186 1.0237-2.92063 2.7738-3.18144 4.8603-.09134.7307.42696 1.3971 1.15765 1.4884.7307.0913 1.39708-.427 1.48842-1.1576.24774-1.982 1.99826-3.4988 4.01033-3.4988 2.012 0 3.7625 1.5168 4.0103 3.4988.0913.7306.7577 1.2489 1.4884 1.1576s1.249-.7577 1.1576-1.4884c-.2608-2.0866-1.4896-3.8366-3.1814-4.8603zm5.8584-2.97433c0-.73638.597-1.33333 1.3333-1.33333h5.3334c.7363 0 1.3333.59695 1.3333 1.33333s-.597 1.33334-1.3333 1.33334h-5.3334c-.7363 0-1.3333-.59696-1.3333-1.33334zm0 5.33333c0-.7364.597-1.3333 1.3333-1.3333h2.6667c.7364 0 1.3333.5969 1.3333 1.3333s-.5969 1.3333-1.3333 1.3333h-2.6667c-.7363 0-1.3333-.5969-1.3333-1.3333z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Document management
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Manage and collaborate on HR documents with your team in
                        one place, then easily share them with employees.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={23}
                        viewBox="0 0 25 23"
                        width={25}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m6.45768.625c-.66734 0-1.20833.54099-1.20833 1.20833v1.20834h-2.41667c-1.33469 0-2.416664 1.08198-2.416664 2.41666v2.41667c0 2.6694 2.163954 4.8333 4.833334 4.8333h.96992c1.06124 1.8346 2.90329 3.161 5.07173 3.5248v1.3086h-.1763c-1.83071 0-3.50431 1.0343-4.32304 2.6718l-.20641.4128c-.29845.5969-.05651 1.3227.54038 1.6211.59689.2985 1.32271.0565 1.62115-.5403l.20641-.4129c.40936-.8187 1.24621-1.3359 2.16151-1.3359h1.3846 1.3847c.9153 0 1.7521.5172 2.1615 1.3359l.2064.4129c.2985.5968 1.0243.8388 1.6212.5403.5969-.2984.8388-1.0242.5403-1.6211l-.2064-.4128c-.8187-1.6375-2.4923-2.6718-4.323-2.6718h-.1763v-1.3086c2.1684-.3638 4.0105-1.6902 5.0717-3.5248h.9699c2.6694 0 4.8334-2.1639 4.8334-4.8333v-2.41667c0-1.33468-1.082-2.41666-2.4167-2.41666h-2.4167v-1.20834c0-.66734-.5409-1.20833-1.2083-1.20833zm1.20834 8.45833c0 2.66937 2.16395 4.83337 4.83328 4.83337 2.6694 0 4.8334-2.164 4.8334-4.83337v-4.83333-1.20833h-9.66668v1.20833zm-2.41667-3.625h-2.41667v2.41667c0 1.33469 1.08198 2.4167 2.41667 2.4167v-1.20837zm14.49995 3.625v-3.625h2.4167v2.41667c0 1.33469-1.082 2.4167-2.4167 2.4167z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Performance &amp; goal tracking
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Track employee performance with real-time reporting that
                        enables you to visualize tasks completed, progress
                        towards goals, workload, and more.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-4389487"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={650}
                  loading="lazy"
                  alt="HR"
                  src="/images/main/teams/hr.png"
                  width={980}
                  draggable="false"
                />
              </div>
            </div>
            <div
              className="cu-main-section-teams__tabs-panel cu-tab__panel"
              cu-data-tab-panel="it-teams-tab"
            >
              <div className="cu-main-section-teams__tabs-description">
                <div className="cu-main-section-teams__tabs-description-list">
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={24}
                        viewBox="0 0 23 24"
                        width={23}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#2a2e34">
                          <path d="m6.67504.675083c.2188-.218793.51554-.341709.82496-.341709h4.6667c.3094 0 .6061.122916.8249.341709l.825.824957h2.4334c1.6108 0 2.9167 1.30584 2.9167 2.91667v2.33333l-2.3334 2.33333v-4.66666c0-.32217-.2611-.58334-.5833-.58334h-2.9167c-.3094 0-.6061-.12291-.8249-.3417l-.825-.82496h-3.70015l-.82496.82496c-.21879.21879-.51554.3417-.82496.3417h-2.91666c-.32217 0-.58334.26117-.58334.58334v16.33329c0 .3222.26117.5834.58334.5834h12.83333c.3222 0 .5833-.2612.5833-.5834v-3.5l2.3334-2.3333v5.8333c0 1.6109-1.3059 2.9167-2.9167 2.9167h-12.83333c-1.61083 0-2.91667-1.3058-2.91667-2.9167v-16.33329c0-1.61083 1.30584-2.91667 2.91667-2.91667h2.43341z" />
                          <path d="m13.3333 8.50004h-6.99997c-.64433 0-1.16666-.52233-1.16666-1.16667 0-.64433.52233-1.16666 1.16666-1.16666h6.99997c.6444 0 1.1667.52233 1.1667 1.16666 0 .64434-.5223 1.16667-1.1667 1.16667z" />
                          <path d="m11 13.1667h-4.66667c-.64433 0-1.16666-.5223-1.16666-1.1667 0-.6443.52233-1.1666 1.16666-1.1666h4.66667c.6443 0 1.1667.5223 1.1667 1.1666 0 .6444-.5224 1.1667-1.1667 1.1667z" />
                          <path d="m12.9916 18.6583 9.3334-9.3333c.4556-.45561.4556-1.19431 0-1.64992-.4557-.45561-1.1943-.45561-1.65 0l-9.3333 9.33332c-.4556.4556-.4556 1.1943 0 1.6499s1.1943.4556 1.6499 0z" />
                        </g>
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Faster, self-service IT forms
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Create simple self-service forms that turn employee
                        requests into an actionable queue and assign them to
                        agents or teams.&nbsp;
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 29 26"
                        width={29}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m15.621 3.62678c-.5701-.98411-1.9823-.98411-2.5524 0l-9.9919 17.24722c-.57456.9918.13591 2.2373 1.27622 2.2373h19.98378c1.1403 0 1.8508-1.2455 1.2763-2.2373zm-5.0305-1.45553c1.6772-2.894993 5.8315-2.895005 7.5086-.00001l9.9919 17.24726c1.6903 2.9175-.3998 6.5815-3.7543 6.5815h-19.98378c-3.354489 0-5.44454-3.664-3.754307-6.5815zm3.7543 4.33004c.7922 0 1.4345.64666 1.4345 1.44435v6.49956c0 .7977-.6423 1.4444-1.4345 1.4444s-1.4344-.6467-1.4344-1.4444v-6.49956c0-.79769.6422-1.44435 1.4344-1.44435zm0 11.55481c.7922 0 1.4345.6466 1.4345 1.4443v.7222c0 .7977-.6423 1.4444-1.4345 1.4444s-1.4344-.6467-1.4344-1.4444v-.7222c0-.7977.6422-1.4443 1.4344-1.4443z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Track, triage, &amp; assign requests
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Link related issues together, add tags to track bugs,
                        and collaborate on your queue with your team.
                      </div>
                    </div>
                  </div>
                  <div className="cu-main-section-teams__tabs-description-list-item">
                    <div className="cu-main-section-teams__tabs-description-list-icon">
                      <svg
                        fill="none"
                        height={26}
                        viewBox="0 0 28 26"
                        width={28}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="m13.9996 2.6875c-.6903 0-1.25.55964-1.25 1.25s.5597 1.25 1.25 1.25c.6904 0 1.25-.55964 1.25-1.25s-.5596-1.25-1.25-1.25zm-3.75 1.25c0-2.07107 1.679-3.75 3.75-3.75 2.0711 0 3.75 1.67893 3.75 3.75 0 1.63277-1.0435 3.02182-2.5 3.53662v2.92678c.6908.2441 1.2887.685 1.7264 1.2552l2.7844-.9047c.0395-1.5443 1.0381-2.96598 2.591-3.47053 1.9697-.64 4.0853.43794 4.7253 2.40765.64 1.96968-.438 4.08528-2.4077 4.72528-1.5528.5045-3.1964-.0587-4.1361-1.2848l-2.7845.9048c-.0189.7527-.2597 1.4502-.6593 2.0298l1.7205 2.3682c1.4809-.4397 3.1416.0707 4.1013 1.3917 1.2174 1.6755.846 4.0207-.8296 5.238-1.6755 1.2173-4.0206.8459-5.238-.8296-.9597-1.321-.9319-3.0581-.0562-4.3307l-1.7203-2.3677c-.3382.1002-.6964.154-1.0672.154s-.7291-.0538-1.0674-.1541l-1.7204 2.3678c.8758 1.2726.9035 3.0097-.0562 4.3307-1.21735 1.6755-3.56249 2.0469-5.23801.8296-1.67553-1.2174-2.04697-3.5625-.82962-5.238.95972-1.321 2.6204-1.8314 4.10131-1.3917l1.72072-2.3684c-.3995-.5796-.6402-1.2771-.6592-2.0297l-2.78425-.9047c-.93968 1.2262-2.58321 1.7894-4.13607 1.2848-1.9697-.64-3.047644-2.7556-2.407648-4.72527.639998-1.96971 2.755578-3.04765 4.725278-2.40765 1.55286.50455 2.55146 1.92623 2.59098 3.47052l2.78421.9046c.4377-.5702 1.0356-1.011 1.7263-1.2551v-2.92678c-1.4565-.5148-2.5-1.90385-2.5-3.53662zm14.4494 6.5236c-.2133-.65661-.9185-1.01592-1.5751-.80259-.6565.21333-1.0159.91849-.8025 1.57509.2133.6566.9185 1.0159 1.5751.8026.6565-.2134 1.0159-.9186.8025-1.5751l1.1888-.3863zm-19.82343-.80258c-.65657-.21333-1.36176.14598-1.5751.80258-.21333.6565.14599 1.3617.80255 1.5751.65657.2133 1.36176-.146 1.5751-.8026.21333-.6566-.14599-1.36175-.80255-1.57508zm9.12403 3.02898c-.6903 0-1.25.5596-1.25 1.25s.5597 1.25 1.25 1.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25zm-5.14309 8.3289c-.55851-.4058-1.34022-.282-1.746.2765s-.28197 1.3403.27654 1.746c.55851.4058 1.34022.282 1.746-.2765s.28197-1.3402-.27654-1.746zm12.03189.2766c-.4058-.5586-1.1875-.6824-1.746-.2766s-.6823 1.1875-.2765 1.746c.4057.5585 1.1875.6823 1.746.2766.5585-.4058.6823-1.1875.2765-1.746z"
                          fill="#2a2e34"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="cu-main-section-teams__tabs-description-list-content">
                      <div className="cu-main-section-teams__tabs-description-list-title">
                        Bring Dev and IT closer together
                      </div>
                      <div className="cu-main-section-teams__tabs-description-list-text">
                        Connect your team's IT workflows in ClickUp with native
                        integrations for GitHub, GitLab, and Bitbucket.
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.clickup.com/signup?template=t-8454971"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="cu-main-section__btn cu-main-section__btn--blue cu-main-section-teams__btn"
                >
                  Get Started
                </a>
              </div>
              <div className="cu-main-section-teams__tabs-image cu-main-section__image">
                <img
                  height={650}
                  loading="lazy"
                  alt="IT"
                  src="/images/main/teams/it.png"
                  width={980}
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
