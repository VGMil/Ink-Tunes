import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import ButtonText from "../ui/ButtonText";
import CustomText from "../ui/CustomText";

interface RegisterFormProps {
  changeToLogin: () => void;
}


const RegisterForm = ({ 
    changeToLogin
}: RegisterFormProps) => {
  return (
    <View className="w-full justify-start border-black border-2 bg-white p-4 gap-2">
      <CustomText>Nombre completo</CustomText>
      <TextInput 
        placeholder="Nombre Apellido"
        className="border-2 focus:border-primary focus:ring-primary"
      />
      <CustomText>Email</CustomText>
      <TextInput 
        placeholder="tu@email.com"
        className="border-2 focus:border-primary focus:ring-primary"
      />
      <CustomText>Contraseña</CustomText>
      <TextInput 
        placeholder="*********"
        className="border-2 focus:border-primary focus:ring-primary"
      />
      <CustomText>Confirmar contraseña</CustomText>
      <TextInput 
        placeholder="*********"
        className="border-2 focus:border-primary focus:ring-primary"
      />
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