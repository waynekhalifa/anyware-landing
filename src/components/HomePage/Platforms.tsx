const Platforms: React.FC = () => {
  return (
    <div className="cu-main-section cu-main-section-platforms cu-main-section_rounded cu-main-section_green">
      <div className="cu-main-section-platforms__wrapper hide-on-desktop">
        <nav
          className="cu-main-section-platforms__tabs-nav"
          aria-label="Platforms Navigation"
        >
          <a
            href="#"
            cu-data-tab-nav="import-platform-tab"
            className="cu-main-section-platforms__tabs-nav-item cu-tab__item"
          >
            Import
          </a>
          <a
            href="#"
            cu-data-tab-nav="download-platform-tab"
            className="cu-main-section-platforms__tabs-nav-item cu-tab__item"
          >
            Download
          </a>
          <a
            href="#"
            cu-data-tab-nav="clickapps-platform-tab"
            className="cu-main-section-platforms__tabs-nav-item cu-tab__item cu-tab__item_active"
          >
            ClickApps
          </a>
          <a
            href="#"
            cu-data-tab-nav="integrations-platform-tab"
            className="cu-main-section-platforms__tabs-nav-item cu-tab__item"
          >
            Integrations
          </a>
          <a
            href="#"
            cu-data-tab-nav="automations-platform-tab"
            className="cu-main-section-platforms__tabs-nav-item cu-tab__item"
          >
            Automations
          </a>
        </nav>
      </div>
      <div className="cu-main-section__wrapper cu-main-section-platforms__wrapper">
        <div className="cu-main-section-platforms__tabs cu-tab">
          <div className="cu-main-section-platforms__tabs-content cu-tab__content">
            <div className="cu-main-section-platforms__tabs-content-wrapper">
              <div className="cu-main-section-platforms__tabs-content-item">
                <div className="cu-main-section-platforms__tabs-content-item-inner">
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel"
                    cu-data-tab-panel="import-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-description">
                      <div className="cu-main-section-platforms__icon">
                        <svg
                          width={28}
                          height={31}
                          viewBox="0 0 28 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.73 13.8844L11.73 27.1252L24.9707 27.1252L24.9707 13.8844H11.73ZM24.9707 10.8751C26.6327 10.8751 27.98 12.2224 27.98 13.8844V27.1252C27.98 28.7871 26.6327 30.1344 24.9707 30.1344H11.73C10.068 30.1344 8.7207 28.7871 8.7207 27.1252V24.2546C8.34421 24.1469 7.97526 24.0214 7.61484 23.8789C6.97387 23.6256 6.35986 23.3189 5.7783 22.9642C2.31324 20.8511 0 17.0368 0 12.6806C0 6.03273 5.38918 0.643555 12.0371 0.643555C14.7433 0.643555 17.2409 1.5366 19.2513 3.04407C21.5976 4.80345 23.2803 7.39975 23.8564 10.39C23.8874 10.5506 23.9151 10.7123 23.9396 10.8751H24.9707ZM8.7207 21.0803C7.58727 20.6324 6.56618 19.9616 5.71143 19.1219C4.47076 17.903 3.58055 16.3285 3.20601 14.5638C3.07708 13.9563 3.00927 13.3263 3.00927 12.6806C3.00927 7.6947 7.05115 3.65282 12.0371 3.65282C15.2529 3.65282 18.076 5.33423 19.6752 7.86587C20.2479 8.77262 20.6637 9.78843 20.8843 10.8751H11.73C10.068 10.8751 8.7207 12.2224 8.7207 13.8844V21.0803Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="cu-main-section__subheader cu-main-section__subheader_green cu-main-section-platforms__subheader">
                        the platform
                      </div>
                      <h2 className="cu-main-section__header cu-main-section-platforms__header">
                        Import to the future of work with one click.
                      </h2>
                      <p className="cu-main-section__text cu-main-section-platforms__text">
                        Instantly import your work from other tools
                        automatically. Create a custom import to bring work in
                        from excel or tools that aren't supported.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel"
                    cu-data-tab-panel="download-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-description">
                      <div className="cu-main-section-platforms__icon">
                        <svg
                          width={28}
                          height={31}
                          viewBox="0 0 28 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.73 13.8844L11.73 27.1252L24.9707 27.1252L24.9707 13.8844H11.73ZM24.9707 10.8751C26.6327 10.8751 27.98 12.2224 27.98 13.8844V27.1252C27.98 28.7871 26.6327 30.1344 24.9707 30.1344H11.73C10.068 30.1344 8.7207 28.7871 8.7207 27.1252V24.2546C8.34421 24.1469 7.97526 24.0214 7.61484 23.8789C6.97387 23.6256 6.35986 23.3189 5.7783 22.9642C2.31324 20.8511 0 17.0368 0 12.6806C0 6.03273 5.38918 0.643555 12.0371 0.643555C14.7433 0.643555 17.2409 1.5366 19.2513 3.04407C21.5976 4.80345 23.2803 7.39975 23.8564 10.39C23.8874 10.5506 23.9151 10.7123 23.9396 10.8751H24.9707ZM8.7207 21.0803C7.58727 20.6324 6.56618 19.9616 5.71143 19.1219C4.47076 17.903 3.58055 16.3285 3.20601 14.5638C3.07708 13.9563 3.00927 13.3263 3.00927 12.6806C3.00927 7.6947 7.05115 3.65282 12.0371 3.65282C15.2529 3.65282 18.076 5.33423 19.6752 7.86587C20.2479 8.77262 20.6637 9.78843 20.8843 10.8751H11.73C10.068 10.8751 8.7207 12.2224 8.7207 13.8844V21.0803Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="cu-main-section__subheader cu-main-section__subheader_green cu-main-section-platforms__subheader">
                        the platform
                      </div>
                      <h2 className="cu-main-section__header cu-main-section-platforms__header">
                        Get more work done, wherever <br /> you are.
                      </h2>
                      <p className="cu-main-section__text cu-main-section-platforms__text">
                        Access ClickUp on any device—mobile, desktop, voice
                        assistants, and more to get work done from anywhere.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel cu-tab__panel_active"
                    cu-data-tab-panel="clickapps-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-description">
                      <div className="cu-main-section-platforms__icon">
                        <svg
                          width={28}
                          height={31}
                          viewBox="0 0 28 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.73 13.8844L11.73 27.1252L24.9707 27.1252L24.9707 13.8844H11.73ZM24.9707 10.8751C26.6327 10.8751 27.98 12.2224 27.98 13.8844V27.1252C27.98 28.7871 26.6327 30.1344 24.9707 30.1344H11.73C10.068 30.1344 8.7207 28.7871 8.7207 27.1252V24.2546C8.34421 24.1469 7.97526 24.0214 7.61484 23.8789C6.97387 23.6256 6.35986 23.3189 5.7783 22.9642C2.31324 20.8511 0 17.0368 0 12.6806C0 6.03273 5.38918 0.643555 12.0371 0.643555C14.7433 0.643555 17.2409 1.5366 19.2513 3.04407C21.5976 4.80345 23.2803 7.39975 23.8564 10.39C23.8874 10.5506 23.9151 10.7123 23.9396 10.8751H24.9707ZM8.7207 21.0803C7.58727 20.6324 6.56618 19.9616 5.71143 19.1219C4.47076 17.903 3.58055 16.3285 3.20601 14.5638C3.07708 13.9563 3.00927 13.3263 3.00927 12.6806C3.00927 7.6947 7.05115 3.65282 12.0371 3.65282C15.2529 3.65282 18.076 5.33423 19.6752 7.86587C20.2479 8.77262 20.6637 9.78843 20.8843 10.8751H11.73C10.068 10.8751 8.7207 12.2224 8.7207 13.8844V21.0803Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="cu-main-section__subheader cu-main-section__subheader_green cu-main-section-platforms__subheader">
                        the platform
                      </div>
                      <h2 className="cu-main-section__header cu-main-section-platforms__header">
                        Customize tasks for any need.
                      </h2>
                      <p className="cu-main-section__text cu-main-section-platforms__text">
                        Customize ClickUp to tackle any project or task with 35+
                        ClickApps. Break down work with subtasks, assign Sprint
                        Points, link tasks to other items with Relationships,
                        and more.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel"
                    cu-data-tab-panel="integrations-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-description">
                      <div className="cu-main-section-platforms__icon">
                        <svg
                          width={28}
                          height={31}
                          viewBox="0 0 28 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.73 13.8844L11.73 27.1252L24.9707 27.1252L24.9707 13.8844H11.73ZM24.9707 10.8751C26.6327 10.8751 27.98 12.2224 27.98 13.8844V27.1252C27.98 28.7871 26.6327 30.1344 24.9707 30.1344H11.73C10.068 30.1344 8.7207 28.7871 8.7207 27.1252V24.2546C8.34421 24.1469 7.97526 24.0214 7.61484 23.8789C6.97387 23.6256 6.35986 23.3189 5.7783 22.9642C2.31324 20.8511 0 17.0368 0 12.6806C0 6.03273 5.38918 0.643555 12.0371 0.643555C14.7433 0.643555 17.2409 1.5366 19.2513 3.04407C21.5976 4.80345 23.2803 7.39975 23.8564 10.39C23.8874 10.5506 23.9151 10.7123 23.9396 10.8751H24.9707ZM8.7207 21.0803C7.58727 20.6324 6.56618 19.9616 5.71143 19.1219C4.47076 17.903 3.58055 16.3285 3.20601 14.5638C3.07708 13.9563 3.00927 13.3263 3.00927 12.6806C3.00927 7.6947 7.05115 3.65282 12.0371 3.65282C15.2529 3.65282 18.076 5.33423 19.6752 7.86587C20.2479 8.77262 20.6637 9.78843 20.8843 10.8751H11.73C10.068 10.8751 8.7207 12.2224 8.7207 13.8844V21.0803Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="cu-main-section__subheader cu-main-section__subheader_green cu-main-section-platforms__subheader">
                        the platform
                      </div>
                      <h2 className="cu-main-section__header cu-main-section-platforms__header">
                        Bring all of your tools into one place.
                      </h2>
                      <p className="cu-main-section__text cu-main-section-platforms__text">
                        If you're not ready replace all your tools, ClickUp can
                        integrate with them with native and third-party
                        integrations. Sync your team calendars, messaging apps,
                        cloud storage, and more to keep everything in one place.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel"
                    cu-data-tab-panel="automations-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-description">
                      <div className="cu-main-section-platforms__icon">
                        <svg
                          width={28}
                          height={31}
                          viewBox="0 0 28 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.73 13.8844L11.73 27.1252L24.9707 27.1252L24.9707 13.8844H11.73ZM24.9707 10.8751C26.6327 10.8751 27.98 12.2224 27.98 13.8844V27.1252C27.98 28.7871 26.6327 30.1344 24.9707 30.1344H11.73C10.068 30.1344 8.7207 28.7871 8.7207 27.1252V24.2546C8.34421 24.1469 7.97526 24.0214 7.61484 23.8789C6.97387 23.6256 6.35986 23.3189 5.7783 22.9642C2.31324 20.8511 0 17.0368 0 12.6806C0 6.03273 5.38918 0.643555 12.0371 0.643555C14.7433 0.643555 17.2409 1.5366 19.2513 3.04407C21.5976 4.80345 23.2803 7.39975 23.8564 10.39C23.8874 10.5506 23.9151 10.7123 23.9396 10.8751H24.9707ZM8.7207 21.0803C7.58727 20.6324 6.56618 19.9616 5.71143 19.1219C4.47076 17.903 3.58055 16.3285 3.20601 14.5638C3.07708 13.9563 3.00927 13.3263 3.00927 12.6806C3.00927 7.6947 7.05115 3.65282 12.0371 3.65282C15.2529 3.65282 18.076 5.33423 19.6752 7.86587C20.2479 8.77262 20.6637 9.78843 20.8843 10.8751H11.73C10.068 10.8751 8.7207 12.2224 8.7207 13.8844V21.0803Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="cu-main-section__subheader cu-main-section__subheader_green cu-main-section-platforms__subheader">
                        the platform
                      </div>
                      <h2 className="cu-main-section__header cu-main-section-platforms__header">
                        Save time by automating your work.
                      </h2>
                      <p className="cu-main-section__text cu-main-section-platforms__text">
                        Eliminate the busywork and focus on what matters with
                        hundreds of Automations. Automatically assign tasks,
                        post comments, update statuses, and sync with other
                        tools.
                      </p>
                    </div>
                  </div>
                </div>
                <nav
                  className="cu-main-section-platforms__tabs-nav show-on-desktop"
                  aria-label="Platforms Navigation"
                >
                  <a
                    href="#"
                    cu-data-tab-nav="import-platform-tab"
                    className="cu-main-section-platforms__tabs-nav-item cu-tab__item"
                  >
                    Import
                  </a>
                  <a
                    href="#"
                    cu-data-tab-nav="download-platform-tab"
                    className="cu-main-section-platforms__tabs-nav-item cu-tab__item"
                  >
                    Download
                  </a>
                  <a
                    href="#"
                    cu-data-tab-nav="clickapps-platform-tab"
                    className="cu-main-section-platforms__tabs-nav-item cu-tab__item cu-tab__item_active"
                  >
                    ClickApps
                  </a>
                  <a
                    href="#"
                    cu-data-tab-nav="integrations-platform-tab"
                    className="cu-main-section-platforms__tabs-nav-item cu-tab__item"
                  >
                    Integrations
                  </a>
                  <a
                    href="#"
                    cu-data-tab-nav="automations-platform-tab"
                    className="cu-main-section-platforms__tabs-nav-item cu-tab__item"
                  >
                    Automations
                  </a>
                </nav>
              </div>
              <div className="cu-main-section-platforms__tabs-content-item">
                <div className="cu-main-section-platforms__tabs-content-item-inner">
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel"
                    cu-data-tab-panel="import-platform-tab"
                  >
                    <div className="cu-main-section__video cu-main-section-platforms__tabs-video">
                      <video
                        autoPlay
                        className="lazy loaded"
                        height={540}
                        loop
                        muted
                        playsInline
                        poster="/images/poster-images/videos/main/import.png"
                        width={960}
                      >
                        <source
                          data-src="/videos/main/import.mp4"
                          type="video/mp4"
                          src="/videos/main/import.mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel"
                    cu-data-tab-panel="download-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-panel-wrapper">
                      <div className="cu-main-section__video cu-main-section-platforms__tabs-video">
                        <video
                          autoPlay
                          className="lazy loaded"
                          height={650}
                          loop
                          muted
                          playsInline
                          poster="/images/poster-images/videos/main/download.png"
                          width={980}
                        >
                          <source
                            data-src="/videos/main/download.mp4"
                            type="video/mp4"
                            src="/videos/main/download.mp4"
                          />
                        </video>
                      </div>
                      <div className="cu-main-section-platforms__tabs-download">
                        <div className="cu-main-section-platforms__tabs-download-icons">
                          <a
                            href="https://apps.apple.com/us/app/clickup-manage-teams-tasks/id1535098836"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            <img
                              loading="lazy"
                              src="/images/badges/app-store-badge.svg"
                              width={135}
                              height={40}
                              alt="App store"
                              draggable="false"
                            />
                          </a>
                          <a
                            href="https://play.google.com/store/apps/details?id=co.mangotechnologies.clickup"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            <img
                              loading="lazy"
                              src="/images/badges/google-play-badge.png"
                              width={564}
                              height={168}
                              alt="Google Play badge"
                              draggable="false"
                            />
                          </a>
                          <a
                            href="https://desktop.clickup.com/mac"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            <img
                              src="/images/badges/download-mac.svg"
                              height={40}
                              alt="Download Mac"
                              draggable="false"
                            />
                          </a>
                          <a
                            href="https://desktop.clickup.com/mac/dmg/arm64"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            <img
                              src="/images/badges/download-mac-m1.svg"
                              height={40}
                              alt="Download Mac M1"
                              draggable="false"
                            />
                          </a>
                          <a
                            href="https://desktop.clickup.com/windows"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            <img
                              src="/images/badges/download-windows.svg"
                              height={40}
                              alt="Download Windows"
                              draggable="false"
                            />
                          </a>
                          <a
                            href="https://desktop.clickup.com/linux"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            <img
                              loading="lazy"
                              src="/images/badges/download-linux.svg"
                              height={40}
                              alt="Download Linux"
                              draggable="false"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel cu-tab__panel_active"
                    cu-data-tab-panel="clickapps-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-image cu-main-section__image">
                      <img
                        height={650}
                        loading="lazy"
                        alt="ClickApps"
                        src="/images/main/clickapps.png"
                        width={980}
                        draggable="false"
                      />
                    </div>
                  </div>
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel"
                    cu-data-tab-panel="integrations-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-integrations">
                      <div className="cu-main-section-platforms__tabs-integrations-list">
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/slack"
                        >
                          <img
                            height={40}
                            loading="lazy"
                            src="/images/integrations/slack.svg"
                            alt="Slack"
                            width={150}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/api"
                        >
                          <img
                            height={90}
                            loading="lazy"
                            src="/images/integrations/clickup-api-beta.png"
                            alt="ClickUp Api Beta"
                            width={125}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/chrome-extension"
                        >
                          <img
                            height={50}
                            loading="lazy"
                            src="/images/integrations/google-chrome-icon.svg"
                            alt="ClickUp Chrome Extension"
                            width={50}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/google-calendar-task-sync"
                        >
                          <img
                            height={50}
                            loading="lazy"
                            src="/images/integrations/google-calendar-icon.svg"
                            alt="Sync Google Calendar and ClickUp"
                            width={49}
                            draggable="false"
                          />
                        </a>
                      </div>
                      <div className="cu-main-section-platforms__tabs-integrations-list">
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/cloud-storage-google-drive"
                        >
                          <img
                            height={50}
                            loading="lazy"
                            src="/images/integrations/google-drive-icon.svg"
                            alt="Google Drive Meets ClickUp"
                            width={45}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/zapier"
                        >
                          <img
                            height={50}
                            loading="lazy"
                            src="/images/integrations/zapier.png"
                            alt="Zap Your Productivity to Life"
                            width={109}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/sso"
                        >
                          <img
                            height={30}
                            loading="lazy"
                            src="/images/integrations/sign-in-with-google.png"
                            alt="Single Sign-On for ClickUp"
                            width={124}
                            draggable="false"
                          />
                        </a>
                      </div>
                      <div className="cu-main-section-platforms__tabs-integrations-list">
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/microsoft-teams"
                        >
                          <img
                            height={56}
                            loading="lazy"
                            src="/images/integrations/ms-teams.png"
                            alt="Teamwork Makes the Dream Work!"
                            width={60}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/toggl"
                        >
                          <img
                            alt="Toggl"
                            height={27}
                            loading="lazy"
                            src="/images/integrations/toggl.png"
                            width={136}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="https://help.clickup.com/hc/en-us/articles/6308446753815-Zoom-Integration"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <img
                            height={22}
                            loading="lazy"
                            src="/images/integrations/zoom.png"
                            alt="Zoom integration"
                            width={98}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/outlook"
                        >
                          <img
                            height={50}
                            loading="lazy"
                            src="/images/integrations/outlook.svg"
                            alt="ClickUp in Outlook"
                            width={50}
                            draggable="false"
                          />
                        </a>
                      </div>
                      <div className="cu-main-section-platforms__tabs-integrations-list">
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/github"
                        >
                          <img
                            loading="lazy"
                            src="/images/integrations/github-logo.png"
                            width={50}
                            height={49}
                            alt="GitHub"
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/gitlab"
                        >
                          <img
                            height={46}
                            loading="lazy"
                            src="/images/integrations/gitlab.png"
                            alt="Gitlab"
                            width={50}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/everhour"
                        >
                          <img
                            height={50}
                            loading="lazy"
                            src="/images/integrations/everhour.svg"
                            alt="Everhour"
                            width={50}
                            draggable="false"
                          />
                        </a>
                      </div>
                      <div className="cu-main-section-platforms__tabs-integrations-list">
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="https://help.clickup.com/hc/en-us/articles/6305095991703-Enable-Okta-single-sign-on-integration"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <img
                            height={32}
                            loading="lazy"
                            src="/images/integrations/okta.svg"
                            alt="Okta"
                            width={96}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/make"
                        >
                          <img
                            height={50}
                            loading="lazy"
                            src="/images/integrations/integromat-logo.png"
                            alt="Integromat"
                            width={50}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/sso"
                        >
                          <img
                            height={30}
                            loading="lazy"
                            src="/images/integrations/sign-in-with-microsoft.png"
                            alt="Single Sign-On for ClickUp"
                            width={76}
                            draggable="false"
                          />
                        </a>
                        <a
                          className="cu-main-section-platforms__tabs-integrations-item"
                          href="/integrations/hangouts-chat"
                        >
                          <img
                            height={58}
                            loading="lazy"
                            src="/images/integrations/hangouts.svg"
                            alt="Collaborate Further: Hangouts Chat
                      + ClickUp"
                            width={50}
                            draggable="false"
                          />
                        </a>
                      </div>
                      <a
                        href="/integrations"
                        className="cu-main-section-platforms__tabs-integrations-btn"
                      >
                        100+ more integrations.&nbsp;<span>See all</span>.
                      </a>
                    </div>
                  </div>
                  <div
                    className="cu-main-section-platforms__tabs-panel cu-tab__panel"
                    cu-data-tab-panel="automations-platform-tab"
                  >
                    <div className="cu-main-section-platforms__tabs-image cu-main-section__image">
                      <img
                        height={650}
                        loading="lazy"
                        alt="Automations"
                        style={{
                          boxShadow:
                            "0px 18.1587px 86.254px rgba(0, 184, 132, 0.1)",
                        }}
                        src="/images/main/automations.png"
                        width={1017}
                        draggable="false"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        data-beta
        data-ga-click-tracking
        ga-category="Free forever button"
        ga-event="Free forever click"
        lp-plan="free-forever"
        ga-label="menu button"
        href="#"
        mail-label="menu free forever"
        className="cu-main-section__btn cu-main-section__btn--with-arrow"
      >
        <span>Get Started</span>
      </a>
    </div>
  );
};

export default Platforms;
