export const FieldItems = (props) => {
  const { values, ...otherProps } = props;
  return props.items.map(({ label, name, placeholder, hint }) =>
    props.renderField({
      label,
      name,
      placeholder,
      value: values[name],
      hint: values[hint],
      ...otherProps,
    })
  );
};
