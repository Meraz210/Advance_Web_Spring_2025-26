import { createContext, useContext, useState, useEffect } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  
   const initialData = [
    {
      id: "101",
      name: "Meraz",
      major: "CSE",
      gpa: 3.9,
      courses: ["React", "DBMS"],
    },
    {
      id: "102",
      name: "Rahim",
      major: "EEE",
      gpa: 3.7,
      courses: ["C++", "Networking"],
    },
    {
      id: "103",
      name: "Karim",
      major: "BBA",
      gpa: 3.5,
      courses: ["Marketing", "Finance"],
    },
    {
      id: "104",
      name: "Nusrat",
      major: "CSE",
      gpa: 3.8,
      courses: ["Java", "AI"],
    },
  ];

  
  useEffect(() => {
    const saved = localStorage.getItem("students");

    if (saved) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(initialData);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  
  const addStudent = (newStudent) => {
    const exists = students.some((s) => s.id === newStudent.id);

    if (exists) {
      alert("Student ID already exists!");
      return;
    }

    setStudents((prev) => [...prev, newStudent]);
  };

  
  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};


export const useStudent = () => {
  return useContext(StudentContext);
};