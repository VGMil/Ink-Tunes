import MusicalNotesIcon from "@/assets/icons/musical-notes-outline.svg";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import CustomText from "@/components/ui/CustomText";
import { cssInterop } from "nativewind";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

cssInterop(MusicalNotesIcon, {
  className: {
    target: "style",
    nativeStyleToProp: { stroke: true, fill: true, color: true }
  },
});
const AnimatedMusicalNotes = Animated.createAnimatedComponent(MusicalNotesIcon);

const AuthScreen = () => {
  const [handleForm, setHandleForm] = useState<boolean>(false);
  const translate = useSharedValue(2000);
  const iconSize = useSharedValue(96);

  useEffect(() => {
    translate.value = withSequence(
    withTiming(2000, {
      duration: 400,
      easing: Easing.inOut(Easing.quad),
    })
    ,withTiming(0, {
      duration: 100,
      easing: Easing.inOut(Easing.quad),
    }) )
    iconSize.value = withTiming(handleForm ? 96 : 24, {
      duration: 500,
      easing: Easing.inOut(Easing.quad),
    });
  }, [handleForm]);

  const handleTranslate = useAnimatedStyle(() => {
    return { transform: [{ translateY: translate.value }] };
  });
  const handleIconSize = useAnimatedStyle(() => {
    return { width: iconSize.value, height: iconSize.value };
  });


  return (
    <SafeAreaView className="flex-1 justify-start items-center gap-4 p-6 -mt-4">
      {/* header */}
      <View className="bg-teal-50 rounded-full p-4 items-center justify-center border-teal-500 border-2">
        {/* // 24 en register / 96 en login */}
        <AnimatedMusicalNotes
          animatedProps={handleIconSize}
          className={"stroke-gold"}
        />
      </View>
      {/* // h2 en register / h1 en login */}
      <CustomText
        category={handleForm ? "h1" : "h2"}
        color="black"
        className="font-bold"
      >
        inkTunes
      </CustomText>
      {/* // span en register / p en login */}
      <CustomText
        category={handleForm ? "p" : "span"}
        color="gray"
        className="-mt-4"
      >
        Tu Musica empieza Aqui
      </CustomText>
      {/* Form */}
      <Animated.View style={handleTranslate} className="-mt-2">
        {handleForm ? (
          <LoginForm changeToRegister={() => setHandleForm(false)} />
        ) : (
          <RegisterForm changeToLogin={() => setHandleForm(true)} />
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

export default AuthScreen;
