import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetail() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/course/${slug}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [slug]);

  if (!course) return <p>Loading...</p>;

  if (course.error) return <p>{course.error}</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseDetail;
