import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
    onSubmit :SubmitHandler<FieldValues>;
    children:ReactNode
} & TFormConfig

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?:any;
};

const PhForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if(resolver){
    formConfig['resolver'] = resolver
  }

  const methods = useForm(formConfig);

  const submit = (data) => {
    onSubmit(data)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(submit)}>{children}</Form>
    </FormProvider>
  );
};

export default PhForm;