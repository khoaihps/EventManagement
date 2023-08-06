import "../App.css";

const QnA = () => {
  return (
    <div className="px-4 py-20 bg-lightblue">
      <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
        <h2 className="w-full mr-8 text-3xl font-extrabold leading-9 md:w-1/3">
          Frequently-asked questions
        </h2>
        <dl className="w-full md:w-2/3">
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              What types of events does EVENTIST specialize in?
            </h3>
          </dt>
          <dd className="mb-16">
            <p>
              At EVENTIST, we specialize in organizing a wide range of events to
              cater to diverse needs. Our expertise covers corporate events,
              conferences, product launches, weddings, private parties, and
              community gatherings. Whether it's a small intimate gathering or a
              large-scale event, we have the skills and experience to make it a
              memorable success.
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              How much does EVENTIST charge for event planning services?
            </h3>
          </dt>
          <dd className="mb-16">
            <p>
              Our event planning services are tailored to suit the unique
              requirements of each event, so pricing may vary accordingly. We
              offer personalized quotes based on factors such as event size,
              complexity, location, and specific services required. Rest
              assured, our pricing is competitive, transparent, and always
              aligned with your budget. To get a detailed quote, simply reach
              out to us through our contact page or give us a call, and we'll be
              delighted to discuss your event needs.
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              Can EVENTIST manage events in multiple locations?
            </h3>
          </dt>
          <dd className="mb-16">
            <p>
              Absolutely! As a professional event agency, we have a wide network
              of partners and vendors, which enables us to execute events
              seamlessly in multiple locations. Whether you need an event
              organized locally, nationally, or internationally, our dedicated
              team is fully equipped to handle all logistics, planning, and
              coordination. We take pride in delivering top-notch event
              management services, regardless of the event's location.
            </p>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default QnA;
