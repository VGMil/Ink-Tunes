import { useAuthValidation } from "@/lib/hooks/useAuthValidation";
import { loginSchema } from '@/lib/schemas/authSchemas';
import React from "react";
import { TouchableOpacity, View } from "react-native";
import ButtonText from "../ui/ButtonText";
import CustomText from "../ui/CustomText";
import InputField from "../ui/InputField";

interface LoginFormProps {
  changeToRegister: () => void;
}


const LoginForm = ({
  changeToRegister
}: LoginFormProps) => {
  const {
    values,
    errors,
    touched,
    handleChangeField,
    handleBlurField,
    handleSubmitForm,
    isSubmitting
  } = useAuthValidation({
    schema: loginSchema,
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (data) => {
      console.log(`🔄 Iniciando login... con los datos`, data);
      await new Promise(resolve => setTimeout(resolve, 2000));

      const success = Math.random() > 0.3;  // 70% éxito

      if (success) {
        console.log('✅ Login exitoso:', data);
      } else {
        console.log('❌ Error: Credenciales inválidas');
      }
    }
  });

  return (
    <View className="w-full justify-start border-black border-2 bg-white p-4 gap-6">
      <InputField
        label="Email"
        placeholder="tu@email.com"
        icon="person-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        value={values.email}
        onChangeText={handleChangeField('email')}
        onBlur={handleBlurField('email')}
        error={errors.email}
        touched={touched.email}
      />
      <InputField
        label="Password"
        placeholder="***********"
        icon="lock-closed-outline"
        secureTextEntry
        value={values.password}
        onChangeText={handleChangeField('password')}
        onBlur={handleBlurField('password')}
        error={errors.password}
        touched={touched.password}
      />
      {/* Olvidaste */}
      <View>
        <CustomText color="teal" category="link">
          ¿Olvidaste tu contraseña?
        </CustomText>
      </View>
      {/* Inicio de Sesion */}
      <ButtonText
        text={isSubmitting ? 'Cargando...' : 'Iniciar Sesión'}
        disabled={isSubmitting}
        onPress={() => {
          handleSubmitForm()
        }} />
      {/* Otras Opciones */}
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
      {/* Registrarse */}
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
