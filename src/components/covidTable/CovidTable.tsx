import React from 'react'
import { formatNum } from '../../utils/NumberUtil';
import { ICovidSummaryData } from '../../types/CovidTypes';

type TCovidTableProps = {
  covidSummaryData: ICovidSummaryData | null;
};

function CovidTable(props: TCovidTableProps) {
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <th>Confirmed</th>
          <th>{formatNum(props.covidSummaryData?.total_cases) || "--"}</th>
        </tr>
        <tr>
          <th>Active Cases</th>
          <th>{formatNum(props.covidSummaryData?.active_cases) || "--"}</th>
        </tr>
        <tr>
          <th>Recoveries</th>
          <th>{formatNum(props.covidSummaryData?.recovered) || "--"}</th>
        </tr>
        <tr>
          <th>Deaths</th>
          <th>{formatNum(props.covidSummaryData?.deaths) || "--"}</th>
        </tr>
      </tbody>
    </table>
  );
}

export default CovidTable;