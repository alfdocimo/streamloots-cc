import { Link } from "react-router-dom";
import React from "react";

import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import styles from "./NotFound.module.css";

export default function CardDetails() {
  return (
    <div>
      <Navbar>
        {/* Could have used a title component... */}
        <h3 style={{ color: "white" }}>Totally not Streamloots</h3>

        <Link to={"/"}>
          <Button tracking-id={"back-card-404"}>Back 👈</Button>
        </Link>
      </Navbar>
      <div className={styles.NotFound__Container}>
        <img src="https://http.cat/404" />
      </div>
    </div>
  );
}
