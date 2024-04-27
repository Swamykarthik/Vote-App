import React from 'react';

function Result({ members }) {
  return (
    <div className="voting-container">
      <h2 className='ct-headline'>Result</h2>
      <div>
        <table className="voting-table">
          <thead>
            <tr>
              <th className="table-header">Title</th>
              <th className="table-header">Options</th>
              <th className="table-header">Images</th>
              <th className="table-header">No Of Votes</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td className="table-data">{member.name}</td>
                <td className="table-data">{member.options}</td>
                <td className="table-data">
                  <img src={member.image} alt={member.name} className="member-image" />
                </td>
                <td className='table-data'>{member.noofvotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Result;
