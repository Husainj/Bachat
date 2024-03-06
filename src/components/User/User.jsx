import React from 'react';

function User({ name, profilePicture, totalAmount, loan, groups }) {
  return (
    <div className="user-profile bg-gray-800 text-white rounded-lg shadow-md px-4 py-6">
      {/* First row: Profile picture and name */}
      <div className="user-info flex items-center">
        <img src={profilePicture} alt={name} className="profile-picture h-16 w-16 rounded-full object-cover mr-4" />
        <p className="user-name font-bold text-xl">{name}</p>
      </div>

      {/* Second row: Total amount and loan */}
      <div className="user-stats flex justify-center mt-4"> {/* Centered stats */}
        <div className="stat text-center mr-4 shadow-md rounded-lg bg-gray-700 px-4 py-2"> {/* Styled stats */}
          <p className="stat-label text-xl font-bold">Total Amount</p>
          <p className="stat-value">{totalAmount}</p>
        </div>
        <div className="stat text-center shadow-md rounded-lg bg-gray-700 px-4 py-2"> {/* Styled stats */}
          <p className="stat-label text-xl font-bold">Loan</p>
          <p className="stat-value">{loan}</p>
        </div>
      </div>

      {/* Group cards (dynamic based on groups array) */}
      {groups.length > 0 && (
        <div className="group-cards mt-6">
          <h2>Your Groups</h2>
          <div className="group-rows grid grid-cols-3 gap-4"> {/* Grid for three columns */}
            {groups.map((group, index) => (
              <GroupCard key={group.id} groupName={group.name} amount={group.amount} loan={group.loan} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function GroupCard({ groupName, amount, loan }) {
  return (
    <div className="group-card bg-gray-700 text-white rounded-md px-4 py-3 mb-2 shadow-sm"> {/* No width change */}
      <p className="group-name font-medium">{groupName}</p>
      <div className="group-stats flex justify-between mt-2">
        <p className="stat-label">Amount</p>
        <p className="stat-value">{amount}</p>
      </div>
      <div className="group-stats flex justify-between">
        <p className="stat-label">Loan</p>
        <p className="stat-value">{loan}</p>
      </div>
    </div>
  );
}

export default User;
