import { useController } from "react-hook-form";

export const useFormConnector = ({ control, name, ...props }) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { field, fieldState } = useController({ control, name });

    return { ...props, ...field, fieldState };
  } catch (error) {
    // do nothing
  }

  return { ...props, name };
};
