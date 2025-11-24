import data from '/dataMahasiswa.json';

const Skills = () => {
    const { skills } = data;
    return (
        <div className="w-full max-w-3xl mx-auto mt-10 px-6">
        <h2 className="skills-title">
            Skills
        </h2>

      <ul className=" space-y-4 skills-list">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={skill.icon_url}
                alt={skill.name}
                className="w-16 h-16 object-contain shrink-0 skill-icon"
                // style={{ maxWidth: "4rem", maxHeight: "4rem" }}
              />

              <div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <p className="text-gray-300 text-sm">{skill.category}</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-1">Level: {skill.level}</p>
            
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-3 bg-blue-500 rounded-full transition-all"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
}
export default Skills;