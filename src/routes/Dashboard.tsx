import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import PieChart from "../components/PieChart";

const Dashboard = () => {
  const { isPending, data: dashboardData } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/dashboard`
      );
      return await response.json();
    },
  });

  if (isPending)
    return (
      <div className="flex items-center justify-start gap-4 p-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-start gap-4">
        <Card
          title="Total Customers"
          count={dashboardData.data.total_customers}
        />
        <Card
          title="Total Purchases"
          count={dashboardData.data.total_purchases}
        />
        <Card title="Total Claims" count={dashboardData.data.total_claims} />
      </div>
      <div className="">
        <PieChart
          chartTitle="Purchases"
          data={[
            {
              asset: "Pending Purchases",
              amount: dashboardData.data.pending_purchases,
            },
            {
              asset: "Cancelled Purchases",
              amount: dashboardData.data.cancelled_purchases,
            },
            {
              asset: "Completed Purchases",
              amount: dashboardData.data.completed_purchases,
            },
          ]}
        />
        <PieChart
          chartTitle="Claims"
          data={[
            {
              asset: "Active Claims",
              amount: dashboardData.data.active_claims,
            },
            {
              asset: "Inactive Claims",
              amount: dashboardData.data.inactive_claims,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
