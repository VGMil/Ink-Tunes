import React from "react";
import { TouchableOpacity, View } from "react-native";
import ButtonText from "../ui/ButtonText";
import CustomText from "../ui/CustomText";
import InputField from "../ui/InputField";

interface RegisterFormProps {
  changeToLogin: () => void;
}


const RegisterForm = ({ 
    changeToLogin
}: RegisterFormProps) => {
  return (
    <View className="w-full justify-start border-black border-2 bg-white p-4 gap-2">
      <InputField label="Nombre" placeholder="Nombre Apellido" icon="person-outline"></InputField>
      <InputField label="Email" placeholder="tu@email.com" icon="mail-outline"></InputField>
      <InputField label="Contraseña" placeholder="**********" icon="lock-closed-outline" secureTextEntry></InputField>
      <InputField label="Confirmar contraseña" placeholder="**********" icon="lock-closed-outline" secureTextEntry></InputField>
      <View>
        {/* CheckBox para términos y condiciones */}
        <CustomText color="gray" category="span">
          Al registrarte, aceptas nuestros{' '}
            <CustomText color="teal" category="link">
                términos y condiciones
            </CustomText>
        </CustomText>

      </View>
      <ButtonText text="Registrarse" />
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
        ¿Ya tienes una cuenta?
      </CustomText>
      <TouchableOpacity onPress={changeToLogin}>
        <CustomText color="teal" category="span" className="self-center">
          Inicia sesión
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;