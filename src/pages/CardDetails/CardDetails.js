import { Link, useParams } from "react-router-dom";
import React from "react";
import { selectCardById } from "../../features/cards/cardsSlice";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import CardEditor from "../../components/CardEditor";
import styles from "./CardDetails.module.css";

export default function CardDetails() {
  const { id } = useParams();
  const card = useSelector((state) => selectCardById(state, id));

  return (
    <div>
      <Navbar>
        {/* Could have used a title component... */}
        <h3 style={{ color: "white" }}>Totally not Streamloots</h3>

        <Link to={"/"}>
          <Button>Back 👈</Button>
        </Link>
      </Navbar>
      <div className={styles.CardDetails__CardEditor}>
        <CardEditor card={card} />
      </div>
    </div>
  );
}
