import { Image, IImageProps } from "native-base";

type Props = IImageProps & {
  size: number;
};

export const UserPhoto = ({ size, ...rest }: Props) => {
  return (
    <Image
      w={size}
      h={size}
      borderRadius={100}
      borderColor="gray.400"
      {...rest}
    />
  );
};
