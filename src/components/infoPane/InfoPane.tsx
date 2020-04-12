import React from "react";
import "./InfoPane.css";
import { useSelector } from "react-redux";
import { TReduxReducers, FetchState } from "../../types/Default";
import { formatNum } from "../../utils/NumberUtil";

function InfoPane() {

  const { covidSummaryData, fetchState } = useSelector((state: TReduxReducers) => state.covidReducer);
  console.log(fetchState);

  return (
    <React.Fragment>
      <div id="selector-wrapper">
        <select data-testid="country-selector" id="country-selector" className="form-control">
          <option value={""}>All Countries</option>
        </select>

        <div className="p-3">
          {fetchState === FetchState.Fetching && 
            <div>Loading...</div>
          }
          {fetchState === FetchState.Fetched &&
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Confirmed</th>
                  <th>{formatNum(covidSummaryData?.total_cases) || "--"}</th>
                </tr>
                <tr>
                  <th>Active Cases</th>
                  <th>{formatNum(covidSummaryData?.active_cases) || "--"}</th>
                </tr>
                <tr>
                  <th>Recoveries</th>
                  <th>{formatNum(covidSummaryData?.recovered) || "--"}</th>
                </tr>
                <tr>
                  <th>Deaths</th>
                  <th>{formatNum(covidSummaryData?.deaths) || "--"}</th>
                </tr>
              </tbody>
            </table>
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default InfoPane;
