import { useSelector } from "react-redux"
import { User } from "../components/User";
import { user } from "../redux/slices/userSlice";

export const UserList = () => {
  const users = useSelector(state => state.user.users);
  const loading = useSelector(state => state.user.loading);

  if (loading) {
    return (
      <div className="h-40 justify-center flex items-center text-sm text-black">Loading...</div>
    )
  }
  if (users && users.length > 0) {
    return (
      <div className="justify-center flex items-center text-sm text-black">
        <div className="grid grid-cols-3 gap-2">
          {users.map(item => (
            <User
              id={item.id}
              name={item.name}
              email={item.email}
              phone={item.phone}
              companyName={item.companyName}
            />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="h-40 justify-center flex items-center text-sm text-black">Click button to load users</div>
    )
  }
}