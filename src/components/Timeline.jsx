import { Timeline } from "antd";

const GasketProcessTimeline = () => {
  return (
    <section className="bg-teal-200 mt-20 py-16 text-center">
      <h2 className="text-3xl font-bold text-teal-900">
        Our Process: From Profile to Perfect Fit
      </h2>
      <h6 className="mt-4 text-gray-700 max-w-2xl mx-auto">
        We don’t just supply gaskets — we engineer seamless solutions tailored
        to your profiles. Here’s how we deliver the perfect fit, every time.
      </h6>

      <div className="mt-16 max-w-4xl mx-auto text-left">
        <Timeline
          mode="alternate"
          items={[
            {
              children: (
                <>
                  <strong>Initial Discovery Call</strong> – Understand profiles
                  and project needs.{" "}
                </>
              ),
              color: "teal",
            },
            {
              children: (
                <>
                  <strong>On-Site Visit (If Needed)</strong> – Examine real
                  profiles and issues.{" "}
                </>
              ),
              color: "teal",
            },
            {
              children: (
                <>
                  <strong>Profile Sampling</strong> – Send uPVC/aluminium
                  profile samples.{" "}
                </>
              ),
              color: "teal",
            },
            {
              children: (
                <>
                  <strong>Custom Gasket Development</strong> – Prototype via
                  co-extrusion.{" "}
                </>
              ),
              color: "teal",
            },
            {
              children: (
                <>
                  <strong>Sample Testing & Validation</strong> – Test fit, seal,
                  lock, tolerance.{" "}
                </>
              ),
              color: "teal",
            },
            {
              children: (
                <>
                  <strong>Feedback Loop (If Any)</strong> – Make tweaks until
                  perfect.{" "}
                </>
              ),
              color: "teal",
            },
            {
              children: (
                <>
                  <strong>Final Sample Dispatch</strong> – Ship final sample for
                  trials.{" "}
                </>
              ),
              color: "teal",
            },
            {
              children: (
                <>
                  <strong>Bulk Production & Delivery</strong> – Begin mass
                  production & ship.{" "}
                </>
              ),
              color: "teal",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default GasketProcessTimeline;
