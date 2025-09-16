import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import './styles/variables.css';

function App() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      style={{ position: 'relative' }}
    >
      <HomePage />
    </motion.div>
  );
}

export default App;
