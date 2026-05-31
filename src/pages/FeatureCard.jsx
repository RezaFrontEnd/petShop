function FeatureCard({ title, description, icon }) {
  return (
    <div className="w-82 h-35 rounded-3xl bg-white mt-6">
      <div className="flex items-center h-10 w-75 bg-orange-100 mt-3 rounded-lg mx-auto">
        <div className="w-7 h-7 mr-2 rounded-md bg-orange-300 flex justify-center items-center">
          {icon}
        </div>

        <h3 className="text-lg font-bold mr-1">
          {title}
        </h3>
      </div>

      <p className="text-md text-right pr-4 mt-3">
        {description}
      </p>
    </div>
  );
}
export default FeatureCard