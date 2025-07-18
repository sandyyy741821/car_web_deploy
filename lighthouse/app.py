from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for React

courses = {
    "react-basics": {
        "title": "React Basics",
        "description": "Learn the fundamentals of React."
    },
    "advanced-react": {
        "title": "Advanced React",
        "description": "Dive deeper into hooks and performance."
    },
    "react-router": {
        "title": "React Router",
        "description": "Learn routing with React Router v6."
    }
}

@app.route("/api/course/<slug>")
def get_course(slug):
    course = courses.get(slug)
    if course:
        return jsonify(course)
    return jsonify({"error": "Course not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
