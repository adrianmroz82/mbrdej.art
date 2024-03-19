import { useAuth } from "../../components/context/AuthProvider";

export function AdminPage() {
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
