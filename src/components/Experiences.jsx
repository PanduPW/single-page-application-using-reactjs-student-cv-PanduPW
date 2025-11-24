import data from '/dataMahasiswa.json';

const Experiences = () => {
    const { experiences } = data;

    return (
        <section className="p-6">
            <h2 className="experience-title">Experiences</h2>

            <div className="space-y-4">
                {experiences.map((exp) => (
                    <div key={exp.id} className="experience-card">
                        
                        {/* Title + Organization */}
                        <h3 className="experience-title">
                            {exp.title}
                        </h3>
                        <p className="experience-company">
                            {exp.organization} — {exp.experience_type}
                        </p>

                        {/* Duration */}
                        <p className="experience-duration">
                            {exp.start_date} — {exp.is_current ? "Present" : exp.end_date}
                        </p>

                        {/* Description */}
                        <p className="experience-desc">
                            {exp.description}
                        </p>

                        {/* Technologies */}
                        {exp.technologies?.length > 0 && (
                            <p className="experience-tech">
                                Technologies: {exp.technologies.join(", ")}
                            </p>
                        )}

                        {/* Image (jika ada) */}
                        {exp.image_url && (
                            <img 
                                src={exp.image_url} 
                                alt={exp.title} 
                                className="experience-image"
                            />
                        )}

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
