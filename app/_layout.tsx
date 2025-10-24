import { AuthProvider } from "@/lib/contexts/auth/AuthProvider";
import { useAuth } from "@/lib/hooks/useAuthContext";
import { Redirect, Stack } from "expo-router";

export default function RootLayout() {

const {isLoggedIn, isLoading} = useAuth();

if(isLoading) return null;
if(isLoggedIn) return <Redirect href="/"/>;
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(auth)" 
          options={{ headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
