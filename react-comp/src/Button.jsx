function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button className="bg-yellow-500">{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, succes, warning, danger}) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!succes) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only onw of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;