import Image from 'next/image'
import styles from './button.module.scss'

interface ButtonProps {
  color: 'primary' | 'secondary' | 'alternative'
  text: string
  size?: "small" | "large" | "medium"
  icon?: string  
}

const Button: React.FC<ButtonProps> = ({color, text, icon, size}) => {
  return (
    <button className={`${styles.btn} ${styles[`btn--${color}`]}`} data-size={size}>
      {icon && <Image src={icon} alt="icon" height={18} width={18} />}
      {text}
    </button>
  )
}

export default Button