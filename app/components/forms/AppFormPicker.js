import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  name,
  numberOfColumns,
  items,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item.lable)}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
