const NavigationItem: React.FC = ({}) => {
  return (
    <li className="navigation__list-item">
      <button
        className="navigation__link"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="#product-menu"
      >
        <span className="navigation__link-child">Product</span>
        <span className="navigation__arrow">
          <svg
            width={10}
            height={7}
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div className="navigation__dropdown-popup product" id="product-menu">
        <div className="navigation__dropdown-section w-60">
          <p className="navigation__dropdown-title w-100">Product</p>
          <ul className="navigation__dropdown-grid">
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/features/tasks"
                tabIndex={-1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={27}
                  height={24}
                  viewBox="0 0 27 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.4243 5H19.0724C20.2486 5 21.2021 5.89543 21.2021 7V17C21.2021 18.1046 20.2486 19 19.0724 19H8.4243C7.24814 19 6.29467 18.1046 6.29467 17V7C6.29467 5.89543 7.24814 5 8.4243 5ZM4.16504 7C4.16504 4.79086 6.07197 3 8.4243 3H19.0724C21.4248 3 23.3317 4.79086 23.3317 7V17C23.3317 19.2091 21.4248 21 19.0724 21H8.4243C6.07197 21 4.16504 19.2091 4.16504 17V7ZM18.7606 10.2071C19.1764 9.81658 19.1764 9.18342 18.7606 8.79289C18.3447 8.40237 17.6705 8.40237 17.2547 8.79289L12.6836 13.0858L10.2421 10.7929C9.82621 10.4024 9.15201 10.4024 8.73618 10.7929C8.32034 11.1834 8.32034 11.8166 8.73618 12.2071L11.9306 15.2071C12.3465 15.5976 13.0207 15.5976 13.4365 15.2071L18.7606 10.2071Z"
                    fill="#00B884"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Tasks</strong>
                  <span>
                    Break down any size project into customized tasks.
                  </span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/features/docs"
                tabIndex={-1}
              >
                <svg
                  width={20}
                  height={22}
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.89206 3.41699C2.89206 2.81868 3.40852 2.33366 4.04561 2.33366H11.1648C11.4708 2.33366 11.7642 2.4478 11.9805 2.65096L16.3968 6.79842C16.6131 7.00159 16.7347 7.27714 16.7347 7.56446V18.5837C16.7347 19.182 16.2182 19.667 15.5811 19.667H4.04561C3.40852 19.667 2.89206 19.182 2.89206 18.5837V3.41699ZM4.04561 0.166992C2.13435 0.166992 0.584961 1.62207 0.584961 3.41699V18.5837C0.584961 20.3786 2.13435 21.8337 4.04561 21.8337H15.5811C17.4924 21.8337 19.0418 20.3786 19.0418 18.5837V7.56446C19.0418 6.7025 18.6772 5.87585 18.0282 5.26636L13.6119 1.11889C12.9629 0.509401 12.0826 0.166992 11.1648 0.166992H4.04561ZM6.35271 6.66699C5.71562 6.66699 5.19916 7.15202 5.19916 7.75033C5.19916 8.34863 5.71562 8.83366 6.35271 8.83366H9.81336C10.4504 8.83366 10.9669 8.34863 10.9669 7.75033C10.9669 7.15202 10.4504 6.66699 9.81336 6.66699H6.35271ZM6.35271 11.0003C5.71562 11.0003 5.19916 11.4854 5.19916 12.0837C5.19916 12.682 5.71562 13.167 6.35271 13.167H13.274C13.9111 13.167 14.4276 12.682 14.4276 12.0837C14.4276 11.4854 13.9111 11.0003 13.274 11.0003H6.35271ZM5.19916 16.417C5.19916 15.8187 5.71562 15.3337 6.35271 15.3337H13.274C13.9111 15.3337 14.4276 15.8187 14.4276 16.417C14.4276 17.0153 13.9111 17.5003 13.274 17.5003H6.35271C5.71562 17.5003 5.19916 17.0153 5.19916 16.417Z"
                    fill="#49CCF9"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Docs</strong>
                  <span>Create beautiful docs and connect them to tasks.</span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/features/goals"
                tabIndex={-1}
              >
                <svg
                  width={22}
                  height={20}
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.69586 2.87085C3.45085 1.35934 4.7159 0 6.36757 0H15.3877C17.0394 0 18.3044 1.35934 18.0594 2.87085L17.9163 3.75358C20.3575 3.85431 22.0749 6.06129 21.3638 8.2545C20.5501 10.7646 18.2646 12.628 15.4712 13.0588L15.4599 13.0605C14.6272 13.9511 13.4996 14.591 12.2284 14.8596V17.5H14.93C15.6761 17.5 16.2808 18.0596 16.2808 18.75C16.2808 19.4404 15.6761 20 14.93 20H12.2284H9.52684H6.82524C6.07921 20 5.47444 19.4404 5.47444 18.75C5.47444 18.0596 6.07921 17.5 6.82524 17.5H9.52684V14.8596C8.25566 14.591 7.12805 13.9511 6.29536 13.0605L6.2841 13.0588C3.4907 12.628 1.20519 10.7646 0.391439 8.2545C-0.319581 6.06129 1.39778 3.85431 3.83895 3.75358L3.69586 2.87085ZM4.24361 6.25H4.01319C3.29 6.25 2.7713 6.89512 2.9791 7.53613C3.29497 8.51043 3.95935 9.33159 4.833 9.88607L4.24361 6.25ZM16.9223 9.88607L17.5117 6.25H17.7421C18.4653 6.25 18.984 6.89512 18.7762 7.53613C18.4603 8.51043 17.7959 9.33159 16.9223 9.88607ZM15.3877 2.5L6.36757 2.5L7.55996 9.85606C7.8063 11.3758 9.21703 12.5 10.8776 12.5C12.5383 12.5 13.949 11.3758 14.1953 9.85606L15.3877 2.5Z"
                    fill="#FD71AF"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Goals</strong>
                  <span>
                    Track work against strategy with measurable targets.
                  </span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/features/whiteboards"
                tabIndex={-1}
              >
                <svg
                  width={24}
                  height={18}
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.2896 1.29079C19.5371 0.119217 21.5597 0.119215 22.8072 1.29079C24.0547 2.46236 24.0547 4.36186 22.8072 5.53343L18.0635 9.98843C17.7306 10.301 17.2969 10.5012 16.83 10.5578L15.1011 10.7672C13.7169 10.9349 12.538 9.82774 12.7166 8.52779L12.9396 6.90414C12.9998 6.46572 13.213 6.05838 13.5458 5.74579L18.2896 1.29079ZM21.3013 2.705C20.8855 2.31448 20.2113 2.31448 19.7955 2.705L15.0517 7.16001L14.8287 8.78365L16.5576 8.57422L21.3013 4.11922C21.7172 3.72869 21.7172 3.09553 21.3013 2.705ZM3.83761 2.58367C3.10251 2.58367 2.50659 3.14331 2.50659 3.83367V6.35682L4.1945 4.94778C5.34486 3.98748 7.04959 3.90224 8.30203 4.74239C10.0245 5.89782 10.1582 8.25641 8.57615 9.57709L7.61393 10.3803C7.12901 10.7851 7.10696 11.4898 7.56573 11.9206C8.00609 12.3342 8.72006 12.3342 9.16042 11.9206L10.2722 10.8766C10.688 10.486 11.3622 10.486 11.778 10.8766C12.1939 11.2671 12.1939 11.9002 11.778 12.2908L10.6663 13.3349C9.39426 14.5295 7.33189 14.5295 6.05985 13.3349C4.73464 12.0903 4.79833 10.0548 6.19908 8.88551L7.1613 8.08227C7.72165 7.61449 7.67429 6.7791 7.06421 6.36985C6.6206 6.07228 6.0168 6.10247 5.60935 6.4426L2.50659 9.03273V14.3337C2.50659 15.024 3.10251 15.5837 3.83761 15.5837H18.2126C18.9477 15.5837 19.5436 15.024 19.5436 14.3337V11.2087C19.5436 10.6564 20.0204 10.2087 20.6084 10.2087C21.1965 10.2087 21.6733 10.6564 21.6733 11.2087V14.3337C21.6733 16.1286 20.1239 17.5837 18.2126 17.5837H3.83761C1.92635 17.5837 0.376965 16.1286 0.376965 14.3337V8.58867C0.376949 8.58558 0.376949 8.58248 0.376965 8.57938V3.83367C0.376965 2.03874 1.92635 0.583667 3.83761 0.583667H13.4451C14.0332 0.583667 14.51 1.03138 14.51 1.58367C14.51 2.13595 14.0332 2.58367 13.4451 2.58367H3.83761Z"
                    fill="#5577FF"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Whiteboards</strong>
                  <span>
                    Bring team ideas to life with visual collaboration.
                  </span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/features/dashboards"
                tabIndex={-1}
              >
                <svg
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.23047"
                    y={1}
                    width="7.5207"
                    height="9.17647"
                    rx={1}
                    stroke="#7B68EE"
                    strokeWidth={2}
                  />
                  <rect
                    x="11.9414"
                    y="9.94141"
                    width="7.5207"
                    height="9.17647"
                    rx={1}
                    stroke="#7B68EE"
                    strokeWidth={2}
                  />
                  <rect
                    x="11.9414"
                    y={1}
                    width="7.5207"
                    height="5.82353"
                    rx={1}
                    stroke="#7B68EE"
                    strokeWidth={2}
                  />
                  <rect
                    x="1.23047"
                    y="13.2939"
                    width="7.5207"
                    height="5.82353"
                    rx={1}
                    stroke="#7B68EE"
                    strokeWidth={2}
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Dashboards</strong>
                  <span>Visualize progress with real-time reporting.</span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/features/chat-view"
                tabIndex={-1}
              >
                <svg
                  width={24}
                  height={20}
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3633 0.282602C10.9813 0.427713 11.3571 1.01589 11.2026 1.59634L10.2632 5.12526H15.9599L17.0392 1.07084C17.1937 0.490398 17.82 0.137491 18.4381 0.282602C19.0562 0.427713 19.432 1.01589 19.2774 1.59634L18.338 5.12526H22.1958C22.8328 5.12526 23.3493 5.61028 23.3493 6.20859C23.3493 6.8069 22.8328 7.29192 22.1958 7.29192H17.7613L16.3193 12.7086H19.8887C20.5257 12.7086 21.0422 13.1936 21.0422 13.7919C21.0422 14.3902 20.5257 14.8753 19.8887 14.8753H15.7425L14.6632 18.9297C14.5087 19.5101 13.8824 19.863 13.2644 19.7179C12.6463 19.5728 12.2705 18.9846 12.425 18.4042L13.3644 14.8753H7.6677L6.5884 18.9297C6.43388 19.5101 5.80758 19.863 5.18952 19.7179C4.57145 19.5728 4.19567 18.9846 4.35019 18.4042L5.2896 14.8753H1.43187C0.794782 14.8753 0.27832 14.3902 0.27832 13.7919C0.27832 13.1936 0.794782 12.7086 1.43187 12.7086H5.86637L7.30831 7.29192H3.73905C3.10196 7.29192 2.5855 6.8069 2.5855 6.20859C2.5855 5.61028 3.10196 5.12526 3.73905 5.12526H7.88508L8.96438 1.07084C9.1189 0.490398 9.7452 0.137491 10.3633 0.282602ZM9.68641 7.29192L8.24447 12.7086H13.9412L15.3832 7.29192H9.68641Z"
                    fill="#FFC800"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Chat</strong>
                  <span>Collaborate with your team in real-time.</span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item w-100">
              <a
                className="navigation__dropdown-link navigation__dropdown-link--full"
                href="/features"
                tabIndex={-1}
              >
                <strong>See All Features</strong>{" "}
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.999907 3.99582H12.5892L10.3005 1.70711C9.90997 1.31658 9.90997 0.683417 10.3005 0.292893C10.691 -0.0976314 11.3242 -0.0976307 11.7147 0.292894L15.7071 4.2853C15.9028 4.481 16.0004 4.73763 16 4.99413C16.0004 5.25061 15.9028 5.50723 15.7071 5.70293L11.7071 9.7029C11.3166 10.0934 10.6834 10.0934 10.2929 9.7029C9.9024 9.31237 9.9024 8.67921 10.2929 8.28868L12.5858 5.99582H0.999907C0.447622 5.99582 -9.34601e-05 5.5481 -9.34601e-05 4.99582C-9.34601e-05 4.44354 0.447622 3.99582 0.999907 3.99582Z"
                    fill="#7B68EE"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation__dropdown-section w-40">
          <p className="navigation__dropdown-title">Platform</p>
          <ul className="navigation__dropdown-grid">
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/templates"
                tabIndex={-1}
              >
                <svg
                  width={24}
                  height={18}
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.50728 2.49967C3.10893 2.49967 2.58444 2.87451 2.58444 3.58301V14.4163C2.58444 15.1248 3.10893 15.4997 3.50728 15.4997H20.1184C20.5168 15.4997 21.0412 15.1248 21.0412 14.4163V3.58301C21.0412 2.87451 20.5168 2.49967 20.1184 2.49967H3.50728ZM0.277344 3.58301C0.277344 1.89827 1.61212 0.333008 3.50728 0.333008H20.1184C22.0136 0.333008 23.3483 1.89827 23.3483 3.58301V14.4163C23.3483 16.1011 22.0136 17.6663 20.1184 17.6663H3.50728C1.61212 17.6663 0.277344 16.1011 0.277344 14.4163V3.58301Z"
                    fill="#FE7878"
                  />
                  <path
                    d="M12.9664 2.49967H15.2735V15.4997H12.9664V2.49967Z"
                    fill="#FE7878"
                  />
                  <path
                    d="M16.427 4.66634C16.427 4.06803 16.9435 3.58301 17.5806 3.58301H18.7341C19.3712 3.58301 19.8877 4.06803 19.8877 4.66634C19.8877 5.26465 19.3712 5.74967 18.7341 5.74967H17.5806C16.9435 5.74967 16.427 5.26465 16.427 4.66634Z"
                    fill="#FE7878"
                  />
                  <path
                    d="M16.427 7.91634C16.427 7.31803 16.9435 6.83301 17.5806 6.83301H18.7341C19.3712 6.83301 19.8877 7.31803 19.8877 7.91634C19.8877 8.51465 19.3712 8.99967 18.7341 8.99967H17.5806C16.9435 8.99967 16.427 8.51465 16.427 7.91634Z"
                    fill="#FE7878"
                  />
                  <path
                    d="M16.427 11.1663C16.427 10.568 16.9435 10.083 17.5806 10.083H18.7341C19.3712 10.083 19.8877 10.568 19.8877 11.1663C19.8877 11.7646 19.3712 12.2497 18.7341 12.2497H17.5806C16.9435 12.2497 16.427 11.7646 16.427 11.1663Z"
                    fill="#FE7878"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Templates</strong>
                  <span>Save time on project prep with a custom template.</span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/clickapps"
                tabIndex={-1}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 3.5C8.84251 3.5 8.06826 4.69139 8.53835 5.74911L8.91381 6.5939C9.05129 6.90323 9.02295 7.26112 8.83849 7.54495C8.65403 7.82879 8.33851 8.00004 8 8.00004H4.31034C4.13895 8.00004 4 8.13898 4 8.31038V19.6897C4 19.8611 4.13895 20 4.31034 20H6.5133C5.93003 17.779 7.59847 15.5 10 15.5C12.4015 15.5 14.07 17.779 13.4867 20H15.6897C15.8611 20 16 19.8611 16 19.6897V15.5C16 15.1534 16.1795 14.8316 16.4743 14.6493C16.7691 14.4671 17.1372 14.4506 17.4472 14.6056L18.3575 15.0607C19.5716 15.6678 21 14.7849 21 13.4276C21 11.9504 19.3372 11.0846 18.127 11.9318L17.5735 12.3192C17.268 12.5331 16.8689 12.5592 16.5382 12.387C16.2075 12.2148 16 11.8729 16 11.5V8.31038C16 8.13898 15.8611 8.00004 15.6897 8.00004H12C11.6615 8.00004 11.346 7.82879 11.1615 7.54495C10.9771 7.26112 10.9487 6.90323 11.0862 6.5939L11.4616 5.74912C11.9317 4.69139 11.1575 3.5 10 3.5ZM6.5133 6.00004C5.93002 3.77895 7.59847 1.5 10 1.5C12.4015 1.5 14.07 3.77895 13.4867 6.00004H15.6897C16.9656 6.00004 18 7.03441 18 8.31038V9.78033C20.3573 9.008 23 10.7319 23 13.4276C23 16.0736 20.4094 17.859 18 17.0706V19.6897C18 20.9657 16.9656 22 15.6897 22H12C11.6615 22 11.346 21.8288 11.1615 21.545C10.9771 21.2611 10.9487 20.9032 11.0862 20.5939L11.4616 19.7491C11.9317 18.6914 11.1575 17.5 10 17.5C8.84251 17.5 8.06826 18.6914 8.53836 19.7491L8.91381 20.5939C9.05129 20.9032 9.02295 21.2611 8.83849 21.545C8.65403 21.8288 8.33851 22 8 22H4.31034C3.03438 22 2 20.9657 2 19.6897V8.31038C2 7.03441 3.03438 6.00004 4.31034 6.00004H6.5133Z"
                    fill="#7B68EE"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>ClickApps</strong>
                  <span>Add even more custom tools to your workflow.</span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/integrations"
                tabIndex={-1}
              >
                <svg
                  width={24}
                  height={21}
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2683 2.00016C11.6802 2.00016 11.2034 2.44791 11.2034 3.00024C11.2034 3.55256 11.6802 4.00031 12.2683 4.00031C12.8564 4.00031 13.3332 3.55256 13.3332 3.00024C13.3332 2.44791 12.8564 2.00016 12.2683 2.00016ZM9.07359 3.00024C9.07359 1.34325 10.5039 0 12.2683 0C14.0327 0 15.463 1.34325 15.463 3.00024C15.463 4.30656 14.574 5.41788 13.3332 5.82975L13.3332 8.17135C13.9217 8.36669 14.431 8.71938 14.8039 9.17558L17.176 8.45177C17.2097 7.21624 18.0604 6.07881 19.3833 5.67514C21.0613 5.1631 22.8636 6.02552 23.4088 7.60141C23.9541 9.1773 23.0357 10.8699 21.3577 11.3819C20.0348 11.7856 18.6347 11.335 17.8341 10.354L15.4619 11.0779C15.4458 11.6801 15.2407 12.2382 14.9002 12.7019L16.366 14.5966C17.6276 14.2448 19.0424 14.6532 19.86 15.71C20.8971 17.0506 20.5806 18.9268 19.1532 19.9008C17.7258 20.8747 15.7279 20.5775 14.6909 19.237C13.8733 18.1802 13.8969 16.7904 14.643 15.7722L13.1774 13.8779C12.8893 13.9581 12.5841 14.0011 12.2683 14.0011C11.9523 14.0011 11.6471 13.958 11.3589 13.8778L9.8933 15.7722C10.6394 16.7904 10.663 18.1802 9.8454 19.237C8.80832 20.5775 6.81046 20.8747 5.38304 19.9007C3.95563 18.9268 3.6392 17.0505 4.67628 15.71C5.49388 14.6532 6.90864 14.2448 8.17026 14.5965L9.63618 12.7017C9.29581 12.238 9.09077 11.68 9.07462 11.0778L6.70263 10.354C5.9021 11.335 4.50195 11.7856 3.17904 11.3819C1.50102 10.8699 0.582702 9.1773 1.12793 7.60142C1.67315 6.02553 3.47545 5.16311 5.15347 5.67515C6.47638 6.07882 7.32711 7.21625 7.36077 8.45178L9.73266 9.17554C10.1056 8.71935 10.6149 8.36668 11.2034 8.17135L11.2034 5.82975C9.96258 5.41788 9.07359 4.30656 9.07359 3.00024ZM21.3833 8.21949C21.2015 7.6942 20.6008 7.40672 20.0414 7.5774C19.4821 7.74808 19.176 8.31228 19.3577 8.83757C19.5395 9.36287 20.1402 9.65034 20.6996 9.47966C21.2589 9.30899 21.565 8.74479 21.3833 8.21949L22.3961 7.91045L21.3833 8.21949ZM4.49533 7.57741C3.93599 7.40673 3.33522 7.6942 3.15348 8.2195C2.97174 8.74479 3.27784 9.30899 3.83719 9.47967C4.39653 9.65035 4.99729 9.36288 5.17904 8.83758C5.36078 8.31229 5.05467 7.74809 4.49533 7.57741ZM12.2683 10.0008C11.6802 10.0008 11.2034 10.4485 11.2034 11.0009C11.2034 11.5532 11.6802 12.0009 12.2683 12.0009C12.8564 12.0009 13.3332 11.5532 13.3332 11.0009C13.3332 10.4485 12.8564 10.0008 12.2683 10.0008ZM7.88677 16.6644C7.41096 16.3398 6.74501 16.4388 6.39932 16.8857C6.05362 17.3325 6.1591 17.9579 6.63491 18.2826C7.11071 18.6072 7.77667 18.5082 8.12236 18.0613C8.46805 17.6145 8.36257 16.9891 7.88677 16.6644ZM18.137 16.8857C17.7913 16.4388 17.1253 16.3398 16.6495 16.6644C16.1737 16.9891 16.0682 17.6145 16.4139 18.0613C16.7596 18.5082 17.4256 18.6072 17.9014 18.2826C18.3772 17.9579 18.4826 17.3325 18.137 16.8857Z"
                    fill="#BB66E1"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Integrations</strong>
                  <span>Connect your favorite apps to your workflow.</span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/features/views"
                tabIndex={-1}
              >
                <svg
                  width={26}
                  height={18}
                  viewBox="0 0 26 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.10156 8.97143C1.10156 9.90658 2.49219 11.9455 4.5132 13.6308C6.98344 15.6907 9.92583 16.9429 12.8145 16.9429C15.7032 16.9429 18.6456 15.6907 21.1159 13.6308C23.1369 11.9455 24.5275 9.90658 24.5275 8.97143C24.5275 8.03628 23.1369 5.99735 21.1159 4.31205C18.6456 2.25213 15.7032 1 12.8145 1C9.92583 1 6.98344 2.25213 4.5132 4.31205C2.49219 5.99735 1.10156 8.03628 1.10156 8.97143Z"
                    stroke="#68EEBE"
                    strokeWidth={2}
                  />
                  <path
                    d="M12.8146 6C11.0528 6 9.62012 7.35714 9.62012 9C9.62012 10.6607 11.0528 12 12.8146 12C14.5763 12 16.009 10.6607 16.009 9C16.009 7.33929 14.5763 6 12.8146 6"
                    stroke="#68EEBE"
                    strokeWidth={2}
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Views</strong>
                  <span>
                    View your work in the way that works best for you.
                  </span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/hierarchy-guide"
                tabIndex={-1}
              >
                <svg
                  width={24}
                  height={23}
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.212891 3.83398C0.212891 2.03906 1.76228 0.583984 3.67354 0.583984H19.8232C21.7345 0.583984 23.2839 2.03906 23.2839 3.83398C23.2839 5.62891 21.7345 7.08398 19.8232 7.08398H4.82709V9.56017C4.82709 9.98753 5.19599 10.334 5.65106 10.334L6.17755 10.334C6.65263 9.07169 7.93449 8.16732 9.44127 8.16732H14.0555C15.9667 8.16732 17.5161 9.62239 17.5161 11.4173C17.5161 13.2122 15.9667 14.6673 14.0555 14.6673H10.5948V17.1435C10.5948 17.5709 10.9637 17.9173 11.4188 17.9173H11.9453C12.4204 16.655 13.7022 15.7507 15.209 15.7507H19.8232C21.7345 15.7507 23.2839 17.2057 23.2839 19.0007C23.2839 20.7956 21.7345 22.2507 19.8232 22.2507H15.209C13.7022 22.2507 12.4204 21.3463 11.9453 20.084H11.4188C9.68956 20.084 8.28774 18.7675 8.28774 17.1435V14.4824C7.30443 14.156 6.5251 13.4241 6.17756 12.5006L5.65107 12.5006C3.92182 12.5006 2.51999 11.1842 2.51999 9.56017V6.89905C1.17588 6.4529 0.212891 5.24905 0.212891 3.83398ZM3.67354 2.75065C3.03645 2.75065 2.51999 3.23568 2.51999 3.83398C2.51999 4.43229 3.03645 4.91732 3.67354 4.91732H19.8232C20.4603 4.91732 20.9768 4.43229 20.9768 3.83398C20.9768 3.23568 20.4603 2.75065 19.8232 2.75065H3.67354ZM9.44127 10.334C8.80419 10.334 8.28774 10.819 8.28774 11.4173C8.28774 12.0156 8.80421 12.5007 9.44129 12.5007H14.0555C14.6926 12.5007 15.209 12.0156 15.209 11.4173C15.209 10.819 14.6926 10.334 14.0555 10.334H9.44127ZM15.209 17.9173C14.5719 17.9173 14.0555 18.4023 14.0555 19.0007C14.0555 19.599 14.5719 20.084 15.209 20.084H19.8232C20.4603 20.084 20.9768 19.599 20.9768 19.0007C20.9768 18.4023 20.4603 17.9173 19.8232 17.9173H15.209Z"
                    fill="#B46D2A"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Hierarchy</strong>
                  <span>See the big picture without missing the details.</span>
                </span>
              </a>
            </li>
            <li className="navigation__dropdown-item">
              <a
                className="navigation__dropdown-link"
                href="/features/automations"
                tabIndex={-1}
              >
                <svg
                  width={24}
                  height={21}
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L13.7071 1.29289C14.0976 1.68342 14.0976 2.31658 13.7071 2.70711L13 3.41421V5H17C18.1541 5 19.2034 5.28921 19.9571 6.04289C20.5023 6.58804 20.8044 7.28785 20.9299 8.07013C21.7122 8.1956 22.412 8.49774 22.9571 9.04289C23.7108 9.79657 24 10.8459 24 12V13C24 14.1541 23.7108 15.2034 22.9571 15.9571C22.4283 16.4859 21.754 16.7861 21 16.9181V17C21 18.3879 20.2852 19.4284 19.3047 20.0821C18.3539 20.7159 17.1483 21 16 21H8C6.85166 21 5.64614 20.7159 4.6953 20.0821C3.71482 19.4284 3 18.3879 3 17V16.9181C2.24603 16.7861 1.5717 16.4859 1.04289 15.9571C0.289213 15.2034 0 14.1541 0 13V12C0 10.8459 0.289214 9.79657 1.04289 9.04289C1.58804 8.49774 2.28785 8.1956 3.07013 8.07013C3.1956 7.28785 3.49774 6.58804 4.04289 6.04289C4.79657 5.28921 5.84586 5 7 5H11V3.41421L10.2929 2.70711C9.90237 2.31658 9.90237 1.68342 10.2929 1.29289L11.2929 0.292893ZM3 10.1374C2.75279 10.2208 2.57965 10.3346 2.45711 10.4571C2.21079 10.7034 2 11.1541 2 12V13C2 13.8459 2.21079 14.2966 2.45711 14.5429C2.57965 14.6654 2.75279 14.7792 3 14.8626V10.1374ZM21 14.8626C21.2472 14.7792 21.4203 14.6654 21.5429 14.5429C21.7892 14.2966 22 13.8459 22 13V12C22 11.1541 21.7892 10.7034 21.5429 10.4571C21.4203 10.3346 21.2472 10.2208 21 10.1374V14.8626ZM5.45711 7.45711C5.21079 7.70343 5 8.15414 5 9V17C5 17.6121 5.28518 18.0716 5.8047 18.4179C6.35386 18.7841 7.14834 19 8 19H16C16.8517 19 17.6461 18.7841 18.1953 18.4179C18.7148 18.0716 19 17.6121 19 17L19 9C19 8.15415 18.7892 7.70343 18.5429 7.45711C18.2966 7.21079 17.8459 7 17 7H7C6.15414 7 5.70343 7.21079 5.45711 7.45711ZM9 9C9.55229 9 10 9.44771 10 10V11C10 11.5523 9.55229 12 9 12C8.44772 12 8 11.5523 8 11V10C8 9.44771 8.44772 9 9 9ZM15 9C15.5523 9 16 9.44772 16 10V11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11L14 10C14 9.44771 14.4477 9 15 9ZM9.55402 14.1675L9.55934 14.1709C9.56631 14.1754 9.57854 14.1832 9.59569 14.1939C9.63002 14.2153 9.68373 14.2479 9.75395 14.288C9.89509 14.3687 10.0991 14.4775 10.3436 14.5862C10.8502 14.8113 11.4516 15 12 15C12.5484 15 13.1498 14.8113 13.6564 14.5862C13.9009 14.4775 14.1049 14.3687 14.246 14.288C14.3163 14.2479 14.37 14.2153 14.4043 14.1939C14.4215 14.1832 14.4337 14.1754 14.4407 14.1709L14.4465 14.1671L14.4457 14.1677C14.9052 13.8617 15.5258 13.9859 15.8321 14.4453C16.1384 14.9048 16.0142 15.5257 15.5547 15.8321L15 15C15.5547 15.8321 15.5547 15.8321 15.5547 15.8321L15.5529 15.8332L15.5506 15.8348L15.5442 15.839L15.5249 15.8515C15.5092 15.8617 15.4877 15.8753 15.4609 15.892C15.4074 15.9253 15.3322 15.9709 15.2383 16.0245C15.0513 16.1313 14.7866 16.2725 14.4686 16.4138C13.8502 16.6887 12.9516 17 12 17C11.0484 17 10.1498 16.6887 9.53136 16.4138C9.21338 16.2725 8.94866 16.1313 8.76167 16.0245C8.66784 15.9709 8.59264 15.9253 8.53908 15.892C8.51228 15.8753 8.49082 15.8617 8.47509 15.8515L8.45579 15.839L8.44943 15.8348L8.44708 15.8332L8.44612 15.8326C8.44612 15.8326 8.4453 15.8321 9 15L8.44612 15.8326C7.98659 15.5262 7.8616 14.9048 8.16795 14.4453C8.47387 13.9864 9.09342 13.862 9.55276 14.1667L9.55402 14.1675Z"
                    fill="#FF9900"
                  />
                </svg>
                <span className="navigation__dropdown-text">
                  <strong>Automations</strong>
                  <span>Put your routine busywork on autopilot.</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation__dropdown-section navigation__dropdown-section--help w-100">
          <ul className="navigation__dropdown-grid">
            <li className="navigation__dropdown-item w-auto">
              <a
                className="navigation__dropdown-link"
                href="https://help.clickup.com"
                tabIndex={-1}
              >
                <span className="navigation__dropdown-icon-wrapper">
                  <svg
                    width={21}
                    height={21}
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3652 3.06605C12.5521 2.73905 12.9272 2.5683 13.2965 2.64217L17.6715 3.51717C18.028 3.58846 18.3033 3.87274 18.363 4.23133L17.4999 4.37518C18.363 4.23133 18.3631 4.23175 18.3632 4.23218L18.3633 4.23317L18.3637 4.23549L18.3647 4.2416L18.3675 4.25956C18.3697 4.27407 18.3725 4.29362 18.3758 4.31803C18.3824 4.36682 18.3908 4.43508 18.3996 4.52127C18.417 4.69358 18.4356 4.93807 18.443 5.24251C18.4579 5.85067 18.4281 6.70273 18.2523 7.69911C17.8999 9.69569 16.9588 12.2787 14.6187 14.6189C12.2785 16.9591 9.69546 17.9001 7.69888 18.2525C6.7025 18.4283 5.85043 18.4581 5.24228 18.4433C4.93784 18.4358 4.69335 18.4172 4.52104 18.3998C4.43485 18.3911 4.36659 18.3826 4.31779 18.3761C4.29339 18.3728 4.27384 18.3699 4.25933 18.3677L4.24137 18.3649L4.23526 18.364L4.23293 18.3636L4.23195 18.3634C4.23151 18.3633 4.2311 18.3633 4.37494 17.5002L4.2311 18.3633C3.87251 18.3035 3.58823 18.0282 3.51694 17.6718L2.64194 13.2968C2.56455 12.9099 2.75571 12.519 3.10863 12.3426L6.60863 10.5926C6.98686 10.4034 7.44622 10.5119 7.69994 10.8502L8.63093 12.0915C8.73272 12.0508 8.84554 12.0029 8.96657 11.9473C9.50418 11.7002 10.178 11.3123 10.7684 10.7445C11.3439 10.191 11.7243 9.53247 11.9619 8.99686C12.0336 8.83527 12.0911 8.68766 12.1361 8.56131L10.7562 7.18139C10.4772 6.90238 10.4195 6.47115 10.6152 6.12855L12.3652 3.06605ZM13.1249 8.31267C13.9795 8.50082 13.9794 8.50107 13.9794 8.50133L13.9792 8.50188L13.979 8.5031L13.9783 8.50604L13.9765 8.51384L13.9711 8.53698C13.9666 8.55569 13.9603 8.58091 13.9522 8.61208C13.9359 8.67438 13.9119 8.76071 13.8789 8.86665C13.8131 9.07808 13.7108 9.37015 13.5615 9.70661C13.2653 10.3741 12.7707 11.2468 11.9815 12.0058C11.2072 12.7505 10.3498 13.2376 9.69729 13.5374C9.36869 13.6884 9.08561 13.7949 8.88136 13.8645C8.77906 13.8994 8.69602 13.9252 8.63635 13.9428C8.60649 13.9517 8.58244 13.9585 8.56469 13.9634L8.54284 13.9693L8.53556 13.9713L8.53286 13.972L8.53175 13.9722L8.53125 13.9724C8.53101 13.9724 8.53079 13.9725 8.31244 13.1252L8.53079 13.9725C8.18765 14.0609 7.82505 13.9337 7.61244 13.6502L6.7381 12.4844L4.48902 13.6089L5.10476 16.6876C5.16123 16.6901 5.22136 16.6922 5.28495 16.6938C5.79789 16.7063 6.53177 16.6814 7.39476 16.5291C9.11693 16.2252 11.3464 15.4163 13.3812 13.3815C15.416 11.3466 16.225 9.11716 16.5289 7.39499C16.6812 6.532 16.7061 5.79812 16.6936 5.28518C16.692 5.22159 16.6899 5.16146 16.6874 5.10499L13.5718 4.48187L12.4662 6.41653L13.7437 7.69396C13.9548 7.90507 14.0437 8.20925 13.9795 8.50082L13.1249 8.31267Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="navigation__dropdown-text">
                  <strong>Contact Us</strong>
                  <span>
                    Get in touch with our 24/7 live support team for free.
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default NavigationItem;
