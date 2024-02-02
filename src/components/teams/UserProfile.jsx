import React from 'react';

const UserProfile = ({ profiles }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center px-12">
      {profiles.map((profile, index) => (
        <div key={index} className="flex-shrink-0 w-[360px] rounded-3xl bg-gradient-to-b from-blue-200 to-cyan-200 mx-4 border border-zinc-300">
          <div className="h-full rounded-[calc(1.5rem-1px)] p-10 bg-white flex flex-col justify-between">
            <div className="flex gap-4 items-center">
              <img className="h-12 w-12 rounded-full" src={profile.location} alt="" />
              <div>
                <h3 className="text-lg font-medium text-gray-700">{profile.name}</h3>
                <span className="text-sm tracking-wide text-gray-600">{profile.role}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
