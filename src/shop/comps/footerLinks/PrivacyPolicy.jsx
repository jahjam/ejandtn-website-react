import { useEffect, useRef } from 'react';

const PrivacyPolicy = props => {
  const el = useRef();

  useEffect(() => {
    const elementPosition = el.current.getBoundingClientRect().top;
    const scrollTo = elementPosition + window.pageYOffset;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  }, []);

  const closeModal = e => {
    props.closeModalHandler(e);
  };

  return (
    <div ref={el} className="footer-drop privacy-policy" id="privacy">
      <div className="footer-content privacy-policy-body">
        <button onClick={closeModal} className="close-foooter">
          Close
        </button>
        <h1>Privacy Policy</h1>
        <p className="privacy-opener">
          Please bare in mind that this is a very, very small operation -
          myself, E. J. Mainwaring, taking orders online, processing, and then
          posting them. Any data I collect through here will be used to post
          your items to you, and that is all. This website is essentially a
          digital merch table, but the below information is now a requirement, I
          think - I don't really know what it all means, to be honest. I can
          barely sell a CD of my own music, nevermind somebodys data.
        </p>
        <div className="WordSection1">
          <h3>Contact</h3>
          <p>
            After reviewing this policy, if you have additional questions, want
            more information about our privacy practices, please contact us by
            e-mail at
            <a className="link" href="mailto:ejandtn@gmail.com">
              ejandtn@gmail.com
            </a>
            .
          </p>
          <h3>Collecting Personal Information</h3>
          <p>
            When you visit the Site, we collect certain information about your
            device, your interaction with the Site, and information necessary to
            process your purchases. We may also collect additional information
            if you contact us for customer support. In this Privacy Policy, we
            refer to any information about an identifiable individual (including
            the information below) as “Personal Information”. See the list below
            for more information about what Personal Information we collect and
            why.
          </p>
          <p>
            <strong>Device information</strong>
          </p>
          <ul>
            <li>
              Purpose of collection: to load the Site accurately for you, and to
              perform analytics on Site usage to optimise our Site.
            </li>
            <li>
              Source of collection: Collected automatically when you access our
              Site using cookies, log files, web beacons, tags, or pixels.
              Disclosure for a business purpose: shared with our processor
              Shopify.
            </li>
            <li>
              Personal Information collected: version of web browser, IP
              address, time zone, cookie information, what sites or products you
              view, search terms, and how you interact with the Site.
            </li>
          </ul>
          <p>
            <strong>Order information</strong>
          </p>
          <ul>
            <li>
              Purpose of collection: to provide products or services to you to
              fulfil our contract, to process your payment information, arrange
              for shipping, and provide you with invoices and/or order
              confirmations, communicate with you, screen our orders for
              potential risk or fraud, and when in line with the preferences you
              have shared with us, provide you with information or advertising
              relating to our products or services.
            </li>
            <li>Source of collection: collected from you.</li>
            <li>
              Disclosure for a business purpose: shared with our processor
              Shopify.
            </li>
            <li>
              Personal Information collected: name, billing address, shipping
              address, payment information (including credit card numbers),
              email address, and phone number.
              <strong>Customer support information</strong>
            </li>
            <li>Purpose of collection: to provide customer support.</li>
            <li>Source of collection: collected from you</li>
          </ul>
          <h3>Sharing Personal Information</h3>
          <p>
            We share your Personal Information with service providers to help us
            provide our services and fulfil our contracts with you, as described
            above. For example:
          </p>
          <ul>
            <li>
              We use Shopify to power our online store. You can read more about
              how Shopify uses your Personal Information here:
              <a className="link" href="https://www.shopify.com/legal/privacy">
                https://www.shopify.com/legal/privacy
              </a>
              .
            </li>
            <li>
              We may share your Personal Information to comply with applicable
              laws and regulations, to respond to a subpoena, search warrant or
              other lawful request for information we receive, or to otherwise
              protect our rights.
            </li>
          </ul>
          <h3>Using Personal Information</h3>
          <p>
            We use your personal Information to provide our services to you,
            which includes: offering products for sale, processing payments,
            shipping and fulfilment of your order, and keeping you up to date on
            new products, services, and offers.
          </p>
          <h3>Lawful basis</h3>
          <p>
            Pursuant to the General Data Protection Regulation (“GDPR”), if you
            are a resident of the European Economic Area (“EEA”), we process
            your personal information under the following lawful bases:
          </p>
          <ul>
            <li>Your consent;</li>
            <li>The performance of the contract between you and the Site;</li>
            <li>Compliance with our legal obligations;</li>
            <li>To protect your vital interests;</li>
            <li>To perform a task carried out in the public interest;</li>
            <li>
              For our legitimate interests, which do not override your
              fundamental rights and freedoms.
            </li>
          </ul>
          <h3>Retention</h3>
          <p>
            When you place an order through the Site, we will retain your
            Personal Information for our records unless and until you ask us to
            erase this information. For more information on your right of
            erasure, please see the ‘Your rights’ section below.
          </p>
          <h3>Automatic decision-making</h3>
          <p>
            If you are a resident of the EEA, you have the right to object to
            processing based solely on automated decision-making (which includes
            profiling), when that decision-making has a legal effect on you or
            otherwise significantly affects you.
          </p>
          <p>
            We DO NOT engage in fully automated decision-making that has a legal
            or otherwise significant effect using customer data.
          </p>
          <p>
            Our processor Shopify uses limited automated decision-making to
            prevent fraud that does not have a legal or otherwise significant
            effect on you.
          </p>
          <p>
            Services that include elements of automated decision-making include:
          </p>
          <ul>
            <li>
              Temporary blacklist of IP addresses associated with repeated
              failed transactions. This blacklist persists for a small number of
              hours.
            </li>
            <li>
              Temporary blacklist of credit cards associated with blacklisted IP
              addresses. This blacklist persists for a small number of days.
            </li>
          </ul>
          <h3>Your rights</h3>
          <h3>GDPR</h3>
          <p>
            If you are a resident of the EEA, you have the right to access the
            Personal Information we hold about you, to port it to a new service,
            and to ask that your Personal Information be corrected, updated, or
            erased. If you would like to exercise these rights, please contact
            us through the contact information above.
          </p>
          <p>
            Your Personal Information will be initially processed in Ireland and
            then will be transferred outside of Europe for storage and further
            processing, including to Canada and the United States. For more
            information on how data transfers comply with the GDPR, see
            Shopify’s GDPR Whitepaper:
            <a
              className="link"
              href="https://help.shopify.com/en/manual/your-account/privacy/GDPR"
            >
              https://help.shopify.com/en/manual/your-account/privacy/GDPR
            </a>
            .
          </p>
          <h3>CCPA</h3>
          <p>
            If you are a resident of California, you have the right to access
            the Personal Information we hold about you (also known as the ‘Right
            to Know’), to port it to a new service, and to ask that your
            Personal Information be corrected, updated, or erased. If you would
            like to exercise these rights, please contact us through the contact
            information above.
          </p>
          <p>
            If you would like to designate an authorized agent to submit these
            requests on your behalf, please contact us at the address above.
          </p>
          <h3>Cookies</h3>
          <p>
            A cookie is a small amount of information that’s downloaded to your
            computer or device when you visit our Site. We use a number of
            different cookies, including functional, performance, advertising,
            and social media or content cookies. Cookies make your browsing
            experience better by allowing the website to remember your actions
            and preferences (such as login and region selection). This means you
            don’t have to re-enter this information each time you return to the
            site or browse from one page to another. Cookies also provide
            information on how people use the website, for instance whether it’s
            their first time visiting or if they are a frequent visitor.
          </p>
          <p>
            We use the following cookies to optimize your experience on our Site
            and to provide our services.
          </p>
          <h3>Cookies Necessary for the Functioning of the Store</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Function</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ab</td>
                <td>Used in connection with access to admin.</td>
                <td>2y</td>
              </tr>
              <tr>
                <td>_secure_session_id</td>
                <td>
                  Used in connection with navigation through a storefront.
                </td>
                <td>24h</td>
              </tr>
              <tr>
                <td>_shopify_country</td>
                <td>Used in connection with checkout.</td>
                <td>session</td>
              </tr>
              <tr>
                <td>_shopify_m</td>
                <td>Used for managing customer privacy settings.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>_shopify_tm</td>
                <td>Used for managing customer privacy settings.</td>
                <td>30min</td>
              </tr>
              <tr>
                <td>_shopify_tw</td>
                <td>Used for managing customer privacy settings.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>_storefront_u</td>
                <td>
                  Used to facilitate updating customer account information.
                </td>
                <td>1min</td>
              </tr>
              <tr>
                <td>_tracking_consent</td>
                <td>Tracking preferences.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>c</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>cart</td>
                <td>Used in connection with shopping cart.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>cart_currency</td>
                <td>Used in connection with shopping cart.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>cart_sig</td>
                <td>Used in connection with checkout.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>cart_ts</td>
                <td>Used in connection with checkout.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>cart_ver</td>
                <td>Used in connection with shopping cart.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>checkout</td>
                <td>Used in connection with checkout.</td>
                <td>4w</td>
              </tr>
              <tr>
                <td>checkout_token</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>dynamic_checkout_shown_on_cart</td>
                <td>Used in connection with checkout.</td>
                <td>30min</td>
              </tr>
              <tr>
                <td>hide_shopify_pay_for_checkout</td>
                <td>Used in connection with checkout.</td>
                <td>session</td>
              </tr>
              <tr>
                <td>keep_alive</td>
                <td>Used in connection with buyer localization.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>master_device_id</td>
                <td>Used in connection with merchant login.</td>
                <td>2y</td>
              </tr>
              <tr>
                <td>previous_step</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>remember_me</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>secure_customer_sig</td>
                <td>Used in connection with customer login.</td>
                <td>20y</td>
              </tr>
              <tr>
                <td>shopify_pay</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>shopify_pay_redirect</td>
                <td>Used in connection with checkout.</td>
                <td>30 minutes, 3w or 1y depending on value</td>
              </tr>
              <tr>
                <td>storefront_digest</td>
                <td>Used in connection with customer login.</td>
                <td>2y</td>
              </tr>
              <tr>
                <td>tracked_start_checkout</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>checkout_one_experiment</td>
                <td>Used in connection with checkout.</td>
                <td>session</td>
              </tr>
            </tbody>
          </table>
          <h3>Reporting and Analytic</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Function</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ab</td>
                <td>Used in connection with access to admin.</td>
                <td>2y</td>
              </tr>
              <tr>
                <td>_secure_session_id</td>
                <td>
                  Used in connection with navigation through a storefront.
                </td>
                <td>24h</td>
              </tr>
              <tr>
                <td>_shopify_country</td>
                <td>Used in connection with checkout.</td>
                <td>session</td>
              </tr>
              <tr>
                <td>_shopify_m</td>
                <td>Used for managing customer privacy settings.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>_shopify_tm</td>
                <td>Used for managing customer privacy settings.</td>
                <td>30min</td>
              </tr>
              <tr>
                <td>_shopify_tw</td>
                <td>Used for managing customer privacy settings.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>_storefront_u</td>
                <td>
                  Used to facilitate updating customer account information.
                </td>
                <td>1min</td>
              </tr>
              <tr>
                <td>_tracking_consent</td>
                <td>Tracking preferences.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>c</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>cart</td>
                <td>Used in connection with shopping cart.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>cart_currency</td>
                <td>Used in connection with shopping cart.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>cart_sig</td>
                <td>Used in connection with checkout.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>cart_ts</td>
                <td>Used in connection with checkout.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>cart_ver</td>
                <td>Used in connection with shopping cart.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>checkout</td>
                <td>Used in connection with checkout.</td>
                <td>4w</td>
              </tr>
              <tr>
                <td>checkout_token</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>dynamic_checkout_shown_on_cart</td>
                <td>Used in connection with checkout.</td>
                <td>30min</td>
              </tr>
              <tr>
                <td>hide_shopify_pay_for_checkout</td>
                <td>Used in connection with checkout.</td>
                <td>session</td>
              </tr>
              <tr>
                <td>keep_alive</td>
                <td>Used in connection with buyer localization.</td>
                <td>2w</td>
              </tr>
              <tr>
                <td>master_device_id</td>
                <td>Used in connection with merchant login.</td>
                <td>2y</td>
              </tr>
              <tr>
                <td>previous_step</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>remember_me</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>secure_customer_sig</td>
                <td>Used in connection with customer login.</td>
                <td>20y</td>
              </tr>
              <tr>
                <td>shopify_pay</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>shopify_pay_redirect</td>
                <td>Used in connection with checkout.</td>
                <td>30 minutes, 3w or 1y depending on value</td>
              </tr>
              <tr>
                <td>storefront_digest</td>
                <td>Used in connection with customer login.</td>
                <td>2y</td>
              </tr>
              <tr>
                <td>tracked_start_checkout</td>
                <td>Used in connection with checkout.</td>
                <td>1y</td>
              </tr>
              <tr>
                <td>checkout_one_experiment</td>
                <td>Used in connection with checkout.</td>
                <td>session</td>
              </tr>
            </tbody>
          </table>
          <p>
            The length of time that a cookie remains on your computer or mobile
            device depends on whether it is a “persistent” or “session” cookie.
            Session cookies last until you stop browsing and persistent cookies
            last until they expire or are deleted. Most of the cookies we use
            are persistent and will expire between 30 minutes and two years from
            the date they are downloaded to your device.
          </p>
          <p>
            You can control and manage cookies in various ways. Please keep in
            mind that removing or blocking cookies can negatively impact your
            user experience and parts of our website may no longer be fully
            accessible.
          </p>
          <p>
            Most browsers automatically accept cookies, but you can choose
            whether or not to accept cookies through your browser controls,
            often found in your browser’s “Tools” or “Preferences” menu. For
            more information on how to modify your browser settings or how to
            block, manage or filter cookies can be found in your browser’s help
            file or through such sites as:
            <a className="link" href="http://www.allaboutcookies.org">
              www.allaboutcookies.org
            </a>
            .
          </p>
          <p>
            Additionally, please note that blocking cookies may not completely
            prevent how we share information with third parties such as our
            advertising partners. To exercise your rights or opt-out of certain
            uses of your information by these parties, please follow the
            instructions in the “Behavioural Advertising” section above.
          </p>
          <h4>Do Not Track</h4>
          <p>
            Please note that because there is no consistent industry
            understanding of how to respond to “Do Not Track” signals, we do not
            alter our data collection and usage practices when we detect such a
            signal from your browser.
          </p>
          <h3>Changes</h3>
          <p>
            We may update this Privacy Policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons.
          </p>
          <h3>Complaints</h3>
          <p>
            As noted above, if you would like to make a complaint, please
            contact us by e-mail using the details provided under “Contact”
            above.
          </p>
          <p>
            If you are not satisfied with our response to your complaint, you
            have the right to lodge your complaint with the relevant data
            protection authority. You can contact your local data protection
            authority, or our supervisory authority here:
            <a className="link" href="mailto:icocasework@ico.org.uk">
              icocasework@ico.org.uk
            </a>
          </p>
          <h5>Last updated: 27/05/2022</h5>
        </div>
        <button onClick={closeModal} className="close-foooter">
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
