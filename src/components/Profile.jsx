import data from '/dataMahasiswa.json';

const Profile = () => {
  const { profile } = data;
    return (
        <div className="profile text-center p-6 bg-white rounded-2xl shadow-lg max-w-xl mx-auto">
      <img
        src={profile.photo_url}
        alt={profile.full_name}
        className="w-32 h-32 object-cover rounded-full mx-auto shadow-md border-2 border-gray-200"
      />

      <h1 className="text-3xl font-bold mt-4">{profile.full_name}</h1>
      <p className="text-blue-600 font-medium mt-1">{profile.headline}</p>

      <p className="text-gray-600 mt-3 leading-relaxed">
        {profile.short_bio}
      </p>

      <p className="text-sm text-gray-500 mt-2">📍 {profile.location}</p>

      <a
        href={profile.portfolio_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold shadow-sm"
      >
        Portfolio
      </a>
    </div>
    );
}
export default Profile;