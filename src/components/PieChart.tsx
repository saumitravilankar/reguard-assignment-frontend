import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { useState } from "react";

interface PieChartProps {
  data: { asset: string; amount: number }[];
  chartTitle: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, chartTitle }) => {
  const [options, setOptions] = useState<AgChartOptions>({
    data,
    title: {
      text: chartTitle,
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
        calloutLabelKey: "asset",
        sectorLabelKey: "amount",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
        },
      },
    ],
  });

  return (
    <div className="border">
      <AgCharts options={options} />
    </div>
  );
};

export default PieChart;
