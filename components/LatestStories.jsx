import React from 'react'

const LatestStories = () => {
  return (
    <section className="relative my-12 md:mt-20 cursor-default-hover">
      <section className="jsx-f704f42be0b5c3bb max-w-full mx-4 my-16 articles lg:my-24 md:mx-auto md:container cursor-default-hover">
        <div className="jsx-f704f42be0b5c3bb">
          <h2
            className="inline-block text-sm lg:text-base text-transparent bg-clip-text bg-gradient-to-r from-slate to-bit-pink font-mono uppercase tracking-wider"
            data-anchor="travel-stories-and-news"
            data-nav="Articles"
          >
            Travel stories and news
          </h2>
          <header className="jsx-f704f42be0b5c3bb flex items-end justify-between mt-5 mb-10 lg:mt-8 lg:mb-14">
            <h2 className="text-2xl md:text-5xl md:leading-relaxed cursor-default-hover">
              Explore our latest stories
            </h2>
            <div className="jsx-f704f42be0b5c3bb flex-none hidden md:inline-block">
              <a
                className="jsx-f704f42be0b5c3bb mr-4 btn"
                href="/news"
              >
                Read more news
              </a>
              <a
                className="jsx-f704f42be0b5c3bb btn"
                href="/articles"
              >
                Read more articles
              </a>
            </div>
          </header>
        </div>
        <div className="jsx-f704f42be0b5c3bb relative z-0 lg:flex lg:gap-x-8">
          <div className="jsx-f704f42be0b5c3bb mb-8 lg:w-3/5 lg:shrink-0 lg:mb-auto">
            <div className="relative">
              <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                <a
                  className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                  href="/api/auth/login?action=bookmark"
                >
                  <span className="sr-only">
                    Login
                  </span>
                  <svg
                    aria-hidden="true"
                    className="text-white"
                    fill="currentColor"
                    height="1em"
                    viewBox="0 0 14 20"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                  </svg>
                </a>
                <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                  <div className="jsx-d9256db7ff0ace36">
                    <h4 className="text-lg font-semibold leading-tight">
                      Save your favorites!
                    </h4>
                    <p className="text-sm">
                      <a href="https://www.lonelyplanet.com/api/auth/login">
                        Sign in
                      </a>
                      {' '}to save, get inso & more
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative lg:rounded overflow-hidden lg:h-[688px]">
                <img
                  alt="man and girl walk on a sandy beach seen from a high angle looking down. A lake is to their left and a dune to their right."
                  className="max-w-full hidden object-cover w-full h-full rounded -z-10 lg:block"
                  data-nimg="1"
                  decoding="async"
                  height="630"
                  loading="lazy"
                  src="https://lp-cms-production.imgix.net/2024-05/Beach-hangs-1.jpg?auto=format&w=730&h=630&fit=crop&q=75"
                  srcSet="https://lp-cms-production.imgix.net/2024-05/Beach-hangs-1.jpg?auto=format&w=730&h=630&fit=crop&q=75 1x, https://lp-cms-production.imgix.net/2024-05/Beach-hangs-1.jpg?auto=format&w=730&h=630&fit=crop&q=75 2x"
                  style={{
                    color: 'transparent'
                  }}
                  width="730"
                />
                <img
                  alt="man and girl walk on a sandy beach seen from a high angle looking down. A lake is to their left and a dune to their right."
                  className="max-w-full object-cover -z-10 rounded lg:hidden w-full aspect-[350/200]"
                  data-nimg="1"
                  decoding="async"
                  height="425"
                  loading="lazy"
                  src="https://lp-cms-production.imgix.net/2024-05/Beach-hangs-1.jpg?auto=format&w=780&h=425&fit=crop&q=75"
                  srcSet="https://lp-cms-production.imgix.net/2024-05/Beach-hangs-1.jpg?auto=format&w=780&h=425&fit=crop&q=75 1x, https://lp-cms-production.imgix.net/2024-05/Beach-hangs-1.jpg?auto=format&w=780&h=425&fit=crop&q=75 2x"
                  style={{
                    color: 'transparent'
                  }}
                  width="780"
                />
                <div className="top-0 flex items-end w-full h-full pt-4 lg:absolute lg:bg-gradient-to-t from-transparent-80 via-transparent-40 to-transparent lg:p-8">
                  <div className="lg:w-2/3 lg:pb-8">
                    <p className="relative z-10 uppercase label-sm text-black-400 lg:text-white">
                      Beaches
                    </p>
                    <a
                      className="inline-block my-2 font-semibold card-link heading-04 lg:text-white cursor-on-hover"
                      href="/articles/how-to-plan-your-summer-vacation-to-northern-michigan"
                    >
                      Plan your summer vacation to Northern Michigan{' '}
                    </a>
                    <p className="relative text-black-400 lg:text-white">
                      May 9, 2024 • 9 min read
                    </p>
                    <p className="relative hidden mt-4 lg:block lg:text-white">
                      Follow this step-by-step guide to vacationing in Northern Michigan this summer, then sit back, relax and enjoy the sunsets!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="jsx-3406129628 max-w-full overflow-x-hidden px-4 lg:container w-full carousel-wrapper lg:px-0">
            <ul className="jsx-3406129628 carousel flex overflow-x-scroll md:overflow-x-auto overflow-y-hidden -mx-4">
              <li className="jsx-3406129628 carousel-item flex-shrink-0 px-4 pb-2 w-full md:w-full">
                <div className="jsx-f704f42be0b5c3bb flex flex-col gap-y-4 lg:h-full">
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Gay Head in Martha's Vineyard, Massachusetts.288669965aquinnah, background, beacon, boats, brick, cape, clay, cliffs, clouds, coast, edgar, england, gay, grass, green, harbor, head, house, island, landmark, landscape, light, lighthouse, martha, massachusetts, nautical, new, ocean, orange, panoramic, red, rock, s, safety, scenic, sea, seascape, seashore, shore, signal, sky, sunset, tourism, tower, travel, usa, vineyard, water"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/shutterstockRF288669965.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/shutterstockRF288669965.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Beaches
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/where-locals-go-nyc-nearby-getaways"
                        >
                          Where Locals Go: Our NYC staff share their favorite nearby getaways
                        </a>
                        <p className="text-sm text-black-400">
                          May 9, 2024 • 9 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Young woman lies on the bed and looks through the window of the sleeper train crossing picturesque Tibet. Female tourist observing the landscape while travelling along the Trans-Himalayan railway.1185025359woman, train, himalaya, lying, bed, sleeper, class, overnight train, private, train car, first, traveler, traveling, cabin, view, vista, beautiful, stunning, plains, observing, sight, trans-himalayan railway, panorama, scenery, landscape, relax, rest, young, caucasian, female, countryside, ride, explore, trip, lifestyle, wagon, vacation"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/GettyImages-1185025359.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/GettyImages-1185025359.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Sustainable Travel
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/first-time-night-train-travel"
                        >
                          A first-timer's guide to traveling on a sleeper train
                        </a>
                        <p className="text-sm text-black-400">
                          May 9, 2024 • 6 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="GAZIANTEP (ZEUGMA), TURKEY - APRIL 20, 2018: Zeugma Mosaic Museum; Shutterstock ID 1815031094; full: 65050; gl: 65050; netsuite: POI; your: Erin Lenczycki1815031094"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-01/shutterstockeditorial1815031094-RFE.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-01/shutterstockeditorial1815031094-RFE.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Sustainable Travel
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/why-you-can-and-should-travel-to-southeast-turkiye"
                        >
                          Why you can – and should – travel to southeast Türkiye
                        </a>
                        <p className="text-sm text-black-400">
                          May 9, 2024 • 5 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Indian-Coffee-HouseBangalore.jpeg"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/Indian-Coffee-HouseBangalore.jpeg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/Indian-Coffee-HouseBangalore.jpeg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Food and Drink
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/south-indian-filter-coffee"
                        >
                          You’ll see this everywhere: South Indian filter coffee
                        </a>
                        <p className="text-sm text-black-400">
                          May 9, 2024 • 6 min read
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </li>
              <li className="jsx-3406129628 carousel-item flex-shrink-0 px-4 pb-2 w-full md:w-full">
                <div className="jsx-f704f42be0b5c3bb flex flex-col gap-y-4 lg:h-full">
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Berlin Cathedral. German Berliner Dom. A famous landmark on the Museum Island in Mitte, Berlin, Germany.150264563architecture, art, attraction, berlin, berlin cathedral, berliner, berliner dom, blue, building, capital, cathedral, church, city, cityscape, culture, destination, deutschland, dom, dome, europe, european, evangelical, famous, german, germany, historic, history, landmark, mitte, monument, museum island, night, nightlife, old, parish, protestant, religion, river, sightseeing, spree, summer, sunset, tourism, tourist, touristic, tower, town, travel, view"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/shutterstock150264563.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/shutterstock150264563.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Destination Practicalities
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/things-to-know-before-traveling-to-germany"
                        >
                          What you need to know before going to Germany
                        </a>
                        <p className="text-sm text-black-400">
                          May 9, 2024 • 6 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Idyllic summer landscape with a flower meadow, snowy mountains and a blue lake, Zell am See, Pinzgau, Salzburger Land, Austria, Europe1408095446pinzgau, alps, alpine, hohe tauern, kaprun, kitzsteinhorn, hochalpenstrasse, view, beautiful, vacation, green, europe. austria, landscape, blooming, scenic, outdoor, holiday, touring"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/GettyImages-1408095446.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/GettyImages-1408095446.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Tips & Advice
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/best-places-to-visit-in-austria"
                        >
                          12 of the best places to visit in Austria
                        </a>
                        <p className="text-sm text-black-400">
                          May 9, 2024 • 14 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Germany, Rhineland-Palatinate, Poltersdorf, Moselle river, Metternich Castle1131373329aerial view, agriculture, architecture, autumn, built structure, castle, cochem, color image, copy space, day, drone, high angle view, germany, history, metternich castle, no people, old ruin, outdoors, photography, rhineland-palatinate, river, sky, sunlight, town, travel, travel destinations, vineyard, winemaking, water, building, cloud, historical, moselle, view"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/GettyImages-1131373329.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/GettyImages-1131373329.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Tips & Advice
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/best-places-to-visit-in-germany"
                        >
                          8 of the best places to visit in Germany
                        </a>
                        <p className="text-sm text-black-400">
                          May 9, 2024 • 6 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Panoramic view of scenic mountain scenery with Lake Konigssee with famous Sankt Bartholomae pilgrimage church in golden evening light in fall, national park Berchtesgadener Land, Bavaria, Germany.alpine, alps, attraction, austria, austrian, autumn, baroque, bartholoma, bartholomae, bartholomew, bartholomew's, bavaria, bavarian, bayern, berchtesgaden, berchtesgadener, blue, cathedral, chapel, church, europe, fall, forest, german, germany, hirschau, indian, koenigssee, konigssee, lake, land, landmark, landscape, leaves, mountains, nature, panorama, pilgrimage, reflection, rocks, sankt, sky, snow, st, st., summer, sunset, tourism, tourist, travel, trees, water, watzmann, wilderness"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/shutterstockRF331585490.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/shutterstockRF331585490.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Destination Practicalities
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/best-time-to-visit-germany"
                        >
                          When is the best time to visit Germany? We help you decide
                        </a>
                        <p className="text-sm text-black-400">
                          May 8, 2024 • 3 min read
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </li>
              <li className="jsx-3406129628 carousel-item flex-shrink-0 px-4 pb-2 w-full md:w-full">
                <div className="jsx-f704f42be0b5c3bb flex flex-col gap-y-4 lg:h-full">
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Panorama of Marienplatz square with New Town Hall and Frauenkirche (Cathedral of Our Lady).1177177312"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/GettyImages-1177177312.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/GettyImages-1177177312.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Activities
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/top-things-to-do-in-munich"
                        >
                          12 of the best things to do in Munich
                        </a>
                        <p className="text-sm text-black-400">
                          May 8, 2024 • 6 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="A person walking along a switchback trail in Bryce Canyon National Park, Utah"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/GettyImages-487929525.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/GettyImages-487929525.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Destination Practicalities
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/guide-to-bryce-canyon-national-park"
                        >
                          First-timer’s guide to Bryce Canyon National Park
                        </a>
                        <p className="text-sm text-black-400">
                          May 8, 2024 • 7 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Man and women paddle stand up paddleboards through the Inner Harbour towards the Parliament Buildings. © Aaron Black / Getty Images RFC"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/GettyImages-544679113.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/GettyImages-544679113.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Activities
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/guide-to-vancouver-island"
                        >
                          A first-timer’s guide to Vancouver Island
                        </a>
                        <p className="text-sm text-black-400">
                          May 8, 2024 • 11 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Woman relaxing at Umpqua Hot Springs, Douglas county, Oregon, United States.1189553033hot springs, oregon, Umpqua"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-04/GettyImages-1189553033.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-04/GettyImages-1189553033.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Activities
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/oregon-hot-springs"
                        >
                          7 of the best hot springs in Oregon
                        </a>
                        <p className="text-sm text-black-400">
                          May 8, 2024 • 8 min read
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </li>
              <li className="jsx-3406129628 carousel-item flex-shrink-0 px-4 pb-2 w-full md:w-full">
                <div className="jsx-f704f42be0b5c3bb flex flex-col gap-y-4 lg:h-full">
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="553822763togetherness, relaxation, vacation, sharing, bonding"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/GettyImages-553822763-cropped.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/GettyImages-553822763-cropped.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Budget Travel
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/affordable-family-holiday-tips"
                        >
                          10 tips for traveling as a family, for less
                        </a>
                        <p className="text-sm text-black-400">
                          May 8, 2024 • 5 min read
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-30 m-3 rounded-full group">
                      <a
                        className="flex items-center justify-center w-10 h-10 p-2 rounded-full text-md bg-black/50 group-hover:bg-black"
                        href="/api/auth/login?action=bookmark"
                      >
                        <span className="sr-only">
                          Login
                        </span>
                        <svg
                          aria-hidden="true"
                          className="text-white"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 14 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0.625H2C1.50272 0.625 1.02581 0.822544 0.674175 1.17417C0.322544 1.52581 0.125 2.00272 0.125 2.5V18.75C0.125941 18.8607 0.15514 18.9693 0.20983 19.0656C0.264519 19.1618 0.342886 19.2425 0.4375 19.3C0.535537 19.3525 0.645032 19.38 0.75625 19.38C0.867468 19.38 0.976963 19.3525 1.075 19.3L7 15.725L12.925 19.2875C13.0228 19.3471 13.1355 19.3774 13.25 19.375C13.3585 19.3741 13.4654 19.3485 13.5625 19.3C13.6571 19.2425 13.7355 19.1618 13.7902 19.0656C13.8449 18.9693 13.8741 18.8607 13.875 18.75V2.5C13.875 2.00272 13.6775 1.52581 13.3258 1.17417C12.9742 0.822544 12.4973 0.625 12 0.625ZM12.625 17.65L7.325 14.4625C7.22619 14.4054 7.1141 14.3754 7 14.3754C6.8859 14.3754 6.77381 14.4054 6.675 14.4625L1.375 17.65V2.5C1.375 2.33424 1.44085 2.17527 1.55806 2.05806C1.67527 1.94085 1.83424 1.875 2 1.875H12C12.1658 1.875 12.3247 1.94085 12.4419 2.05806C12.5592 2.17527 12.625 2.33424 12.625 2.5V17.65Z" />
                        </svg>
                      </a>
                      <div className="jsx-d9256db7ff0ace36 c-tooltip invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md absolute w-contents min-w-64 right-0 translate-x-2 mt-3 px-4 pt-2 pb-3 shadow">
                        <div className="jsx-d9256db7ff0ace36">
                          <h4 className="text-lg font-semibold leading-tight">
                            Save your favorites!
                          </h4>
                          <p className="text-sm">
                            <a href="https://www.lonelyplanet.com/api/auth/login">
                              Sign in
                            </a>
                            {' '}to save, get inso & more
                          </p>
                        </div>
                      </div>
                    </div>
                    <article className="relative flex items-center rounded-md h-full p-4 hover:shadow-md focus:shadow-md md:my-6 bg-[#F0F7FC] border border-[#E0EEFA] md:my-auto lg:h-[160px]">
                      <div className="flex-none mr-4 md:mr-6 rounded-md overflow-hidden w-1/5">
                        <img
                          alt="Three friends hiking together in Bavaria, Germany"
                          className="max-w-full object-cover w-full h-full aspect-square"
                          data-nimg="1"
                          decoding="async"
                          height="140"
                          loading="lazy"
                          src="https://lp-cms-production.imgix.net/2024-05/GettyImages-932635642.jpg?auto=format&w=140&h=140&fit=crop&q=75"
                          srcSet="https://lp-cms-production.imgix.net/2024-05/GettyImages-932635642.jpg?auto=format&w=140&h=140&fit=crop&q=75 1x"
                          style={{
                            color: 'transparent'
                          }}
                          width="140"
                        />
                      </div>
                      <div className="flex-auto w-0">
                        <div className="text-sm uppercase font-semibold tracking-wide relative z-10 mb-2 w-90 text-black-400 block">
                          Hiking
                        </div>
                        <a
                          className="lg:text-lg text-black hover:text-black font-semibold card-link mb-1 line-clamp-3"
                          href="/articles/best-hikes-in-germany"
                        >
                          Discover Germany on these 6 incredible hikes
                        </a>
                        <p className="text-sm text-black-400">
                          May 8, 2024 • 5 min read
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </li>
            </ul>
            <div className="jsx-3406129628 md:flex items-center mt-4 hidden md:justify-end">
              <div className="flex text-black-300">
                <button
                  aria-label="previous slide"
                  className="cursor-default opacity-50 mr-2"
                  disabled
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className="text-3xl"
                    fill="currentColor"
                    height="1em"
                    viewBox="0 0 40 40"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 1.25C16.2916 1.25 12.6665 2.34967 9.58307 4.40994C6.49964 6.47022 4.09641 9.39857 2.67727 12.8247C1.25812 16.2508 0.886812 20.0208 1.61028 23.6579C2.33376 27.2951 4.11952 30.636 6.74176 33.2583C9.36399 35.8805 12.7049 37.6663 16.3421 38.3897C19.9792 39.1132 23.7492 38.7419 27.1753 37.3227C30.6014 35.9036 33.5298 33.5004 35.5901 30.4169C37.6503 27.3335 38.75 23.7084 38.75 20C38.75 15.0272 36.7746 10.2581 33.2583 6.74175C29.742 3.22544 24.9728 1.25 20 1.25ZM20 36.25C16.7861 36.25 13.6443 35.297 10.972 33.5114C8.29969 31.7258 6.21689 29.1879 4.98697 26.2186C3.75704 23.2493 3.43524 19.982 4.06225 16.8298C4.68926 13.6776 6.23692 10.7821 8.50952 8.50951C10.7821 6.23691 13.6776 4.68925 16.8298 4.06224C19.982 3.43523 23.2493 3.75703 26.2186 4.98696C29.1879 6.21688 31.7258 8.29969 33.5114 10.972C35.297 13.6443 36.25 16.7861 36.25 20C36.2434 24.3077 34.5292 28.4371 31.4832 31.4832C28.4372 34.5292 24.3077 36.2434 20 36.25Z" />
                    <path d="M23.3994 12.7501C23.2832 12.6329 23.145 12.5399 22.9926 12.4764C22.8403 12.413 22.6769 12.3803 22.5119 12.3803C22.3469 12.3803 22.1835 12.413 22.0312 12.4764C21.8789 12.5399 21.7406 12.6329 21.6244 12.7501L14.8494 19.1001C14.6113 19.339 14.4775 19.6627 14.4775 20.0001C14.4775 20.3374 14.6113 20.6611 14.8494 20.9001L21.6244 27.3001C21.7353 27.4125 21.8677 27.5015 22.0138 27.5616C22.1598 27.6218 22.3165 27.6518 22.4744 27.6501C22.6481 27.6528 22.8205 27.6185 22.98 27.5496C23.1394 27.4806 23.2824 27.3785 23.3994 27.2501C23.5158 27.136 23.6083 26.9999 23.6714 26.8496C23.7346 26.6994 23.7671 26.538 23.7671 26.3751C23.7671 26.2121 23.7346 26.0508 23.6714 25.9005C23.6083 25.7503 23.5158 25.6141 23.3994 25.5001L17.4994 20.0001L23.3494 14.5001C23.4691 14.3894 23.5656 14.2559 23.633 14.1074C23.7005 13.959 23.7377 13.7986 23.7423 13.6356C23.747 13.4726 23.719 13.3103 23.6602 13.1582C23.6013 13.0062 23.5126 12.8674 23.3994 12.7501Z" />
                  </svg>
                </button>
                <button
                  aria-label="next slide"
                  className=""
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className="text-3xl"
                    fill="currentColor"
                    height="1em"
                    viewBox="0 0 40 40"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 38.75C23.7084 38.75 27.3335 37.6503 30.4169 35.5901C33.5004 33.5298 35.9036 30.6014 37.3227 27.1753C38.7419 23.7492 39.1132 19.9792 38.3897 16.3421C37.6663 12.7049 35.8805 9.36399 33.2583 6.74176C30.636 4.11952 27.2951 2.33376 23.6579 1.61028C20.0208 0.886812 16.2508 1.25812 12.8247 2.67727C9.39857 4.09641 6.47022 6.49964 4.40994 9.58307C2.34967 12.6665 1.25 16.2916 1.25 20C1.25 24.9728 3.22544 29.742 6.74175 33.2583C10.2581 36.7746 15.0272 38.75 20 38.75ZM20 3.75001C23.2139 3.75001 26.3557 4.70305 29.028 6.48863C31.7003 8.2742 33.7831 10.8121 35.013 13.7814C36.243 16.7507 36.5648 20.018 35.9378 23.1702C35.3107 26.3224 33.7631 29.2179 31.4905 31.4905C29.2179 33.7631 26.3224 35.3108 23.1702 35.9378C20.018 36.5648 16.7507 36.243 13.7814 35.013C10.8121 33.7831 8.27419 31.7003 6.48862 29.028C4.70305 26.3557 3.75 23.214 3.75 20C3.75661 15.6923 5.47078 11.5629 8.51682 8.51683C11.5629 5.47079 15.6923 3.75662 20 3.75001Z" />
                    <path d="M16.6006 27.25C16.7176 27.3785 16.8606 27.4806 17.0201 27.5496C17.1795 27.6185 17.3519 27.6528 17.5256 27.65C17.6835 27.6518 17.8402 27.6217 17.9862 27.5616C18.1323 27.5015 18.2647 27.4125 18.3756 27.3L25.1506 20.9C25.3887 20.6611 25.5225 20.3374 25.5225 20C25.5225 19.6627 25.3887 19.339 25.1506 19.1L18.3756 12.7C18.2594 12.5829 18.1211 12.4899 17.9688 12.4264C17.8165 12.363 17.6531 12.3303 17.4881 12.3303C17.3231 12.3303 17.1597 12.363 17.0074 12.4264C16.855 12.4899 16.7168 12.5829 16.6006 12.7C16.4842 12.8141 16.3917 12.9502 16.3286 13.1005C16.2654 13.2507 16.2329 13.4121 16.2329 13.575C16.2329 13.738 16.2654 13.8993 16.3286 14.0496C16.3917 14.1998 16.4842 14.336 16.6006 14.45L22.5006 20L16.6506 25.5C16.5309 25.6107 16.4344 25.7442 16.367 25.8927C16.2995 26.0411 16.2624 26.2015 16.2577 26.3645C16.253 26.5275 16.281 26.6898 16.3399 26.8419C16.3987 26.9939 16.4874 27.1327 16.6006 27.25Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="jsx-f704f42be0b5c3bb flex justify-center space-x-4">
            <a
              className="jsx-f704f42be0b5c3bb block w-full mt-6 text-center lg:hidden btn"
              href="/news"
            >
              Read more news
            </a>
            <a
              className="jsx-f704f42be0b5c3bb block w-full mt-6 text-center lg:hidden btn"
              href="/articles"
            >
              Read more articles
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default LatestStories