const PrivacyAndPolicy = () => {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto px-0 sm:px-[15px] mb-10">
        <div className="px-5 sm:px-[40px] py-[24px] bg-[#F0F0F0] mt-0 sm:mt-5">
          <h1 className="text-2xl font-bold text-center mt-[10px] mb-[6px]">
            Privacy Policy
          </h1>
          <p className="text-center">
            This Website collects certain information to provide a safe and
            useful service.
          </p>
          <span className="inline-block w-full h-[1px] bg-slate-300 mt-10"></span>
          <div className="my-8">
            <h2 className="mb-3 text-lg font-semibold">Collection</h2>
            <p className="mb-3">
              If you choose to provide us with personal information, you are
              consenting to the transfer and storage of that information on our
              servers. We collect and store the following personal information:
            </p>
            <ul className="list-disc ml-10">
              <li className="mb-3">
                Email address, contact information, and (depending on the
                service used).
              </li>
              <li className="mb-3">
                Other information, including users' IP address and standard web
                log information.
              </li>
            </ul>
          </div>

          <div className="my-8">
            <h5 className="text-lg font-semibold mb-3">
              Communication and email tools
            </h5>
            <p className="mb-3">
              You agree to receive marketing communications about consumer goods
              and services on behalf of our third-party advertising partners
              unless you tell us that you prefer not to receive such
              communications. If you don't wish to receive marketing
              communications from us, simply indicate your preference by
              following directions provided with the communication. You may not
              use our site or communication tools to harvest addresses, send
              spam or otherwise breach our Terms of Use or Privacy Policy. We
              may automatically scan and manually filter email messages sent via
              our communication tools for malicious activity or prohibited
              content. If you use our tools to send content to a friend, we
              don't permanently store your friends' addresses or use or disclose
              them for marketing purposes. To report spam from other users,
              please contact customer support.
            </p>
            <h5 className="text-lg font-semibold mb-3">Security</h5>
            <p className="mb-2">
              We use lots of tools (encryption, passwords, physical security) to
              protect your personal information against unauthorized access and
              disclosure.
            </p>
            <p className="mb-2">
              All personal electronic details will be kept private by the
              Service except for those that you wish to disclose.
            </p>
            <p className="mb-2">
              It is unacceptable to disclose the contact information of others
              through the Service.
            </p>
            <p className="mb-3">
              If you violate the laws of your country of residence and/or the
              terms of use of the Service you forfeit your privacy rights over
              your personal information.
            </p>
            <h5 className="text-lg font-semibold mb-3">
              Unsubscribe information
            </h5>
            <p className="mb-3">
              If at any time you wish to have your information reviewed or
              removed from our active databases, please contact us at{" "}
              <a
                className="px-1 text-blue-600 hover:underline"
                href="mailto:support@10fix.com.bd"
              >
                support@10fix.com.bd
              </a>{" "}
              Additionally, you will be able to unsubscribe anytime by clicking
              on the unsubscribe link at the bottom of all our email
              communications.
            </p>
            <p className="mb-3">
              This website makes use of Display Advertising, and uses
              Remarketing technology with Google Analytics to advertise online.
              Third-party vendors, including Google, may show our ads on various
              websites across the Internet, using first-party cookies and
              third-party cookies together to inform, optimize, and serve ads
              based on past visits to our website.
            </p>
            <p>
              Visitors can opt-out of Google Analytics for Display Advertising
              and customize Google Display Network ads using the Ads Preferences
              Manager.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
