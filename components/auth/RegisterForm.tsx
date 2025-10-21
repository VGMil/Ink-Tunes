import { useAuthValidation } from "@/lib/hooks/useAuthValidation";
import { registerSchema } from "@/lib/schemas/authSchemas";
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
  const {
    values,
    errors,
    touched,
    handleChangeField,
    handleBlurField,
    handleSubmitForm,
    isSubmitting,
  } = useAuthValidation({
    schema: registerSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      console.log(`🔄 Iniciando registro... con los datos`, values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("✅ Registro exitoso:", values);
    },
  });

  return (
    <View className="w-full justify-start border-black border-2 bg-white px-4 py-2">
      <InputField
        label="Nombre"
        placeholder="Nombre Apellido"
        icon="person-outline"
        value={values.name}
        touched={touched.name}
        error={errors.name}
        onChangeText={handleChangeField("name")}
        onBlur={handleBlurField("name")}
      />

      <InputField
        label="Email"
        placeholder="tu@email.com"
        icon="mail-outline"
        value={values.email}
        touched={touched.email}
        error={errors.email}
        onChangeText={handleChangeField("email")}
        onBlur={handleBlurField("email")}
      />

      <InputField
        label="Contraseña"
        placeholder="**********"
        icon="lock-closed-outline"
        secureTextEntry
        value={values.password}
        touched={touched.password}
        error={errors.password}
        onChangeText={handleChangeField("password")}
        onBlur={handleBlurField("password")}
      />

      <InputField
        label="Confirmar contraseña"
        placeholder="**********"
        icon="lock-closed-outline"
        secureTextEntry
        value={values.confirmPassword}
        touched={touched.confirmPassword}
        error={errors.confirmPassword}
        onChangeText={handleChangeField("confirmPassword")}
        onBlur={handleBlurField("confirmPassword")}
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
      <ButtonText 
        text={isSubmitting ? 'Cargando...' : 'Registrate'}
        onPress={handleSubmitForm}
        disabled={isSubmitting}
      />
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