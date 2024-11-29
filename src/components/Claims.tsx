import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Contract } from "../types";
import ClaimCard from "./ClaimCard";

const Claims = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: customerClaimsData,
  } = useQuery({
    queryKey: ["customerClaimsData"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/customers/${id}/claims`
      );
      return await response.json();
    },
  });

  const goBack = () => {
    navigate("/customers");
  };

  if (isPending) return <div>Loading...</div>;
  return (
    <div className="space-y-4">
      <button
        className="border px-4 py-2 rounded-sm hover:text-white bg-slate-300 hover:bg-primary"
        onClick={goBack}
      >
        Back
      </button>
      <div>
        <h1 className="font-semibold text-lg border-b pb-2 w-1/6">
          Customer Details
        </h1>
        <div className="flex items-center justify-start gap-10 mt-2">
          <div className="flex gap-4 py-2">
            <h1 className="font-semibold">First Name:</h1>
            <h1>{customerClaimsData.data.firstName}</h1>
          </div>
          <div className="flex gap-4 py-2">
            <h1 className="font-semibold">Last Name:</h1>
            <h1>{customerClaimsData.data.lastName}</h1>
          </div>
          <div className="flex gap-4 py-2">
            <h1 className="font-semibold">Main Phone:</h1>
            <h1>{customerClaimsData.data.mainPhone}</h1>
          </div>
          <div className="flex gap-4 py-2">
            <h1 className="font-semibold">Mobile Phone:</h1>
            <h1>{customerClaimsData.data.mobilePhone}</h1>
          </div>
          <div className="flex gap-4 py-2">
            <h1 className="font-semibold">Email:</h1>
            <h1>{customerClaimsData.data.email}</h1>
          </div>
        </div>
        <h1 className="font-semibold text-lg border-b mt-4 pb-2 w-1/6">
          Claims Status
        </h1>
        <div className="flex gap-10 mt-4">
          {customerClaimsData.data.Contract.length ? (
            customerClaimsData.data.Contract.map((contract: Contract) => (
              <ClaimCard key={contract.id} contract={contract} />
            ))
          ) : (
            <h1>No Claims Available</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Claims;
