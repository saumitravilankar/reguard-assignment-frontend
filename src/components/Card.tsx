interface CardProps {
  title: string;
  count: number;
}

const Card: React.FC<CardProps> = ({ title, count }) => {
  return (
    <div className="border w-max p-2 flex items-center gap-10 font-semibold text-lg">
      <h1 className="capitalize">{title}</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default Card;
