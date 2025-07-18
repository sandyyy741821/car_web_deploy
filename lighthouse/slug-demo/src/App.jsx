import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseDetail from "./components/CourseDetail";

const courses = [
  { name: "React Basics", slug: "react-basics" },
  { name: "Advanced React", slug: "advanced-react" },
  { name: "React Router", slug: "react-router" },
];

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h2>Courses</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.slug}>
              <Link to={`/course/${course.slug}`}>{course.name}</Link>
            </li>
          ))}
        </ul>

        <Routes>
          <Route path="/course/:slug" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
