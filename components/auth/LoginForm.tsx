import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import ButtonText from "../ui/ButtonText";
import CustomText from "../ui/CustomText";

interface LoginFormProps {
  changeToRegister: () => void;
}


const LoginForm = ({
  changeToRegister
}: LoginFormProps) => {
  return (
    <View className="w-full justify-start border-black border-2 bg-white p-4 gap-4">
      <CustomText>Email</CustomText>
      <TextInput 
        placeholder="tu@email.com"
        className="border-2 focus:border-primary focus:ring-primary"
      />
      <CustomText>Constraseña</CustomText>
      <TextInput 
        placeholder="*********"
        className="border-2 focus:border-primary focus:ring-primary"
      />
      <View>
        {/* CheckBox */}
        <CustomText color="teal" category="link">
          ¿Olvidaste tu contraseña?
        </CustomText>
      </View>
      <ButtonText text="Iniciar Sesión" />
      <View className="flex-row justify-center items-center gap-4 w-full ">
        <View className="w-1/4 border-t-2 border-border" />
        <CustomText color="gray" category="span">
          o continua con
        </CustomText>
        <View className="w-1/4 border-t-2 border-border" />
      </View>
      <View className="flex-row gap-8 p-4">
        <ButtonText category="secondary" text="Google" className="flex-1"/>
        <ButtonText category="secondary" text="Apple" className="flex-1"/>
      </View>
      <CustomText color="gray" category="span" className="self-center">
        ¿No tienes una cuenta?
      </CustomText>
      <TouchableOpacity onPress={changeToRegister}>
        <CustomText color="teal" category="span" className="self-center">
          Registrate
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
