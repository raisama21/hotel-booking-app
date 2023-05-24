import { useCookies } from "react-cookie";

export default function MyProfile() {
  const [{ user_info }] = useCookies(["user_info"]);

  return (
    <section>
      <div className="p-8 border border-dark">
        <div className="flex gap-8">
          <div className="w-40 rounded-full">
            <img src="/avatar.jpg" className="rounded-full" />
          </div>

          <div>
            <p>Username: {user_info?.username}</p>
            <p>Email: {user_info?.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
