import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
type Props = {
  name: string
  onPress?: () => void
  size: number
  color: string
  icon: any
  style?: TouchableOpacityProps['style']
}

export function Icon({ name, onPress, size, color, icon, style }: Props) {
  let Icon = icon

  return (
    <TouchableOpacity style={style} disabled={!onPress} onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}
