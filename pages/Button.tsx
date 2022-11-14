import styles from './styles/Button.module.css';
import Navbar from './components/Navbar';
import BaseButton from './components/BaseButton';


const Button = () => {

  return (
    <>
    <Navbar />
    <div className={styles.Button}>
      <h1>Buttons</h1>
      <BaseButton text="En liten knapp" size="s" disabled  />
      <BaseButton text="En större knapp" size="m" isFluid/>
      <BaseButton text='en länk' href="http://google.se" size="m" target="_blank"/>
    </div>
    </>
  )
}

export default Button