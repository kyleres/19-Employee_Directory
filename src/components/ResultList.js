import React from "react";

function ResultList(props) {
  return (
    <div>
      <div className="heading">
        Employee Directory
      </div>
      <div>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">Username</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone (Office, Cell)</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map(result => ( 
            <tr key={ result.login.username }>
              <td className="text-center">
                <p>
                  <img alt={ result.name.first + " " + result.name.last + "profile image" } src={ result.picture.thumbnail }/>
                </p>
                <p>{ result.login.username }</p>
              </td>
              <td className="text-center">{ result.name.first }</td>
              <td className="text-center">{ result.name.last }</td>
              <td>
                <p>{ result.location.street.number + " " + result.location.street.name }</p>
                <p>{ result.location.city + ", " + result.location.state + " " + result.location.postcode }</p>
              </td>
              <td className="text-center">{ result.email }</td>
              <td className="text-center">
                <p>{ result.phone }</p>
                <p>{ result.cell }</p>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultList;
