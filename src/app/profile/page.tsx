import BannerProfile from "@/components/pages/profile/BannerProfile";
import MainProfile from "@/components/pages/profile/MainProfile";

export default function ProfilePage() {
  return (
    <div
      id="profile-page"
      className="w-full relative overflow-x-hidden overflow-y-auto no-scrollbar"
    >
      <BannerProfile />
      <MainProfile />
    </div>
  );
}
