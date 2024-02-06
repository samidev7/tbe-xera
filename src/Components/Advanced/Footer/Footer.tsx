"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

// Librarries
import Link from "next/link";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// Components
import Container from "@/Components/UIKit/Container/Container";

// Data
import config from "@/data/config";

// Images
import logo from "@/Assets/logos/Logo.svg";

// Icons
import { BiArrowBack } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import { BsCheck } from "react-icons/bs";

// Styles
import Style from "./Footer.module.css";

const Footer: React.FC = () => {
  const [accept, setAccept] = useState<boolean>(false);
  const pathname = usePathname();
  const path = removeFirstCharacter(pathname);

  const SubscribeSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  // Format the pathname and remove the trailing slash
  function removeFirstCharacter(inputString: string): string {
    if (inputString.length === 0) {
      return inputString;
    } else {
      return inputString.slice(1);
    }
  }

  return (
    <div className={Style.footerWrapper}>
      <Container>
        <div className={Style.titles}>
          {path === "products" || path === "about" ? (
            <h1>
              Break the Chains, Join the <span>Blockchain</span>: The{" "}
              <span>Era</span> Begins Now!
            </h1>
          ) : path === "services" ? (
            <h1>
              Don{"'"}t Follow the Future – Create It in <span>XERA</span>{" "}
            </h1>
          ) : path === "events" ? (
            <h1>
              Change Your World, One Block at a Time: <span>XERA </span>{" "}
            </h1>
          ) : (
            <h1>
              Infinite Possibilities, One Platform:
              <span> XERA</span>{" "}
            </h1>
          )}
          <div className={Style.rightTitles}>
            <h6>
              Don{"'"}t miss out on the revolution. Register now to reshape your
              future!
            </h6>
            <a
              href={config.REGISTER_URL}
              target="_blank"
              className={Style.contactUsLink}
            >
              <h5>Register Now</h5>
              <BiArrowBack />
            </a>
          </div>
        </div>
        <div className={Style.separator} />
        <div className={Style.footerGrid}>
          <div className={Style.logoWrapper}>
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
            <h6>
              XERA unites individuals under the mission of leveraging modern
              technologies to empower people and transform society. We{"'"}re
              not just a community; we{"'"}re a movement aiming to redefine
              industries and shape a fair, empowering future for all.
            </h6>
          </div>
          <div className={Style.links}>
            <h4>Sitemap</h4>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/products">Products</Link>
          </div>
          <div className={Style.links}>
            <h4>Legal</h4>
            <a
              href="https://terms.tbe.io/terms/privacy-and-cookie-policy"
              target="_blank"
            >
              Privacy & Cookie Policy
            </a>
            <a
              href="https://terms.tbe.io/terms/terms-and-conditions"
              target="_blank"
            >
              Terms and Conditions
            </a>
            <a
              href="https://terms.tbe.io/terms/tax-declaration"
              target="_blank"
            >
              Tax Declaration
            </a>
            <a
              href="https://terms.tbe.io/terms/commission-policy"
              target="_blank"
            >
              Commission Policy
            </a>
            <a
              href="https://terms.tbe.io/terms/independent-distributor-agreement"
              target="_blank"
            >
              Distributor Agreement
            </a>
            <a
              href="https://terms.tbe.io/terms/risk-disclosure"
              target="_blank"
            >
              Risk disclosure
            </a>
          </div>
          {/* <div className={Style.newsletter}>
            <h4>newsletter</h4>
            <h6>Subscribe to newsletter?</h6>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={SubscribeSchema}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className={Style.formWrapper}>
                    <Field
                      className={Style.emailField}
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                    <button
                      style={{
                        cursor:
                          Object.values(errors).length !== 0 ||
                          Object.values(touched).length === 0 ||
                          !accept
                            ? "not-allowed"
                            : "pointer",
                      }}
                      disabled={
                        isSubmitting ||
                        Object.values(errors).length !== 0 ||
                        !accept
                      }
                      onClick={() => console.log("clicked")}
                      className={Style.submit}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  <p className={Style.error}>
                    {errors.email && touched.email ? errors.email : ""}
                  </p>

                  <div
                    onClick={() => setAccept(!accept)}
                    className={Style.acceptTerms}
                  >
                    <div className={accept ? Style.accept : Style.decline}>
                      <BsCheck />
                    </div>
                    <h6>
                      accepts{" "}
                      <a href="" target="_blank">
                        {" "}
                        terms & conditions?
                      </a>
                    </h6>
                  </div>
                </Form>
              )}
            </Formik>
          </div> */}
        </div>
        <div className={Style.footerBottom}>
          <h6>XERA. All Rights Reserved. © 2024</h6>
          <div className={Style.socialsWrapper}>
            <h6>Follow on socials:</h6>
            <div className={Style.socials}>
              <a
                href="https://www.facebook.com/xerapro.official/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/xerapro/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/xera_pro" target="_blank">
                <RiTwitterXLine />
              </a>
              <a href="https://t.me/xerapro" target="_blank">
                <FaTelegram />
              </a>
              <a
                href="https://www.linkedin.com/company/xerapro/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com/@xerapro" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://www.youtube.com/@xerapro" target="_blank">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
