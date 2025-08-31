export interface BenefitCardProps {
  image: string;
  title: string;
  description: string;
}
export default function BenefitCard({
  image,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mx-2 h-full w-full">
      <div className="h-48 w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
}
