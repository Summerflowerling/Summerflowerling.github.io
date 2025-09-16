import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import './styles/variables.css';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      style={{ position: 'relative' }}
    >
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              fontFamily: 'Prata, Times, serif',
              fontSize: '1.2rem',
            }}
          >
            Loading...
          </div>
        }
      >
        <HomePage />
      </Suspense>
    </motion.div>
  );
}

export default App;
