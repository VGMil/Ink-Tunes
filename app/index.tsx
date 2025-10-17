import "@/global.css";
import { Redirect, router } from "expo-router";

export default function Index() {
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    return <Redirect href={"/AuthScreen"}></Redirect>
  } else {
    router.push("/");    
  }
}
