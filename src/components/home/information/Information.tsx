import "./Information.css";
const Information = () => {
  return (
    <div className="information">
      <div className="main-container">
        <div className="content">
          <div className="table">
            <table className="content-table">
              <thead>
                <tr>
                  <th colSpan={2}>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Joshua Morgan</td>
                </tr>
                <tr className="active-row">
                  <td>Birthday</td>
                  <td>Aug 12, 1986</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td> 120-240-9600</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>hello@josh.design</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="numbers">
            <div className="featured-stats">
                <div className="featured-stat">
                  <strong className="featured-numbers">20+</strong>
                  <p className="featured-text">Years of Experiences</p>
                </div>
                <div className="featured-stat">
                  <strong className="featured-numbers">245</strong>
                  <p className="featured-text">Happy Customers</p>
                </div>
                <div className="featured-stat">
                  <strong className="featured-numbers">640</strong>
                  <p className="featured-text">Project Finished</p>
                </div>
                <div className="featured-stat">
                  <strong className="featured-numbers">72+</strong>
                  <p className="featured-text">Digital Awards</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
