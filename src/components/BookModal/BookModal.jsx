import { useContext } from "react";
import { GlobalContext } from "../../App.jsx";
import { formatData } from "../../utilities/utilities.js";
import styles from "./BookModal.module.scss";

const BookModal = () => {
  const { specificBook, setShowModal } = useContext(GlobalContext);

  const formattedData = formatData(specificBook);

  return (
    <div className={styles.BookModal}>
      <div className={styles.BookModal_Holder}>
        <div className={styles.Content}>
          <div className={styles.Content_Img}>
            <img
              src={formattedData.smallThumbnail}
              alt={`Image of the book cover for ${formattedData.title}`}
            />
          </div>
          <div className={styles.Content_Desc}>
            <h2>{formattedData.title}</h2>
            <p className={styles.italics}>by {formattedData.authors}</p>
            <p>{formattedData.description}</p>
            <p>
              <span className={styles.bold}>Publisher:</span>{" "}
              {formattedData.publisher}
            </p>
            <p>
              <span className={styles.bold}>Published Date:</span>{" "}
              {formattedData.publishedDate}
            </p>
          </div>
        </div>
        {formattedData.moreInfoLink !== "No Link" && (
          <button
            className={styles.BookModal_Button_MoreInfo}
            onClick={() => {
              window.open(formattedData.moreInfoLink, "_blank");
            }}
          >
            More Info
          </button>
        )}

        <button
          className={styles.BookModal_Button_Cancel}
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookModal;
