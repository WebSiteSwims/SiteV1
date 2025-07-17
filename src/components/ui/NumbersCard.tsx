import React from "react";

interface NumbersCardProps {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const NumbersCard: React.FC<NumbersCardProps> = ({
  year,
  title,
  description,
  highlight = false,
}) => {
  return (
    <div
      className={`flex flex-col flex-shrink-0 w-[320px] min-h-[220px] bg-white rounded-2xl border ${
        highlight ? "border-[#FF7900]" : "border-[#E5E5E5]"
      } shadow-sm px-6 py-6 relative`}
      style={{ transition: "border 0.2s" }}
    >
      {/* Badge année */}
      <div className="absolute -top-5 left-6">
        <div
          className="flex items-center justify-center rounded-full px-6 py-2 text-white font-bold text-base shadow"
          style={{
            background: "#FF7900",
            fontFamily: "'CO Text Bold', Arial, sans-serif",
          }}
        >
          {year}
        </div>
      </div>
      <div className="mt-8 mb-2">
        <span
          className="font-bold text-lg"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            color: "#000",
          }}
        >
          {title}
        </span>
      </div>
      <div>
        <span
          className="text-base"
          style={{
            fontFamily: "'CO Text', Arial, sans-serif",
            color: "#222",
            lineHeight: 1.5,
          }}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default NumbersCard;