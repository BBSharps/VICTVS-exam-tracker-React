import { getExams } from "../utility/Axios";
import { useEffect, useState } from "react";
import "./id.css";

function Id({ candidate }) {
  const [filter, setFilter] = useState(true);
  useEffect(() => {
    getExams(candidate.candidate_id, filterLocation, filterDate, filterOrder)
      .then((response) => {
        setExams(response);
      })
      .catch((error) => {});
  }, [filter]);
  const [exams, setExams] = useState([]);
  const [clickedExam, setClickedExam] = useState(false);
  const [filterLocation, setFilterLocation] = useState(undefined);
  const [filterDate, setFilterDate] = useState(undefined);
  const [filterOrder, setFilterOrder] = useState("desc");

  return (
    <div className="Exams">
      <div className="Exams_spacingBox"></div>
      <div className="Exams_filter">
        <label htmlFor="Exams_filter_date">Date :</label>
        <input
          id="Exams_filter_date"
          type="date"
          onChange={(e) => {
            e.target.value
              ? setFilterDate(
                  `${e.target.value.slice(8)}/${e.target.value.slice(
                    5,
                    7
                  )}/${e.target.value.slice(0, 4)}`
                )
              : setFilterDate(undefined);
          }}
        ></input>
        <label htmlFor="Exams_filter_location">Location : </label>
        <select
          id="Exams_filter_location"
          onChange={(e) => {
            e.target.value === "All"
              ? setFilterLocation(undefined)
              : setFilterLocation(`${e.target.value}`);
          }}
        >
          <option>All</option>
          <option>London </option>
          <option>Sydney </option>
          <option>Leeds </option>
          <option>Berlin </option>
          <option>Milan </option>
          <option>Woking </option>
          <option>New York </option>
        </select>
        <label htmlFor="Exams_filter_order">Date order : </label>
        <select
          onChange={(e) => {
            e.target.value === "Newest"
              ? setFilterOrder("desc")
              : setFilterOrder(`asc`);
          }}
          id="Exams_filter_order"
        >
          <option>Newest</option>
          <option>Oldest</option>
        </select>
        <button
          className="Exams_filter_button"
          onClick={() => {
            setFilter(!filter);
            console.log(!filter);
          }}
        >
          Filter
        </button>
      </div>
      <div className="Exams_list">
        <ul className="Exams_list_ul">
          {exams.length > 0 ? (
            exams.map((exam) => {
              return (
                <li
                  className="Exams_list_li"
                  key={`ex${exam.title}`}
                  onClick={(e) => {
                    setClickedExam(exam);
                  }}
                >
                  <p>{exam.title}</p> <p>{exam.description}</p>{" "}
                  <p>{`${exam.date} ${exam.time} `}</p>{" "}
                  <p>{exam.location_name}</p>
                </li>
              );
            })
          ) : (
            <li className="Exams_list_li">No Exams</li>
          )}
        </ul>
      </div>
      <div hidden={!clickedExam} className="Exams_data">
        <p>{clickedExam.title}</p> <p>{clickedExam.description}</p>{" "}
        <p>{`${clickedExam.date} ${clickedExam.time} `}</p>{" "}
        <p>{clickedExam.location_name}</p>
        <p>{`${clickedExam.latitude} , ${clickedExam.longitude}`}</p>
        <a
          href={`https://www.google.com/maps/?q=${clickedExam.latitude},${clickedExam.longitude}`}
          target="_blank"
          rel="noreferrer"
        >
          Google maps
        </a>
      </div>
    </div>
  );
}

export default Id;
