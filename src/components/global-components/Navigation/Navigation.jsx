import React from "react";

const Navigation = () => {
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease-out-quad"
      data-easing2="ease-out-quad"
      role="banner"
      className="navbar w-nav"
    >
      <div className="nav-base">
        <div className="grid-wrapper">
          <div
            id="w-node-_1514a677-da13-10fe-8ee9-15c5c59d8014-c59d8011"
            className="nav-content"
          >
            <a
              href="index.html"
              id="w-node-_1514a677-da13-10fe-8ee9-15c5c59d8015-c59d8011"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <div className="subtitle logo-text">
                Stealthy
                <br />
                Whiskers
              </div>
            </a>
            <nav
              role="navigation"
              id="w-node-_1514a677-da13-10fe-8ee9-15c5c59d8018-c59d8011"
              className="nav-menu w-nav-menu"
            >
              <div className="menu-base">
                <div
                  id="w-node-_1514a677-da13-10fe-8ee9-15c5c59d8019-c59d8011"
                  className="menu-wrapper"
                >
                  <a
                    id="w-node-_1514a677-da13-10fe-8ee9-15c5c59d801b-c59d8011"
                    href="index.html"
                    aria-current="page"
                    className="nav-link w-inline-block w--current"
                  >
                    <div className="nav-link-text">
                      <div className="button-text-wrapper">
                        <div className="button-text">Home</div>
                      </div>
                    </div>
                  </a>
                  <a
                    id="w-node-_4df5984c-eacd-cf41-c839-2918503ff297-c59d8011"
                    href="shop.html"
                    className="nav-link w-inline-block"
                  >
                    <div className="nav-link-text">
                      <div className="button-text-wrapper">
                        <div className="button-text">Shop</div>
                      </div>
                    </div>
                  </a>
                  <a
                    id="w-node-_1514a677-da13-10fe-8ee9-15c5c59d801f-c59d8011"
                    href="about.html"
                    className="nav-link w-inline-block"
                  >
                    <div className="nav-link-text">
                      <div className="button-text-wrapper">
                        <div className="button-text">About</div>
                      </div>
                    </div>
                  </a>
                  <a
                    id="w-node-_1514a677-da13-10fe-8ee9-15c5c59d8023-c59d8011"
                    href="contact.html"
                    className="nav-link w-inline-block"
                  >
                    <div className="nav-link-text">
                      <div className="button-text-wrapper">
                        <div className="button-text">Contact</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  id="w-node-e9bea2f9-eaf7-7cba-0310-7bf28540b64f-c59d8011"
                  className="search-wrapper"
                >
                  {/* Include the search component here if available */}
                </div>
              </div>
            </nav>
            <div
              id="w-node-_1514a677-da13-10fe-8ee9-15c5c59d8029-c59d8011"
              className="right-nav"
            >
              <div
                data-node-type="commerce-cart-wrapper"
                data-open-product=""
                data-wf-cart-type="rightSidebar"
                data-wf-cart-query=""
                data-wf-page-link-href-prefix=""
                data-wf-cart-duration="500"
                className="w-commerce-commercecartwrapper cart"
              >
                {/* Include the cart component here if available */}
              </div>
              <div className="menu-button w-nav-button">
                <img
                  src="images/menu-224x242x.svg"
                  loading="lazy"
                  id="w-node-_5f857560-aff6-136b-5964-08ebb48954f1-c59d8011"
                  alt=""
                  className="menu-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
