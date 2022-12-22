import { useSelector } from "react-redux";

export const User = ({ id, name, email, phone, companyName }) => {
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`https://dummyimage.com/600x400/000/fff&text=${name}`}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          ID: {id}
        </p>
        <p className="text-gray-700 text-base">
          Email: {email}
        </p>
        <p className="text-gray-700 text-base">
          Company Name: {companyName}
        </p>
        <p className="text-gray-700 text-base">
        Phone: {phone}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};
