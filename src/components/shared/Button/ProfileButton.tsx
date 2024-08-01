import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileButton = () => {
  return (
    <Avatar className="border flex justify-center items-center border-slate-300 w-9 h-9">
      <AvatarImage src={"/profile-pic-def-3.png"} className="w-5 h-5" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default ProfileButton;
