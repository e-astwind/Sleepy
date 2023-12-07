import { TouchableOpacity } from 'react-native'
type Props = {
  name: string
  onPress?: () => void
  size?: number
  color?: string
  icon: any
}

export default function Icon({ name, onPress, size, color, icon }: Props) {
  let Icon = icon

  return (
    <TouchableOpacity activeOpacity={onPress ? 0.2 : 1} onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}
