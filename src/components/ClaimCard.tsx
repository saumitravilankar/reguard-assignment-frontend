import { Contract, Purchase } from "../types";

const ClaimCard = ({ contract }: { contract: Contract }) => {
  return (
    <div className="border p-4 space-y-2">
      <div className="flex gap-4 justify-between">
        <h1 className="font-semibold">Name:</h1>
        <h1>{contract.name}</h1>
      </div>
      <div className="flex gap-4 justify-between">
        <h1 className="font-semibold">Start Date:</h1>
        <h1>{new Date(contract.startDate).toLocaleDateString()}</h1>
      </div>
      <div className="flex gap-4 justify-between">
        <h1 className="font-semibold">End Date:</h1>
        <h1>{new Date(contract.endDate).toLocaleDateString()}</h1>
      </div>
      <div className="flex gap-4 justify-between">
        <h1 className="font-semibold">Status:</h1>
        <div
          className={`px-2 rounded-full font-semibold text-sm ${
            contract.status === "Active" ? "bg-green-200" : "bg-red-300"
          }`}
        >
          {contract.status === "Active" ? (
            <h1 className="text-green-700">Active</h1>
          ) : (
            <h1 className="text-red-700">Inactive</h1>
          )}
        </div>
      </div>
      <div className="flex gap-4 justify-between">
        <h1 className="font-semibold">Amount:</h1>
        <h1>${contract.contractAmount}</h1>
      </div>
    </div>
  );
};

export default ClaimCard;
