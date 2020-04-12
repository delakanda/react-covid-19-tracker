import React from 'react'
import { formatNum } from '../../utils/NumberUtil';
import { ICovidSummaryData } from '../../types/CovidTypes';

type TCovidTableProps = {
  covidSummaryData: ICovidSummaryData | null;
};

function CovidTable(props: TCovidTableProps) {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th className="text-info">Confirmed</th>
          <th className="text-info">{formatNum(props.covidSummaryData?.total_cases) || "--"}</th>
        </tr>
        <tr>
          <th className="text-info">Active Cases</th>
          <th className="text-info">{formatNum(props.covidSummaryData?.active_cases) || "--"}</th>
        </tr>
        <tr>
          <th className="text-success">Recoveries</th>
          <th className="text-success">{formatNum(props.covidSummaryData?.recovered) || "--"}</th>
        </tr>
        <tr>
          <th className="text-danger">Deaths</th>
          <th className="text-danger">{formatNum(props.covidSummaryData?.deaths) || "--"}</th>
        </tr>
      </tbody>
    </table>
  );
}

export default CovidTable;