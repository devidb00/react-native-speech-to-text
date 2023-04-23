import HomeScreen from "../screens/Home";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  return <HomeScreen router={router} />;
}
