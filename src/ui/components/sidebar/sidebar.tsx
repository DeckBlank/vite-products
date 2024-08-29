import React from 'react';
import styles from './sidebar.module.css';
import { Link, Flex, Heading, Box, Text } from '@radix-ui/themes';



export const Sidebar: React.FC<{ isVisible: boolean, className?: string }> = ({ className }) => {
  return (
    <Flex className={`${className} ${styles.sidebar}`} >
      {/* <button className="close-button">✕</button> */}
      <Heading>Aplicación Base</Heading>
      <Box >
        <Link href="/" weight="regular" className={styles.link}>
          Sign in
        </Link>
      </Box>

      <Box >
        <Link href="/lista-libreria" className={styles.link} >
          Lista Libreria
        </Link>
      </Box>

      <Box >
        <Link href="/modificar-libreria" className={styles.link}>
          Modificar Libreria
        </Link>
      </Box>

    </Flex>
  );
};

