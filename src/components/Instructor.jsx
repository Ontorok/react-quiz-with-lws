import React from "react";
import { Link } from "react-router-dom";
import useInstructors from "../hooks/useInstructors";
import classes from "../styles/Instructor.module.css";

const Instructor = () => {
  const { loading, error, instructors } = useInstructors();
  console.log(instructors);
  return (
    <div className={classes.instructors}>
      {instructors.map((ins) => (
        <Link to={`/videos/${ins.instructorId}`}>
          <div className={classes.instructor} key={ins.instructorId}>
            <img src={ins.img} alt={ins.name} />
            <p>{ins.name}</p>
          </div>
        </Link>
      ))}

      {!loading && instructors.length === 0 && <div>No Data found</div>}
      {error && <div>Therer was an error</div>}
      {loading && <div>Loading....</div>}
    </div>
  );
};

export default Instructor;
