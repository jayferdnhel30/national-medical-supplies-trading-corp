import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SendIcon from "@mui/icons-material/Send";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const themeGradient = "linear-gradient(135deg, #0F4C81 0%, #1976d2 100%)";
const themeWhite = "#fff";
const accentYellow = "#ffb805";

export default function HomePage() {
  return (
    <div id="page-wrapper">
      {/* Banner */}
      <section
        id="banner"
        style={{
          background: `linear-gradient(
            rgba(15, 76, 129, 0.82),
            rgba(25, 118, 210, 0.49)`,
          color: themeWhite,
        }}
      >
        <header>
          <h2 style={{ color: themeWhite }}>
            RELIABLE MEDICAL SUPPLIES: Supporting better care with trusted
            healthcare solutions
          </h2>

          <a
            href="#"
            className="button"
            style={{
              background: accentYellow,
              color: "#0F4C81",
              borderColor: accentYellow,
              fontWeight: 700,
            }}
          >
            View Products
          </a>
        </header>

        <div className="slider">
          <img
            src="src\shared\styles\images\banner2.png"
            alt="Medical supplies banner"
            className="banner-image"
            style={{ width: "100%" }}
          />
        </div>
      </section>

      {/* Highlights */}
      <section
        className="wrapper style1 frame1"
        style={{
          background: "#0f4c81",
          color: "#333",
        }}
      >
        <div className="container">
          <header className="headertitle">
            <h2 style={{ color: "#fff" }}>
              Medical Supplies, Devices & Healthcare Equipment
            </h2>

            <div
              className="line"
              style={{
                background: accentYellow,
              }}
            ></div>

            <p style={{ color: "#ffffff", fontSize: "0.8em" }}>
              We provide quality medical products and dependable supply support
              for clinics, hospitals, laboratories, and healthcare providers.
            </p>
          </header>

          <div className="row gtr-50">
            <FeatureCard
              image="src\shared\styles\images\medical-disposable.png"
              category="Medical Disposables"
              title="Essential Clinical Supplies"
              subtitle="Daily-use products for patient care"
              description="Browse reliable disposables such as gloves, syringes, dressings, masks, and other essential consumables."
            />

            <FeatureCard
              image="src\shared\styles\images\medical-devices.png"
              category="Medical Devices"
              title="Healthcare Equipment"
              subtitle="Practical tools for care delivery"
              description="Find devices and equipment designed to support examinations, procedures, monitoring, and treatment needs."
            />

            <FeatureCard
              image="src\shared\styles\images\hospital-solutions.png"
              category="Hospital Solutions"
              title="Facility Support Products"
              subtitle="Supplies for modern healthcare spaces"
              description="Support your facility with dependable products for patient rooms, treatment areas, and medical operations."
            />
          </div>
        </div>
      </section>

      {/* Gigantic Heading */}
      <section
        className="wrapper style2"
        style={{
          backgroundImage: `linear-gradient(
            rgba(15, 76, 129, 0.82),
            rgba(25, 118, 210, 0.49)
          ), url('src/shared/styles/images/banner3.png')`,
          color: themeWhite,
        }}
        data-stellar-background-ratio="0.5"
        data-stellar-vertical-offset="20"
      >
        <div className="container">
          <header className="major">
            <h2 style={{ color: themeWhite }}>
              Healthcare products you can depend on
            </h2>
            <p
              style={{
                color: accentYellow,
                fontWeight: "bold",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Quality supplies for safer, more efficient patient care
            </p>
          </header>
        </div>
      </section>

      {/* Posts */}
      <section className="wrapper style1">
        <div className="container">
          <div className="row rowpost">
            <section className="col-6 col-12-narrower">
              <div className="box post">
                <a href="#" className="image left">
                  <PostImage src="src/shared/styles/images/Request-Quotation-Thumbnail.png" />
                </a>
                <div className="inner">
                  <h3>Request a quotation</h3>
                  <p>
                    Send us your product requirements, quantities, and delivery
                    details so our team can prepare a clear and responsive
                    quotation for your facility.
                  </p>
                </div>
              </div>
            </section>

            <section className="col-6 col-12-narrower">
              <div className="box post right">
                <a href="#" className="image left">
                  <PostImage src="src/shared/styles/images/Choose-Right-Products.png" />
                </a>
                <div className="inner">
                  <h3>Choose the right products</h3>
                  <p>
                    We help healthcare providers identify practical medical
                    supplies and equipment suited for daily operations, clinical
                    use, and patient care needs.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="row">
            <section className="col-6 col-12-narrower">
              <div className="box post">
                <a href="#" className="image left">
                  <PostImage src="src/shared/styles/images/Reliable-Order-Fulfillment.png" />
                </a>
                <div className="inner">
                  <h3>Reliable order fulfillment</h3>
                  <p>
                    From routine consumables to facility requirements, we focus
                    on organized coordination, dependable sourcing, and timely
                    supply support.
                  </p>
                </div>
              </div>
            </section>

            <section className="col-6 col-12-narrower">
              <div className="box post">
                <a href="#" className="image left">
                  <PostImage src="src/shared/styles/images/Support-Teams.png" />
                </a>
                <div className="inner">
                  <h3>Support for healthcare teams</h3>
                  <p>
                    Our goal is to make medical supply purchasing simpler,
                    clearer, and more accessible for clinics, hospitals, and
                    care providers.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="wrapper style3"
        style={{
          background: themeGradient,
          color: themeWhite,
        }}
      >
        <div className="container">
          <header>
            <h2 style={{ color: themeWhite }}>
              Need dependable medical supplies for your facility?
            </h2>

            <a
              href="#"
              className="button"
              style={{
                background: accentYellow,
                color: "#0F4C81",
                borderColor: accentYellow,
                fontWeight: 700,
              }}
            >
              Contact Us Today
            </a>
          </header>
        </div>
      </section>

      {/* Goal */}
      <section
        className="wrapper style1 frame1"
        style={{
          background: "#f7fbff",
          color: "#36546f",
        }}
      >
        <div className="container">
          <div className="col-12-narrow">
            <header
              style={{
                background: "transparent",
                backgroundColor: "rgb(247, 251, 255)",
                boxShadow: "none",
                position: "relative",
                display: "inline-block",
                zIndex: 2,
                fontSize: "20pt",
                fontWeight: 500,
              }}
            >
              <h2 style={{ color: "#0f4c81" }}>
                Why Healthcare Providers Choose Us
              </h2>

              <div
                className="line"
                style={{
                  background: accentYellow,
                }}
              ></div>

              <p style={{ color: "#5f7283", fontSize: "0.8em" }}>
                Committed to quality, accessibility, and reliable service
              </p>
            </header>
          </div>

          <div className="row gtr-200">
            <section className="col-4 col-12-narrower">
              <div
                className="box highlight"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(15, 76, 129, 0.08)",
                  boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
                  borderRadius: "8px",
                  padding: "2.5rem 2rem",
                }}
              >
                <SendIcon
                  sx={{
                    width: 100,
                    height: 100,
                    p: 2,
                    mb: 3,
                    borderRadius: "50%",
                    background: "#fff5d6",
                    color: "#0F4C81",
                    boxShadow: "inset 0 0 0 1px rgba(255, 184, 5, 0.55)",
                  }}
                />

                <h3 style={{ color: "#0f4c81" }}>Fast Coordination</h3>

                <p style={{ color: "#5f7283" }}>
                  We make inquiries, quotations, and product requests easier to
                  manage so healthcare teams can focus on patient care.
                </p>
              </div>
            </section>

            <section className="col-4 col-12-narrower">
              <div
                className="box highlight"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(15, 76, 129, 0.08)",
                  boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
                  borderRadius: "8px",
                  padding: "2.5rem 2rem",
                }}
              >
                <VerifiedIcon
                  sx={{
                    width: 100,
                    height: 100,
                    p: 2,
                    mb: 3,
                    borderRadius: "50%",
                    background: "#fff5d6",
                    color: "#0F4C81",
                    boxShadow: "inset 0 0 0 1px rgba(255, 184, 5, 0.55)",
                  }}
                />

                <h3 style={{ color: "#0f4c81" }}>Quality Products</h3>

                <p style={{ color: "#5f7283" }}>
                  Our product selection is built around dependable supplies,
                  practical devices, and healthcare equipment for real clinical
                  needs.
                </p>
              </div>
            </section>

            <section className="col-4 col-12-narrower">
              <div
                className="box highlight"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(15, 76, 129, 0.08)",
                  boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
                  borderRadius: "8px",
                  padding: "2.5rem 2rem",
                }}
              >
                <SupportAgentIcon
                  sx={{
                    width: 100,
                    height: 100,
                    p: 2,
                    mb: 3,
                    borderRadius: "50%",
                    background: "#fff5d6",
                    color: "#0F4C81",
                    boxShadow: "inset 0 0 0 1px rgba(255, 184, 5, 0.55)",
                  }}
                />

                <h3 style={{ color: "#0f4c81" }}>Service Support</h3>

                <p style={{ color: "#5f7283" }}>
                  We support hospitals, clinics, and medical teams with helpful
                  product guidance and responsive customer service.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  image: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  category,
  title,
  subtitle,
  description,
}) => {
  return (
    <section className="col-4 col-12-narrow">
      <div
        className="post-module"
        style={{
          background: "rgba(51,78,156,var(--tw-bg-opacity))",
          border: "1px solid rgba(15, 76, 129, 0.08)",
          boxShadow: "0 12px 30px rgba(15, 76, 129, 0.10)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div className="thumbnail">
          <img src={image} alt={title} />
        </div>

        <div
          className="post-content"
          style={{
            background: "#125a98",
          }}
        >
          <div
            className="category"
            style={{
              background: "#fff4cc",
              color: "#0f4c81",
              border: `1px solid ${accentYellow}`,
              fontWeight: 700,
            }}
          >
            {category}
          </div>

          <h1
            className="title"
            style={{
              color: "#ffffff",
            }}
          >
            {title}
          </h1>

          <h2
            className="sub_title"
            style={{
              color: "#ffb905",
            }}
          >
            {subtitle}
          </h2>

          <p
            className="description"
            style={{
              color: "#555",
            }}
          >
            {description}
          </p>

          <div className="post-meta">
            <span className="comments">
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(230,157,23)",
                  color: "#fff",
                  fontWeight: 700,
                  textDecoration: "none",
                  padding: "10px 16px",
                  borderRadius: "999px",
                }}
              >
                View details
                <ArrowCircleRightIcon
                  sx={{
                    fontSize: 20,
                    color: "#fff",
                  }}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PostImageProps {
  src?: string;
  alt?: string;
}

const PostImage = ({ src, alt = "" }: PostImageProps) => {
  if (!src) {
    return (
      <div
        className="placeholder-square"
        style={{
          background: accentYellow,
        }}
      />
    );
  }

  return <img src={src} alt={alt} className="post-image" />;
};
