import React, { useContext } from "react";
import InputModal from "./InputModal";
import Context from "../Store/Context";

const Studentdetails = () => {
  const { data, updatedata } = useContext(Context);
  console.log("instudentialspage", data);

  let studentcount = 0;

  if (Array.isArray(data)) {
    data.map((value) => {
      studentcount = studentcount + value.count;
    });
  } else {
    console.error("Data is not an array");
  }

  return (
    <>
      <div className="text-center">
        <h2>Student Manager</h2>
        <p>All Student: {studentcount}</p>
      </div>
      <InputModal />
      <div>
        <h3>All Students</h3>

        {Array.isArray(data) &&
          data.map((student, index) => (
            <div key={index}>
              <p>
                {student.name} {student.phoneno} {student.address}
              </p>
              <button>Delete</button>
              {"  "}
              <button>Edit</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Studentdetails;
