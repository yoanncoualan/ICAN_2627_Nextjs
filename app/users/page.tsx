import users from "@/lib/data";
 
export default function Users() {
  const users_list = users.map((user, i) => { // Parcours des données
    return (
      <p key={i}>
        {user.firstname} {user.lastname} : {user.email}
      </p>
    );
  });
 
  return <>{users_list}</>; // Affichage des paragraphes
}