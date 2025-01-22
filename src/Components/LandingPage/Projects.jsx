import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

 
  
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setProjects(data))
   
  }, []);

  // Filtered Projects
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Graphic Design", "App Design", "Web Design"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded ${
              filter === cat ? "bg-[#FD6F00] text-white" : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg overflow-hidden h-full"
          >
          <div>
          <img
              src={project.image}
              alt={project.title}
              className="w-[445px] h-[445px] object-cover"
            />
          </div>
          <div>
          <div className="p-4 mt-4">
              <h2 className="text-[#FD6F00] font-semibold flex justify-start">{project.category}</h2>
              <p className="text-white font-bold text-start">{project.name}</p>
            </div>
          </div>
          
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default Projects;
