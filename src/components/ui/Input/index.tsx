import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProsp extends InputHTMLAttributes<HTMLInputElement>{}

interface TextAreaProsp extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export default function Input({...rest}: InputProsp){
    return(
        <input className={styles.input} {...rest}/>
    )
}

export  function TextArea({...rest}: TextAreaProsp){
    return(
        <textarea className={styles.input} {...rest}></textarea>
    )
}