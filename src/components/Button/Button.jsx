import styles from "./Button.module.scss";

const Button = ({ children, variant = "solid", className = "", ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
