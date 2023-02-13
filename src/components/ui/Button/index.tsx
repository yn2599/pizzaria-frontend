import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss';

import { FaSpinner } from 'react-icons/fa'

interface ButtonProsp extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean,
    children: ReactNode,
}

export default function Button({loading, children, ...rest}: ButtonProsp){
    return(
        <button 
        className={styles.button}
        disabled={loading}
        {...rest}
        >
            {loading ? (
                <FaSpinner color="#fff" size={16}/>
            ):(
             <a className={styles.buttonText}>
                {children}
             </a>
            )}
            
        </button>
    )
}